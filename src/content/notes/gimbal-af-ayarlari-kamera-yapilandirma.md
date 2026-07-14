# Gimbal ile AF Ayarları ve Kamera Yapılandırma Rehberi

Gimbal üzerinde çekim yaparken, fiziksel olarak kameraya müdahale şansınız (netleme halkasını çevirmek, arkadaki ekrana bakıp joystick ile odak noktası seçmek gibi) minimuma iner. Bu nedenle kameranın otomatik odaklama (AF) zekasını doğru senaryoya göre yapılandırmak, iş akışınızın bölünmesini ve netsiz görüntü (focus hunting) sorununu tamamen engeller.

Bu rehber, **Nikon Z6 III** gövdenizin gimbal üzerindeki video performansını zirveye çıkaracak menü ayarlarını, sinematik odak değişkenlerini ve farklı çekim senaryolarını detaylı olarak açıklamaktadır.

## 1. Temel Odaklama Modları ve Video Mantığı

Gimbal çekimlerine başlamadan önce video modunda iki temel AF modunun karakterini ve menüdeki yerlerini bilmeniz gerekir.

### AF-C (Continuous AF / Sürekli Otomatik Odaklama)

* **Açıklama:** Kamera, nesneye olan mesafedeki değişikliklere yanıt olarak sürekli olarak odak ayarını yapar. Nesne hareket ettikçe veya gimbal ileri-geri kaydıkça odağı anlık hesaplar. En önemli avantajı, netleme hızı ve takip hassasiyeti gibi sinematik menü değişkenlerinin sadece bu modda tam performansla çalışmasıdır.
* **Artıları:** Akıllı konu takibi yapar, gereksiz arka plan taraması (odak soluması) yapmaz, sinematik ve yavaş geçişlere izin verir.
* **Eksileri:** İlk kilitlenme için kadraja konunun girmesi veya ekrana/deklanşöre bir kez basılması gerekir.
* **Gimbal Önerisi:** Profesyonel ve kontrollü tüm gimbal hareketleri için **kesinlikle bu mod seçilmelidir.**

### AF-F (Full-Time AF / Tam Zamanlı Otomatik Odaklama)

* **Açıklama:** Kamera, parmağınızı hiçbir tuşa basmanıza gerek kalmaksızın nesnenin hareketine veya kompozisyondaki değişikliklere yanıt olarak sürekli olarak odak ayarını yapar.
* **Artıları:** Tamamen bağımsız çalışır. Kadraja ne girerse ekstra komut istemeden netler.
* **Eksileri:** Çok agresiftir. Sabit sahnelerde bile odağı milimetrik olarak ileri-geri aradığı için videoda amatör bir "odak soluması" (focus hunting/pulsing) yaratabilir. Kadrajın önünden anlık geçen yabancı nesnelere odak fırlatabilir.
* **Gimbal Önerisi:** Yalnızca kamerayı tripoda sabitleyip tek başınıza içerik ürettiğiniz (Vlog/YouTube) senaryolarda kullanılmalıdır. Hareketli gimbal çekimlerinde **önerilmez**.

**Menüden Yer Tarifi (Odak Modu Seçimi):**

1. Kameranın arkasındaki **MENU** düğmesine basın.
2. Soldaki sekmelerden **VİDEO KAYIT MENÜSÜ** (Kamera simgesi yanında film şeridi olan sekme) içine girin.
3. Listeyi aşağı kaydırarak **Odak modu** sekmesine dokunun veya çoklu seçici ile sağa tıklayın.
4. Buradan **AF-C (Sürekli AF)** veya **AF-F (Tam zamanlı AF)** seçimini yapın. (Kısa Yol: Çekim ekranındayken **"i" düğmesine** basarak hızlı menüden de **Odak modu** ayarını değiştirebilirsiniz.)

## 2. Kritik Sinematik Ayarlar: AF Hızı ve AF İzleme Hassasiyeti

Nikon Z6 III'ü sıradan bir kameradan ayırıp Hollywood tarzı pürüzsüz odak geçişleri yaptıran iki sihirli ayar **Özel Ayarlar Menüsü** altında yer alır:

`Özel Ayarlar Menüsü › g: Video › g5: AF Hızı`
`Özel Ayarlar Menüsü › g: Video › g6: AF İzleme Hassasiyeti`

