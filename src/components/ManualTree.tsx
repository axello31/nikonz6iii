import { useState } from "react";
import { Link } from "react-router-dom";
import type { ManualTreeNode } from "../lib/manual";

function Node({ node, doc, depth }: { node: ManualTreeNode; doc: "um" | "rg"; depth: number }) {
  const [open, setOpen] = useState(depth === 0 ? false : false);
  const hasChildren = node.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        to={`/manual/${doc}/${node.section.id}`}
        className="flex items-center gap-2 py-2.5 pl-3 pr-2 rounded-lg active:bg-nikon-line/60 transition"
        style={{ paddingLeft: `${12 + depth * 14}px` }}
      >
        <span className="text-[13.5px] text-neutral-200 leading-snug">{node.section.title}</span>
        <span className="ml-auto text-[10px] text-neutral-500 shrink-0">s.{node.section.page_start}</span>
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 py-2.5 pl-3 pr-2 rounded-lg active:bg-nikon-line/60 transition text-left"
        style={{ paddingLeft: `${12 + depth * 14}px` }}
      >
        <span className={`shrink-0 text-yellow-300 transition-transform ${open ? "rotate-90" : ""}`}>›</span>
        <span
          className={`text-[13.5px] leading-snug ${
            depth === 0 ? "font-bold text-white" : "font-semibold text-neutral-100"
          }`}
        >
          {node.section.title}
        </span>
        <span className="ml-auto text-[10px] text-neutral-500 shrink-0">s.{node.section.page_start}</span>
      </button>
      {open && (
        <div className="animate-fade-in">
          {node.section.text && node.section.text.length > 20 && (
            <Link
              to={`/manual/${doc}/${node.section.id}`}
              className="flex items-center gap-2 py-2 pl-3 pr-2 rounded-lg active:bg-nikon-line/60 transition text-yellow-300/80 text-[12.5px]"
              style={{ paddingLeft: `${12 + (depth + 1) * 14}px` }}
            >
              Bölüm girişini oku →
            </Link>
          )}
          {node.children.map((child) => (
            <Node key={child.section.id} node={child} doc={doc} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function ManualTree({ nodes, doc }: { nodes: ManualTreeNode[]; doc: "um" | "rg" }) {
  return (
    <div>
      {nodes.map((node) => (
        <Node key={node.section.id} node={node} doc={doc} depth={0} />
      ))}
    </div>
  );
}
