import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { categoryById } from "../data/categories";
import { notesByCategory } from "../data/notes";

export function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const category = id ? categoryById(id) : undefined;
  const items = id ? notesByCategory(id) : [];

  if (!category) {
    return (
      <div className="flex-1 bg-nikon-black">
        <Header title="Bulunamadı" back="/" />
      </div>
    );
  }

  return (
    <div className="flex-1 bg-nikon-black flex flex-col">
      <Header title={category.title} subtitle={category.description} back="/" />

      <div className="max-w-2xl w-full mx-auto px-4 py-4 flex-1">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl">{category.emoji}</span>
            <p className="text-neutral-400 text-sm mt-3">Bu kategoriye henüz not eklenmedi.</p>
            <p className="text-neutral-600 text-xs mt-1">Notlarını paylaştığında buraya eklenecek.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {items.map((n) => (
              <Link
                key={n.slug}
                to={`/notes/${n.slug}`}
                className="bg-nikon-panel border border-nikon-line rounded-2xl px-4 py-3.5 active:scale-[0.98] active:border-yellow-300/40 transition"
              >
                <div className="text-[14.5px] font-bold text-white leading-tight">{n.title}</div>
                <div className="text-[12px] text-neutral-400 leading-snug mt-1">{n.summary}</div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {n.tags.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-nikon-line text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
