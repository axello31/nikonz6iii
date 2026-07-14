# Flaşlı Makro Çekimlerde Odak Kaydırma (Focus Stacking) ve Yapılandırma Rehberi

Makro fotoğrafçılıkta konuya çok yaklaştığınız için alan derinliği (net olan bölge) milimetrik düzeyde aşırı daralır. Diyaframı f/16 veya f/22 gibi en dar değerlere getirseniz bile öznenin sadece küçük bir kısmı net kalır. Üstelik diyaframı çok kısmak, "kırınım" (diffraction) dediğimiz fiziksel bir olay nedeniyle fotoğrafta keskinlik kaybına yol açar.

Bu sorunu çözmek ve öznenin her yerini jilet gibi keskin yapmak için uygulanan tekniğe **Odak Kaydırma Çekimi (Focus Shift Shooting)** denir. Aşağıda, **Nikon Z6 III** gövdeniz, **Sigma 105mm Macro** lensiniz ve **Nikon SB-900** flaşınız üzerinden bu tekniği uygulamanız için gereken tüm flaş, ışık, kamera ve menü ayarları adım adım derlenmiştir.

## 1. Adım: Flaş (SB-900) ve Manuel Kamera Ayarları

Odak kaydırma işleminde ardışık onlarca/yüzlerce kare çekileceği için ışığın her karede milim değişmemesi, sabit kalması gerekir. Bu yüzden otomatik (TTL) modlar yerine her şeyi **Manuel** olarak kilitliyoruz.

### Nikon SB-900 Flaş ve Işık Yapılandırması

1. **Modu Manuele Alın:** Flaşın arkasındaki **MODE** düğmesine basarak modu **M (Manuel)** konumuna getirin. Kesinlikle TTL kullanmayın.
2. **Gücü Ayarlayın:** Flaş gücünü **1/16** veya **1/32** gibi düşük bir değere ayarlayın.
    * *Neden?:* Flaş gücü ne kadar düşük olursa, flaşın pilleri o kadar az ısınır ve iki çekim arasında yeniden dolma süresi (recycle time) o kadar saliseler düzeyine iner. Flaş 1/1 tam güçte olursa arkaya arkaya 200 kare çakamaz ve piller aşırı ısınarak kendini korumaya alır.
3. **Flaş Kafası ve Softbox Seçimi (Kritik Işık Yumuşatma Ayarı):** Makro fotoğrafçılıkta ışık kaynağının boyutu, konunuza ne kadar yakın olduğu ve ne kadar homojen yayıldığı keskinliği doğrudan etkiler.
    * **Flaşın Kendi Plastik Difüzörü Yetersizdir:** Flaşın kutusundan çıkan o küçük beyaz plastik difüzör (SW-13H) veya dahili geniş açı paneli, ışığı sadece çevreye dağıtır ancak fiziksel olarak yüzey alanı küçük olduğu için makro çekimde yine de **sert gölgeler ve patlamış (aşırı parlak) noktalar** yaratır.
    * **60 cm Ulanzi Softbox Kullanımı (Kesinlikle Kullanmalısınız):** Elindeki 60 cm Ulanzi softbox, makro çekim için tam bir canavardır. Fotoğrafçılıkta ışık kaynağı nesneye göre ne kadar büyükse, ışık o kadar yumuşak düşer. 60 cm'lik bir softbox'ı makro öznene (çiçek, böcek vb.) iyice yaklaştırdığında, ışık kaynağı nesneye oranla devasa bir boyuta ulaşır. Bu sayede nesnenin üzerindeki tüm gölgeler kaybolur, dokular patlamadan en doğal haliyle görünür ve profesyonel bir stüdyo aydınlatması elde edersiniz.
    * *Nasıl Konumlandırılmalı?:* SB-900 flaşını Ulanzi softbox'ın içine yerleştirin (gerekirse bir S-Type braket veya tripod yardımıyla). Işığı doğrudan önden vermek yerine, nesnenin **tam üstünden (tepe ışığı) veya 45 derecelik bir yan açıdan** yaklaştırarak verin. Nesnenin diğer tarafında kalan gölgeleri yumuşatmak için de karşı tarafa küçük bir beyaz karton veya yansıtıcı (reflektör) koyun.

### Nikon Z6 III Ana Kamera Ayarları

* **Çekim Modu:** Kamerayı üst kadrandan **M (Manuel)** moda alın.
* **Diyafram:** Lensin en keskin olduğu ve kırınıma uğramadığı **f/5.6 veya f/8** değerini seçin.
* **Enstantane Hızı:** SB-900'ün senkronizasyon hızını aşmayacak güvenli bir değer olan **1/125** veya **1/160** seçin.
* **ISO:** En temiz, kumlanmasız görüntü kalitesi için **ISO 100** yapın.
* **Beyaz Dengesi (White Balance):** Otomatikte (Auto) bırakırsanız her karede renk tonu değişebilir. Kesinlikle **Flaş (Flash - 5400K)** veya **Doğrudan Güneş Işığı (5200K)** moduna sabitleyin.

## 2. Adım: Menüden Odak Kaydırma Yapılandırması

Kameranın ana ayarlarını bitirdikten sonra odak kaydırma mekanizmasını hazırlıyoruz.

**Menü Yolu:** `MENU > FOTOĞRAF ÇEKİMİ MENÜSÜ > Odak kaydırma çekimi`

**Menü İçi Değişkenler:**

