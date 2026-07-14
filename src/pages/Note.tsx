import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { MarkdownRenderer } from "../components/MarkdownRenderer";
import { noteBySlug, noteContent } from "../data/notes";
import { categoryById } from "../data/categories";

export function NotePage() {
  const { slug } = useParams<{ slug: string }>();
  const meta = slug ? noteBySlug(slug) : undefined;
  const content = slug ? noteContent[slug] : undefined;
  const primaryCategory = meta ? categoryById(meta.categoryIds[0]) : undefined;

  if (!meta || !content) {
    return (
      <div className="flex-1 bg-nikon-black">
        <Header title="Bulunamadı" back="/" />
      </div>
    );
  }

  return (
    <div className="flex-1 bg-nikon-black flex flex-col">
      <Header title={meta.title} subtitle={primaryCategory?.title} back={`/category/${meta.categoryIds[0]}`} />
      <div className="max-w-2xl w-full mx-auto px-4 py-5 flex-1">
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}
