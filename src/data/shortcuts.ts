export interface Shortcut {
  id: string;
  title: string;
  subtitle?: string;
  emoji: string;
  href: string;
  menuPath: string[];
}

// Gökhan will dictate these one by one — keep this list append-only as he shares them.
export const shortcuts: Shortcut[] = [
  {
    id: "af-izleme-hassasiyeti",
    title: "AF İzleme Hassasiyeti",
    subtitle: "Kameranın konuyu bırakıp yeni bir nesneye ne kadar kolay geçeceğini belirler (1-7).",
    emoji: "🎯",
    href: "/manual/rg/rg-482",
    menuPath: ["MENU", "Özel Ayarlar Menüsü", "g: Video", "g6: AF İzleme Hassasiyeti"],
  },
  {
    id: "af-hizi",
    title: "AF Hızı",
    subtitle: "Bir nesneden diğerine geçerken odağın kayma hızı. Düşük değerler (−2, −3) sinematik geçiş yapar.",
    emoji: "🌀",
    href: "/manual/rg/rg-481",
    menuPath: ["MENU", "Özel Ayarlar Menüsü", "g: Video", "g5: AF Hızı"],
  },
];
