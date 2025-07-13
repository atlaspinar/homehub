
'use client';

import { useState } from 'react';
import Link from 'next/link';

const translations = {
  tr: {
    title: 'Araç Gereç Tamiri',
    subtitle: 'Ev aletleri ve araçlar için tamir rehberleri',
    search: 'Tamir rehberi ara...',
    filter: 'Filtrele',
    all: 'Tümü',
    easy: 'Kolay',
    medium: 'Orta',
    hard: 'Zor',
    time: 'Süre',
    difficulty: 'Zorluk',
    tools: 'Gerekli Araçlar',
    kitchen: 'Mutfak Aletleri',
    electronics: 'Elektronik',
    plumbing: 'Tesisatçılık',
    automotive: 'Otomotiv',
    categories: 'Kategoriler'
  },
  uk: {
    title: 'Ремонт Інструментів',
    subtitle: 'Посібники з ремонту побутової техніки та інструментів',
    search: 'Шукати посібник з ремонту...',
    filter: 'Фільтр',
    all: 'Всі',
    easy: 'Легко',
    medium: 'Середньо',
    hard: 'Складно',
    time: 'Час',
    difficulty: 'Складність',
    tools: 'Необхідні Інструменти',
    kitchen: 'Кухонні Прилади',
    electronics: 'Електроніка',
    plumbing: 'Сантехніка',
    automotive: 'Автомобільна',
    categories: 'Категорії'
  }
};

const repairs = [
  {
    id: 1,
    title: { tr: 'Musluk Tamiri', uk: 'Ремонт Крана' },
    description: { tr: 'Damlayan musluğu nasıl tamir edersiniz', uk: 'Як відремонтувати кран що капає' },
    image: 'https://readdy.ai/api/search-image?query=Modern%20kitchen%20faucet%20repair%20tools%20and%20parts%20laid%20out%20neatly%2C%20clean%20workshop%20background%2C%20bright%20lighting%2C%20professional%20repair%20manual%20style%2C%20organized%20tool%20arrangement&width=400&height=300&seq=faucet-repair-1&orientation=landscape',
    time: 20,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    tools: 3,
    category: 'plumbing'
  },
  {
    id: 2,
    title: { tr: 'Elektrikli Süpürge Tamiri', uk: 'Ремонт Пилососа' },
    description: { tr: 'Süpürgenizin emme gücünü artırın', uk: 'Підвищте потужність всмоктування пилососа' },
    image: 'https://readdy.ai/api/search-image?query=Vacuum%20cleaner%20repair%20with%20tools%20and%20replacement%20parts%2C%20modern%20workshop%20setting%2C%20clean%20background%2C%20technical%20manual%20photography%20style%2C%20organized%20repair%20workspace&width=400&height=300&seq=vacuum-repair-1&orientation=landscape',
    time: 30,
    difficulty: { tr: 'Orta', uk: 'Середньо' },
    tools: 5,
    category: 'electronics'
  },
  {
    id: 3,
    title: { tr: 'Buzdolabı Bakımı', uk: 'Обслуговування Холодильника' },
    description: { tr: 'Buzdolabınızı nasıl temizler ve bakım yaparsınız', uk: 'Як чистити та обслуговувати холодильник' },
    image: 'https://readdy.ai/api/search-image?query=Refrigerator%20maintenance%20tools%20and%20cleaning%20supplies%20arranged%20neatly%2C%20modern%20kitchen%20background%2C%20bright%20professional%20lighting%2C%20appliance%20repair%20manual%20style&width=400&height=300&seq=fridge-repair-1&orientation=landscape',
    time: 45,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    tools: 4,
    category: 'kitchen'
  },
  {
    id: 4,
    title: { tr: 'Araba Lastik Değişimi', uk: 'Заміна Автомобільної Шини' },
    description: { tr: 'Güvenli lastik değişim rehberi', uk: 'Посібник з безпечної заміни шин' },
    image: 'https://readdy.ai/api/search-image?query=Car%20tire%20change%20tools%20and%20equipment%20laid%20out%20professionally%2C%20automotive%20workshop%20background%2C%20clean%20lighting%2C%20technical%20manual%20style%2C%20organized%20car%20maintenance%20setup&width=400&height=300&seq=tire-repair-1&orientation=landscape',
    time: 25,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    tools: 4,
    category: 'automotive'
  },
  {
    id: 5,
    title: { tr: 'Mikrodalga Fırın Tamiri', uk: 'Ремонт Мікрохвильової Печі' },
    description: { tr: 'Çalışmayan mikrodalga fırın sorunları', uk: 'Проблеми з несправною мікрохвильовою піччю' },
    image: 'https://readdy.ai/api/search-image?query=Microwave%20oven%20repair%20with%20tools%20and%20components%2C%20modern%20kitchen%20workshop%20setting%2C%20bright%20lighting%2C%20appliance%20repair%20manual%20photography%2C%20technical%20documentation%20style&width=400&height=300&seq=microwave-repair-1&orientation=landscape',
    time: 40,
    difficulty: { tr: 'Orta', uk: 'Середньо' },
    tools: 6,
    category: 'kitchen'
  },
  {
    id: 6,
    title: { tr: 'Televizyon Tamiri', uk: 'Ремонт Телевізора' },
    description: { tr: 'LCD TV yaygın sorunları ve çözümleri', uk: 'Поширені проблеми LCD TV та рішення' },
    image: 'https://readdy.ai/api/search-image?query=Television%20repair%20setup%20with%20electronic%20tools%20and%20components%2C%20modern%20electronics%20workshop%2C%20bright%20professional%20lighting%2C%20technical%20manual%20style%2C%20organized%20repair%20station&width=400&height=300&seq=tv-repair-1&orientation=landscape',
    time: 60,
    difficulty: { tr: 'Zor', uk: 'Складно' },
    tools: 8,
    category: 'electronics'
  },
  {
    id: 7,
    title: { tr: 'Tuvalet Tamiri', uk: 'Ремонт Туалету' },
    description: { tr: 'Tuvalet rezervuar ve sifon tamiri', uk: 'Ремонт бачка і сифону унітазу' },
    image: 'https://readdy.ai/api/search-image?query=Toilet%20repair%20tools%20and%20replacement%20parts%20arranged%20professionally%2C%20clean%20bathroom%20workshop%20setting%2C%20bright%20lighting%2C%20plumbing%20manual%20photography%20style&width=400&height=300&seq=toilet-repair-1&orientation=landscape',
    time: 35,
    difficulty: { tr: 'Orta', uk: 'Середньо' },
    tools: 5,
    category: 'plumbing'
  },
  {
    id: 8,
    title: { tr: 'Araba Fren Balata Değişimi', uk: 'Заміна Гальмівних Колодок' },
    description: { tr: 'Fren balata değişim adım adım rehber', uk: 'Покроковий посібник заміни гальмівних колодок' },
    image: 'https://readdy.ai/api/search-image?query=Car%20brake%20pad%20replacement%20tools%20and%20parts%2C%20automotive%20workshop%20setting%2C%20professional%20lighting%2C%20technical%20manual%20photography%2C%20organized%20car%20repair%20workspace&width=400&height=300&seq=brake-repair-1&orientation=landscape',
    time: 90,
    difficulty: { tr: 'Zor', uk: 'Складно' },
    tools: 12,
    category: 'automotive'
  }
];

