
KURULUM REHBERİ:

database.json kısmını açıp "license": "" kısmını lisans anahtarınla doldurmalısın.

Örnek: "license": ""

Ardından bilgisayarına node kurmalısın.
Bilgisayarında node kurulu değilse: https://www.youtube.com/watch?v=__7eOCxJyow&ab_channel=ProgrammingKnowledge2

Sonra "setup.bat" dosyasına çift tıklayarak kurulum yapmalısın.
Kurulum bitince konsol penceresi otomatik bir şekilde kapanacaktır.

Bundan sonra yapman gereken main.js içerisini bir not defteriyle açmak olacak.
Açtıktan sonra ctrl + f tuşlarına basarak arama çubuğuna gelip "CHROMIUMBROWSERPATH" yazmalısın.
'executablePath': 'CHROMIUMBROWSERPATH',     ,       karşına bu kod parçacığı gelecek.
CHROMIUMBROWSER PATH kısmını chromiumun kurulu olduğu dosya konumuyla değiştirmelisin.
Chromiumun nereye kurulu olduğunu bilmiyorsan joiner içerisinde chromium klasörün var. onu açmalısın.
Açtıktan sonra karşına chromiumlauncher.exe çıkacak. Çıkmışsa doğru klasördesin demektir olduğun klasörün 
dosya konumuna tıklayıp kopyalamalısın örnek olarak ben C:\Users\test\masaustu\dosyakonumun\chromium üzerinden gideceğim.
Bu dosya konumunu aldıktan sonra şu şekilde editlemelisin:
C:\\Users\\test\\masaustu\\dosyakonumun\\chromium\\chromiumlauncher.exe
Kısacası bütün \ ifadelerini 2 kere yazıp satırın sonuna chromiumlauncher.exe eklemelisin.
Bunu yaptıktan sonra executablepath kısmını şu şekilde güncellemelisin:
'executablePath': 'C:\\Users\\test\\masaustu\\dosyakonumun\\chromium\\chromiumlauncher.exe',

Bundan sonra bir adet bot oluşturmalısın discord developers portala gelip oluşturabilirsin.
Botu oluşturduktan sonra Privileged Gateway Intents kısmına gelip bütün özellikleri açmalısın.
Sonra OAuth2 kısmına gelip redirects kısmına http://localhost:1011 url'sini eklemelisin.

Bu işlemler bittikten sonra son olarak config.js içerisine girip bot bilgilerini doldurmalısın.

Bunları yaptıktan sonra bütün işlemler bitmiş oluyor çalıştırabilirsin.


KULLANIM REHBERİ:

servers.txt kısmına gönderim yapılacak sunucunun id'sini yazmalısın. Örnek: 882350908745347092
tokens.txt kısmına tokenlerini yazmalısın, mail ve passlarını yazarsan çalışmaz sadece tokenleri yazmalısın.
Gönderim yapılacak sunucuya botu eklediğinden emin olmalısın.
Ardından start.bat'a çift tıklayarak çalıştırabilirsin.
