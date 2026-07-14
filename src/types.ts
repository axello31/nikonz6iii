export interface ManualSection {
  id: string;
  doc: "um" | "rg";
  title: string;
  level: number;
  breadcrumb: string[];
  page_start: number;
  page_end: number;
  text: string;
}

export interface NoteMeta {
  slug: string;
  title: string;
  categoryIds: string[];
  summary: string;
  tags: string[];
}

export interface Category {
  id: string;
  title: string;
  emoji: string;
  description: string;
  accent: string;
}

export interface SearchDoc {
  id: string;
  kind: "manual" | "note";
  title: string;
  breadcrumb: string;
  snippet: string;
  text: string;
  href: string;
}
