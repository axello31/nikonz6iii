import type { ManualSection } from "../types";

let umCache: ManualSection[] | null = null;
let rgCache: ManualSection[] | null = null;

async function loadJson(path: string): Promise<ManualSection[]> {
  const res = await fetch(`${import.meta.env.BASE_URL}data/${path}`);
  if (!res.ok) throw new Error(`Kılavuz verisi yüklenemedi: ${path}`);
  return res.json();
}

export async function loadManual(doc: "um" | "rg"): Promise<ManualSection[]> {
  if (doc === "um") {
    if (!umCache) umCache = await loadJson("manual-um.json");
    return umCache;
  }
  if (!rgCache) rgCache = await loadJson("manual-rg.json");
  return rgCache;
}

export interface ManualTreeNode {
  section: ManualSection;
  children: ManualTreeNode[];
}

export function buildTree(sections: ManualSection[]): ManualTreeNode[] {
  const root: ManualTreeNode[] = [];
  const stack: ManualTreeNode[] = [];

  for (const section of sections) {
    const node: ManualTreeNode = { section, children: [] };
    while (stack.length && stack[stack.length - 1].section.level >= section.level) {
      stack.pop();
    }
    if (stack.length === 0) {
      root.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }
    stack.push(node);
  }
  return root;
}

export async function getSectionById(doc: "um" | "rg", id: string): Promise<ManualSection | undefined> {
  const sections = await loadManual(doc);
  return sections.find((s) => s.id === id);
}
