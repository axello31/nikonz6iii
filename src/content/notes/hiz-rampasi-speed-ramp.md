# Hız Rampası (Speed Ramp) Etkisi: Aynı Sahnedeki Videoyu Segmentlere Bölüp Hızlandırıp Yavaşlatmak (Akıcı Şekilde)

Nikon Z6 III ile çektiğin (örneğin orbit) video harika bir temel oluşturacaktır. Son derece akıcı, hızlı başlayıp yavaşlayan ve tekrar hızlanan efekt kurgu dünyasında **"Speed Ramp" (Hız Rampası)** olarak adlandırılır.

Bu geçişin bu kadar akıcı (smooth) olmasının iki temel sırrı vardır:

1. **Çekim kare hızı (FPS):** Videonun yavaşladığı anlarda takılma olmaması için videonun yüksek kare hızında (en az 50fps, tercihen 100fps) çekilmiş olması gerekir. Z6 III bu konuda çok güçlüdür.
2. **Yumuşatılmış Geçiş Eğrileri (Ease In/Out):** Hız değişim noktalarında keskin bir geçiş yerine, hızı zamana yayan yumuşak geçiş alanları kullanmak.

Final Cut Pro (FCP) içinde bu akıcı etkiyi adım adım şu şekilde uygulayabilirsin:

## Adım 1: Zaman Çizgisinde Doğru Kare Hızını Ayarlamak

Eğer Nikon Z6 III ile videonu **100fps** çektiysen:

* Final Cut Pro'da projenin (timeline) kare hızını **25fps** (sinematik standartlar) olarak ayarladığından emin ol.
* Bu sayede videoyu yavaşlattığında elinde yavaşlatmaya yetecek kadar çok fazla kare bulunacak ve akıcılık bozulmayacaktır.

## Adım 2: Hız Bölgelerini Belirlemek (Blade Speed)

Klibi fiziksel olarak kesmek yerine sadece hız bölgelerini ayıracağız:

1. Klibini zaman çizgisine (timeline) sürükle.
2. Oynatma kafasını (playhead) hızlanmanın/yavaşlamanın **başlamasını** istediğin noktaya getir.
3. Klavyenden **Shift + B** tuşlarına bas. Klibin üzerinde yeşil bir "hız çubuğu" belirdiğini göreceksin.
4. Kafayı hareket ettirip hız değişiminin **bitmesini** (yani tekrar yavaşlayacağı veya hızlanacağı) noktaya getirip yeniden **Shift + B** yap.
5. Bu işlem klibi bölmez, sadece klibin üstünde farklı hızlar uygulayabileceğin bölgeler (segmentler) yaratır.

## Adım 3: Hızları Uygulamak

1. Hızlandırmak istediğin bölgenin üstündeki hız çubuğuna çift tıkla veya sağındaki küçük oka bas.
2. Buradan hızı örneğin **Fast %400** (veya %200) veya daha hızlı yap.
3. Yavaşlatmak istediğin (normal hıza veya yavaş çekime döneceğin) bölgenin hızını ise orijinal hızına çekmek için **Normal (%100)** yap ya da eğer 60/120 fps çektiysen **Slow %50** / **Slow %25** değerine getir.

## Adım 4: En Önemli Sır – Akıcı Geçişi Sağlamak (Ramp / Transition Handles)

Hızları değiştirdiğinde bölgelerin birleştiği yerlerde dikey gri çizgiler oluşur. Bunlar hız geçiş noktalarıdır:

1. Hız sınırındaki bu gri çizgilere tıkladığında, sınırın her iki yanına doğru açılan küçük **çekme kolları (Transition Handles)** göreceksin.
2. Bu kolları sağa ve sola doğru genişlet.
3. **Kolları ne kadar genişletirsen, hızlı kısımdan yavaş kısma geçiş o kadar uzun bir süreye yayılır ve video o kadar "akıcı" (smooth) şekilde hızlanıp yavaşlar.**

## Adım 5: Hareket Bulanıklığı Ekleme (Motion Blur - Opsiyonel ama Şiddetle Tavsiye Edilir)

Gerçek bir hız rampası etkisinde, kamera hızlandığında arka plandaki parallaks etkisinin doğal olarak biraz bulanıklaşması (motion blur) gerekir. FCP'de bunu daha gerçekçi kılmak için:

* Timeline'da klibini seç.
* Sağ üstteki **Video Inspector** paneline git.
* **Video Effects** kısmından klibine hafif bir **Directional Blur** efekti ekleyebilir ve bu efekti sadece hızın tavan yaptığı (en hızlı olduğu) saniyelere anahtar kareler (keyframe) yardımıyla uygulayabilirsin. (Alternatif olarak FCP için ücretsiz sunulan *Motion Blur* plugin'lerini kullanabilirsin.)

Bu adımları uygulayarak Nikon Z6 III'ünün sunduğu yüksek kaliteli ve yüksek kare hızlı orbit görüntüsünü, tıpkı DJI RS3 videosundaki gibi akıcı ve profesyonel bir hız rampasına dönüştürebilirsin!
