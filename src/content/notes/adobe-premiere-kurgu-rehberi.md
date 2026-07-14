# Adobe Premiere Kullanma Kılavuzu & Kurgu Rehberi

## KATEGORİ 1: Proje Başlangıcı ve Dosya İçeri Aktarma (Import)

### 1.1. Yeni Proje Oluşturma

* **Yol:** Premiere ilk açıldığında sol üstteki **New Project** butonuna tıkla. (Eğer programın içi zaten açıksa: File > New > Project yolunu takip et).
* **İşlem:**
    1. **Project Name:** Ekranın sol üstündeki kutucuğa projenin adını yaz.
    2. **Project Location:** Yanındaki klasör ikonuna tıklayarak projenin bilgisayarda yedekleneceği ana klasörü seç.
    3. Sağ alttaki mavi **Create** butonuna basarak temiz bir çalışma alanı (Workspace) aç.

### 1.2. Dosyaları İçeri Aktarma ve Timeline Kurulumu

* **Yol:** Window > Project yolunu takip ederek Project panelini aç.
* **İşlem:** Project panelinin içindeki boş bir alana **çift tıkla**. Bilgisayarından kurgulayacağın video, ses, müzik veya ses efektlerini seçip **Open** butonuna bas.
* **Zaman Çizgisini Oluşturma (Timeline):** Project paneline gelen videolardan ana olanını farenle tut, ekranın ortasındaki boş **Timeline (Zaman Çizgisi)** alanına sürükleyip bırak. Video çözünürlüğüne ve kare hızına (FPS) uygun sekans otomatik olarak kurulacaktır.

## KATEGORİ 2: Renk Alanı (Color Space) & Base LUT Ayarları

Kameradan çıkan (özellikle Log çeken) videoların renklerini doğru işleyebilmek için projenin renk uzayını sabitlemek ve doğru LUT'ı uygulamak gerekir.

### 2.1. Doğru Renk Alanını (Color Space) Seçme

* **Yol:** Window > Lumetri Color panelini aç > Üstteki **Settings** sekmesine gir.
* **İşlem:** Eğer Nikon Log bir video ile çalışıyorsan, **Override Media Color Space** açılır menüsünden Nikon N-Log/Rec2020 seçeneğini işaretle.

### 2.2. Özel RED LUT Uygulama

* **Yol:** Window > Lumetri Color > Üstteki **Edit** sekmesi > **Basic Correction** başlığı.
* **İşlem:** **Input LUT** açılır menüsüne tıkla. Bilgisayarındaki özel RED LUT dosyasını (RED_FilmBias_Rec2020_N-Log_to...) seçerek videoya tam otur.

## KATEGORİ 3: Sinematik Kurgu Teknikleri ve Video Hız Ayarları

### 3.1. J-Cut (Erken Ses Geçişi) Nasıl Yapılır?

Sahneler arası geçişin amatörce durmaması, sesin videodan daha önce başlayarak sinematik bir akış yaratması işlemidir.

* **Uygulama:** Zaman çizgisinde (Timeline) sonraki sahnenin ses dosyasını (A2 katmanı), mevcut sahnenin videosu (V1 katmanı) henüz bitmeden önce başlayacak şekilde sola doğru uzat. Ses kulakla duyulmaya başladığında video bir iki saniye sonra değişecektir.

### 3.2. Yumuşak Geçiş Efektleri (Transitions)

* **Cross Dissolve (Sahnelerin İç İçe Erimesi):**
    * **Yol:** Window > Effects > Video Transitions > Dissolve > Cross Dissolve. Efekti tutup iki klibin birleştiği çizgiye sürükle.
* **Dip to Black (Siyaha Gömülme):** Zaman atlamalarını anlatmak için sahneyi tamamen karartıp yenisini açar.
    * **Yol:** Window > Effects > Video Transitions > Dissolve > Dip to Black.
    * *İpucu:* Zaman çizgisinde oluşan mor efekt kutucuğunun kenarlarından fareyle tutup çekerek efektin süresini uzatabilir veya kısaltabilirsin.

### 3.3. Hız Ayarı: Süper Akıcı 2x Slow Motion

Videoyu takılmadan, yapay zeka desteğiyle pürüzsüzce yavaşlatmak için:

* **Yol:** Zaman çizgisindeki videoya Sağ Tık > Speed/Duration.
* **Ayarlar:**
    1. **Speed:** %50 yap (Bu videoyu tam 2 kat yavaşlatır).
    2. **Time Interpolation:** Burayı kesinlikle **Optical Flow** olarak değiştir. Yapay zeka aradaki kayıp kareleri kendi üreterek videonun yağ gibi akmasını sağlar.

## KATEGORİ 4: Görsel Efektler ve Hazır Yazı/Başlık (Title) Şablonları

### 4.1. Videolara Efekt Uygulama ve Yönetme

