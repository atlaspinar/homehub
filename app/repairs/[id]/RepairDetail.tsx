
'use client';

import { useState } from 'react';
import Link from 'next/link';

const translations = {
  tr: {
    backToRepairs: 'Tamirlere Dön',
    tools: 'Gerekli Araçlar',
    steps: 'Tamir Adımları',
    time: 'Süre',
    difficulty: 'Zorluk',
    toolsNeeded: 'Araç Sayısı',
    safety: 'Güvenlik Uyarıları',
    similarRepairs: 'Benzer Tamirler',
    step: 'Adım',
    print: 'Yazdır',
    share: 'Paylaş',
    warning: 'Uyarı',
    materials: 'Malzemeler'
  },
  uk: {
    backToRepairs: 'Повернутись до Ремонтів',
    tools: 'Необхідні Інструменти',
    steps: 'Кроки Ремонту',
    time: 'Час',
    difficulty: 'Складність',
    toolsNeeded: 'Кількість Інструментів',
    safety: 'Попередження Безпеки',
    similarRepairs: 'Схожі Ремонти',
    step: 'Крок',
    print: 'Друкувати',
    share: 'Поділитися',
    warning: 'Попередження',
    materials: 'Матеріали'
  }
};

const repairs = {
  1: {
    title: { tr: 'Musluk Tamiri', uk: 'Ремонт Крана' },
    description: { tr: 'Damlayan musluğu nasıl tamir edersiniz', uk: 'Як відремонтувати кран що капає' },
    image: 'https://readdy.ai/api/search-image?query=Modern%20kitchen%20faucet%20repair%20tools%20and%20parts%20laid%20out%20neatly%2C%20clean%20workshop%20background%2C%20bright%20lighting%2C%20professional%20repair%20manual%20style%2C%20organized%20tool%20arrangement&width=600&height=400&seq=faucet-detail-1&orientation=landscape',
    time: 20,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    toolsCount: 3,
    tools: {
      tr: ['İngiliz anahtarı', 'Pense', 'Tornavida', 'Teflon bant'],
      uk: ['Розвідний ключ', 'Плоскогубці', 'Викрутка', 'Тефлонова стрічка']
    },
    materials: {
      tr: ['Yeni conta', 'O-ring seti', 'Silikon'],
      uk: ['Новий ущільнювач', 'Набір О-кілець', 'Силікон']
    },
    steps: {
      tr: [
        'Su vanasını kapatın ve musluğun altındaki vanaları kapatın.',
        'Musluk başlığını saat yönünün tersine çevirerek sökerek çıkarın.',
        'Eski contaları ve O-ring\'leri çıkarın ve yenileriyle değiştirin.',
        'Musluk mekanizmasını temizleyin ve silikon uygulayın.',
        'Tüm parçaları ters sırayla takın ve su vanasını açın.',
        'Kaçak olup olmadığını kontrol edin ve gerekirse sıkın.'
      ],
      uk: [
        'Перекрийте воду та закрийте вентилі під краном.',
        'Викрутіть головку крана проти годинникової стрілки.',
        'Вийміть старі ущільнювачі та О-кільця, замініть новими.',
        'Очистіть механізм крана та нанесіть силікон.',
        'Зберіть всі деталі у зворотному порядку та відкрийте воду.',
        'Перевірте на наявність протікань та підтягніть при потребі.'
      ]
    },
    safety: {
      tr: ['Elektrik vanasını kapatın', 'Kaygan zemin dikkat', 'Aşırı güç kullanmayın'],
      uk: ['Вимкніть електрику', 'Обережно з слизькою підлогою', 'Не використовуйте надмірну силу']
    }
  },
  2: {
    title: { tr: 'Elektrikli Süpürge Tamiri', uk: 'Ремонт Пилососа' },
    description: { tr: 'Süpürgenizin emme gücünü artırın', uk: 'Підвищте потужність всмоктування пилососа' },
    image: 'https://readdy.ai/api/search-image?query=Vacuum%20cleaner%20repair%20with%20tools%20and%20replacement%20parts%2C%20modern%20workshop%20setting%2C%20clean%20background%2C%20technical%20manual%20photography%20style%2C%20organized%20repair%20workspace&width=600&height=400&seq=vacuum-detail-1&orientation=landscape',
    time: 30,
    difficulty: { tr: 'Orta', uk: 'Середньо' },
    toolsCount: 5,
    tools: {
      tr: ['Tornavida seti', 'Pense', 'Multimetre', 'Temizlik fırçası', 'Vakum pompası'],
      uk: ['Набір викруток', 'Плоскогубці', 'Мультиметр', 'Щітка для чищення', 'Вакуумний насос']
    },
    materials: {
      tr: ['Yeni filtre', 'Temizlik solüsyonu', 'Yedek lastik'],
      uk: ['Новий фільтр', 'Розчин для чищення', 'Запасна гума']
    },
    steps: {
      tr: [
        'Elektrik fişini çekin ve süpürgeyi açın.',
        'Toz kabını boşaltın ve temizleyin.',
        'Filtreyi çıkarın ve yenisiyle değiştirin.',
        'Hortumu çıkarıp tıkanıklık kontrolü yapın.',
        'Motor bölümünü temizleyin ve lastikleri kontrol edin.',
        'Tüm parçaları takın ve test edin.'
      ],
      uk: [
        'Вийміть вилку з розетки та відкрийте пилосос.',
        'Спорожніть та очистіть пилозбірник.',
        'Вийміть фільтр та замініть на новий.',
        'Зніміть шланг та перевірте на засмічення.',
        'Очистіть моторний відсік та перевірте гумові деталі.',
        'Зберіть всі частини та протестуйте.'
      ]
    },
    safety: {
      tr: ['Elektrik bağlantısını kesin', 'Su ile temizlemeyin', 'Parçaları zorlamayın'],
      uk: ['Відключіть електрику', 'Не мийте водою', 'Не застосуйте силу до деталей']
    }
  },
  3: {
    title: { tr: 'Buzdolabı Bakımı', uk: 'Обслуговування Холодильника' },
    description: { tr: 'Buzdolabınızı nasıl temizler ve bakım yaparsınız', uk: 'Як чистити та обслуговувати холодильник' },
    image: 'https://readdy.ai/api/search-image?query=Refrigerator%20maintenance%20tools%20and%20cleaning%20supplies%20arranged%20neatly%2C%20modern%20kitchen%20background%2C%20bright%20professional%20lighting%2C%20appliance%20repair%20manual%20style&width=600&height=400&seq=fridge-detail-1&orientation=landscape',
    time: 45,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    toolsCount: 4,
    tools: {
      tr: ['Temizlik bezleri', 'Yumuşak fırça', 'Kova', 'Temizlik spreyi'],
      uk: ['Серветки для прибирання', 'М\'яка щітка', 'Відро', 'Очищувальний спрей']
    },
    materials: {
      tr: ['Soda bikarbonatlı su', 'Sirke solüsyonu', 'Deterjan'],
      uk: ['Содова вода', 'Оцтовий розчин', 'Миючий засіб']
    },
    steps: {
      tr: [
        'Buzdolabının fişini çekin ve içini boşaltın.',
        'Çekmece ve rafları çıkarıp sıcak suda yıkayın.',
        'İç yüzeyleri soda-su karışımıyla temizleyin.',
        'Dış yüzeyleri nemli bezle silin.',
        'Arka taraftaki bobinleri temizleyin.',
        'Her şeyi kurutup gıdaları geri yerleştirin.'
      ],
      uk: [
        'Вийміть вилку холодильника та спорожніть його.',
        'Вийміть ящики та полиці, помийте теплою водою.',
        'Очистіть внутрішні поверхні содовим розчином.',
        'Протріть зовнішні поверхні вологою серветкою.',
        'Очистіть задні змійовики.',
        'Висушіть все та поставте продукти назад.'
      ]
    },
    safety: {
      tr: ['Eletriği kesin', 'Kimyasal karıştırmayın', 'Yeterince kurutun'],
      uk: ['Відключіть електрику', 'Не змішуйте хімікати', 'Добре висушіть']
    }
  },
  4: {
    title: { tr: 'Araba Lastik Değişimi', uk: 'Заміна Автомобільної Шини' },
    description: { tr: 'Güvenli lastik değişim rehberi', uk: 'Посібник з безпечної заміни шин' },
    image: 'https://readdy.ai/api/search-image?query=Car%20tire%20change%20tools%20and%20equipment%20laid%20out%20professionally%2C%20automotive%20workshop%20background%2C%20clean%20lighting%2C%20technical%20manual%20style%2C%20organized%20car%20maintenance%20setup&width=600&height=400&seq=tire-detail-1&orientation=landscape',
    time: 25,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    toolsCount: 4,
    tools: {
      tr: ['Kriko', 'Jant anahtarı', 'Yedek lastik', 'Takoz'],
      uk: ['Домкрат', 'Гайковий ключ', 'Запасна шина', 'Упори']
    },
    materials: {
      tr: ['Yedek lastik', 'Hava pompası', 'Eldiven'],
      uk: ['Запасна шина', 'Насос', 'Рукавички']
    },
    steps: {
      tr: [
        'Güvenli bir yerde park edin ve el frenini çekin.',
        'Yedek lastik ve aletleri çıkarın.',
        'Jant somunlarını gevşetin (çıkarmayın).',
        'Krikoyu takın ve aracı kaldırın.',
        'Somunları completamente çıkarın ve lastiği değiştirin.',
        'Yeni lastiği takın ve somunları sıkın.',
        'Aracı indirin ve somunları tam sıkın.',
        'Hava basıncını kontrol edin.'
      ],
      uk: [
        'Припаркуйтеся в безпечному місці і поставте на гальмо.',
        'Дістаньте запасну шину та інструменти.',
        'Послабте гайки (не знімайте повністю).',
        'Встановіть домкрат і підніміть автомобіль.',
        'Повністю зніміть гайки і замініть шину.',
        'Встановіть нову шину і затягніть гайки.',
        'Опустіть автомобіль і повністю затягніть гайки.',
        'Перевірте тиск в шині.'
      ]
    },
    safety: {
      tr: ['Düz zeminde park edin', 'El frenini mutlaka çekin', 'Reflektör kullanın'],
      uk: ['Паркуйтеся на рівній поверхні', 'Обов\'язково поставте на ручник', 'Використовуйте світловідбивачі']
    }
  },
  5: {
    title: { tr: 'Mikrodalga Fırın Tamiri', uk: 'Ремонт Мікрохвильової Печі' },
    description: { tr: 'Çalışmayan mikrodalga fırın sorunları', uk: 'Проблеми з несправною мікрохвильовою піччю' },
    image: 'https://readdy.ai/api/search-image?query=Microwave%20oven%20repair%20with%20tools%20and%20components%2C%20modern%20kitchen%20workshop%20setting%2C%20bright%20lighting%2C%20appliance%20repair%20manual%20photography%2C%20technical%20documentation%20style&width=600&height=400&seq=microwave-detail-1&orientation=landscape',
    time: 40,
    difficulty: { tr: 'Orta', uk: 'Середньо' },
    toolsCount: 6,
    tools: {
      tr: ['Tornavida seti', 'Multimetre', 'İzolasyon bandı', 'Pense', 'Test lambası', 'Temizlik malzemeleri'],
      uk: ['Набір викруток', 'Мультиметр', 'Ізоляційна стрічка', 'Плоскогубці', 'Тестова лампа', 'Засоби для чищення']
    },
    materials: {
      tr: ['Yedek sigorta', 'Temizlik solüsyonu', 'Cam tabak'],
      uk: ['Запасний запобіжник', 'Розчин для чищення', 'Скляна тарілка']
    },
    steps: {
      tr: [
        'Fişi çekin ve 10 dakika bekleyin.',
        'Dış kapağı sökerek iç kısma erişim sağlayın.',
        'Sigorta ve füzü kontrol edin.',
        'Kapı kilidi mekanizmasını test edin.',
        'İç temizliği yapın ve filtreyi değiştirin.',
        'Magnetronu kontrol edin.',
        'Tüm bağlantıları kontrol ederek kapatın.',
        'Test çalışması yapın.'
      ],
      uk: [
        'Вийміть вилку і зачекайте 10 хвилин.',
        'Зніміть зовнішню панель для доступу.',
        'Перевірте запобіжник і плавкий предохранитель.',
        'Протестуйте механізм замка дверцят.',
        'Проведіть внутрішнє очищення і замініть фільтр.',
        'Перевірте магнетрон.',
        'Перевірте всі з\'єднання і закрийте.',
        'Проведіть тестовий запуск.'
      ]
    },
    safety: {
      tr: ['Yüksek voltaj tehlikesi', 'Kapasitör boşaltın', 'Su ile temizlemeyin'],
      uk: ['Небезпека високої напруги', 'Розрядіть конденсатор', 'Не мийте водою']
    }
  },
  6: {
    title: { tr: 'Televizyon Tamiri', uk: 'Ремонт Телевізора' },
    description: { tr: 'LCD TV yaygın sorunları ve çözümleri', uk: 'Поширені проблеми LCD TV та рішення' },
    image: 'https://readdy.ai/api/search-image?query=Television%20repair%20setup%20with%20electronic%20tools%20and%20components%2C%20modern%20electronics%20workshop%2C%20bright%20professional%20lighting%2C%20technical%20manual%20style%2C%20organized%20repair%20station&width=600&height=400&seq=tv-detail-1&orientation=landscape',
    time: 60,
    difficulty: { tr: 'Zor', uk: 'Складно' },
    toolsCount: 8,
    tools: {
      tr: ['Özel tornavida seti', 'Multimetre', 'Havya seti', 'Antistatik bilek bandı', 'Test probları', 'Büyüteç', 'İzolasyon bandı', 'Temizlik materyalleri'],
      uk: ['Спеціальний набір викруток', 'Мультиметр', 'Паяльник', 'Антистатичний браслет', 'Тестові щупи', 'Лупа', 'Ізоляційна стрічка', 'Засоби для очищення']
    },
    materials: {
      tr: ['Yedek kapasitör', 'Lehim teli', 'Termik macun', 'Temizlik alkolu'],
      uk: ['Запасний конденсатор', 'Припій', 'Термопаста', 'Технічний спирт']
    },
    steps: {
      tr: [
        'TV\'yi kapatın ve fişini çekin, 30 dakika bekleyin.',
        'Arka paneli sökün ve iç kısma erişim sağlayın.',
        'Güç kaynağı kartını görsel olarak kontrol edin.',
        'Şişmiş kapasitörleri tespit edin ve değiştirin.',
        'Ana kart bağlantılarını kontrol edin.',
        'Arka aydınlatma LED\'lerini test edin.',
        'Tüm bağlantıları yeniden takın.',
        'Test çalışması yapın ve ayar kontrolü yapın.'
      ],
      uk: [
        'Вимкніть TV і вийміть вилку, зачекайте 30 хвилин.',
        'Зніміть задню панель для доступу.',
        'Візуально перевірте плату живлення.',
        'Знайдіть роздуті конденсатори і замініть їх.',
        'Перевірте з\'єднання материнської плати.',
        'Протестуйте світлодіоди підсвічування.',
        'Відновіть всі з\'єднання.',
        'Проведіть тестовий запуск і налаштування.'
      ]
    },
    safety: {
      tr: ['Yüksek voltaj riski', 'Antistatik önlem alın', 'Islak elle dokunmayın'],
      uk: ['Ризик високої напруги', 'Вживайте антистатичні заходи', 'Не торкайтеся мокрими руками']
    }
  },
  7: {
    title: { tr: 'Tuvalet Tamiri', uk: 'Ремонт Туалету' },
    description: { tr: 'Tuvalet rezervuar ve sifon tamiri', uk: 'Ремонт бачка і сифону унітазу' },
    image: 'https://readdy.ai/api/search-image?query=Toilet%20repair%20tools%20and%20replacement%20parts%20arranged%20professionally%2C%20clean%20bathroom%20workshop%20setting%2C%20bright%20lighting%2C%20plumbing%20manual%20photography%20style&width=600&height=400&seq=toilet-detail-1&orientation=landscape',
    time: 35,
    difficulty: { tr: 'Orta', uk: 'Середньо' },
    toolsCount: 5,
    tools: {
      tr: ['İngiliz anahtarı', 'Pense', 'Tornavida', 'Su pompası anahtarı', 'Teflon bant'],
      uk: ['Розвідний ключ', 'Плоскогубці', 'Викрутка', 'Ключ для води', 'Тефлонова стрічка']
    },
    materials: {
      tr: ['Yeni flap', 'Zincir', 'Su seviye şamandırası', 'Conta seti'],
      uk: ['Новий клапан', 'Ланцюжок', 'Поплавок рівня води', 'Набір ущільнювачів']
    },
    steps: {
      tr: [
        'Su vanasını kapatın ve rezervuarı boşaltın.',
        'Eski flap ve mekanizmayı çıkarın.',
        'Yeni flap ve zinciri takın.',
        'Su seviye ayarını yapın.',
        'Şamandıra pozisyonunu ayarlayın.',
        'Su vanasını açın ve test edin.',
        'Kaçak kontrolü yapın.',
        'Final ayarlamaları yapın.'
      ],
      uk: [
        'Перекрийте воду і спорожніть бачок.',
        'Зніміть старий клапан і механізм.',
        'Встановіть новий клапан і ланцюжок.',
        'Налаштуйте рівень води.',
        'Відрегулюйте положення поплавка.',
        'Відкрийте воду і протестуйте.',
        'Перевірте на протікання.',
        'Зробіть фінальні налаштування.'
      ]
    },
    safety: {
      tr: ['Suyu mutlaka kapatın', 'Eldiven kullanın', 'Kimyasal kullanmayın'],
      uk: ['Обов\'язково перекрийте воду', 'Використовуйте рукавички', 'Не використовуйте хімікати']
    }
  },
  8: {
    title: { tr: 'Araba Fren Balata Değişimi', uk: 'Заміна Гальмівних Колодок' },
    description: { tr: 'Fren balata değişim adım adım rehber', uk: 'Покроковий посібник заміни гальмівних колодок' },
    image: 'https://readdy.ai/api/search-image?query=Car%20brake%20pad%20replacement%20tools%20and%20parts%2C%20automotive%20workshop%20setting%2C%20professional%20lighting%2C%20technical%20manual%20photography%2C%20organized%20car%20repair%20workspace&width=600&height=400&seq=brake-detail-1&orientation=landscape',
    time: 90,
    difficulty: { tr: 'Zor', uk: 'Складно' },
    toolsCount: 12,
    tools: {
      tr: ['Kriko ve sehpa', 'Jant anahtarı', 'İngiliz anahtarı seti', 'Piston geri itme aleti', 'Tornavida seti', 'Pense', 'Çekiç', 'Yağlama spreyi', 'Temizlik fırçası', 'Eldiven', 'Güvenlik gözlüğü', 'Fren temizleyici'],
      uk: ['Домкрат і підставки', 'Гайковий ключ', 'Набір розвідних ключів', 'Інструмент для поршня', 'Набір викруток', 'Плоскогубці', 'Молоток', 'Мастильний спрей', 'Щітка', 'Рукавички', 'Захисні окуляри', 'Очищувач гальм']
    },
    materials: {
      tr: ['Yeni fren balataları', 'Fren yağı', 'Bakır gres', 'Temizlik solüsyonu'],
      uk: ['Нові гальмівні колодки', 'Гальмівна рідина', 'Мідна змазка', 'Розчин для очищення']
    },
    steps: {
      tr: [
        'Aracı güvenli yerinde park edin ve el frenini çekin.',
        'Ön tekerlekleri söküp sehpaya alın.',
        'Fren kaliper somunlarını gevşetin.',
        'Kaliperi çıkarın ve eski balataları sökerek çıkarın.',
        'Fren diskini kontrol edin ve temizleyin.',
        'Pistonu geri itin ve yeni balataları takın.',
        'Kaliperi yerine takın ve sıkın.',
        'Fren pedalını test edin ve sistem kontrolü yapın.',
        'Test sürüşü yapın.'
      ],
      uk: [
        'Припаркуйте автомобіль в безпечному місці і поставте на ручник.',
        'Зніміть передні колеса і встановіть на підставки.',
        'Послабте гайки гальмівного супорта.',
        'Зніміть супорт і витягніть старі колодки.',
        'Перевірте і очистіть гальмівний диск.',
        'Втисніть поршень назад і встановіть нові колодки.',
        'Встановіть супорт на місце і затягніть.',
        'Протестуйте педаль гальма і перевірте систему.',
        'Зробіть тестову поїздку.'
      ]
    },
    safety: {
      tr: ['Asbest tozu tehlikesi', 'Sehpa mutlaka kullanın', 'Fren yağı seviyesini kontrol edin'],
      uk: ['Небезпека азбестового пилу', 'Обов\'язково використовуйте підставки', 'Перевірте рівень гальмівної рідини']
    }
  }
};

