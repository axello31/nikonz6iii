import { useState } from "react";

const MAX_INLINE_PAGES = 4;

export function OriginalPages({
  doc,
  pageStart,
  pageEnd,
}: {
  doc: "um" | "rg";
  pageStart: number;
  pageEnd: number;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const total = pageEnd - pageStart + 1;
  const pages = Array.from({ length: Math.min(total, MAX_INLINE_PAGES) }, (_, i) => pageStart + i);
  const overflow = total - pages.length;
  const base = import.meta.env.BASE_URL;

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
          Orijinal Sayfa{total > 1 ? "lar" : ""}
        </span>
        <span className="text-[10.5px] text-neutral-600">Nikon PDF görüntüsü</span>
      </div>
      <div className="flex flex-col gap-2">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => setLightbox(p)}
            className="block w-full rounded-xl overflow-hidden border border-nikon-line active:opacity-80 transition"
          >
            <img
              src={`${base}images/manual/${doc}/${p}.webp`}
              alt={`Sayfa ${p}`}
              loading="lazy"
              className="w-full h-auto block bg-white"
            />
          </button>
        ))}
        {overflow > 0 && (
          <div className="text-[11px] text-neutral-500 text-center py-1.5 bg-nikon-panel border border-nikon-line rounded-xl">
            +{overflow} sayfa daha — alt başlıklara bakın
          </div>
        )}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-white text-sm font-semibold">Sayfa {lightbox}</span>
            <button
              onClick={() => setLightbox(null)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-nikon-panel text-white"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-auto px-2 pb-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={`${base}images/manual/${doc}/${lightbox}.webp`}
              alt={`Sayfa ${lightbox}`}
              className="w-full h-auto rounded-lg bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
