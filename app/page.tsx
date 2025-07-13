
'use client';

import { useState } from 'react';
import Link from 'next/link';

const translations = {
  tr: {
    title: 'Ev & Atölye Rehberi',
    subtitle: 'Yemek tarifleri ve araç gereç tamiri için rehberiniz',
    recipes: 'Yemek Tarifleri',
    recipesDesc: 'Lezzetli ve kolay tarifler keşfedin',
    repairs: 'Araç Gereç Tamiri',
    repairsDesc: 'Ev aletleri ve araçlar için tamir rehberleri',
    language: 'Dil',
    searchPlaceholder: 'Tarif veya tamir rehberi arayın...',
    featured: 'Öne Çıkanlar',
    viewAll: 'Tümünü Görüntüle',
    contact: 'İletişim',
    email: 'info@evatolye.com',
    phone: '+90 555 123 45 67',
    copyright: '2024 Ev & Atölye Rehberi. Tüm hakları saklıdır.',
    omelet: 'Klasik Omlet',
    pizza: 'Ev Yapımı Pizza',
    cookies: 'Çikolatalı Kurabiye',
    faucet: 'Musluk Tamiri',
    vacuum: 'Elektrikli Süpürge',
    fridge: 'Buzdolabı Bakımı'
  },
  uk: {
    title: 'Дім & Майстерня Гід',
    subtitle: 'Ваш провідник для рецептів та ремонту інструментів',
    recipes: 'Рецепти Страв',
    recipesDesc: 'Відкрийте смачні і прості рецепти',
    repairs: 'Ремонт Інструментів',
    repairsDesc: 'Посібники з ремонту побутової техніки та інструментів',
    language: 'Мова',
    searchPlaceholder: 'Шукати рецепти або посібники з ремонту...',
    featured: 'Рекомендовані',
    viewAll: 'Переглянути всі',
    contact: 'Контакти',
    email: 'info@dimmaisternya.com',
    phone: '+380 95 123 45 67',
    copyright: '2024 Дім & Майстерня Гід. Усі права захищені.',
    omelet: 'Класичний Омлет',
    pizza: 'Домашня Піца',
    cookies: 'Шоколадне Печиво',
    faucet: 'Ремонт Крана',
    vacuum: 'Ремонт Пилососа',
    fridge: 'Обслуговування Холодильника'
  }
};

const featuredRecipes = [
  {
    id: 1,
    title: { tr: 'Klasik Omlet', uk: 'Класичний Омлет' },
    image: 'https://readdy.ai/api/search-image?query=Classic%20fluffy%20omelet%20on%20white%20plate%20with%20herbs%2C%20clean%20kitchen%20background%2C%20bright%20natural%20lighting%2C%20professional%20food%20photography%20style%2C%20minimalist%20composition&width=400&height=300&seq=omelet-1&orientation=landscape',
    time: '10',
    difficulty: { tr: 'Kolay', uk: 'Легко' }
  },
  {
    id: 2,
    title: { tr: 'Ev Yapımı Pizza', uk: 'Домашня Піца' },
    image: 'https://readdy.ai/api/search-image?query=Homemade%20pizza%20with%20fresh%20ingredients%20on%20wooden%20board%2C%20rustic%20kitchen%20background%2C%20warm%20lighting%2C%20appetizing%20food%20photography%2C%20traditional%20Italian%20style&width=400&height=300&seq=pizza-1&orientation=landscape',
    time: '45',
    difficulty: { tr: 'Orta', uk: 'Середньо' }
  },
  {
    id: 3,
    title: { tr: 'Çikolatalı Kurabiye', uk: 'Шоколадне Печиво' },
    image: 'https://readdy.ai/api/search-image?query=Chocolate%20chip%20cookies%20on%20cooling%20rack%2C%20cozy%20kitchen%20background%2C%20warm%20golden%20lighting%2C%20homemade%20baking%20photography%2C%20comfort%20food%20aesthetic&width=400&height=300&seq=cookies-1&orientation=landscape',
    time: '30',
    difficulty: { tr: 'Kolay', uk: 'Легко' }
  }
];