### g5: AF Hızı (AF Speed)

* **Nedir?:** Kameranın odağı bir objeden diğer objeye (veya yakından uzağa) geçirirken ne kadar hızlı ya da yavaş davranacağını belirler.
* **Seçenekler:** −5 ile +5 arasında değerler alır.
    * **Artı (+) Değerler (Hızlı):** Odak "şak" diye anında hedefe zıplar. Spor müsabakaları ve çok ani aksiyonlar için iyidir ancak gimbalda sarsıcı ve mekanik durur.
    * **Eksi (−) Değerler (Yavaş):** Odak, bir sinema filmi gibi pürüzsüzce, süzülerek ve yavaşça yeni hedefe kayar.
* **Gimbal Önerisi:** İnsan veya yavaş nesne takibinde bu ayarı **−2 veya −3** seviyelerine düşürün. Bu sayede gimbal ileri geri hareket ederken oluşabilecek anlık sarsıntılar odağa yansımaz, geçişler çok organik görünür.

### g6: AF İzleme Hassasiyeti (AF Tracking Sensitivity)

* **Nedir?:** Kamera bir konuya (örneğin yürüyen modelinize) kilitlenmişken, kadrajın önünden anlık bir yabancı nesne (bir ağaç dalı, elektrik direği veya başka bir insan) geçtiğinde kameranın ne kadar süreyle eski konusuna "sadık" kalacağını belirler.
* **Seçenekler:** 1 (Hızlı Tepki / Responsive) ile 7 (Gecikmeli / Delayed) arasında değerler alır.
    * **1 (Hızlı Tepki):** Kamera çok sabırsızdır. Modelin önüne bir anlığına ağaç yaprağı girerse odağı hemen modelden söküp yaprağa yapıştırır.
    * **7 (Gecikmeli - Sadık):** Kamera hedefine aşırı sadıktır. Modelin önünü ne kapatırsa kapatsın odak modelin üzerinde çivili kalır, araya giren nesneleri tamamen görmezden gelir.
* **Gimbal Önerisi:** Gimbal çekimlerinde sürekli sağa sola hareket ettiğimiz ve kadrajın önüne objeler girip çıkabileceği için bu ayarı **5, 6 veya 7 (Delayed / Gecikmeli)** seviyelerinde tutmalısınız.

## 3. Farklı Çekim Senaryoları İçin AF Alan Modu ve Konu Algılama Kombinasyonları

Nikon Z6 III video modunda tek bir AF moduyla her işi çözemezsiniz. Doğru senaryoda doğru **AF Alan Modu** (kameranın netleme noktalarını ekrana yayma biçimi) ve **Konu Algılama** (yapay zekanın hedef seçimi) eşleşmesi yapılmalıdır.

### Senaryo A: İnsan ve Model Takibi (Yürüyen, Kameraya Yaklaşan Objeler)

* **Kullanım Amacı:** Yürüyen, dönen, konuşan veya gimbal ile etrafında döndüğünüz insanları çekerken odağın kaçmamasını sağlamak.
* **AF Modu:** AF-C
* **AF Alan Modu:** Geniş Alan AF (L) veya Otomatik Alan AF
* **Konu Algılama:** İnsanlar (People)
* **Ne Zaman Kullanılır?:** Kadrajda net bir insan öznesi olduğunda ve gimbal hareket halindeyken odağı tamamen kameranın yapay zekasına devretmek istediğinizde.
* **Nasıl Çalışır?:** Z6 III'ün derin öğrenme yapay zekası doğrudan insanı arar; model arkasını dönse bile kafasını, profilden yüzünü ve yaklaştığında gözünü (Eye-AF) algılayarak sarı/yeşil bir kutuyla kilitler.
* **Kritik Tüyo:** Eğer kadrajda birden fazla insan varsa ve kameranın yan taraftaki figüranlara odak kaydırmasını istemiyorsanız, Geniş Alan AF (L) seçeneğini kullanın. Ekranda beliren o geniş kutuyu kendi modelinizin üzerine getirdiğinizde, kamera kutunun dışındaki ilgisiz insanları tamamen görmezden gelir.

### Senaryo B: Hedef Tahtalı Obje Takibi (Tahmin Edilemez veya Hızlı Hareketler)

