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
    id: "vlog-onerileri",
    title: "Vlog Önerileri",
    emoji: "🎬",
    description: "Çekim teknikleri, poz ve sahne planlama",
    accent: "from-yellow-400 to-orange-400",
  },
  {
    id: "video-yazilim",
    title: "Video Yazılım Önerileri",
    emoji: "🖥️",
    description: "Kurgu, renk ve yazılım rehberleri",
    accent: "from-neutral-300 to-yellow-400",
  },
];

export const categoryById = (id: string) => categories.find((c) => c.id === id);
