import type { NoteMeta } from "../types";

import videoGenelAyarlari from "../content/notes/video-genel-ayarlari.md?raw";
import videoNlogAyarlari from "../content/notes/video-nlog-ayarlari.md?raw";
import videoCekimOncesiKontrol from "../content/notes/video-cekim-oncesi-kontrol-listesi.md?raw";
import yildizFotografciligi from "../content/notes/yildiz-fotografciligi.md?raw";
import basamakliOdakMakro from "../content/notes/basamakli-odak-makro.md?raw";
import tiltUpRevealShot from "../content/notes/tilt-up-reveal-shot.md?raw";
import sb900FlasKilavuzu from "../content/notes/sb900-flas-kilavuzu.md?raw";
import rodeDjiMikrofon from "../content/notes/rode-dji-mikrofon-ayarlari.md?raw";
import portreStudyoDuruslar from "../content/notes/portre-studyo-duruslar.md?raw";
import yesilPerdeRehberi from "../content/notes/yesil-perde-rehberi.md?raw";
import adobePremiereRehberi from "../content/notes/adobe-premiere-kurgu-rehberi.md?raw";
import redLutEkleme from "../content/notes/red-lut-ekleme.md?raw";
import sulukluGolKampVlog from "../content/notes/suluklu-gol-kamp-vlog-planlamasi.md?raw";
import ekipmanlarim from "../content/notes/ekipmanlarim.md?raw";
import gimbalAfAyarlari from "../content/notes/gimbal-af-ayarlari-kamera-yapilandirma.md?raw";
import sabitKadrajKlon from "../content/notes/sabit-kadraj-coklu-klon-videosu.md?raw";

export const noteContent: Record<string, string> = {
  "video-genel-ayarlari": videoGenelAyarlari,
  "video-nlog-ayarlari": videoNlogAyarlari,
  "video-cekim-oncesi-kontrol-listesi": videoCekimOncesiKontrol,
  "yildiz-fotografciligi": yildizFotografciligi,
  "basamakli-odak-makro": basamakliOdakMakro,
  "tilt-up-reveal-shot": tiltUpRevealShot,
  "sb900-flas-kilavuzu": sb900FlasKilavuzu,
  "rode-dji-mikrofon-ayarlari": rodeDjiMikrofon,
  "portre-studyo-duruslar": portreStudyoDuruslar,
  "yesil-perde-rehberi": yesilPerdeRehberi,
  "adobe-premiere-kurgu-rehberi": adobePremiereRehberi,
  "red-lut-ekleme": redLutEkleme,
  "suluklu-gol-kamp-vlog-planlamasi": sulukluGolKampVlog,
  ekipmanlarim: ekipmanlarim,
  "gimbal-af-ayarlari-kamera-yapilandirma": gimbalAfAyarlari,
  "sabit-kadraj-coklu-klon-videosu": sabitKadrajKlon,
};

