import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { shortcuts } from "../data/shortcuts";

export function ShortcutsPage() {
  return (
    <div className="flex-1 bg-nikon-black flex flex-col">
      <Header title="Sık Kullanılan Kısayollar" subtitle="Senin belirlediğin hızlı erişimler" back="/" />

      <div className="max-w-2xl w-full mx-auto px-4 py-4 flex-1">
        {shortcuts.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl">⭐</span>
            <p className="text-neutral-400 text-sm mt-3">Henüz kısayol eklenmedi.</p>
            <p className="text-neutral-600 text-xs mt-1">Hangi sayfaların kısayolunu istediğini söyle, buraya ekleyeyim.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {shortcuts.map((s) => (
              <Link
                key={s.id}
                to={s.href}
                className="flex items-center gap-4 bg-nikon-panel border border-nikon-line rounded-2xl px-4 py-4 active:scale-[0.98] active:border-yellow-300/40 transition"
              >
                <span className="text-2xl">{s.emoji}</span>
                <div className="min-w-0">
                  <div className="text-[14.5px] font-bold text-white leading-tight">{s.title}</div>
                  {s.subtitle && <div className="text-[12px] text-neutral-400 leading-snug mt-0.5">{s.subtitle}</div>}
                </div>
                <span className="ml-auto text-neutral-600 text-xl shrink-0">›</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