* **Bir Sonraki Çekimden Önceki Aralık (Interval until next shot):** Flaşlı çekim yaptığımız için burası en kritik ayardır. SB-900 flaşın her karede sorunsuz çakabilmesi ve gücünü toplayabilmesi için buraya **02 saniye (02 s) veya 03 saniye** değerini girin. *(Flaşsız çekimdeki gibi 00 yaparsanız flaş ikinci kareden sonra yetişemez.)*
* **İlk Kare Pozlama Kilidi:** Işık dalgalanması yaşanmaması için **[AÇIK] (ON)** yapın.
* **Sessiz Fotoğraf Çekimi:** Mekanik perdenin mikro titreşimlerini engellemek için **[AÇIK] (ON)** yapın.
* **Başlangıç Klasörünü Başlat:** Yüzlerce karelik serinin tek bir klasörde toplanması için **Yeni klasör (New folder)** seçeneğini işaretleyin.

## 3. Adım: Çekim Senaryoları ve Saha Kurulumu

Nesnenizin boyutuna ve derinliğine göre menüdeki **Çekim Sayısı** ve **Odak Adımı Genişliği** değerlerini aşağıdaki iki senaryodan birine göre ayarlayın:

### Senaryo 1: Genel Makro Planlar (Çiçek, Ürün, Büyük Obje Çekimleri)

* **Odak Adımı Genişliği (Focus step width):** **3 veya 4** olarak seçin (kamera adımları biraz daha geniş atar).
* **Çekim Sayısı (No. of shots):** **30 ile 100 çekim** arası yeterlidir.
* **Kullanım Mantığı:** Nesne nispeten büyük olduğu için az sayıda kare ile süreç hızlıca tamamlanır.

### Senaryo 2: Ekstrem / Mikroskobik Makro Çekimler (Böcek Gözü, İnce Tüyler vb.)

* **Odak Adımı Genişliği (Focus step width):** **1** (en dar, en milimetrik adım seviyesi).
* **Çekim Sayısı (No. of shots):** **200 ile 300 çekim** arası seçilmelidir.
* **Kullanım Mantığı:** Kamera o kadar minik odak adımları atar ki, nesnenin önünden arkasına ulaşabilmek için yüzlerce kare çekmek zorundadır. Çok resim çekmekten korkmayın; fazla kare göz çıkarmaz, yazılımlar flulukları ayıklayıp sadece en net yerleri seçecektir.

**Nereden Başlamalı? (İlk Odak Noktası):** Odak kaydırma her zaman **size en yakın noktadan** başlar ve kamera odağı otomatik olarak **geriye, sonsuza doğru** kaydırır — siz elle geri kaydırmazsınız. Örneğin bir böcek çekiminde netlemeyi böceğin **size en yakın olan ucuna** (genellikle gözü veya anteninin ucu) yapın; çekim başladığında kamera oradan başlayıp böceğin gövdesi boyunca arkaya doğru ilerleyerek seriyi tamamlar. Yanlış uçtan (böceğin arkasından) başlarsanız kamera geri kalan mesafeyi değil, boşluğa doğru kaydırmaya devam eder ve seri işe yaramaz.

**Saha Kurulumu Hatırlatması:** Sağlam bir tripod kullanın. Lens üzerindeki titreşim engelleyiciyi (**OS**) kesinlikle **OFF (Kapalı)** konumuna getirin. Odağı her zaman nesnenizin **en ön, kameraya en yakın olan ucuna** netleyip çekimi menüden **[Başlat]** diyerek başlatın. Fotoğraf makinesi her 2-3 saniyede bir netliği milim kaydırarak flaşla birlikte fotoğrafları tıkır tıkır çekecektir.

## 4. Adım: Bilgisayarda Birleştirme (Post-Production)

### Yöntem A: Nikon NX Studio (Ücretsiz ve Pratik)

1. **NX Studio** yazılımını açın.
2. Sol taraftaki klasör ağacından, odak kaydırma için oluşturduğunuz yeni klasörü bulun.
3. Klasör içindeki tüm fotoğrafları (Ctrl + A ile) seçin.
4. Üst menü barda yer alan **Focus Stacking (Odak Birleştirme)** ikonuna tıklayın. Yazılım, fotoğrafların sadece net olan bölgelerini otomatik olarak ayıklayıp üst üste dikecektir.

### Yöntem B: Adobe Photoshop (Profesyonel ve Detaylı Kontrol)

1. **Adobe Photoshop** uygulamasını açın.
2. Üst menüden **File (Dosya) > Scripts (Komut Dosyaları) > Load Files into Stack (Dosyaları Yığına Yükle)** yolunu izleyin.
3. Açılan pencerede *Browse (Gözat)* butonuna tıklayarak çektiğiniz tüm fotoğrafları seçin.
4. Aşağıda yer alan **"Attempt to Automatically Align Source Images" (Kaynak Görüntüleri Otomatik Hizalamaya Çalış)** seçeneğini mutlaka **işaretleyin** ve *OK* deyin. Photoshop tüm fotoğrafları tek bir dökümanın içine katman (layer) olarak üst üste dizecektir.
5. Katmanlar panelindeki en üst katmana tıklayın, ardından *Shift* tuşuna basılı tutarak en alttaki katmana tıklayıp **tüm katmanları seçili hale getirin**.
6. Üst menüden **Edit (Düzenle) > Auto-Blend Layers (Katmanları Otomatik Karıştır)** seçeneğine tıklayın.
7. Açılan küçük pencerede **"Stack Images" (Görüntüleri Yığınla)** seçeneğini işaretleyin ve altında yer alan **"Seamless Tones and Colors" (Kusursuz Tonlar ve Renkler)** kutucuğunun seçili olduğundan emin olup *OK* butonuna basın.
8. Photoshop, her katmandaki flulukları otomatik maskeleyerek sadece net kısımları birleştirecektir. İşlem bitince **Layer > Flatten Image (Katmanları Düzleştir)** diyerek resmi tek parça halinde kaydedebilirsiniz.
