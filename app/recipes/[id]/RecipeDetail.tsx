
'use client';

import { useState } from 'react';
import Link from 'next/link';

const translations = {
  tr: {
    backToRecipes: 'Tariflere Dön',
    ingredients: 'Malzemeler',
    instructions: 'Hazırlanışı',
    time: 'Süre',
    difficulty: 'Zorluk',
    servings: 'Porsiyon',
    tips: 'İpuçları',
    similarRecipes: 'Benzer Tarifler',
    step: 'Adım',
    print: 'Yazdır',
    share: 'Paylaş'
  },
  uk: {
    backToRecipes: 'Повернутись до Рецептів',
    ingredients: 'Інгредієнти',
    instructions: 'Приготування',
    time: 'Час',
    difficulty: 'Складність',
    servings: 'Порції',
    tips: 'Поради',
    similarRecipes: 'Схожі Рецепти',
    step: 'Крок',
    print: 'Друкувати',
    share: 'Поділитися'
  }
};

const recipes = {
  1: {
    title: { tr: 'Klasik Omlet', uk: 'Класичний Омлет' },
    description: { tr: 'Fluffy ve lezzetli klasik omlet tarifi', uk: 'Пухкий і смачний класичний рецепт омлету' },
    image: 'https://readdy.ai/api/search-image?query=Classic%20fluffy%20omelet%20on%20white%20plate%20with%20herbs%2C%20clean%20kitchen%20background%2C%20bright%20natural%20lighting%2C%20professional%20food%20photography%20style%2C%20minimalist%20composition&width=400&height=300&seq=omelet-recipe-1&orientation=landscape',
    time: 10,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 2,
    ingredients: {
      tr: ['3 adet yumurta', '2 yemek kaşığı süt', '1 tuz', '1 karabiber', '1 yemek kaşığı tereyağı', 'İsteğe göre peynir', 'Taze maydanoz'],
      uk: ['3 яйця', '2 столові ложки молока', 'Сіль за смаком', 'Перець за смаком', '1 столова ложка масла', 'Сир за бажанням', 'Свіжа петрушка']
    },
    instructions: {
      tr: [
        'Yumurtaları sâu bir kasede çırpın.',
        'Süt, tuz ve karabiberi ekleyip karıştırın.',
        'Tavayı orta ateşte ısıtın ve tereyağını eritin.',
        'Yumurta karışımını tavaya dökün.',
        'Kenarlar pişerken spatulayla hafifçe karıştırın.',
        'Yarısına peynir serpin ve ikiye katlayın.',
        'Tabağa alın ve maydanoz ile servis yapın.'
      ],
      uk: [
        'Збийте яйця в глибокій мисці.',
        'Додайте молоко, сіль і перець, перемішайте.',
        'Розігрійте сковороду на середньому вогні та розтопіть масло.',
        'Влийте яєчну суміш на сковороду.',
        'Коли краї починають готуватися, акуратно перемішайте лопаткою.',
        'Посипте половину сиром і складіть навпіл.',
        'Подавайте на тарілці, прикрасивши петрушкою.'
      ]
    },
    tips: {
      tr: ['Yumurtalar oda sıcaklığında olmalı', 'Tavayı çok fazla yakmayın', 'Taze otlar lezzeti artırır'],
      uk: ['Яйця повинні бути кімнатної температури', 'Не перегрівайте сквороду', 'Свіжа зелень покращує смак']
    }
  },
  2: {
    title: { tr: 'Ev Yapımı Pizza', uk: 'Домашня Піца' },
    description: { tr: 'Çıtır hamur ve taze malzemelerle pizza', uk: 'Піца з хрусткого тіста та свіжих інгредієнтів' },
    image: 'https://readdy.ai/api/search-image?query=Homemade%20pizza%20with%20fresh%20ingredients%20on%20wooden%20board%2C%20rustic%20kitchen%20background%2C%20warm%20lighting%2C%20appetizing%20food%20photography%2C%20traditional%20Italian%20style&width=600&height=400&seq=pizza-detail-1&orientation=landscape',
    time: 45,
    difficulty: { tr: 'Orta', uk: 'Середньо' },
    servings: 4,
    ingredients: {
      tr: ['2 su bardağı un', '1 tatlı kaşığı maya', '1 tatlı kaşığı şeker', '1 tatlı kaşığı tuz', '3 yemek kaşığı zeytinyağı', '3/4 su bardağı ılık su', 'Pizza sosu', 'Mozzarella peyniri', 'Domates', 'Fesleğen'],
      uk: ['2 склянки борошна', '1 чайна ложка дріжджів', '1 чайна ложка цукру', '1 чайна ложка солі', '3 столові ложки олії', '3/4 склянки теплої води', 'Соус для піци', 'Сир моцарелла', 'Помідори', 'Базилік']
    },
    instructions: {
      tr: [
        'Maya, şeker ve ılık suyu karıştırıp 5 dakika bekleyin.',
        'Un ve tuzu karıştırın, ortasını açın.',
        'Maya karışımı ve zeytinyağını ekleyin.',
        'Yumuşak bir hamur elde edene kadar yoğurun.',
        'Hamuru 1 saat mayalanmaya bırakın.',
        'Hamuru açın ve pizza tavasına yerleştirin.',
        'Sosu sürün, malzemeleri ekleyin.',
        '220°C fırında 15-20 dakika pişirin.'
      ],
      uk: [
        'Змішайте дріжджі, цукор і теплу воду, залиште на 5 хвилин.',
        'Змішайте борошно і сіль, зробіть поглиблення.',
        'Додайте дріжджову суміш і олію.',
        'Замісіть до м\'якого тіста.',
        'Залиште тісто підніматися на 1 годину.',
        'Розкачайте тісто і покладіть на форму.',
        'Намажте соусом, додайте інгредієнти.',
        'Випікайте при 220°C протягом 15-20 хвилин.'
      ]
    },
    tips: {
      tr: ['Hamur ılık yerde mayalansın', 'Fırını önceden ısıtın', 'Çok fazla malzeme koymayın'],
      uk: ['Залиште тісто в теплому місці', 'Попередньо розігрійте духовку', 'Не кладіть занадто багато начинки']
    }
  },
  3: {
    title: { tr: 'Çikolatalı Kurabiye', uk: 'Шоколадне Печиво' },
    description: { tr: 'Yumuşak ve çikolatalı ev kurabiyesi', uk: 'М\'яке шоколадне домашнє печиво' },
    image: 'https://readdy.ai/api/search-image?query=Chocolate%20chip%20cookies%20on%20cooling%20rack%2C%20cozy%20kitchen%20background%2C%20warm%20golden%20lighting%2C%20homemade%20baking%20photography%2C%20comfort%20food%20aesthetic&width=600&height=400&seq=cookies-detail-1&orientation=landscape',
    time: 30,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 12,
    ingredients: {
      tr: ['2 su bardağı un', '1 su bardağı tereyağı', '1/2 su bardağı şeker', '1/2 su bardağı esmer şeker', '1 adet yumurta', '1 tatlı kaşığı vanilya', '1/2 tatlı kaşığı kabartma tozu', '1/2 tatlı kaşığı tuz', '1 su bardağı çikolata parçacıkları'],
      uk: ['2 склянки борошна', '1 склянка масла', '1/2 склянки цукру', '1/2 склянки коричневого цукру', '1 яйце', '1 чайна ложка ванілі', '1/2 чайної ложки розпушувача', '1/2 чайної ложки солі', '1 склянка шоколадних шматочків']
    },
    instructions: {
      tr: [
        'Fırını 180°C\'ye ısıtın.',
        'Tereyağı ve şekerleri kremsi olana kadar çırpın.',
        'Yumurta ve vanilya ekleyin.',
        'Kuru malzemeleri ayrı kasede karıştırın.',
        'Kuru karışımı yavaşça ekleyin.',
        'Çikolata parçacıklarını katın.',
        'Fırın tepsisine yuvarlak şekilde yerleştirin.',
        '10-12 dakika altın sarısı olana kadar pişirin.'
      ],
      uk: [
        'Розігрійте духовку до 180°C.',
        'Збийте масло з цукром до кремоподібного стану.',
        'Додайте яйце і ваніль.',
        'Змішайте сухі інгредієнти в окремій мисці.',
        'Поступово додайте суху суміш.',
        'Вмішайте шоколадні шматочки.',
        'Викладіть круглими порціями на деко.',
        'Випікайте 10-12 хвилин до золотистого кольору.'
      ]
    },
    tips: {
      tr: ['Tereyağı oda sıcaklığında olsun', 'Fazla pişirmeyin', 'Soğumaya bırakın'],
      uk: ['Масло має бути кімнатної температури', 'Не перепікайте', 'Дайте охолонути']
    }
  },
  4: {
    title: { tr: 'Sebzeli Makarna', uk: 'Паста з Овочами' },
    description: { tr: 'Taze sebzelerle sağlıklı makarna', uk: 'Здорова паста зі свіжими овочами' },
    image: 'https://readdy.ai/api/search-image?query=Colorful%20pasta%20with%20fresh%20vegetables%20in%20white%20bowl%2C%20bright%20kitchen%20setting%2C%20healthy%20food%20photography%2C%20Mediterranean%20style%2C%20appetizing%20presentation&width=600&height=400&seq=pasta-detail-1&orientation=landscape',
    time: 25,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 3,
    ingredients: {
      tr: ['300g makarna', '1 adet kırmızı biber', '1 adet kabak', '1 adet patlıcan', '2 diş sarımsak', '3 yemek kaşığı zeytinyağı', '1 adet soğan', 'Taze fesleğen', 'Parmesan peyniri', 'Tuz ve karabiber'],
      uk: ['300г пасти', '1 червоний перець', '1 кабачок', '1 баклажан', '2 зубчики часнику', '3 столові ложки олії', '1 цибулина', 'Свіжий базилік', 'Сир пармезан', 'Сіль і перець']
    },
    instructions: {
      tr: [
        'Makarnayı tuzlu suda haşlayın.',
        'Sebzeleri küp şeklinde doğrayın.',
        'Tavada zeytinyağını ısıtın.',
        'Soğan و sarımsağı kavurun.',
        'Sebzeleri ekleyip 8-10 dakika pişirin.',
        'Haşlanmış makarnayı ekleyin.',
        'Fesleğen ve baharatları ekleyip karıştırın.',
        'Parmesan ile servis yapın.'
      ],
      uk: [
        'Зваріть пасту в підсоленій воді.',
        'Наріжте овочі кубиками.',
        'Розігрійте олію на сковороді.',
        'Обсмажте цибулю і часник.',
        'Додайте овочі і готуйте 8-10 хвилин.',
        'Додайте зварену пасту.',
        'Додайте базилік і спеції, перемішайте.',
        'Подавайте з пармезаном.'
      ]
    },
    tips: {
      tr: ['Sebzeleri çok fazla pişirmeyin', 'Makarna suyunu saklayın', 'Taze otlar son anda ekleyin'],
      uk: ['Не переварюйте овочі', 'Збережіть воду від пасти', 'Додавайте свіжу зелень в кінці']
    }
  },
  5: {
    title: { tr: 'Izgara Tavuk', uk: 'Курка Гриль' },
    description: { tr: 'Baharatlarla marine edilmiş izgara tavuk', uk: 'Курка гриль маринована зі спеціями' },
    image: 'https://readdy.ai/api/search-image?query=Grilled%20chicken%20breast%20with%20herbs%20and%20spices%20on%20wooden%20cutting%20board%2C%20rustic%20kitchen%20background%2C%20professional%20food%20photography%2C%20appetizing%20golden%20color&width=600&height=400&seq=chicken-detail-1&orientation=landscape',
    time: 35,
    difficulty: { tr: 'Orta', uk: 'Середньо' },
    servings: 4,
    ingredients: {
      tr: ['4 adet tavuk göğsü', '2 yemek kaşığı zeytinyağı', '1 limon suyu', '2 diş sarımsak', '1 tatlı kaşığı kekik', '1 tatlı kaşığı kırmızı toz biber', 'Tuz ve karabiber', 'Taze maydanoz'],
      uk: ['4 курячі грудки', '2 столові ложки олії', 'Сік 1 лимона', '2 зубчики часнику', '1 чайна ложка чебрецю', '1 чайна ложка паприки', 'Сіль і перець', 'Свіжа петрушка']
    },
    instructions: {
      tr: [
        'Tavuk etlerini çekiçle hafifçe dövün.',
        'Marine malzemelerini karıştırın.',
        'Tavukları marine karışımında 30 dakika bekletin.',
        'Izgarayı orta ateşte ısıtın.',
        'Tavukları her taraftan 6-8 dakika pişirin.',
        'İç sıcaklığı 75°C olana kadar bekleyin.',
        '5 dakika dinlendirin.',
        'Dilimleyip maydanoz ile servis yapın.'
      ],
      uk: [
        'Відбийте курячі грудки молотком.',
        'Змішайте інгредієнти для маринаду.',
        'Маринуйте курку 30 хвилин.',
        'Розігрійте гриль на середньому вогні.',
        'Смажте курку з кожного боку 6-8 хвилин.',
        'Доведіть внутрішню температуру до 75°C.',
        'Дайте відпочити 5 хвилин.',
        'Наріжте і подавайте з петрушкою.'
      ]
    },
    tips: {
      tr: ['Marine süresini uzatabilirsiniz', 'Et termometresi kullanın', 'Dinlendirme önemlidir'],
      uk: ['Можете збільшити час маринування', 'Використовуйте термометр', 'Важливо дати відпочити']
    }
  },
  6: {
    title: { tr: 'Meyve Salatası', uk: 'Фруктовий Салат' },
    description: { tr: 'Taze meyvelerle renkli salata', uk: 'Барвистий салат зі свіжих фруктів' },
    image: 'https://readdy.ai/api/search-image?query=Fresh%20fruit%20salad%20in%20glass%20bowl%20with%20colorful%20mixed%20fruits%2C%20bright%20natural%20lighting%2C%20healthy%20food%20photography%2C%20vibrant%20colors%2C%20clean%20background&width=600&height=400&seq=fruit-detail-1&orientation=landscape',
    time: 15,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 4,
    ingredients: {
      tr: ['2 adet elma', '2 adet armut', '1 su bardağı üzüm', '2 adet kivi', '1 adet portakal', '1 adet muz', '2 yemek kaşığı bal', '1 limon suyu', 'Taze nane yaprakları'],
      uk: ['2 яблука', '2 груші', '1 склянка винограду', '2 ківі', '1 апельсин', '1 банан', '2 столові ложки меду', 'Сік 1 лимона', 'Свіжа м\'ята']
    },
    instructions: {
      tr: [
        'Tüm meyveleri yıkayın.',
        'Elma ve armutları küp şeklinde doğrayın.',
        'Portakalı soyup dilimleyin.',
        'Kivilerin kabuğunu soyup dilimleyin.',
        'Muzları halka şeklinde kesin.',
        'Üzümleri saplarından ayırın.',
        'Bal ve limon suyunu karıştırın.',
        'Meyvelerin üzerine dökün ve karıştırın.',
        'Nane ile süsleyip servis yapın.'
      ],
      uk: [
        'Помийте всі фрукти.',
        'Наріжте яблука і груші кубиками.',
        'Очистіть і наріжте апельсин.',
        'Очистіть і наріжте ківі.',
        'Наріжте банани кружечками.',
        'Зберіть виноград з гілочок.',
        'Змішайте мед і лимонний сік.',
        'Полийте фрукти і перемішайте.',
        'Прикрасьте м\'ятною і подавайте.'
      ]
    },
    tips: {
      tr: ['Meyveleri taze seçin', 'Limon suyu kahverengileşmeyi önler', 'Servis öncesi soğutun'],
      uk: ['Виберіть свіжі фрукти', 'Лимонний сік запобігає потемнінню', 'Охолодіть перед подачею']
    }
  },
  7: {
    title: { tr: 'Çorba', uk: 'Суп' },
    description: { tr: 'Sıcacık ve besleyici ev yapımı çorba', uk: 'Теплий і поживний домашній суп' },
    image: 'https://readdy.ai/api/search-image?query=Homemade%20soup%20in%20white%20bowl%20with%20vegetables%2C%20steam%20rising%2C%20cozy%20kitchen%20background%2C%20comfort%20food%20photography%2C%20warm%20lighting%2C%20appetizing%20presentation&width=600&height=400&seq=soup-detail-1&orientation=landscape',
    time: 40,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 6,
    ingredients: {
      tr: ['2 adet havuç', '2 adet patates', '1 adet soğan', '2 diş sarımsak', '1 su bardağı mercimek', '6 su bardağı et suyu', '2 yemek kaşığı zeytinyağı', '1 tatlı kaşığı kimyon', 'Tuz ve karabiber', 'Taze maydanoz'],
      uk: ['2 морквини', '2 картоплини', '1 цибулина', '2 зубчики часнику', '1 склянка сочевиці', '6 склянок бульйону', '2 столові ложки олії', '1 чайна ложка кмину', 'Сіль і перець', 'Свіжа петрушка']
    },
    instructions: {
      tr: [
        'Sebzeleri küp şeklinde doğrayın.',
        'Tencerede zeytinyağını ısıtın.',
        'Soğan ve sarımsağı kavurun.',
        'Havuç ve patatesleri ekleyin.',
        'Mercimeği yıkayıp ekleyin.',
        'Et suyunu ekleyip kaynatın.',
        'Kısık ateşte 25 dakika pişirin.',
        'Baharatları ekleyip karıştırın.',
        'Maydanoz ile servis yapın.'
      ],
      uk: [
        'Наріжте овочі кубиками.',
        'Розігрійте олію в каструлі.',
        'Обсмажте цибулю і часник.',
        'Додайте моркву і картоплю.',
        'Промийте і додайте сочевицю.',
        'Влийте бульйон і доведіть до кипіння.',
        'Варіть на малому вогні 25 хвилин.',
        'Додайте спеції і перемішайте.',
        'Подавайте з петрушкою.'
      ]
    },
    tips: {
      tr: ['Mercimeği önceden ıslatabilirsiniz', 'Köpüğü alın', 'Baharatları sona bırakın'],
      uk: ['Можете попередньо замочити сочевицю', 'Знімайте піну', 'Додавайте спеції в кінці']
    }
  },
  8: {
    title: { tr: 'Pancake', uk: 'Панкейки' },
    description: { tr: 'Fluffy Amerikan usulü pancake', uk: 'Пухкі американські панкейки' },
    image: 'https://readdy.ai/api/search-image?query=Stack%20of%20fluffy%20pancakes%20with%20syrup%20and%20butter%2C%20breakfast%20table%20setting%2C%20warm%20morning%20lighting%2C%20comfort%20food%20photography%2C%20golden%20brown%20color&width=600&height=400&seq=pancake-detail-1&orientation=landscape',
    time: 20,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 4,
    ingredients: {
      tr: ['2 su bardağı un', '2 yemek kaşığı şeker', '2 tatlı kaşığı kabartma tozu', '1/2 tatlı kaşığı tuz', '1 3/4 su bardağı süt', '1 adet yumurta', '1/4 su bardağı eritilmiş tereyağı', '1 tatlı kaşığı vanilya', 'Akçaağaç şurubu'],
      uk: ['2 склянки борошна', '2 столові ложки цукру', '2 чайні ложки розпушувача', '1/2 чайної ложки солі', '1 3/4 склянки молока', '1 яйце', '1/4 склянки топленого масла', '1 чайна ложка ванілі', 'Кленовий сироп']
    },
    instructions: {
      tr: [
        'Kuru malzemeleri bir kasede karıştırın.',
        'Süt, yumurta, tereyağı ve vanilyayı çırpın.',
        'Islak karışımı kuru malzemelere ekleyin.',
        'Çok fazla karıştırmayın, pürüzsüz olmasın.',
        'Tavayı orta ateşte ısıtın.',
        'Her pancake için 1/4 su bardağı hamur kullanın.',
        'Kabarcıklar çıkınca çevirin.',
        'Her iki tarafı da altın sarısı olana kadar pişirin.',
        'Şurup ile servis yapın.'
      ],
      uk: [
        'Змішайте сухі інгредієнти в мисці.',
        'Збийте молоко, яйце, масло і ваніль.',
        'Додайте рідку суміш до сухої.',
        'Не перемішуйте занадто, має залишитися грудочки.',
        'Розігрійте сковороду на середньому вогні.',
        'Використовуйте 1/4 склянки тіста на панкейк.',
        'Переверніть коли з\'являються бульбашки.',
        'Смажте з обох боків до золотистого кольору.',
        'Подавайте з сиропом.'
      ]
    },
    tips: {
      tr: ['Hamuru çok karıştırmayın', 'Tavayı fazla yağlamayın', 'Sıcak servis yapın'],
      uk: ['Не перемішуйте тісто занадто', 'Не змащуйте сковороду занадто', 'Подавайте гарячими']
    }
  }
};

