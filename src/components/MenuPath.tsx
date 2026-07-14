export function MenuPath({ path, className = "" }: { path: string[]; className?: string }) {
  return (
    <div className={`text-[11.5px] font-semibold text-yellow-300 flex flex-wrap items-center gap-1 ${className}`}>
      {path.map((p, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-yellow-300/40">›</span>}
          {p}
        </span>
      ))}
    </div>
  );
}