const similarRepairs = {
  1: [ // Musluk tamiri için benzer tamirler
    { id: 3, title: { tr: 'Buzdolabı Bakımı', uk: 'Обслуговування Холодильника' }, image: 'https://readdy.ai/api/search-image?query=Refrigerator%20maintenance%20tools%20and%20cleaning%20supplies%20arranged%20neatly%2C%20modern%20kitchen%20background%2C%20bright%20professional%20lighting%2C%20appliance%20repair%20manual%20style&width=300&height=200&seq=fridge-similar-faucet&orientation=landscape' },
    { id: 7, title: { tr: 'Tuvalet Tamiri', uk: 'Ремонт Туалету' }, image: 'https://readdy.ai/api/search-image?query=Toilet%20repair%20tools%20and%20replacement%20parts%20arranged%20professionally%2C%20clean%20bathroom%20workshop%20setting%2C%20bright%20lighting%2C%20plumbing%20manual%20photography%20style&width=300&height=200&seq=toilet-similar-faucet&orientation=landscape' },
    { id: 2, title: { tr: 'Elektrikli Süpürge Tamiri', uk: 'Ремонт Пилососа' }, image: 'https://readdy.ai/api/search-image?query=Vacuum%20cleaner%20repair%20with%20tools%20and%20replacement%20parts%2C%20modern%20workshop%20setting%2C%20clean%20background%2C%20technical%20manual%20photography%20style%2C%20organized%20repair%20workspace&width=300&height=200&seq=vacuum-similar-faucet&orientation=landscape' }
  ],
  2: [ // Süpürge tamiri için benzer tamirler
    { id: 5, title: { tr: 'Mikrodalga Fırın Tamiri', uk: 'Ремонт Мікрохвильової Печі' }, image: 'https://readdy.ai/api/search-image?query=Microwave%20oven%20repair%20with%20tools%20and%20components%2C%20modern%20kitchen%20workshop%20setting%2C%20bright%20lighting%2C%20appliance%20repair%20manual%20photography%2C%20technical%20documentation%20style&width=300&height=200&seq=microwave-similar-vacuum&orientation=landscape' },
    { id: 3, title: { tr: 'Buzdolabı Bakımı', uk: 'Обслуговування Холодильника' }, image: 'https://readdy.ai/api/search-image?query=Refrigerator%20maintenance%20tools%20and%20cleaning%20supplies%20arranged%20neatly%2C%20modern%20kitchen%20background%2C%20bright%20professional%20lighting%2C%20appliance%20repair%20manual%20style&width=300&height=200&seq=fridge-similar-vacuum&orientation=landscape' },
    { id: 6, title: { tr: 'Televizyon Tamiri', uk: 'Ремонт Телевізора' }, image: 'https://readdy.ai/api/search-image?query=Television%20repair%20setup%20with%20electronic%20tools%20and%20components%2C%20modern%20electronics%20workshop%2C%20bright%20professional%20lighting%2C%20technical%20manual%20style%2C%20organized%20repair%20station&width=300&height=200&seq=tv-similar-vacuum&orientation=landscape' }
  ],
  3: [ // Buzdolabı bakımı için benzer tamirler
    { id: 2, title: { tr: 'Elektrikli Süpürge Tamiri', uk: 'Ремонт Пилососа' }, image: 'https://readdy.ai/api/search-image?query=Vacuum%20cleaner%20repair%20with%20tools%20and%20replacement%20parts%2C%20modern%20workshop%20setting%2C%20clean%20background%2C%20technical%20manual%20photography%20style%2C%20organized%20repair%20workspace&width=300&height=200&seq=vacuum-similar-fridge&orientation=landscape' },
    { id: 5, title: { tr: 'Mikrodalga Fırın Tamiri', uk: 'Ремонт Мікрохвильової Печі' }, image: 'https://readdy.ai/api/search-image?query=Microwave%20oven%20repair%20with%20tools%20and%20components%2C%20modern%20kitchen%20workshop%20setting%2C%20bright%20lighting%2C%20appliance%20repair%20manual%20photography%2C%20technical%20documentation%20style&width=300&height=200&seq=microwave-similar-fridge&orientation=landscape' },
    { id: 1, title: { tr: 'Musluk Tamiri', uk: 'Ремонт Крана' }, image: 'https://readdy.ai/api/search-image?query=Modern%20kitchen%20faucet%20repair%20tools%20and%20parts%20laid%20out%20neatly%2C%20clean%20workshop%20background%2C%20bright%20lighting%2C%20professional%20repair%20manual%20style%2C%20organized%20tool%20arrangement&width=300&height=200&seq=faucet-similar-fridge&orientation=landscape' }
  ],
  4: [ // Lastik değişimi için benzer tamirler
    { id: 8, title: { tr: 'Araba Fren Balata Değişimi', uk: 'Заміна Гальмівних Колодок' }, image: 'https://readdy.ai/api/search-image?query=Car%20brake%20pad%20replacement%20tools%20and%20parts%2C%20automotive%20workshop%20setting%2C%20professional%20lighting%2C%20technical%20manual%20photography%2C%20organized%20car%20repair%20workspace&width=300&height=200&seq=brake-similar-tire&orientation=landscape' },
    { id: 1, title: { tr: 'Musluk Tamiri', uk: 'Ремонт Крана' }, image: 'https://readdy.ai/api/search-image?query=Modern%20kitchen%20faucet%20repair%20tools%20and%20parts%20laid%20out%20neatly%2C%20clean%20workshop%20background%2C%20bright%20lighting%2C%20professional%20repair%20manual%20style%2C%20organized%20tool%20arrangement&width=300&height=200&seq=faucet-similar-tire&orientation=landscape' },
    { id: 2, title: { tr: 'Elektrikli Süpürge Tamiri', uk: 'Ремонт Пилососа' }, image: 'https://readdy.ai/api/search-image?query=Vacuum%20cleaner%20repair%20with%20tools%20and%20replacement%20parts%2C%20modern%20workshop%20setting%2C%20clean%20background%2C%20technical%20manual%20photography%20style%2C%20organized%20repair%20workspace&width=300&height=200&seq=vacuum-similar-tire&orientation=landscape' }
  ],
  5: [ // Mikrodalga tamiri için benzer tamirler
    { id: 6, title: { tr: 'Televizyon Tamiri', uk: 'Ремонт Телевізора' }, image: 'https://readdy.ai/api/search-image?query=Television%20repair%20setup%20with%20electronic%20tools%20and%20components%2C%20modern%20electronics%20workshop%2C%20bright%20professional%20lighting%2C%20technical%20manual%20style%2C%20organized%20repair%20station&width=300&height=200&seq=tv-similar-microwave&orientation=landscape' },
    { id: 2, title: { tr: 'Elektrikli Süpürge Tamiri', uk: 'Ремонт Пилососа' }, image: 'https://readdy.ai/api/search-image?query=Vacuum%20cleaner%20repair%20with%20tools%20and%20replacement%20parts%2C%20modern%20workshop%20setting%2C%20clean%20background%2C%20technical%20manual%20photography%20style%2C%20organized%20repair%20workspace&width=300&height=200&seq=vacuum-similar-microwave&orientation=landscape' },
    { id: 3, title: { tr: 'Buzdolabı Bakımı', uk: 'Обслуговування Холодильника' }, image: 'https://readdy.ai/api/search-image?query=Refrigerator%20maintenance%20tools%20and%20cleaning%20supplies%20arranged%20neatly%2C%20modern%20kitchen%20background%2C%20bright%20professional%20lighting%2C%20appliance%20repair%20manual%20style&width=300&height=200&seq=fridge-similar-microwave&orientation=landscape' }
  ],
  6: [ // TV tamiri için benzer tamirler
    { id: 5, title: { tr: 'Mikrodalga Fırın Tamiri', uk: 'Ремонт Мікрохвильової Печі' }, image: 'https://readdy.ai/api/search-image?query=Microwave%20oven%20repair%20with%20tools%20and%20components%2C%20modern%20kitchen%20workshop%20setting%2C%20bright%20lighting%2C%20appliance%20repair%20manual%20photography%2C%20technical%20documentation%20style&width=300&height=200&seq=microwave-similar-tv&orientation=landscape' },
    { id: 2, title: { tr: 'Elektrikli Süpürge Tamiri', uk: 'Ремонт Пилососа' }, image: 'https://readdy.ai/api/search-image?query=Vacuum%20cleaner%20repair%20with%20tools%20and%20replacement%20parts%2C%20modern%20workshop%20setting%2C%20clean%20background%2C%20technical%20manual%20photography%20style%2C%20organized%20repair%20workspace&width=300&height=200&seq=vacuum-similar-tv&orientation=landscape' },
    { id: 8, title: { tr: 'Araba Fren Balata Değişimi', uk: 'Заміна Гальмівних Колодок' }, image: 'https://readdy.ai/api/search-image?query=Car%20brake%20pad%20replacement%20tools%20and%20parts%2C%20automotive%20workshop%20setting%2C%20professional%20lighting%2C%20technical%20manual%20photography%2C%20organized%20car%20repair%20workspace&width=300&height=200&seq=brake-similar-tv&orientation=landscape' }
  ],
  7: [ // Tuvalet tamiri için benzer tamirler
    { id: 1, title: { tr: 'Musluk Tamiri', uk: 'Ремонт Крана' }, image: 'https://readdy.ai/api/search-image?query=Modern%20kitchen%20faucet%20repair%20tools%20and%20parts%20laid%20out%20neatly%2C%20clean%20workshop%20background%2C%20bright%20lighting%2C%20professional%20repair%20manual%20style%2C%20organized%20tool%20arrangement&width=300&height=200&seq=faucet-similar-toilet&orientation=landscape' },
    { id: 3, title: { tr: 'Buzdolabı Bakımı', uk: 'Обслуговування Холодильника' }, image: 'https://readdy.ai/api/search-image?query=Refrigerator%20maintenance%20tools%20and%20cleaning%20supplies%20arranged%20neatly%2C%20modern%20kitchen%20background%2C%20bright%20professional%20lighting%2C%20appliance%20repair%20manual%20style&width=300&height=200&seq=fridge-similar-toilet&orientation=landscape' },
    { id: 4, title: { tr: 'Araba Lastik Değişimi', uk: 'Заміна Автомобільної Шини' }, image: 'https://readdy.ai/api/search-image?query=Car%20tire%20change%20tools%20and%20equipment%20laid%20out%20professionally%2C%20automotive%20workshop%20background%2C%20clean%20lighting%2C%20technical%20manual%20style%2C%20organized%20car%20maintenance%20setup&width=300&height=200&seq=tire-similar-toilet&orientation=landscape' }
  ],
  8: [ // Fren balata için benzer tamirler
    { id: 4, title: { tr: 'Araba Lastik Değişimi', uk: 'Заміна Автомобільної Шини' }, image: 'https://readdy.ai/api/search-image?query=Car%20tire%20change%20tools%20and%20equipment%20laid%20out%20professionally%2C%20automotive%20workshop%20background%2C%20clean%20lighting%2C%20technical%20manual%20style%2C%20organized%20car%20maintenance%20setup&width=300&height=200&seq=tire-similar-brake&orientation=landscape' },
    { id: 6, title: { tr: 'Televizyon Tamiri', uk: 'Ремонт Телевізора' }, image: 'https://readdy.ai/api/search-image?query=Television%20repair%20setup%20with%20electronic%20tools%20and%20components%2C%20modern%20electronics%20workshop%2C%20bright%20professional%20lighting%2C%20technical%20manual%20style%2C%20organized%20repair%20station&width=300&height=200&seq=tv-similar-brake&orientation=landscape' },
    { id: 7, title: { tr: 'Tuvalet Tamiri', uk: 'Ремонт Туалету' }, image: 'https://readdy.ai/api/search-image?query=Toilet%20repair%20tools%20and%20replacement%20parts%20arranged%20professionally%2C%20clean%20bathroom%20workshop%20setting%2C%20bright%20lighting%2C%20plumbing%20manual%20photography%20style&width=300&height=200&seq=toilet-similar-brake&orientation=landscape' }
  ]
};

