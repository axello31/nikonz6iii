import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ManualTree } from "../components/ManualTree";
import { loadManual, buildTree, type ManualTreeNode } from "../lib/manual";

const TABS: { id: "um" | "rg"; label: string; hint: string }[] = [
  { id: "um", label: "Kullanım Kılavuzu", hint: "Temel işlemler · 72 sayfa" },
  { id: "rg", label: "Başvuru Kaynağı", hint: "Tüm özellikler · 1050 sayfa" },
];

export function ManualHome() {
  const [tab, setTab] = useState<"um" | "rg">("um");
  const [tree, setTree] = useState<ManualTreeNode[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setTree(null);
    loadManual(tab).then((sections) => {
      if (cancelled) return;
      setTree(buildTree(sections));
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [tab]);

  return (
    <div className="flex-1 bg-nikon-black flex flex-col">
      <Header title="Kullanma Kılavuzu" subtitle="Kullanım Kılavuzu + Başvuru Kaynağı" back="/" />

      <div className="max-w-2xl w-full mx-auto px-4 pt-4">
        <div className="grid grid-cols-2 gap-2 bg-nikon-panel border border-nikon-line rounded-2xl p-1.5">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-xl px-3 py-2.5 text-left transition ${
                tab === t.id ? "bg-yellow-300 text-nikon-black" : "text-neutral-300 active:bg-nikon-line"
              }`}
            >
              <div className="text-[13px] font-bold leading-tight">{t.label}</div>
              <div className={`text-[10.5px] leading-tight mt-0.5 ${tab === t.id ? "text-nikon-black/70" : "text-neutral-500"}`}>
                {t.hint}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-2xl w-full mx-auto px-2 py-3 flex-1">
        {loading && (
          <div className="px-3 py-8 text-center text-neutral-500 text-sm">Kılavuz yükleniyor…</div>
        )}
        {!loading && tree && <ManualTree nodes={tree} doc={tab} />}
      </div>
    </div>
  );
}
