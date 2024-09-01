
# Quiz Uygulaması

Bu proje, kullanıcının 10 sorudan oluşan bir teste katılabileceği ve sonuçları görebileceği bir quiz uygulamasıdır. Tasarım, kullanıcı dostu ve okunabilir şekilde 1400px genişliğinde optimize edilmiştir.

## Canlı Demo

Projenin canlı versiyonuna [buradan](https://questionapppatika.vercel.app) ulaşabilirsiniz.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü oluşturmak için.
- **Vite**: React uygulamasının geliştirilmesi ve hızlı bir şekilde dağıtılması için.
- **CSS**: Responsive ve şık tasarım için.
- **Netlify/Vercel**: Projenin dağıtımı ve canlıya alınması için.

## Özellikler

- **Teste Başla** butonu ile kullanıcı teste başlayabilir.
  - Buton `id="start"` olarak belirlenmiştir.
  - Test hakkında bilgilendirme paylaşılır.
- **10 Soru**: Test, kullanıcıya toplamda 10 soru sorar.
  - Her soru ekranda **en fazla 30 saniye** kalır.
  - İlk **4 saniye boyunca cevap şıkları görünmez**.
  - Cevaplardan biri tıklandığında veya **30 saniye tamamlandığında** bir sonraki soruya geçilir.
  - **Geçmiş sorulara dönülemez**.
- **Sonuçlar**: Test bitiminde kullanıcının doğru ve yanlış sayıları gösterilir.

## Kurulum

1. Bu repoyu klonlayın:

    ```bash
    git clone https://github.com/username/quiz-app.git
    cd quiz-app
    ```

2. Gerekli bağımlılıkları yükleyin:

    ```bash
    npm install
    ```

3. Uygulamayı çalıştırın:

    ```bash
    npm run dev
    ```

## Dağıtım

Proje, Netlify veya Vercel kullanılarak dağıtılmıştır. Eğer kendi dağıtımınızı yapmak isterseniz, aşağıdaki adımları takip edebilirsiniz:

1. [Netlify](https://www.netlify.com/) veya [Vercel](https://vercel.com/) hesabı oluşturun.
2. Projeyi GitHub'a gönderin.
3. Netlify veya Vercel ile GitHub hesabınızı bağlayın ve projeyi dağıtın.

## Geliştirme Süreci

- Proje, tamamen kullanıcı dostu bir deneyim sağlamak amacıyla tasarlanmıştır.
- Tasarım, 1400px genişliğinde en iyi performansı verecek şekilde optimize edilmiştir.
- Kullanıcı geri bildirimleri için sonuç ekranı eklenmiştir.

## Katkıda Bulunma

Eğer projeye katkıda bulunmak isterseniz, lütfen bir pull request gönderin veya bir sorun bildirin.