const similarRecipes = {
  1: [ // Omlet için benzer tarifler
    { id: 2, title: { tr: 'Ev Yapımı Pizza', uk: 'Домашня Піца' }, image: 'https://readdy.ai/api/search-image?query=Homemade%20pizza%20with%20fresh%20ingredients%20on%20wooden%20board%2C%20rustic%20kitchen%20background%2C%20warm%20lighting%2C%20appetizing%20food%20photography%2C%20traditional%20Italian%20style&width=300&height=200&seq=pizza-similar-omelet&orientation=landscape' },
    { id: 3, title: { tr: 'Çikolatalı Kurabiye', uk: 'Шоколадне Печиво' }, image: 'https://readdy.ai/api/search-image?query=Chocolate%20chip%20cookies%20on%20cooling%20rack%2C%20cozy%20kitchen%20background%2C%20warm%20golden%20lighting%2C%20homemade%20baking%20photography%2C%20comfort%20food%20aesthetic&width=300&height=200&seq=cookies-similar-omelet&orientation=landscape' },
    { id: 8, title: { tr: 'Pancake', uk: 'Панкейки' }, image: 'https://readdy.ai/api/search-image?query=Stack%20of%20fluffy%20pancakes%20with%20syrup%20and%20butter%2C%20breakfast%20table%20setting%2C%20warm%20morning%20lighting%2C%20comfort%20food%20photography%2C%20golden%20brown%20color&width=300&height=200&seq=pancake-similar-omelet&orientation=landscape' }
  ],
  2: [ // Pizza için benzer tarifler
    { id: 4, title: { tr: 'Sebzeli Makarna', uk: 'Паста з Овочами' }, image: 'https://readdy.ai/api/search-image?query=Colorful%20pasta%20with%20fresh%20vegetables%20in%20white%20bowl%2C%20bright%20kitchen%20setting%2C%20healthy%20food%20photography%2C%20Mediterranean%20style%2C%20appetizing%20presentation&width=300&height=200&seq=pasta-similar-pizza&orientation=landscape' },
    { id: 5, title: { tr: 'Izgara Tavuk', uk: 'Курка Гриль' }, image: 'https://readdy.ai/api/search-image?query=Grilled%20chicken%20breast%20with%20herbs%20and%20spices%20on%20wooden%20cutting%20board%2C%20rustic%20kitchen%20background%2C%20professional%20food%20photography%2C%20appetizing%20golden%20color&width=300&height=200&seq=chicken-similar-pizza&orientation=landscape' },
    { id: 7, title: { tr: 'Çorba', uk: 'Суп' }, image: 'https://readdy.ai/api/search-image?query=Homemade%20soup%20in%20white%20bowl%20with%20vegetables%2C%20steam%20rising%2C%20cozy%20kitchen%20background%2C%20comfort%20food%20photography%2C%20warm%20lighting%2C%20appetizing%20presentation&width=300&height=200&seq=soup-similar-pizza&orientation=landscape' }
  ],
  3: [ // Kurabiye için benzer tarifler
    { id: 8, title: { tr: 'Pancake', uk: 'Панкейки' }, image: 'https://readdy.ai/api/search-image?query=Stack%20of%20fluffy%20pancakes%20with%20syrup%20and%20butter%2C%20breakfast%20table%20setting%2C%20warm%20morning%20lighting%2C%20comfort%20food%20photography%2C%20golden%20brown%20color&width=300&height=200&seq=pancake-similar-cookies&orientation=landscape' },
    { id: 6, title: { tr: 'Meyve Salatası', uk: 'Фруктовий Салат' }, image: 'https://readdy.ai/api/search-image?query=Fresh%20fruit%20salad%20in%20glass%20bowl%20with%20colorful%20mixed%20fruits%2C%20bright%20natural%20lighting%2C%20healthy%20food%20photography%2C%20vibrant%20colors%2C%20clean%20background&width=300&height=200&seq=fruit-similar-cookies&orientation=landscape' },
    { id: 1, title: { tr: 'Klasik Omlet', uk: 'Класичний Омлет' }, image: 'https://readdy.ai/api/search-image?query=Classic%20fluffy%20omelet%20on%20white%20plate%2C%20clean%20kitchen%20background%2C%20bright%20natural%20lighting%2C%20professional%20food%20photography%20style%2C%20minimalist%20composition&width=300&height=200&seq=omelet-similar-cookies&orientation=landscape' }
  ],
  4: [ // Makarna için benzer tarifler
    { id: 2, title: { tr: 'Ev Yapımı Pizza', uk: 'Домашня Піца' }, image: 'https://readdy.ai/api/search-image?query=Homemade%20pizza%20with%20fresh%20ingredients%20on%20wooden%20board%2C%20rustic%20kitchen%20background%2C%20warm%20lighting%2C%20appetizing%20food%20photography%2C%20traditional%20Italian%20style&width=300&height=200&seq=pizza-similar-pasta&orientation=landscape' },
    { id: 7, title: { tr: 'Çorba', uk: 'Суп' }, image: 'https://readdy.ai/api/search-image?query=Homemade%20soup%20in%20white%20bowl%20with%20vegetables%2C%20steam%20rising%2C%20cozy%20kitchen%20background%2C%20comfort%20food%20photography%2C%20warm%20lighting%2C%20appetizing%20presentation&width=300&height=200&seq=soup-similar-pasta&orientation=landscape' },
    { id: 5, title: { tr: 'Izgara Tavuk', uk: 'Курка Гриль' }, image: 'https://readdy.ai/api/search-image?query=Grilled%20chicken%20breast%20with%20herbs%20and%20spices%20on%20wooden%20cutting%20board%2C%20rustic%20kitchen%20background%2C%20professional%20food%20photography%2C%20appetizing%20golden%20color&width=300&height=200&seq=chicken-similar-pasta&orientation=landscape' }
  ],
  5: [ // Tavuk için benzer tarifler
    { id: 4, title: { tr: 'Sebzeli Makarna', uk: 'Паста з Овочами' }, image: 'https://readdy.ai/api/search-image?query=Colorful%20pasta%20with%20fresh%20vegetables%20in%20white%20bowl%2C%20bright%20kitchen%20setting%2C%20healthy%20food%20photography%2C%20Mediterranean%20style%2C%20appetizing%20presentation&width=300&height=200&seq=pasta-similar-chicken&orientation=landscape' },
    { id: 2, title: { tr: 'Ev Yapımı Pizza', uk: 'Домашня Піца' }, image: 'https://readdy.ai/api/search-image?query=Homemade%20pizza%20with%20fresh%20ingredients%20on%20wooden%20board%2C%20rustic%20kitchen%20background%2C%20warm%20lighting%2C%20appetizing%20food%20photography%2C%20traditional%20Italian%20style&width=300&height=200&seq=pizza-similar-chicken&orientation=landscape' },
    { id: 7, title: { tr: 'Çorba', uk: 'Суп' }, image: 'https://readdy.ai/api/search-image?query=Homemade%20soup%20in%20white%20bowl%20with%20vegetables%2C%20steam%20rising%2C%20cozy%20kitchen%20background%2C%20comfort%20food%20photography%2C%20warm%20lighting%2C%20appetizing%20presentation&width=300&height=200&seq=soup-similar-chicken&orientation=landscape' }
  ],
  6: [ // Meyve salatası için benzer tarifler
    { id: 3, title: { tr: 'Çikolatalı Kurabiye', uk: 'Шоколадне Печиво' }, image: 'https://readdy.ai/api/search-image?query=Chocolate%20chip%20cookies%20on%20cooling%20rack%2C%20cozy%20kitchen%20background%2C%20warm%20golden%20lighting%2C%20homemade%20baking%20photography%2C%20comfort%20food%20aesthetic&width=300&height=200&seq=cookies-similar-fruit&orientation=landscape' },
    { id: 8, title: { tr: 'Pancake', uk: 'Панкейки' }, image: 'https://readdy.ai/api/search-image?query=Stack%20of%20fluffy%20pancakes%20with%20syrup%20and%20butter%2C%20breakfast%20table%20setting%2C%20warm%20morning%20lighting%2C%20comfort%20food%20photography%2C%20golden%20brown%20color&width=300&height=200&seq=pancake-similar-fruit&orientation=landscape' },
    { id: 1, title: { tr: 'Klasik Omlet', uk: 'Класичний Омлет' }, image: 'https://readdy.ai/api/search-image?query=Classic%20fluffy%20omelet%20on%20white%20plate%2C%20clean%20kitchen%20background%2C%20bright%20natural%20lighting%2C%20professional%20food%20photography%20style%2C%20minimalist%20composition&width=300&height=200&seq=omelet-similar-fruit&orientation=landscape' }
  ],
  7: [ // Çorba için benzer tarifler
    { id: 4, title: { tr: 'Sebzeli Makarna', uk: 'Паста з Овочами' }, image: 'https://readdy.ai/api/search-image?query=Colorful%20pasta%20with%20fresh%20vegetables%20in%20white%20bowl%2C%20bright%20kitchen%20setting%2C%20healthy%20food%20photography%2C%20Mediterranean%20style%2C%20appetizing%20presentation&width=300&height=200&seq=pasta-similar-soup&orientation=landscape' },
    { id: 5, title: { tr: 'Izgara Tavuk', uk: 'Курка Гриль' }, image: 'https://readdy.ai/api/search-image?query=Grilled%20chicken%20breast%20with%20herbs%20and%20spices%20on%20wooden%20cutting%20board%2C%20rustic%20kitchen%20background%2C%20professional%20food%20photography%2C%20appetizing%20golden%20color&width=300&height=200&seq=chicken-similar-soup&orientation=landscape' },
    { id: 2, title: { tr: 'Ev Yapımı Pizza', uk: 'Домашня Піца' }, image: 'https://readdy.ai/api/search-image?query=Homemade%20pizza%20with%20fresh%20ingredients%20on%20wooden%20board%2C%20rustic%20kitchen%20background%2C%20warm%20lighting%2C%20appetizing%20food%20photography%2C%20traditional%20Italian%20style&width=300&height=200&seq=pizza-similar-soup&orientation=landscape' }
  ],
  8: [ // Pancake için benzer tarifler
    { id: 1, title: { tr: 'Klasik Omlet', uk: 'Класичний Омлет' }, image: 'https://readdy.ai/api/search-image?query=Classic%20fluffy%20omelet%20on%20white%20plate%2C%20clean%20kitchen%20background%2C%20bright%20natural%20lighting%2C%20professional%20food%20photography%20style%2C%20minimalist%20composition&width=300&height=200&seq=omelet-similar-pancake&orientation=landscape' },
    { id: 3, title: { tr: 'Çikolatalı Kurabiye', uk: 'Шоколадне Печиво' }, image: 'https://readdy.ai/api/search-image?query=Chocolate%20chip%20cookies%20on%20cooling%20rack%2C%20cozy%20kitchen%20background%2C%20warm%20golden%20lighting%2C%20homemade%20baking%20photography%2C%20comfort%20food%20aesthetic&width=300&height=200&seq=cookies-similar-pancake&orientation=landscape' },
    { id: 6, title: { tr: 'Meyve Salatası', uk: 'Фруктовий Салат' }, image: 'https://readdy.ai/api/search-image?query=Fresh%20fruit%20salad%20in%20glass%20bowl%20with%20colorful%20mixed%20fruits%2C%20bright%20natural%20lighting%2C%20healthy%20food%20photography%2C%20vibrant%20colors%2C%20clean%20background&width=300&height=200&seq=fruit-similar-pancake&orientation=landscape' }
  ]
};

