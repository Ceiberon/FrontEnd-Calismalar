# Spor Merkezi Web Sitesi

Bu proje, modern ve kullanıcı dostu bir spor merkezi web sitesidir. Web sitesi, çeşitli spor dallarını tanıtmak, en iyi eğitmenleri öne çıkarmak, BMI hesaplayıcı ile kullanıcıların vücut kitle indeksini hesaplamalarına olanak tanımak ve iletişim için etkileşimli bir harita sunmak amacıyla tasarlanmıştır.

## Özellikler

### 1. Spor Dalları (`Our Classes`)
- **Butonlar:** Her spor dalı için özel olarak tasarlanmış resimli butonlar mevcuttur. Kullanıcılar bu butonlara tıklayarak ilgili spor dalı hakkında detaylı bilgi alabilir.
- **Resim Desteği:** Tüm resimler "Dökümanlar" klasöründe bulunmaktadır.

### 2. Eğitmenler (`Our Best Trainers`)
- **Hover Önizleme:** Eğitmenler bölümünde, son görsel diğer içeriklerin hover ön izlemesidir. Kullanıcı, bu görselin üzerine geldiğinde diğer iki öğe ile benzer bir görünüm elde eder.
- **Dinamik İçerik:** Hover özelliği tüm öğelerde çalışacak şekilde ayarlanmıştır.

### 3. BMI Hesaplayıcı (`BMI Calculator`)
- **Aktif Hesaplama:** Kullanıcılar kilo ve boy bilgilerini girerek BMI (Vücut Kitle İndeksi) hesaplaması yapabilirler.
- **Sonuç Gösterimi:** Hesaplanan BMI değeri, hesaplayıcının altında bulunan ok ile gösterilir.
- **Formül:** BMI = kg / m²

### 4. Sabit Navbar
- **İç Linkler:** Navbar üzerindeki linkler, sayfadaki ilgili section'lara ID üzerinden bağlanmıştır.
- **Sabit Pozisyon:** Sayfa gezinmesi sırasında navbar her zaman sabit kalır.
- **Renk:** Navbar arka planı, scroll sırasında #355592 rengini alır.

### 5. İletişim (`Contact`)
- **Google Harita:** Google Map, aktif bir harita olarak entegre edilmiştir. Harita, gerçek zamanlı yer bilgisi sağlar; sabit bir görüntü değildir.

### 6. Responsive Tasarım
- **576px Destek:** Web sitesi, 576px ekran genişliği için özel olarak optimize edilmiştir.
- **Mobil Uyumlu:** Mobil cihazlarda kullanımı kolay ve hızlı bir kullanıcı deneyimi sunar.

## Kurulum

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

### 1. Projeyi Klonlama
```bash
git clone https://github.com/kullaniciadi/proje-adi.git

Geliştirme
Proje geliştirilirken şu teknolojiler ve araçlar kullanıldı:

HTML5 & CSS3: Web sitesi yapısı ve tasarımı için.
JavaScript: Dinamik öğeler ve BMI hesaplama işlevi için.
Google Maps API: İletişim alanındaki harita için.


Geliştirme Adımları
Tasarım: Responsive tasarım, 576px ekran genişliği hedef alınarak yapıldı.
Fonksiyonellik: Navbar, hover efektleri ve BMI hesaplayıcı gibi özellikler dinamik olarak eklendi.
Testler: Tüm öğeler tarayıcı uyumluluğu ve mobil cihazlarda test edildi.
