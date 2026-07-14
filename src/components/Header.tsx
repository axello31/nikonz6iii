import { Link, useNavigate } from "react-router-dom";

export function Header({ title, subtitle, back }: { title: string; subtitle?: string; back?: string }) {
  const navigate = useNavigate();

  function handleBack() {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
    if (idx > 0) {
      navigate(-1);
    } else {
      navigate(back ?? "/");
    }
  }

  return (
    <header
      className="sticky top-0 z-20 bg-nikon-black/95 backdrop-blur border-b border-nikon-line"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
        {back ? (
          <button
            onClick={handleBack}
            className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-yellow-300/15 border border-yellow-300/30 text-yellow-300 active:scale-90 active:bg-yellow-300/25 transition"
            aria-label="Geri"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <img
            src={`${import.meta.env.BASE_URL}icons/nikon-logo.png`}
            alt="Nikon"
            className="w-9 h-9 rounded-lg shrink-0"
          />
        )}
        <div className="min-w-0 flex-1">
          <h1 className="text-[15px] font-bold text-white truncate leading-tight">{title}</h1>
          {subtitle && <p className="text-[11px] text-neutral-400 truncate leading-tight">{subtitle}</p>}
        </div>
        {back && (
          <Link
            to="/"
            aria-label="Ana Sayfa"
            className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-nikon-panel border border-nikon-line text-neutral-300 active:scale-90 active:bg-nikon-line transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 10v9a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
}