Videonun rengini siyah-beyaz yapmak, kenarlarını kesmek (Crop) veya farklı filtreler eklemek için:

* **Yol 1 (Efekti Bulma):** Window > Effects panelini aç. Arama kutucuğuna istediğin efektin adını yaz (Örn: Crop veya Black & White). Bulduğun efekti mouse ile tutup klibin üstüne sürükle.
* **Yol 2 (Efekt Ayarlarını Değiştirme):** Zaman çizgisinde o videoya tıkla. Sol üstteki Window > Effect Controls panelini aç. Sürükleyip attığın efektin tüm detaylarını, kaydırıcılarını buradan elinle yönetebilirsin.

### 4.2. Şık, Animasyonlu Başlık ve Yazılar Ekleme (Titles)

Premiere'de profesyonel hareketli yazılar...

* **Yol 1 (Şablon Seçimi):** Window > Graphics Templates panelini aç. Panel içinde Adobe'un hazır sunduğu onlarca hareketli başlık, alt bant ve intro animasyonunu göreceksin. Beğendiğin hazır şablonu kurgunda videolarının üst katmanına sürükle.
* **Yol 2 (Yazıyı Düzenleme ve İnce Ayar):** Zaman çizgisindeki o yazı katmanına tıkla. Ekranında otomatik olarak açılacak olan Window > Properties panelini kullan. Yazının içeriğini, fontunu veya rengini saniyeler içinde buradan ayarlayabilirsin.

## KATEGORİ 5: Yeni Nesil Maskeleme (Masking), Renk Eşitleme ve Takip (Tracking)

Premiere'de maskeleme mantığı tamamen değişmiştir. Artık ekrana çizilen maskeler ilk etapta **"Unassigned Mask" (Atanmamış / Sahipsiz Maske)** olarak kalır ve siz onu bir başlığa bağlayana kadar gri/kırmızı bir leke olarak görünür.

### 5.1. Maskeleme Nasıl Yapılır? (Videoyu Kesme / Opacity Maskesi)

* **Yol:** Zaman çizgisinden videoyu seç ve Window > Effect Controls panelini aç. Paneldeki **Opacity (Opaklık)** başlığının üzerine fareyle **bir kez tıkla**.
* **Uygulama:** Zaman çizgisinin (Timeline) hemen solunda dikine duran araç menüsündeki (**Toolbar**) iç içe geçmiş iki daire ikonuna (**Object Mask Tool**) basılı tut ve altından **Pen Mask Tool (Kalem)** aracını seç. Önizleme ekranına gelip maskeni çiz. Opacity başlığı önceden seçili olduğu için maske tık diye oturur ve videonun dışını gizler.
* **Alternatif (Sürükle-Bırak):** Eğer önce maskeyi çizdiyseniz ve ekranda gri leke kaldıysa, Effect Controls panelinin en üstündeki Unassigned Masks altından Pen Mask 1 yazısını fareyle tutun, aşağıya sürükleyip **Opacity** başlığının üzerine bırakın.

### 5.2. Sadece Maskelenen Alanda İşlem Yapma (Lumetri Color'a Bağlama)

Çizdiğiniz maskenin (örneğin gökyüzünün) videoyu kesmesini değil, **sadece o alanın rengini değiştirmesini** istiyorsanız:

* **Yol:** Toolbar üzerinden kalem aracını seçip ekrana maskenizi çizin.
* **İşlem:** Window > Effect Controls panelinin en üstünde sahipsiz duran **Unassigned Masks** altındaki Pen Mask 1 dosyasını farenizle tutun, aşağıya doğru sürükleyip **Lumetri Color** yazısının tam üzerine bırakın. (Ya da sağ tıklayıp *Assign to > Lumetri Color* seçin).
* **Sonuç:** Sağ taraftaki Lumetri Color > Color Wheels & Match panelini açıp tekerlekleri döndürdüğünüzde yapılan tüm renk ve ışık değişiklikleri sadece o maskenin içine hapsolur, videonun geri kalanına dokunmaz. Maskenin tam dışını etkilemek için maske ayarlarındaki **Inverted** kutucuğunu işaretleyin.

### 5.3. Maske Takibi (Mask Tracking) Nasıl Atanır?

Yapay zekanın hareketli bir objeyi veya insanı sahne boyunca otomatik takip etmesini sağlamak için:

