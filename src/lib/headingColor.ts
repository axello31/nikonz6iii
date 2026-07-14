interface ColorSpec {
  text: string;
  border: string;
  chip: string;
}

const RULES: { test: RegExp; color: ColorSpec }[] = [
  {
    test: /kamera|af-|af\s|odak|netle|focus|iso\b/i,
    color: { text: "text-yellow-300", border: "border-yellow-300", chip: "bg-yellow-300/15 text-yellow-300" },
  },
  {
    test: /gimbal|rs\s?5|ronin|ptf|tetik/i,
    color: { text: "text-sky-300", border: "border-sky-300", chip: "bg-sky-300/15 text-sky-300" },
  },
  {
    test: /flaş|flash|softbox|ışık|light|reflek/i,
    color: { text: "text-orange-300", border: "border-orange-300", chip: "bg-orange-300/15 text-orange-300" },
  },
  {
    test: /mikrofon|mic\b|ses\b|audio/i,
    color: { text: "text-emerald-300", border: "border-emerald-300", chip: "bg-emerald-300/15 text-emerald-300" },
  },
  {
    test: /kurgu|premiere|lut\b|renk|color|maskel|export|çıktı/i,
    color: { text: "text-violet-300", border: "border-violet-300", chip: "bg-violet-300/15 text-violet-300" },
  },
  {
    test: /pozlama|exposure|waveform|zebra|n-log|nlog/i,
    color: { text: "text-rose-300", border: "border-rose-300", chip: "bg-rose-300/15 text-rose-300" },
  },
];

const DEFAULT: ColorSpec = {
  text: "text-neutral-200",
  border: "border-neutral-500",
  chip: "bg-neutral-500/15 text-neutral-300",
};

export function colorForHeading(text: string): ColorSpec {
  for (const rule of RULES) {
    if (rule.test.test(text)) return rule.color;
  }
  return DEFAULT;
}
