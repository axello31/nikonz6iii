import MiniSearch from "minisearch";
import type { SearchDoc } from "../types";
import { loadManual } from "./manual";
import { notes, noteContent } from "../data/notes";
import { categoryById } from "../data/categories";
import { expandQuery } from "./synonyms";

let miniSearch: MiniSearch<SearchDoc> | null = null;
let docsById: Map<string, SearchDoc> | null = null;
let buildPromise: Promise<MiniSearch<SearchDoc>> | null = null;

function stripMarkdown(md: string): string {
  return md
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)]\([^)]*\)/g, "$1")
    .replace(/[#*_`>~]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function snippetAround(text: string, needleLower: string, length = 160): string {
  const lower = text.toLowerCase();
  const idx = lower.indexOf(needleLower);
  if (idx === -1) return text.slice(0, length);
  const start = Math.max(0, idx - 60);
  const end = Math.min(text.length, idx + length - 60);
  return (start > 0 ? "…" : "") + text.slice(start, end).trim() + (end < text.length ? "…" : "");
}

async function buildIndex(): Promise<MiniSearch<SearchDoc>> {
  const docs: SearchDoc[] = [];

  const [um, rg] = await Promise.all([loadManual("um"), loadManual("rg")]);

  for (const s of [...um, ...rg]) {
    if (!s.text || s.text.length < 20) continue;
    docs.push({
      id: `manual-${s.id}`,
      kind: "manual",
      title: s.title,
      breadcrumb: [s.doc === "um" ? "Kullanım Kılavuzu" : "Başvuru Kaynağı", ...s.breadcrumb].join(" › "),
      snippet: s.text.slice(0, 200),
      text: s.text,
      href: `/manual/${s.doc}/${s.id}`,
    });
  }

  for (const n of notes) {
    const raw = noteContent[n.slug] ?? "";
    const plain = stripMarkdown(raw);
    const primaryCat = categoryById(n.categoryIds[0]);
    docs.push({
      id: `note-${n.slug}`,
      kind: "note",
      title: n.title,
      breadcrumb: [primaryCat?.title ?? "Notlar"].join(" › "),
      snippet: n.summary,
      text: `${n.title} ${n.tags.join(" ")} ${plain}`,
      href: `/notes/${n.slug}`,
    });
  }

  docsById = new Map(docs.map((d) => [d.id, d]));

  const ms = new MiniSearch<SearchDoc>({
    fields: ["title", "text", "breadcrumb"],
    storeFields: ["title", "breadcrumb", "snippet", "kind", "href"],
    searchOptions: {
      boost: { title: 4, breadcrumb: 2 },
      prefix: true,
      fuzzy: 0.2,
    },
  });
  ms.addAll(docs);
  miniSearch = ms;
  return ms;
}

export async function getSearchIndex(): Promise<MiniSearch<SearchDoc>> {
  if (miniSearch) return miniSearch;
  if (!buildPromise) buildPromise = buildIndex();
  return buildPromise;
}

export interface SearchResult {
  id: string;
  title: string;
  breadcrumb: string;
  snippet: string;
  kind: "manual" | "note";
  href: string;
  score: number;
}

export async function search(query: string, limit = 30): Promise<SearchResult[]> {
  const q = query.trim();
  if (q.length < 2) return [];
  const ms = await getSearchIndex();
  const expanded = expandQuery(q);
  const results = ms.search(expanded).slice(0, limit);
  const qLower = q.toLowerCase();
  return results.map((r) => {
    const doc = docsById?.get(r.id as string);
    const snippet = doc ? snippetAround(doc.text, qLower) : (r.snippet as string);
    return {
      id: r.id as string,
      title: r.title as string,
      breadcrumb: r.breadcrumb as string,
      snippet,
      kind: r.kind as "manual" | "note",
      href: r.href as string,
      score: r.score,
    };
  });
}