* **Yol:** Zaman çizgisindeki mavi çizgiyi klibin en net olduğu **ilk karesine** getirin. Effect Controls panelinde maskeyi nereye bağladıysanız (Örn: Lumetri altındaki) **Pen Mask 1** yazısına tıklayıp maske çizgilerini görünür yapın.
* **Kritik Mod Ayarı:** Maske başlığının hemen altında veya önizleme ekranının altındaki modlardan **Clip Mode** seçeneğinin açık olduğundan emin olun. (Yapay zekanın genel takip modu budur).
* **İşlem:** Maske başlığının hemen altındaki oynatıcı butonlarından sağa doğru duran tek oynat tuşuna (**Track selected mask forward**) basın. Yapay zeka objeyi sahne sonuna kadar otomatik izleyecektir.
* **[DÜZENLEME] Takip Sapıtırsa Manuel Müdahale:** Objenin önüne bir şey girdiğinde yapay zeka maskeyi kaçırırsa; sapıttığı kareye gelin, modu **Frame Mode** yapın ve ekrandaki noktaları elinizle tekrar objeye oturtun. Ardından modu yeniden **Clip Mode** yapıp oynat tuşuna basarak takibe kaldığı yerden devam ettirin.

### 5.4. Color Match (Farklı Kamera Renklerini Otomatik Eşitleme)

* **Yol 1:** Önizleme ekranının sağ altındaki + (Button Editor) ikonuna tıklayıp Comparison View aracını buton barına sürükleyin ve aktifleştirin.
* **Yol 2:** Sol ekrandaki kaydırıcıdan örnek alınacak **referans klibi**, sağ ekranda ise değişecek **hedef klibi** bulun.
* **Yol 3:** Window > Lumetri Color > Color Wheels & Match sekmesini açın. **Face Detection** kutucuğunu işaretleyip **Apply Match** butonuna basın.
* **[DÜZENLEME] Color Match Sonrası İnce Ayar:** Eşitleme bittikten sonra renk tekerleklerinin ortasındaki artı (+) işaretlerini farenizle hafifçe kaydırarak renk sapmalarını manuel düzeltebilir; Basic Correction altından Exposure ile ışık seviyesine el ayarı çekebilirsiniz.

## KATEGORİ 6: Yapay Zeka Destekli Ses ve Metin Araçları

### 6.1. Enhance Speech (Ses Temizleme) ve Manuel Düzenlemesi

* **Yol:** Window > Essential Sound.
* **İşlem:** Zaman çizgisinden sesi seçip paneldeki **Dialogue** butonuna ve ardından beliren **Enhance** butonuna basın.
* **[DÜZENLEME] El Ayarı:** Yapay zeka sesi çok robotikleştirirse, hemen aşağısında beliren **Mix Amount** kaydırıcısını farenizle **%40 ile %60** arasına çekerek orijinal ortam sesinin doğallığını geri kazandırın.

### 6.2. Otomatik Sessizlik ve Duraksama Silme (Delete Pauses) ve Düzenlemesi

* **Yol:** Window > Text > Transcript sekmesi.
* **İşlem:** Mavi **Transcribe** butonuna basıp videoyu yazıya döktürün. Üstteki **Filtre (Huni)** ikonuna tıklayıp **Pauses (Duraklamalar)** seçeneğini seçin.
* **[DÜZENLEME] El Ayarı (Sildirmeme):** Yapay zekanın sessizlik sandığı ama silinmesini istemediğiniz dramatik bir duraksama varsa; paneldeki o kelimenin/boşluğun üzerine **sağ tıklayıp** **Ignore (Yoksay)** ya da **Keep (Tut)** deyin.
* **Sonuç:** Aktifleşen **Delete** butonuna basın, açılan menüden **Extract** seçeneğini seçerek **Delete All** deyin. Kalan tüm boşluklar saniyeler içinde kesilip birleşir.

### 6.3. Otomatik Altyazı, Çeviri ve Manuel Yazı Düzeltme

* **Altyazı Oluşturma:** Window > Text panelinin üstündeki **CC (Create Captions from Transcript)** ikonuna tıklayıp direkt *Create Captions* deyin.
* **Diğer Dillere Çeviri:** Panel sağ üstündeki **üç nokta (...)** ikonuna tıklayıp **Translate Transcript** deyin, hedef dili seçip *Translate* butonuna basın ve ardından yine CC butonuyla altyazıya dönüştürün.
* **[DÜZENLEME] Yazı ve Süre Düzeltme:**
    1. Window > Text > Captions sekmesine gidin. Yanlış yazılan kelimelerin üzerine normal bir metin belgesindeymiş gibi **çift tıklayarak** hatayı elinizle düzeltin.
    2. Zaman Çizgisindeki (Timeline) en üst katmanda duran altyazı bloklarının kenarlarından farenizle tutup sağa sola çekerek ekranda kalma sürelerini milimetrik uzatıp kısaltın.

## KATEGORİ 7: Ses Kurgusu İçin Kaynaklar (Müzik & Ses Efektleri)

### 7.1. Resmi Ücretsiz Seçenek: Adobe Audition Sound Effects

