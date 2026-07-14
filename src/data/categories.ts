import type { Category } from "../types";

export const categories: Category[] = [
  {
    id: "z6iii",
    title: "Nikon Z6III",
    emoji: "📷",
    description: "Video & fotoğraf çekim ayarları, teknikler",
    accent: "from-yellow-400 to-yellow-500",
  },
  {
    id: "dji-rs5",
    title: "DJI Ronin RS5",
    emoji: "🎮",
    description: "Gimbal ayarları ve çekim teknikleri",
    accent: "from-neutral-300 to-neutral-400",
  },
  {
    id: "sb900-flas",
    title: "Nikon SB-900 Flaş",
    emoji: "⚡",
    description: "Flaş kurulumu ve stüdyo ışık senaryoları",
    accent: "from-yellow-300 to-amber-400",
  },
  {
    id: "ekipmanlarim",
    title: "Ekipmanlarım",
    emoji: "🎒",
    description: "Ekipman listem",
    accent: "from-neutral-400 to-neutral-500",
  },
  {
    id: "vlog",
    title: "Video & Vlog Önerileri",
    emoji: "🎬",
    description: "Ses, kurgu, renk ve çekim tavsiyeleri",
    accent: "from-yellow-400 to-orange-400",
  },
];

export const categoryById = (id: string) => categories.find((c) => c.id === id);