* **Kullanım Amacı:** Sağa sola koşan bir hayvanı, kamp ateşi etrafında aniden hızlanan bir nesneyi veya hareket halindeki bir aracı gimbal ile takip etmek.
* **AF Modu:** AF-C
* **AF Alan Modu:** Konu Takibi AF (Subject-Tracking AF)
* **Konu Algılama:** Nesneye göre Otomatik, Hayvan, Kuşlar veya Araçlar
* **Ne Zaman Kullanılır?:** Kadrajda insan dışı hareketli bir nesne olduğunda ya da insan olsa bile nesnenin kadrajın köşelerine hızla kaçacağı, takibinin zor olduğu aksiyon anlarında.
* **Nasıl Çalışır?:** Ekranda küçük, hedef tahtasına benzeyen bir takip kutusu belirir. Çoklu seçiciyle bu kutuyu hedefinizin (örneğin arabanın veya köpeğin) üzerine getirip **OK veya deklanşör düğmesine bir kez basarak kilitleme yaparsınız**. Artık nesne kadrajın neresine giderse gitsin, odak noktası hedef tahtası gibi nesneye yapışır ve gimbalı ne kadar hızlı sarsarsanız sarsın odağı bırakmaz.

### Senaryo C: Doğa, Manzara ve Genel Planlar (Geniş / Küçük Alan Seçimi)

* **Kullanım Amacı:** Gimbalı yere sıfır tutup ormanda düz yürümek, doğa manzarası kaydetmek veya gimbalın kendi etrafında 360 derece döndüğü sanatsal sahneler (3D Roll) çekmek.
* **AF Modu:** AF-C
* **AF Alan Modu:** Geniş Alan AF (S) veya Tek Noktalı AF
* **Konu Algılama:** Konu Algılama Kapalı (Subject Detection OFF)
* **Ne Zaman Kullanılır?:** Kadrajda belirli bir insan veya canlı özne olmadığında, sadece ortamı ve coğrafyayı gimbal akışıyla kaydetmek istediğinizde.
* **Nasıl Çalışır?:** Doğa ve manzara çekimlerinde yapay zekanın açık kalması risklidir; kamera bir ağaç dalını veya kayayı insana/araca benzetip odağı ileri geri fırlatabilir (Focus Hunting). Konu algılamayı kapatıp odağı Geniş Alan (S) ile ekranın ortasına sabitlediğinizde, kamera sadece kadrajın merkezini net tutar ve kusursuz, kararlı bir doğa akıcılığı elde edersiniz. Eğer derinlik mesafesi milim değişmeyecekse odağı tamamen kilitleyip MF (Manuel) moda geçmek de en güvenli yoldur.

### Senaryo D: Sinematik Objeden Objeye Odak Geçişi (Rack Focus / Farklı Nesneler Arası Geçiş)

* **Kullanım Amacı:** Tek bir nesnede takılı kalmak yerine, hikaye anlatımı gereği odağı ön plandaki bir nesneden (örn. kamp bardağından) arka plandaki insana (veya tam tersi) pürüzsüzce kaydırmak.
* **Tüm Ayarların Yeniden Yapılandırılması:** Bu senaryoda kameranın "tek bir nesneye sadık kalma" ve "odağı çivileme" zekasını tamamen tersine çevirmemiz gerekir. Ayarları şu şekilde değiştiriyoruz:
    * **AF Modu:** AF-C (Sürekli Çalışma)
    * **AF Alan Modu:** Tek Noktalı AF (Single-Point AF) veya doğrudan dokunmatik ekran kullanımı.
    * **Konu Algılama:** Konu Algılama Kapalı (yapay zekanın kendi kafasına göre insana kilitlenmesini engellemek için).
    * **g5: AF Hızı:** −3 veya −4 (odağın sertçe zıplamasını engellemek, sinematik ve yavaş bir kayış elde etmek için).
    * **g6: AF İzleme Hassasiyeti:** 1 veya 2 (Hızlı Tepki / Responsive). Normalde gimbalda bunu yüksek tutuyorduk ancak nesneler arası geçiş yapacağımız için kameranın yeni gösterdiğimiz hedefe anında (ama yavaş bir hızla) ikna olması gerekir.
    * **AF Konu Algılanmadığında:** [ON] (Açık - Sürekli Ara). Kamera eski nesneyi bırakıp yeni nesneyi aramaya açık olmalıdır.
