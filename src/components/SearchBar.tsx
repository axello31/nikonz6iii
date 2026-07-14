import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { search, type SearchResult } from "../lib/search";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const handle = setTimeout(async () => {
      const r = await search(q, 25);
      setResults(r);
      setLoading(false);
    }, 150);
    return () => clearTimeout(handle);
  }, [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const showDropdown = open && query.trim().length >= 2;

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center gap-2 bg-nikon-panel border border-nikon-line rounded-2xl px-4 py-3 focus-within:border-yellow-300 transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-400 shrink-0">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
        </svg>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          type="search"
          inputMode="search"
          placeholder="Kılavuzda veya notlarda ara…"
          className="bg-transparent outline-none w-full text-[15px] text-white placeholder:text-neutral-500"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Temizle"
            className="text-neutral-500 shrink-0 w-6 h-6 flex items-center justify-center rounded-full active:bg-nikon-line"
          >
            ✕
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute mt-2 left-0 right-0 bg-nikon-panel border border-nikon-line rounded-2xl shadow-2xl overflow-hidden z-30 max-h-[70vh] overflow-y-auto animate-fade-in">
          {loading && <div className="px-4 py-4 text-sm text-neutral-400">Aranıyor…</div>}
          {!loading && results.length === 0 && (
            <div className="px-4 py-4 text-sm text-neutral-400">"{query}" için sonuç bulunamadı.</div>
          )}
          {!loading &&
            results.map((r) => (
              <Link
                key={r.id}
                to={r.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 border-b border-nikon-line last:border-0 active:bg-nikon-line/60"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-neutral-600/40 text-neutral-400 shrink-0">
                    {r.kind === "manual" ? "KILAVUZ" : "NOT"}
                  </span>
                  <span className="text-[11.5px] font-bold text-yellow-300 truncate">{r.breadcrumb}</span>
                </div>
                <div className="text-[14px] font-semibold text-white truncate">{r.title}</div>
                <div className="text-[12px] text-neutral-400 line-clamp-2 mt-0.5">{r.snippet}</div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