const featuredRepairs = [
  {
    id: 1,
    title: { tr: 'Musluk Tamiri', uk: 'Ремонт Крана' },
    image: 'https://readdy.ai/api/search-image?query=Modern%20kitchen%20faucet%20repair%20tools%20and%20parts%20laid%20out%20neatly%2C%20clean%20workshop%20background%2C%20bright%20lighting%2C%20professional%20repair%20manual%20style%2C%20organized%20tool%20arrangement&width=400&height=300&seq=faucet-1&orientation=landscape',
    time: '20',
    difficulty: { tr: 'Kolay', uk: 'Легко' }
  },
  {
    id: 2,
    title: { tr: 'Elektrikli Süpürge Tamiri', uk: 'Ремонт Пилососа' },
    image: 'https://readdy.ai/api/search-image?query=Vacuum%20cleaner%20repair%20with%20tools%20and%20replacement%20parts%2C%20modern%20workshop%20setting%2C%20clean%20background%2C%20technical%20manual%20photography%20style%2C%20organized%20repair%20workspace&width=400&height=300&seq=vacuum-1&orientation=landscape',
    time: '30',
    difficulty: { tr: 'Orta', uk: 'Середньо' }
  },
  {
    id: 3,
    title: { tr: 'Buzdolabı Bakımı', uk: 'Обслуговування Холодильника' },
    image: 'https://readdy.ai/api/search-image?query=Refrigerator%20maintenance%20tools%20and%20cleaning%20supplies%20arranged%20neatly%2C%20modern%20kitchen%20background%2C%20bright%20professional%20lighting%2C%20appliance%20repair%20manual%20style&width=400&height=300&seq=fridge-1&orientation=landscape',
    time: '45',
    difficulty: { tr: 'Kolay', uk: 'Легко' }
  }
];

export default function Home() {
  const [language, setLanguage] = useState('tr');
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <i className="ri-home-heart-line text-white text-lg sm:text-xl"></i>
              </div>
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {t.title}
              </h1>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-gray-100 border border-gray-300 rounded-lg px-2 py-1 sm:px-4 sm:py-2 pr-6 sm:pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-sm sm:text-base"
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

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 px-2">
            {t.subtitle}
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full text-gray-900 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
            />
            <button className="absolute right-1 sm:right-2 top-1 sm:top-2 bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 transition-colors">
              <i className="ri-search-line text-base sm:text-lg"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Recipes Category */}
            <Link href="/recipes" className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 sm:h-64 bg-gradient-to-br from-orange-400 to-red-500 relative overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Beautiful%20modern%20kitchen%20with%20colorful%20fresh%20ingredients%2C%20cooking%20utensils%2C%20warm%20ambient%20lighting%2C%20professional%20culinary%20photography%2C%20inviting%20cooking%20atmosphere&width=500&height=300&seq=kitchen-hero-1&orientation=landscape"
                    alt={t.recipes}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <i className="ri-restaurant-line text-white text-3xl sm:text-4xl mb-2"></i>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">{t.recipes}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{t.recipesDesc}</p>
                  <div className="flex items-center text-orange-600 font-semibold">
                    <span className="text-sm sm:text-base">{t.viewAll}</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>

            {/* Repairs Category */}
            <Link href="/repairs" className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 sm:h-64 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Modern%20workshop%20with%20organized%20tools%20and%20equipment%2C%20clean%20workbench%2C%20bright%20professional%20lighting%2C%20technical%20repair%20manual%20style%2C%20organized%20tool%20arrangement&width=500&height=300&seq=workshop-hero-1&orientation=landscape"
                    alt={t.repairs}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <i className="ri-tools-line text-white text-3xl sm:text-4xl mb-2"></i>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">{t.repairs}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{t.repairsDesc}</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span className="text-sm sm:text-base">{t.viewAll}</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{t.featured} {t.recipes}</h2>
            <Link href="/recipes" className="text-orange-600 hover:text-orange-700 font-semibold flex items-center text-sm sm:text-base">
              {t.viewAll}
              <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredRecipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="group cursor-pointer">
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={recipe.image}
                      alt={recipe.title[language as keyof typeof recipe.title]}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">{recipe.title[language as keyof typeof recipe.title]}</h3>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        <span>{recipe.time} dk</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-star-line mr-1"></i>
                        <span>{recipe.difficulty[language as keyof typeof recipe.difficulty]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Repairs */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{t.featured} {t.repairs}</h2>
            <Link href="/repairs" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center text-sm sm:text-base">
              {t.viewAll}
              <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredRepairs.map((repair) => (
              <Link key={repair.id} href={`/repairs/${repair.id}`} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={repair.image}
                      alt={repair.title[language as keyof typeof repair.title]}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">{repair.title[language as keyof typeof repair.title]}</h3>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        <span>{repair.time} dk</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-star-line mr-1"></i>
                        <span>{repair.difficulty[language as keyof typeof repair.difficulty]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <i className="ri-home-heart-line text-white text-sm sm:text-base"></i>
                </div>
                <span className="text-lg sm:text-xl font-bold">{t.title}</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">{t.subtitle}</p>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">{t.recipes}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/recipes/1" className="hover:text-white transition-colors">{t.omelet}</Link></li>
                <li><Link href="/recipes/2" className="hover:text-white transition-colors">{t.pizza}</Link></li>
                <li><Link href="/recipes/3" className="hover:text-white transition-colors">{t.cookies}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">{t.repairs}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/repairs/1" className="hover:text-white transition-colors">{t.faucet}</Link></li>
                <li><Link href="/repairs/2" className="hover:text-white transition-colors">{t.vacuum}</Link></li>
                <li><Link href="/repairs/3" className="hover:text-white transition-colors">{t.fridge}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">{t.contact}</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  <span>{t.email}</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  <span>{t.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {t.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