export const notes: NoteMeta[] = [
  {
    slug: "video-genel-ayarlari",
    title: "Z6III Video Genel Ayarları",
    categoryIds: ["z6iii"],
    summary: "Shutter/FPS kuralı, AF-F, kodek, YouTube preset'leri, WB kuralları ve AF mod notları.",
    tags: ["video", "af", "wb", "youtube", "iso", "fps"],
  },
  {
    slug: "video-nlog-ayarlari",
    title: "Z6III Video N-Log Ayarları",
    categoryIds: ["z6iii"],
    summary: "N-Log pozlama ilkeleri, View Assist, Waveform/Zebra, taban ISO 800/6400 ve gerçek senaryolar.",
    tags: ["nlog", "iso", "waveform", "zebra", "pozlama"],
  },
  {
    slug: "video-cekim-oncesi-kontrol-listesi",
    title: "Video Çekim Öncesi Kontrol Listesi",
    categoryIds: ["z6iii"],
    summary: "Set öncesi mutlaka kontrol edilecek fiziki ayarlar, FPS/shutter kombinasyonları, kart ve pil pratikleri.",
    tags: ["checklist", "kontrol listesi", "pil", "kart", "fps"],
  },
  {
    slug: "yildiz-fotografciligi",
    title: "Yıldız Fotoğrafçılığı (Astrofoto)",
    categoryIds: ["z6iii"],
    summary: "Gece gökyüzü çekimi için diyafram, ISO, shutter ve Starlight View ayarları.",
    tags: ["astrofoto", "yıldız", "gece", "manuel odak"],
  },
  {
    slug: "basamakli-odak-makro",
    title: "Flaşlı Makro Çekimlerde Odak Kaydırma (Focus Stacking) ve Yapılandırma Rehberi",
    categoryIds: ["z6iii", "sb900-flas"],
    summary: "SB-900 + softbox ışık kurulumu, kamera/menü ayarları, senaryo bazlı çekim sayısı/adım genişliği ve NX Studio/Photoshop'ta birleştirme.",
    tags: ["makro", "focus stacking", "photoshop", "odak kaydırma", "flaş", "sb-900", "softbox", "nx studio"],
  },
  {
    slug: "tilt-up-reveal-shot",
    title: "Tilt-Up Reveal Shot Kılavuzu",
    categoryIds: ["dji-rs5", "vlog-onerileri"],
    summary: "Aşağıdan yukarıya keşif çekimi için iki yöntem: dokunmatik AF-C kilidi ve manuel odak + tetik kilidi.",
    tags: ["gimbal", "rs5", "af-c", "tilt up", "reveal shot"],
  },
  {
    slug: "sb900-flas-kilavuzu",
    title: "SB-900 / D850 / Z6III Entegre Flaş Kılavuzu",
    categoryIds: ["sb900-flas"],
    summary: "Ortak flaş menü ayarları ve 4 senaryo: kamera üstü flaş ile softbox içinde flaş kullanımı.",
    tags: ["flaş", "sb-900", "softbox", "ttl", "manual"],
  },
  {
    slug: "rode-dji-mikrofon-ayarlari",
    title: "Rode ve DJI Mikrofon Ayarları",
    categoryIds: [],
    summary: "Kamera dahili mikrofon ayarı, DJI Mic kablosuz kurulum sırası ve Rode Shotgun ayar sıralaması.",
    tags: ["mikrofon", "rode", "dji mic", "ses"],
  },
  {
    slug: "portre-studyo-duruslar",
    title: "Portre İçin Stüdyo ve Model Duruş Ayarları",
    categoryIds: ["vlog-onerileri"],
    summary: "Ev stüdyosu ışık kurulum şemaları ile ayakta, oturarak ve çocuk portresi poz rehberleri (görselli).",
    tags: ["portre", "poz", "stüdyo", "ışık kurulumu"],
  },
  {
    slug: "yesil-perde-rehberi",
    title: "Yeşil Perde Çekim ve Post-Prodüksiyon Rehberi",
    categoryIds: ["vlog-onerileri", "video-yazilim"],
    summary: "Stüdyo geometrisi, kamera/lens ayarları ve Final Cut Pro'da keying adımları.",
    tags: ["yeşil perde", "chroma key", "fcp", "keying"],
  },
  {
    slug: "adobe-premiere-kurgu-rehberi",
    title: "Adobe Premiere Kullanma Kılavuzu & Kurgu Rehberi",
    categoryIds: ["video-yazilim"],
    summary: "Proje kurulumdan renk uzayına, maskelemeden AI ses araçlarına, export ayarlarına 8 kategori + kısayollar.",
    tags: ["premiere", "kurgu", "lumetri", "maskeleme", "export"],
  },
  {
    slug: "red-lut-ekleme",
    title: "Red LUT Ekleme (Nikon Z Serisi N-Log İçin)",
    categoryIds: ["video-yazilim"],
    summary: "Nikon x RED LUT paketi tanıtımı ve Final Cut Pro'da Camera LUT ile uygulama adımları.",
    tags: ["lut", "red", "n-log", "fcp", "renk"],
  },
  {
    slug: "suluklu-gol-kamp-vlog-planlamasi",
    title: "Sülüklü Göl Kamp Vlog Planlaması (Director's Cut)",
    categoryIds: ["vlog-onerileri"],
    summary: "5 bölümlük tam senaryo, müzik giriş/çıkış notları ve FCP'de kuş sesi (pan/reverb/ducking) + ateş sesi (EQ/limiter) ses tasarımı kılavuzları.",
    tags: ["vlog planlama", "senaryo", "kamp", "sahne listesi", "director's cut", "müzik", "asmr", "ses efektleri", "reverb", "pan", "ducking", "space designer", "channel eq", "limiter", "ateş sesi"],
  },
  {
    slug: "ekipmanlarim",
    title: "Fotoğraf-Video Ekipmanlarım",
    categoryIds: ["ekipmanlarim"],
    summary: "Gövdeler, lensler, drone, rig/sabitleme, ışık/stüdyo, ses sistemleri, hafıza kartları ve alınacaklar listesi.",
    tags: ["ekipman", "gear", "lens", "rig", "liste"],
  },
  {
    slug: "gimbal-af-ayarlari-kamera-yapilandirma",
    title: "Gimbal ile AF Ayarları ve Kamera Yapılandırma Rehberi",
    categoryIds: ["dji-rs5"],
    summary: "AF-C/AF-F mantığı, g5 AF Hızı & g6 AF İzleme Hassasiyeti, senaryo bazlı AF alan modu/konu algılama ve RS5 tekerlek/back-button ipuçları.",
    tags: ["gimbal", "af-c", "af-f", "af hızı", "izleme hassasiyeti", "rs5", "konu algılama", "rack focus", "odak geçişi"],
  },
  {
    slug: "sabit-kadraj-coklu-klon-videosu",
    title: "Sabit Kadrajda Çoklu Klon Videosu Yapımı ve FCP ile Kurgu",
    categoryIds: ["vlog-onerileri"],
    summary: "Tripod + manuel pozlama ile aynı özneyi 5 farklı konumda kaydedip Final Cut Pro'da Draw Mask ile tek karede birleştirme rehberi.",
    tags: ["klonlama", "cloning", "fcp", "draw mask", "sabit kadraj", "final cut pro"],
  },
];

export const notesByCategory = (categoryId: string) =>
  notes.filter((n) => n.categoryIds.includes(categoryId));

export const noteBySlug = (slug: string) => notes.find((n) => n.slug === slug);