* **Nasıl Çalışır?:** Gimbalı sabit tutarken veya yavaşça yana kaydırırken (parallax), Z6 III'ün dokunmatik ekranından arka plandaki yeni hedefinize parmağınızla bir kez dokunursunuz. Kamera verdiğiniz hızlı tepki (responsive) ayarı sayesinde yeni nesneyi hemen kabul eder ama belirlediğiniz −3 yavaş hızıyla odağı adeta süzülerek yeni nesneye taşır.

**Menüden Yer Tarifi (AF Alan Modu ve Konu Algılama):**

1. **MENU** > **VİDEO KAYIT MENÜSÜ** sekmesine gidin.
2. **AF alanı modu** seçeneğine girerek yukarıdaki senaryolara göre uygun alanı (Geniş alan, Konu takibi vb.) seçin.
3. Hemen altındaki **AF/MF konu algılama seçenekleri** sekmesine girerek çekeceğiniz konuya göre **İnsanlar, Hayvanlar, Araçlar** veya **Konu algılama kapalı** tercihini yapın.

## 4. Kritik Emniyet Ayarı: AF Konu Algılanmadığında (AF Subject Not Detected)

Gimbal çekimlerinin kalitesini profesyonel seviyede koruyan ve odağın arka plana fırlamasını engelleyen en gizli ayarlardan biri de budur.

`Video Kayıt Menüsü › AF/MF konu algılama seçenekleri › AF konu algılanmadığında`

* **Nedir?:** Kamera AF-C modunda akıllı bir konuyu (insan, araç vb.) takip ederken; o konu kadrajdan anlık olarak tamamen çıktığında, bir engelin arkasında kaybolduğunda veya yüzünü gizlediğinde kameranın odaklama motorunun nasıl davranacağını belirler.
* **Seçenekler:** [ON] (Açık) ve [OFF] (Kapalı).
    * **[ON] (Açık - Sürekli Ara):** Kamera konuyu kaybettiği milisaniyede kadrajı baştan aşağı taramaya başlar; odağı hemen arkadaki duvara, ağaçlara veya alakasız nesnelere fırlatır. Konu kadraja tekrar girdiğinde ise odağı yeniden bulana kadar görüntüde bulanıklaşma (focus hunting) yaşanır.
    * **[OFF] (Kapalı - Odağı Çivile):** Kamera konuyu kaybettiği an odaklama motorunu tamamen dondurur ve **en son netlediği mesafeyi çivi gibi sabit tutar**. Konu (örneğin modeliniz) engelin arkasından çıkıp kadraja yeniden girene kadar odak sağa sola sapıtmaz.
* **Gimbal Önerisi:** Gimbal üzerinde hareketli çekimler yaparken bu ayarı kesinlikle **[OFF] (Kapalı)** konumuna getirmelisiniz. Bu sayede modeliniz kadrajdan anlık olarak çıksa veya araya bir ağaç/direk girse dahi odak mesafesi korunur ve çekimlerinizdeki sinematik tutarlılık asla bozulmaz.

## 5. Gimbal Çekimleri İçin "Altın Değerinde" Eğitim Notları

* **Parmağınızı Özgür Bırakın:** Video modunda AF-C fotoğraf modundaki gibi çalışmaz. Netleme takibini başlatmak veya bir nesneyi kilitlemek için deklanşöre/ekrana **bir defa basıp bırakmanız yeterlidir**. Çekim boyunca parmağınızı tuşa basılı tutmak zorunda değilsiniz; Z6 III kesintisiz netlemeye kendi devam eder.
* **Gimbal Tekerleğini Kullanın:** DJI RS 5 gimbalınızı kutudan çıkan Type-C kablosu ile Z6 III gövdenize bağladığınızda, gimbalın önündeki **çevirmeli tekerlek (dial)** otomatik olarak kameranın odak mekanizmasına bağlanır. Kameraya hiç dokunmadan parmağınızla milimetrik manuel odak veya alan seçimi yapabilirsiniz.
* **Back-Button Focus (AF-ON) Konforu:** Video menüsünden odaklama tetikleyicisini deklanşörden ayırıp sadece kameranın arkasındaki **AF-ON tuşuna** atayabilirsiniz. Böylece kayda girmek için deklanşöre bastığınızda kamera ekstra odak aramaya çalışmaz, gimbal sarsıntılarından etkilenmez.
