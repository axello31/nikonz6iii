import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { categories } from "../data/categories";

export function Home() {
  return (
    <div className="flex-1 bg-nikon-black">
      <div className="max-w-2xl mx-auto px-4 pt-6 pb-10">
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={`${import.meta.env.BASE_URL}icons/nikon-logo.png`}
            alt="Nikon"
            className="w-16 h-16 rounded-2xl shadow-lg shadow-black/40 mb-3"
          />
          <h1 className="text-xl font-extrabold text-white tracking-tight">Nikon Z6III Rehberi</h1>
          <p className="text-[13px] text-neutral-400 mt-1">Kullanma kılavuzu, başvuru kaynağı ve çekim notların — hepsi tek yerde</p>
        </div>

        <SearchBar />

        <Link
          to="/manual"
          className="mt-6 flex items-center gap-4 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-2xl px-5 py-4 active:scale-[0.98] transition shadow-lg shadow-yellow-400/10"
        >
          <span className="text-3xl">📖</span>
          <div className="min-w-0">
            <div className="text-[16px] font-extrabold text-nikon-black">Kullanma Kılavuzu</div>
            <div className="text-[12px] text-nikon-black/70">Kullanım Kılavuzu + Başvuru Kaynağı (tam metin)</div>
          </div>
          <span className="ml-auto text-nikon-black/50 text-xl">›</span>
        </Link>

        <Link
          to="/shortcuts"
          className="mt-3 flex items-center gap-4 bg-nikon-panel border border-nikon-line rounded-2xl px-5 py-4 active:scale-[0.98] active:border-yellow-300/40 transition"
        >
          <span className="text-3xl">⭐</span>
          <div className="min-w-0">
            <div className="text-[15px] font-extrabold text-white">Sık Kullanılan Kısayollar</div>
            <div className="text-[12px] text-neutral-400">Hızlı erişim listen</div>
          </div>
          <span className="ml-auto text-neutral-600 text-xl">›</span>
        </Link>

        <div className="mt-8">
          <h2 className="text-[12px] font-bold uppercase tracking-wider text-neutral-500 px-1 mb-3">Notlarım</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((c) => (
              <Link
                key={c.id}
                to={`/category/${c.id}`}
                className="bg-nikon-panel border border-nikon-line rounded-2xl px-4 py-4 flex flex-col gap-2 active:scale-[0.97] active:border-yellow-300/40 transition"
              >
                <span className="text-2xl">{c.emoji}</span>
                <div className="text-[13.5px] font-bold text-white leading-tight">{c.title}</div>
                <div className="text-[11px] text-neutral-400 leading-snug">{c.description}</div>
              </Link>
            ))}
            <Link
              to="/notes/rode-dji-mikrofon-ayarlari"
              className="bg-nikon-panel border border-nikon-line rounded-2xl px-4 py-4 flex flex-col gap-2 active:scale-[0.97] active:border-yellow-300/40 transition"
            >
              <span className="text-2xl">🎙️</span>
              <div className="text-[13.5px] font-bold text-white leading-tight">Rode ve DJI Mikrofon Ayarları</div>
              <div className="text-[11px] text-neutral-400 leading-snug">Kamp vlogu için ses kurulum sıralaması</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