* **Erişim:** Tarayıcınıza **"Adobe Audition Sound Effects"** yazarak resmi Adobe indirme sayfasına gidin.
* **İşlem:** Karşınıza çıkan dev listeden ihtiyacınız olan paketleri (Whoosh geçiş sesleri, doğa sesleri, araçlar vb.) bilgisayarınıza tamamen ücretsiz ve telifsiz olarak indirip doğrudan Premiere projenize aktarın.

### 7.2. Diğer Ücretsiz ve Ücretli Alternatifler

* **YouTube Audio Library (Ücretsiz):** YouTube Studio içerisindeki sol menünün en altında yer alan telifsiz müzik ve efekt havuzudur.
* **Freesound.org (Ücretsiz):** Dünyanın en büyük bağımsız ses kütüphanesidir. İngilizce terimler yazarak (whoosh, camera click) arama yapabilirsiniz.
* **Artlist.io / Epidemic Sound / Envato Elements (Ücretli):** Profesyonel kalitede sinematik müzik, ses efektleri ve hazır Premiere şablonları sunan popüler üyelik tabanlı kütüphanelerdir.

## KATEGORİ 8: Doğru Çıktı (Export) Ayarları

* **Yol:** Sol üst köşedeki **Export** sekmesine geçiş yapın (Veya Cmd+M / Ctrl+M kısayolunu kullanın).
* **Temel Ayarlar:** **Format:** H.264 (MP4) | **Preset:** Match Source - Adaptive High Bitrate.
* **Maksimum Kalite Ayarları (Gizli Bölüm):** Aşağıdaki **Video** sekmesini genişletip **"More"** butonuna tıklayın. Açılan gizli listeden şu iki kutucuğu mutlaka işaretleyin:
    1. Render at Maximum Depth
    2. Use Maximum Render Quality
* **Bitrate Ayarı:** Aynı Video sekmesinin en altındaki *Bitrate Settings* kısmına inin. Bitrate Encoding ayarını **VBR, 1-pass** yapın. Target Bitrate [Mbps] değerini elinizle **30 ile 40** arasına getirin.
* **Sonuç:** Sağ alttaki mavi **Export** butonuna basın.

## EK KATEGORİ: Hayat Kurtaran Kısayollar ve Kurgu Hileleri

### Kurguyu Hızlandıran Kritik Tuşlar

* **V (Selection Tool):** Normal seçim okuna geri döner. Her araç değişiminden sonra bu tuşa basmayı alışkanlık haline getirin.
* **C (Razor Tool):** Jilet aracını açar. Zaman çizgisinde tıkladığınız klibi ortadan ikiye böler.
* **Cmd + K (Mac) / Ctrl + K (Windows):** Jilet aracına geçmeden, zaman çizgisindeki mavi çizginin (Playhead) durduğu yeri anında ortadan ikiye böler.
* **Q (Ripple Trim Left):** Mavi çizginin **solunda** kalan boşluğu ve gereksiz video parçasını tek tıkla keser, arkadaki kurguyu boşluksuz öne yapıştırır.
* **W (Ripple Trim Right):** Mavi çizginin **sağında** kalan klibin sonuna kadar olan kısmı kesip atar, bir sonraki klibi otomatik olarak boşluksuz yanaştırır.
* **S (Snap Tool Toggle):** Mıknatıs özelliğini açıp kapatır. Kliplerin birbirine tam sıfıra sıfır yapışması için her zaman açık (mavi) kalmalıdır.
* **~ (Tilde Tuşu - ESC'nin altı):** Fare imleci hangi panelin üzerindeyse, o paneli tek tuşla tam ekran yapar. Tekrar basıldığında eski haline döndürür.

### Profesyonel Kurgucu Hileleri

* **Ses Katmanını Genişletmek:** Zaman çizgisinde A1, A2 yazan sol taraftaki boşluklara çift tıklayarak ses dalgalarını (Waveform) devasa hale getirebilirsiniz. Böylece sadece ses dalgalarının düzleştiği boşluklara bakarak Ctrl+K ile kesim yapabilirsiniz.
* **Kliplerin Yerini Boşluksuz Değiştirme (Swap Edit):** Zaman çizgisindeki bir videoyu diğer iki videonun arasına, kurguyu bozmadan ve üzerine binmeden taşımak için sürüklerken **Cmd + Opt (Mac)** veya **Ctrl + Alt (Windows)** tuşlarına basılı tutun.
* **Tüm Boşlukları Tek Tıkla Kapatmak:** Üst menüden Sequence > Close Gap seçeneğine tıklayın. Tüm kurgu birbirine mıknatıs gibi yapışır.
* **Adjustment Layer (Toplu Renk Katmanı):** Project panelinde boş bir yere sağ tıklayıp New Item > Adjustment Layer seçin. Bu şeffaf katmanı Timeline'da tüm videoların üstüne koyup boydan boya uzatın. Renk ayarını sadece bu katmana yapmanız yeterlidir.
