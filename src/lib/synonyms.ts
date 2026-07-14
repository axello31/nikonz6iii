// Domain-specific synonym groups so searching for one term also
// surfaces results written with a related/equivalent term.
const GROUPS: string[][] = [
  ["flaş", "flash", "speedlight", "ışık patlaması", "sb-900", "sb900"],
  ["mikrofon", "mic", "ses", "audio", "rode", "dji mic"],
  ["kılavuz", "manual", "rehber", "kullanım kılavuzu", "başvuru kaynağı"],
  ["odak", "focus", "af", "netleme", "af-c", "af-f", "af-s"],
  ["diyafram", "aperture", "f değeri", "f/stop", "açıklık"],
  ["pozlama", "exposure", "poz"],
  ["gimbal", "stabilizatör", "ronin", "rs5", "rs 5", "dji ronin"],
  ["kurgu", "montaj", "editing", "premiere", "kesim"],
  ["renk", "color", "lut", "grading", "renk derecelendirme"],
  ["iso", "hassasiyet", "ışık hassasiyeti"],
  ["enstantane", "shutter", "shutter speed", "deklanşör hızı", "hız"],
  ["beyaz ayarı", "wb", "white balance", "kelvin", "beyaz dengesi"],
  ["yıldız", "astro", "astrofoto", "gece", "night sky", "yıldız fotoğrafı"],
  ["makro", "macro", "yakın çekim", "odak kaydırma", "focus stacking", "focus shift"],
  ["yeşil perde", "chroma key", "green screen", "yeşil ekran", "keying"],
  ["titreme", "vr", "ibis", "stabilizasyon", "sarsıntı", "vibration reduction"],
  ["pil", "batarya", "battery", "şarj"],
  ["kart", "hafıza kartı", "sd kart", "cfexpress", "memory card"],
  ["video", "film", "çekim"],
  ["vlog", "blog", "içerik üretimi"],
  ["nlog", "n-log", "log profil", "log"],
  ["softbox", "difüzör", "yumuşak ışık"],
  ["tripod", "üç ayak", "sehpa"],
  ["lens", "objektif"],
  ["ekran", "monitör", "vizör", "screen"],
  ["ekipman", "gear", "malzeme", "donanım"],
  ["poz", "duruş", "pose"],
  ["altyazı", "caption", "subtitle"],
  ["dış mekan", "outdoor", "dış ortam"],
  ["kamp", "camping"],
];

const lookup = new Map<string, Set<string>>();
for (const group of GROUPS) {
  for (const term of group) {
    const set = lookup.get(term) ?? new Set<string>();
    for (const other of group) {
      if (other !== term) set.add(other);
    }
    lookup.set(term, set);
  }
}

export function expandQuery(query: string): string {
  const q = query.toLowerCase().trim();
  if (!q) return query;

  const extra = new Set<string>();

  // whole-query phrase matches (multi-word synonyms like "beyaz ayarı")
  for (const [term, synonyms] of lookup) {
    if (term.includes(" ") && q.includes(term)) {
      synonyms.forEach((s) => extra.add(s));
    }
  }

  // single-word token matches
  const words = q.split(/\s+/);
  for (const w of words) {
    const synonyms = lookup.get(w);
    if (synonyms) synonyms.forEach((s) => extra.add(s));
  }

  if (extra.size === 0) return query;
  return `${query} ${Array.from(extra).join(" ")}`;
}
