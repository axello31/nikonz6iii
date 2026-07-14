# Red LUT (4 Adet) Ekleme (Nikon Z Serisi N-Log Video İçin)

Şu videonun açıklamasıdır: [https://youtu.be/MkXfPlGaL_0](https://youtu.be/MkXfPlGaL_0?si=mmfP3PiY8ZpS4GmU)

**Not:** LUT indirme linkleri ve tarifi en alttadır.

## RED LUT Özellikleri ve Karakteristikleri

Nikon ve RED iş birliğiyle sunulan bu ücretsiz pakette aslında **1 adet Teknik LUT** ve **4 adet Kreatif LUT** olmak üzere toplam 5 LUT bulunmaktadır:

1. **Technical LUT (Teknik LUT):** N-Log formatının ham, kontrastı düşük (flat) görüntüsünü doğrudan standart video renk uzayı olan **Rec. 709** formatına çevirir. İçerisinde sanatsal veya yaratıcı hiçbir renk müdahalesi barındırmaz; tamamen matematiksel bir dönüşüm sağlar.
2. **Film Bias (Kreatif LUT):** En standart ve doğal film görünümünü sağlayan kreatif LUT'tur. Görüntüye yapay hiçbir etki katmadan sinematik bir renk üretir. Özellikle gün ışığı (daylight) çekimlerinde videoya netlik, temizlik ve canlı renk tonları kazandırır.
3. **Film Bias Offset (Kreatif LUT):** Sinema sektöründe çok popüler olan **Teal and Orange (Turkuaz ve Turuncu)** renk uyumunu simüle eder. Kızılımsı parlak alanlar (highlights) ve mavimsi gölgeler (shadows) üretir. Gün ışığında orta tonlara ve parlak noktalara sıcaklık katarken; gün batımı gibi turuncu ışıkların yoğun olduğu sahnelerde oldukça zengin, dramatik ve atmosferik bir hava yaratır.
4. **Film Bias Bleach Bypass (Kreatif LUT):** Sinema filmlerinde banyo aşamasında gümüşün film şeridinde bırakılmasıyla elde edilen geleneksel "gümüş tutma" (silver retention) tekniğini taklit eder. Sonuç olarak **yüksek kontrastlı ve oldukça düşük doygunlukta (low saturation)** sert bir film görüntüsü ortaya çıkar. Genellikle ciddi, gerilimli veya savaş temalı askeri içeriklerde sıklıkla tercih edilir.
5. **Achromic (Kreatif LUT):** Paketteki tek **siyah-beyaz (monokrom)** LUT'tur. Kontrast yapısı incelendiğinde *Film Bias* ile benzer bir tonlama karakterine sahiptir. RED firmasının geçmişte ürettiği özel monokrom sensörlü sinema kameralarının siyah-beyaz ifade gücüne duyulan bağlılığı ve hassasiyeti yansıtır.

## Kamera ve Çekim Sonrası Temel Kural

Hangi kurgu programını kullanırsanız kullanın, N-Log videolara LUT uygularken düğümlerin (nodes) veya efekt katmanlarının sırasına dikkat edilmelidir. **LUT uygulandıktan sonra** yapılan ekstra parlaklık veya beyaz dengesi ayarları patlamalara (clipping) sebep olabilir. Bu yüzden temel pozlama, kontrast ve beyaz dengesi düzeltmeleri her zaman **LUT'un uygulandığı aşamadan ÖNCE** yapılmalıdır.

## Final Cut Pro (FCP) İçin RED LUT Yükleme ve Uygulama Rehberi (Kamera LUT Yöntemi)

*Videodaki DaVinci Resolve anlatımı yerine, Final Cut Pro'da kurgu öncesi görüntüyü doğrudan ana anahtarla dönüştüren en pratik yöntem olan Camera LUT (Kamera LUT'u) entegrasyonu şu şekildedir:*

### 1. Adım: LUT Dosyalarını FCP'ye Tanımlama

1. Nikon kütüphanenizden indirdiğiniz RED LUT dosyalarını bilgisayarınızda kalıcı bir klasöre çıkartın.
2. Final Cut Pro'yu açın. Proje zaman çizgisindeki (Timeline) veya sol üstteki Medya Tarayıcı (Browser) (**ÖNERİLEN**) panelindeki N-Log videonuzu (ya da toplu olarak tüm videolarınızı) seçin.

### 2. Adım: Inspector (Müfettiş) Panelini Ayarlama

1. Ekranın sağ üst köşesinde yer alan **Inspector** panelinden **Info** sekmesine (içinde küçük "i" harfi olan yuvarlak ikon) tıklayın.
2. Açılan panelin sol alt köşesindeki görünüm modunu (varsayılan olarak *Basic* olabilir) **General** veya **Extended** olarak değiştirin. Bu sayede videonun kamera meta verileri listelenecektir. Bazı sürümlerde inspector (i) menüsünde sol alttaki settings seçiliyse camera LUT seçeneği görünür olur.

### 3. Adım: RED LUT'u Doğrudan Kameraya Eşleme

1. Listelenen seçenekler arasında **Camera LUT** başlığını bulun. Karşısındaki açılır menüye tıklayın.
2. Menünün en altında yer alan **"Add Custom Camera LUT..."** seçeneğini seçin.
3. Bilgisayarınızda kayıtlı olan 4 adet kreatif veya 1 adet teknik RED LUT dosyasını bulun, hepsini seçerek Open deyin.

### 4. Adım: Sonuç

Artık bu menüden çektiğiniz sahneye uygun olan RED LUT'u (*Film Bias, Film Bias Offset vb.*) seçtiğiniz an, Final Cut Pro videonun ham (N-Log) renk uzayını doğrudan RED sinema kamerası tonlarına dönüştürerek kurguya hazır hale getirecektir. Üstelik bu yöntemle birden fazla klibi tek seferde seçip toplu olarak RED LUT uygulayabilirsiniz.

RED LUT'ları tamamen ücretsiz olarak Nikon'un resmi indirme merkezinden edinebilir, Z6 III kameranızın güçlü dinamik aralığıyla birleştirerek harika işler çıkarabilirsiniz.

## LUT İndirme Linki ve Tarifi

Nikon ve RED iş birliğiyle hazırlanan bu resmi LUT paketini doğrudan Nikon'un kendi sitesinden ücretsiz olarak indirebilirsiniz. Mac kullandığınız için direkt Mac uyumlu indirme sayfasını aşağıya bırakıyorum:

**Resmi İndirme Sayfası:** [Nikon Download Center - N-Log LUT (Türkçe)](https://downloadcenter.nikonimglib.com/tr/download/sw/258.html)

### Nasıl İndirilir?

1. Yukarıdaki bağlantıya tıklayın.
2. Sayfanın en altına kaydırıp sözleşmeyi onaylayın (**"Kabul ediyorum"** kutucuğunu işaretleyin).
3. Mac kullandığınız için **"İndir: D-3DLUT-V0200M.dmg"** butonuna basarak dosyayı bilgisayarınıza indirin.

İndirdiğiniz `.dmg` dosyasına çift tıkladığınızda karşınıza `3DLUT` adında bir klasör çıkacak. Bu klasörün içinde hem videonun standart dönüşümünü sağlayan teknik LUT'u hem de bahsettiğimiz 4 adet kreatif RED LUT dosyasını (`.cube` uzantılı olarak) toplu halde bulacaksınız.

Bunları bilgisayarınızda kalıcı bir klasöre taşıdıktan sonra Final Cut Pro'da rehberdeki adımlarla doğrudan kullanmaya başlayabilirsiniz.
