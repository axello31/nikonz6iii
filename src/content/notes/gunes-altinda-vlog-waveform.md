# Güneş Altında Vlog Çekim Ayarları ve Waveform Yorumlama

## Videoda Histogram Değil Waveform Seç!

Videoda, özellikle N-Log'da waveform her zaman daha kullanışlı; çünkü kadrajın neresinde ne kadar parlaklık olduğunu (gökyüzü mü, cilt mi, gölge mi) yatay olarak görürsün. Histogram sana bunu söylemez — sadece "şu kadar parlak piksel var" der, ama neresi olduğunu göstermez.

## Waveform Nasıl Okunur

Dikey eksen = parlaklık, 0 (dip/siyah) → 100 (tavan/beyaz). Yatay eksen = kadrajın soldan sağa karşılığı. Yani gökyüzü kadrajın üstündeyse waveform'un sağ/sol neresine denk geldiğini görürsün. Grafiğin tepeye yapışan kısımları = clip olan highlight'lar, dibe yapışan = ezilen gölgeler.

## N-Log İçin Hedef Değerler (Kritik Kısım)

N-Log düz/soluk bir eğri olduğu için değerler sıkışık aralıkta durur, panik yapma:

* **Orta gri / 18% gri ≈ 40 IRE.** N-Log'un referans noktası burası. LUT bunu varsayarak yapılmış.
* **Cilt tonu ≈ 45-55 IRE.** Açık ten üst tarafa, koyu ten alt tarafa. Yüz bu banda otursun.
* **Highlight'lar / gökyüzü / beyaz ≈ 70 IRE'yi geçmesin,** kesinlikle 100'e yapışmasın. N-Log'da parlak highlight bile ~70-75'te durur. 100'e değiyorsa clip olmuştur, LUT sonrası o bölge çirkinleşir.
* **Gölgeler ≈ 5-10 IRE'nin altına düşmesin,** yoksa gürültü gelir.

Yani sağlıklı bir güneş sahnesinde tüm waveform kabaca **5 ile 70 arasına** sıkışmış olmalı, ne dibe ne tavana yapışmalı.

## Sahada İş Akışı

* **Öncelik highlight'ta.** ND'ni açarak (variable ise çevirip) waveform'un tepe noktasını 100'den aşağı, ~70 civarına indir. Sonra cilde bak: yüzün olduğu bölge 45-55'e oturuyor mu? Oturmuyorsa poz genel olarak yanlış — ISO/aperture ya da ND ile ayarla.
* **Çatışma olursa** (gökyüzü doğru ama cilt çok karanlık, ya da tam tersi) bu, sahne DR'ının sensörü aştığı anlamına gelir — orada çözüm poz değil, ışık: özneyi negatif fill/diffüzör ile ya da arkadan ışıkla dengelemen gerekir.

## Ek İpucu: Zebra ile Birlikte Kullanım

Waveform'a ek olarak zebra'yı da aç (menüden ayrı bir yardımcı, waveform'la çakışmaz). Zebra'yı ~%95'e kur; ekranda zebra çizgileri görünen her yer clip sınırında demektir, anında uyarı verir. Waveform "ne kadar/nerede", zebra "burası patlıyor" der — ikisi birlikte çalışır.

## Özetle

Waveform'da tavanı 70'in altında tut, cildi 45-55'e, orta griyi 40'a oturt. ND ile önce highlight'ı indir, sonra cildi kontrol et.
