import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { colorForHeading } from "../lib/headingColor";

function textOf(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    return textOf((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

function resolveImgSrc(src?: string): string {
  if (!src) return "";
  if (/^https?:\/\//.test(src)) return src;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return src.startsWith("/") ? `${base}${src}` : `${base}/${src}`;
}

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose-nikon">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h3: ({ children }) => {
            const label = textOf(children);
            const c = colorForHeading(label);
            return (
              <h3 className={`text-base font-bold ${c.text} border-l-[3px] ${c.border} pl-3 mt-6 mb-2 flex items-center gap-2`}>
                {children}
              </h3>
            );
          },
          img: ({ src, alt }) => (
            <img src={resolveImgSrc(typeof src === "string" ? src : undefined)} alt={alt ?? ""} loading="lazy" />
          ),
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
