# Sabit Kadrajda Çoklu Klon Videosu Yapımı ve Final Cut Pro (FCP) ile Kurgu Aşaması

Sabit bir kadrajda (örneğin tripod üzerinde) aynı aslanın, objenin veya modelin 5 farklı konumdaki görüntüsünü ayrı ayrı kaydedip, hepsini tek bir sahnede aynı anda hareket ediyormuş gibi gösterme tekniğine **Klonlama (Cloning)** denir. Bu işlem, kameranın fiziksel olarak milim oynamadığı sahnelerde kurgu yazılımlarının maskeleme zekası kullanılarak saniyeler içinde çözülür.

## Sahada Kamera ve Çekim Ayarları

Bu tekniğin kusursuz çalışması için tek bir kural vardır: **"Kamera hiç oynamayacak, ışık, renk ve odak çekim boyunca sabit kalacak."**

1. **Tripod Şart:** Kamerayı sarsıntısız, sağlam bir tripoda sabitleyin. Çekim boyunca kameraya veya lense fiziksel olarak asla dokunmayın.
2. **M (Manuel) Pozlama:** Kamerayı **M** moda alın. Enstantane, diyafram ve ISO değerlerini sabitleyin. Otomatik modda bırakırsanız, özne yer değiştirdikçe kamera ışığı değiştireceği için birleştirme aşamasında katmanların sınırlarında ton farkları (sırıtmalar) oluşur.
3. **Manuel Netleme (MF) & Beyaz Dengesi (WB):** Öznenin hareket edeceği genel alanı kapsayacak şekilde odağınızı yapıp netlemeyi **MF** konumuna getirin. Beyaz dengesini de **Güneş Işığı** veya sabit bir Kelvin değerine kilitleyin.
4. **Kesintisiz Kayıt:** Özne 1. konumdayken kayda girin; özne hareket edip 2., 3., 4. ve 5. konumlara geçtikçe **kaydı hiç durdurmadan tek bir uzun video kaydı alın.**
    * *Önemli İpucu:* Özne farklı konumlardayken kuyruğu, gölgesi veya uzuvları bir önceki/bir sonraki konumdaki alanın üzerine basmamalıdır. Aralarında fiziksel mesafe kalmasına dikkat ederseniz kurgu aşaması çok daha temiz biter.

## Post-Prodüksiyon: Final Cut Pro (FCP) ile Adım Adım Klonlama Kurgusu

Mac bilgisayarınızda Apple Final Cut Pro kullanarak bu 5 aslanı/özneyi tek bir karede birleştirmek için şu adımları izleyin:

1. **Görüntüyü Timeline'a Aktarın ve Kesin:** Çektiğiniz o tek parça uzun videoyu FCP Timeline'ına (Zaman Çizgisi) atın. Öznenizin 5 farklı konumda en temiz durduğu veya hareket ettiği anları tespit edin. **Blade Tool (B tuşu)** ile bu 5 farklı anı kesin.
2. **Katmanları Üst Üste Dizin:** Elinizdeki bu 5 farklı video parçasını, Timeline üzerinde **üst üste gelecek şekilde katmanlar (V1, V2, V3, V4, V5 kanalları) halinde dizin.** Başlangıç noktalarını eşitleyerek hepsinin aynı anda oynamasını sağlayın.
3. **Draw Mask Efektini Uygulayın:** Sağ taraftaki **Effects Browser (Efekt Tarayıcı)** panelini açın (Cmd + 5). Arama çubuğuna **"Draw Mask"** yazın. Bu efekti tutup Timeline'daki **en üstte yer alan** video klibinizin üzerine sürükleyip bırakın.
4. **Özneyi Maskeleyin:** Viewer (Önizleme) ekranına gelin. Kalem imlecini göreceksiniz. En üst katmandaki öznenizin etrafına tıklayarak geniş, rahat bir kutu/yuvarlak çizin (özneden biraz açıkta kalabilir, çok milimetrik olmasına gerek yoktur). Çizimi kapatıp noktaları birleştirdiğiniz an, bir alt katmanda duran 2. özne sihirli bir şekilde ekranda belirecektir.
5. **Kenarları Yumuşatın (Sırıtmayı Engelleme):** Sağ üstteki **Inspector (Denetçi)** panelinden *Draw Mask* ayarlarına gelin. **Feather (Yumuşatma)** değerini sağa doğru kaydırarak 20 veya 30 seviyelerine getirin. Bu sayede maskenin kenarları pürüzsüzce alt katmanla eriyecek ve ışık/ton geçişleri tamamen görünmez olacaktır.
6. **Diğer Katmanları Maskeleyin:** Aynı *Draw Mask* efektini sırasıyla altındaki diğer video katmanlarına da uygulayın ve her katmandaki öznenin etrafını çizerek görünür kılın. Tüm katmanlar bittiğinde, 5 ayrı özne tek bir video karesinde aynı anda kusursuzca hareket etmeye başlayacaktır.