interface RecipeDetailProps {
  recipeId: string;
}

export default function RecipeDetail({ recipeId }: RecipeDetailProps) {
  const [language, setLanguage] = useState('tr');
  const t = translations[language as keyof typeof translations];

  const recipe = recipes[recipeId as unknown as keyof typeof recipes];
  const currentSimilarRecipes = similarRecipes[Number(recipeId) as keyof typeof similarRecipes] || similarRecipes[1];

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareData = {
      title: recipe.title[language as keyof typeof recipe.title],
      text: recipe.description[language as keyof typeof recipe.description],
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

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tarif bulunamadı</h1>
          <Link href="/recipes" className="text-orange-600 hover:text-orange-700">
            Tariflere dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/recipes" className="flex items-center space-x-2 text-orange-600 hover:text-orange-700">
              <i className="ri-arrow-left-line text-xl"></i>
              <span className="font-semibold">{t.backToRecipes}</span>
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
                  className="appearance-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
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

      {/* Recipe Hero */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={recipe.image}
                  alt={recipe.title[language as keyof typeof recipe.title]}
                  className="w-full h-64 md:h-full object-cover object-top"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {recipe.title[language as keyof typeof recipe.title]}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  {recipe.description[language as keyof typeof recipe.description]}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <i className="ri-time-line text-2xl text-orange-500 mb-2"></i>
                    <div className="text-2xl font-bold text-gray-800">{recipe.time}</div>
                    <div className="text-sm text-gray-600">dakika</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <i className="ri-star-line text-2xl text-red-500 mb-2"></i>
                    <div className="text-lg font-bold text-gray-800">
                      {recipe.difficulty[language as keyof typeof recipe.difficulty]}
                    </div>
                    <div className="text-sm text-gray-600">{t.difficulty}</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <i className="ri-user-line text-2xl text-green-500 mb-2"></i>
                    <div className="text-2xl font-bold text-gray-800">{recipe.servings}</div>
                    <div className="text-sm text-gray-600">kişi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-shopping-cart-line text-orange-500 mr-3"></i>
                {t.ingredients}
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients[language as keyof typeof recipe.ingredients].map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <i className="ri-checkbox-blank-circle-line text-orange-500 mr-3"></i>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-list-ordered text-red-500 mr-3"></i>
                {t.instructions}
              </h2>
              <ol className="space-y-4">
                {recipe.instructions[language as keyof typeof recipe.instructions].map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <i className="ri-lightbulb-line text-yellow-500 mr-3"></i>
              {t.tips}
            </h3>
            <ul className="grid md:grid-cols-3 gap-4">
              {recipe.tips[language as keyof typeof recipe.tips].map((tip, index) => (
                <li key={index} className="flex items-start">
                  <i className="ri-arrow-right-s-line text-yellow-500 mr-2 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700 text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Similar Recipes */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t.similarRecipes}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {currentSimilarRecipes.map((similar) => (
              <Link key={similar.id} href={`/recipes/${similar.id}`} className="group cursor-pointer">
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
