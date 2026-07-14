import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { loadManual } from "../lib/manual";
import type { ManualSection as ManualSectionType } from "../types";

const REF_RE = /\(\s*0\s+(\d{1,4})\s*\)/g;

function findSectionForPage(sections: ManualSectionType[], page: number): ManualSectionType | undefined {
  let best: ManualSectionType | undefined;
  for (const s of sections) {
    if (s.page_start <= page) {
      if (!best || s.page_start > best.page_start) best = s;
    }
  }
  return best;
}

function ParagraphWithRefs({
  text,
  doc,
  sections,
}: {
  text: string;
  doc: "um" | "rg";
  sections: ManualSectionType[];
}) {
  const parts: (string | { page: number })[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(REF_RE);
  while ((match = re.exec(text))) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push({ page: parseInt(match[1], 10) });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return (
    <p>
      {parts.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;
        const target = findSectionForPage(sections, part.page);
        if (!target) return <span key={i}>(s. {part.page})</span>;
        return (
          <Link
            key={i}
            to={`/manual/${doc}/${target.id}`}
            className="text-yellow-300 font-semibold whitespace-nowrap"
          >
            (→ s.{part.page})
          </Link>
        );
      })}
    </p>
  );
}

export function ManualSectionPage() {
  const { doc, id } = useParams<{ doc: "um" | "rg"; id: string }>();
  const [sections, setSections] = useState<ManualSectionType[] | null>(null);

  useEffect(() => {
    if (!doc) return;
    loadManual(doc).then(setSections);
  }, [doc]);

  const section = useMemo(() => sections?.find((s) => s.id === id), [sections, id]);
  const index = useMemo(() => (section && sections ? sections.indexOf(section) : -1), [sections, section]);
  const prev = index > 0 ? sections?.[index - 1] : undefined;
  const next = sections && index >= 0 && index < sections.length - 1 ? sections[index + 1] : undefined;

  const docLabel = doc === "um" ? "Kullanım Kılavuzu" : "Başvuru Kaynağı";

  const paragraphs = useMemo(() => {
    if (!section?.text) return [];
    const lines = section.text.split(/\n/).map((l) => l.trim()).filter(Boolean);
    const listStart = /^(\d{1,2}[.)]|[•*-])\s/;
    const paras: string[] = [];
    let current = "";
    for (const line of lines) {
      const startsNewPara = listStart.test(line) || current === "";
      if (startsNewPara) {
        if (current) paras.push(current);
        current = line;
      } else {
        current += (/[:.]$/.test(current) ? " " : " ") + line;
      }
      if (/:$/.test(line)) {
        paras.push(current);
        current = "";
      }
    }
    if (current) paras.push(current);
    return paras;
  }, [section]);

  return (
    <div className="flex-1 bg-nikon-black flex flex-col">
      <Header title={section?.title ?? "Yükleniyor…"} subtitle={docLabel} back="/manual" />

      <div className="max-w-2xl w-full mx-auto px-4 py-4 flex-1">
        {!section && <div className="text-center text-neutral-500 text-sm py-10">Yükleniyor…</div>}

        {section && (
          <>
            {section.breadcrumb.length > 0 && (
              <div className="text-[11px] text-neutral-500 mb-3 flex flex-wrap gap-1">
                {section.breadcrumb.map((b, i) => (
                  <span key={i}>
                    {b}
                    {i < section.breadcrumb.length - 1 && <span className="mx-1 text-neutral-700">›</span>}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-xl font-extrabold text-white leading-tight mb-1">{section.title}</h1>
            <div className="text-[11px] text-neutral-500 mb-5">
              Sayfa {section.page_start}
              {section.page_end !== section.page_start ? `–${section.page_end}` : ""} · {docLabel}
            </div>

            {paragraphs.length === 0 && (
              <p className="text-neutral-500 text-sm italic">
                Bu bölüm başlığının altında ayrı bir metin yok — alt başlıklara bakın.
              </p>
            )}

            <div className="prose-nikon space-y-3">
              {paragraphs.map((p, i) => (
                <ParagraphWithRefs key={i} text={p} doc={doc as "um" | "rg"} sections={sections ?? []} />
              ))}
            </div>

            <div className="flex gap-2 mt-8 pt-4 border-t border-nikon-line">
              {prev && (
                <Link
                  to={`/manual/${doc}/${prev.id}`}
                  className="flex-1 bg-nikon-panel border border-nikon-line rounded-xl px-3 py-2.5 active:bg-nikon-line/60"
                >
                  <div className="text-[10px] text-neutral-500">‹ Önceki</div>
                  <div className="text-[12.5px] font-semibold text-neutral-200 truncate">{prev.title}</div>
                </Link>
              )}
              {next && (
                <Link
                  to={`/manual/${doc}/${next.id}`}
                  className="flex-1 bg-nikon-panel border border-nikon-line rounded-xl px-3 py-2.5 text-right active:bg-nikon-line/60"
                >
                  <div className="text-[10px] text-neutral-500">Sonraki ›</div>
                  <div className="text-[12.5px] font-semibold text-neutral-200 truncate">{next.title}</div>
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
