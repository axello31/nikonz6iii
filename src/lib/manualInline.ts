export type InlineToken =
  | { kind: "text"; value: string }
  | { kind: "pageRef"; page: number }
  | { kind: "term"; value: string }
  | { kind: "step"; digit: string };

const CIRCLED: Record<string, string> = {
  q: "①",
  w: "②",
  e: "③",
  r: "④",
  t: "⑤",
  y: "⑥",
  u: "⑦",
  i: "⑧",
  o: "⑨",
  p: "⑩",
};

// Order matters: page refs and step markers are narrower/higher-priority than the generic bracket-term match.
const TOKEN_RE = /\(\s*0\s+(\d{1,4})\s*\)|\(\s*([qwertyuiop])\s*\)|\[\s*([^[\]]{1,60}?)\s*\]/g;

export function tokenizeManualText(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(text))) {
    if (match.index > lastIndex) {
      tokens.push({ kind: "text", value: text.slice(lastIndex, match.index) });
    }
    if (match[1]) {
      tokens.push({ kind: "pageRef", page: parseInt(match[1], 10) });
    } else if (match[2]) {
      tokens.push({ kind: "step", digit: CIRCLED[match[2]] ?? match[2] });
    } else if (match[3]) {
      tokens.push({ kind: "term", value: match[3] });
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({ kind: "text", value: text.slice(lastIndex) });
  }
  return tokens;
}