export default function RepairsPage() {
  const [language, setLanguage] = useState('tr');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  
  const t = translations[language as keyof typeof translations];

  const categories = [
    { key: 'all', label: t.all },
    { key: 'kitchen', label: t.kitchen },
    { key: 'electronics', label: t.electronics },
    { key: 'plumbing', label: t.plumbing },
    { key: 'automotive', label: t.automotive }
  ];

  const difficulties = [
    { key: 'all', label: t.all },
    { key: 'easy', label: t.easy },
    { key: 'medium', label: t.medium },
    { key: 'hard', label: t.hard }
  ];

  const filteredRepairs = repairs.filter(repair => {
    const matchesSearch = repair.title[language as keyof typeof repair.title]
      .toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || repair.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || 
      repair.difficulty[language as keyof typeof repair.difficulty].toLowerCase() === 
      difficulties.find(d => d.key === selectedDifficulty)?.label.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header - Mobil Optimized */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <i className="ri-tools-line text-white text-lg sm:text-xl"></i>
              </div>
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {t.title}
              </h1>
            </Link>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-gray-100 border border-gray-300 rounded-lg px-2 sm:px-4 py-1 sm:py-2 pr-6 sm:pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-sm sm:text-base"
                >
                  <option value="tr">🇹🇷 TR</option>
                  <option value="uk">🇺🇦 UK</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-1 sm:right-2 top-1.5 sm:top-3 text-gray-500 pointer-events-none text-sm sm:text-base"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobil Optimized */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            {t.subtitle}
          </p>
          
          {/* Search Bar - Mobil Optimized */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full text-gray-900 text-sm sm:text-base lg:text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
            />
            <button className="absolute right-1 sm:right-2 top-1 sm:top-2 bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 transition-colors">
              <i className="ri-search-line text-sm sm:text-base lg:text-lg"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Filters - Mobil Optimized */}
      <section className="py-4 sm:py-6 lg:py-8 px-3 sm:px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            <span className="block font-semibold text-gray-700 text-sm sm:text-base">
              {t.filter}:
            </span>
            
            {/* Category Filter - Mobil Stack */}
            <div className="space-y-2">
              <span className="block text-xs sm:text-sm text-gray-600">
                {t.categories}:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category.key
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter - Mobil Stack */}
            <div className="space-y-2">
              <span className="block text-xs sm:text-sm text-gray-600">
                {t.difficulty}:
              </span>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty.key}
                    onClick={() => setSelectedDifficulty(difficulty.key)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      selectedDifficulty === difficulty.key
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {difficulty.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repairs Grid - Mobil Optimized */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-600 text-sm sm:text-base">
              {filteredRepairs.length} tamir rehberi bulundu
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredRepairs.map((repair) => (
              <Link key={repair.id} href={`/repairs/${repair.id}`} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={repair.image}
                      alt={repair.title[language as keyof typeof repair.title]}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800 line-clamp-1">
                      {repair.title[language as keyof typeof repair.title]}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                      {repair.description[language as keyof typeof repair.description]}
                    </p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        <span>{repair.time} dk</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-tools-line mr-1"></i>
                        <span>{repair.tools}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-star-line mr-1"></i>
                        <span className="hidden sm:inline">
                          {repair.difficulty[language as keyof typeof repair.difficulty]}
                        </span>
                        <span className="sm:hidden">
                          {repair.difficulty[language as keyof typeof repair.difficulty].charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Mobil Optimized */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; 2024 Ev & Atölye Rehberi. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