interface RepairDetailProps {
  repairId: string;
}

export default function RepairDetail({ repairId }: RepairDetailProps) {
  const [language, setLanguage] = useState('tr');
  const t = translations[language as keyof typeof translations];

  const repair = repairs[repairId as unknown as keyof typeof repairs];
  const currentSimilarRepairs = similarRepairs[repairId as unknown as keyof typeof similarRepairs] || similarRepairs[1];

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareData = {
      title: repair.title[language as keyof typeof repair.title],
      text: repair.description[language as keyof typeof repair.description],
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link kopyalandı!');
      }
    } catch (error) {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link kopyalandı!');
      } catch (clipboardError) {
        console.log('Paylaşım hatası:', error);
      }
    }
  };

  if (!repair) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tamir rehberi bulunamadı</h1>
          <Link href="/repairs" className="text-blue-600 hover:text-blue-700">
            Tamirlere dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/repairs" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <i className="ri-arrow-left-line text-xl"></i>
              <span className="font-semibold">{t.backToRepairs}</span>
            </Link>

            <div className="flex items-center space-x-4">
              <button
                onClick={handlePrint}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors cursor-pointer"
              >
                <i className="ri-printer-line"></i>
                <span className="hidden md:block">{t.print}</span>
              </button>
              <button
                onClick={handleShare}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors cursor-pointer"
              >
                <i className="ri-share-line"></i>
                <span className="hidden md:block">{t.share}</span>
              </button>
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <option value="tr">🇹🇷 Türkçe</option>
                  <option value="uk">🇺🇦 Українська</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-2 top-3 text-gray-500 pointer-events-none"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Repair Hero */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={repair.image}
                  alt={repair.title[language as keyof typeof repair.title]}
                  className="w-full h-64 md:h-full object-cover object-top"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {repair.title[language as keyof typeof repair.title]}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  {repair.description[language as keyof typeof repair.description]}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <i className="ri-time-line text-2xl text-blue-500 mb-2"></i>
                    <div className="text-2xl font-bold text-gray-800">{repair.time}</div>
                    <div className="text-sm text-gray-600">dakika</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <i className="ri-star-line text-2xl text-purple-500 mb-2"></i>
                    <div className="text-lg font-bold text-gray-800">
                      {repair.difficulty[language as keyof typeof repair.difficulty]}
                    </div>
                    <div className="text-sm text-gray-600">{t.difficulty}</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <i className="ri-tools-line text-2xl text-green-500 mb-2"></i>
                    <div className="text-2xl font-bold text-gray-800">{repair.toolsCount}</div>
                    <div className="text-sm text-gray-600">araç</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-red-100 to-orange-100 border-l-4 border-red-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <i className="ri-error-warning-line text-red-500 mr-3"></i>
              {t.safety}
            </h3>
            <ul className="grid md:grid-cols-3 gap-4">
              {repair.safety[language as keyof typeof repair.safety].map((warning, index) => (
                <li key={index} className="flex items-start">
                  <i className="ri-shield-line text-red-500 mr-2 mt-1 flex-shrink-0"></i>
                  <span className="text-red-800 text-sm font-medium">{warning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Repair Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tools */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-tools-line text-blue-500 mr-3"></i>
                {t.tools}
              </h2>
              <ul className="space-y-3 mb-6">
                {repair.tools[language as keyof typeof repair.tools].map((tool, index) => (
                  <li key={index} className="flex items-center">
                    <i className="ri-checkbox-blank-circle-line text-blue-500 mr-3"></i>
                    <span className="text-gray-700">{tool}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <i className="ri-stack-line text-green-500 mr-3"></i>
                {t.materials}
              </h3>
              <ul className="space-y-3">
                {repair.materials[language as keyof typeof repair.materials].map((material, index) => (
                  <li key={index} className="flex items-center">
                    <i className="ri-checkbox-blank-circle-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">{material}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-list-ordered text-purple-500 mr-3"></i>
                {t.steps}
              </h2>
              <ol className="space-y-4">
                {repair.steps[language as keyof typeof repair.steps].map((step, index) => (
                  <li key={index} className="flex">
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Repairs */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t.similarRepairs}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {currentSimilarRepairs.map((similar) => (
              <Link key={similar.id} href={`/repairs/${similar.id}`} className="group cursor-pointer">
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={similar.image}
                      alt={similar.title[language as keyof typeof similar.title]}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800">{similar.title[language as keyof typeof similar.title]}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400">&copy; 2024 Ev & Atölye Rehberi. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
