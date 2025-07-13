
'use client';

import { useState } from 'react';
import Link from 'next/link';

const translations = {
  tr: {
    title: 'Yemek Tarifleri',
    subtitle: 'Lezzetli ve kolay tarifler keşfedin',
    search: 'Tarif ara...',
    filter: 'Filtrele',
    all: 'Tümü',
    easy: 'Kolay',
    medium: 'Orta',
    hard: 'Zor',
    time: 'Süre',
    difficulty: 'Zorluk',
    servings: 'Porsiyon',
    breakfast: 'Kahvaltı',
    lunch: 'Öğle Yemeği',
    dinner: 'Akşam Yemeği',
    dessert: 'Tatlı',
    categories: 'Kategoriler'
  },
  uk: {
    title: 'Рецепти Страв',
    subtitle: 'Відкрийте смачні і прості рецепти',
    search: 'Шукати рецепт...',
    filter: 'Фільтр',
    all: 'Всі',
    easy: 'Легко',
    medium: 'Середньо',
    hard: 'Складно',
    time: 'Час',
    difficulty: 'Складність',
    servings: 'Порції',
    breakfast: 'Сніданок',
    lunch: 'Обід',
    dinner: 'Вечеря',
    dessert: 'Десерт',
    categories: 'Категорії'
  }
};

const recipes = [
  {
    id: 1,
    title: { tr: 'Klasik Omlet', uk: 'Класичний Омлет' },
    description: { tr: 'Fluffy ve lezzetli klasik omlet tarifi', uk: 'Пухкий і смачний класичний рецепт омлету' },
    image: 'https://readdy.ai/api/search-image?query=Classic%20fluffy%20omelet%20on%20white%20plate%20with%20herbs%2C%20clean%20kitchen%20background%2C%20bright%20natural%20lighting%2C%20professional%20food%20photography%20style%2C%20minimalist%20composition&width=400&height=300&seq=omelet-recipe-1&orientation=landscape',
    time: 10,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 2,
    category: 'breakfast'
  },
  {
    id: 2,
    title: { tr: 'Ev Yapımı Pizza', uk: 'Домашня Піца' },
    description: { tr: 'Çıtır hamur ve taze malzemelerle pizza', uk: 'Піца з хрусткого тіста та свіжих інгредієнтів' },
    image: 'https://readdy.ai/api/search-image?query=Homemade%20pizza%20with%20fresh%20ingredients%20on%20wooden%20board%2C%20rustic%20kitchen%20background%2C%20warm%20lighting%2C%20appetizing%20food%20photography%2C%20traditional%20Italian%20style&width=400&height=300&seq=pizza-recipe-1&orientation=landscape',
    time: 45,
    difficulty: { tr: 'Orta', uk: 'Середньо' },
    servings: 4,
    category: 'dinner'
  },
  {
    id: 3,
    title: { tr: 'Çikolatalı Kurabiye', uk: 'Шоколадне Печиво' },
    description: { tr: 'Yumuşak ve çikolatalı ev kurabiyesi', uk: 'М\'яке шоколадне домашнє печиво' },
    image: 'https://readdy.ai/api/search-image?query=Chocolate%20chip%20cookies%20on%20cooling%20rack%2C%20cozy%20kitchen%20background%2C%20warm%20golden%20lighting%2C%20homemade%20baking%20photography%2C%20comfort%20food%20aesthetic&width=400&height=300&seq=cookies-recipe-1&orientation=landscape',
    time: 30,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 12,
    category: 'dessert'
  },
  {
    id: 4,
    title: { tr: 'Sebzeli Makarna', uk: 'Паста з Овочами' },
    description: { tr: 'Taze sebzelerle sağlıklı makarna', uk: 'Здорова паста зі свіжими овочами' },
    image: 'https://readdy.ai/api/search-image?query=Colorful%20pasta%20with%20fresh%20vegetables%20in%20white%20bowl%2C%20bright%20kitchen%20setting%2C%20healthy%20food%20photography%2C%20Mediterranean%20style%2C%20appetizing%20presentation&width=400&height=300&seq=pasta-recipe-1&orientation=landscape',
    time: 25,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 3,
    category: 'lunch'
  },
  {
    id: 5,
    title: { tr: 'Izgara Tavuk', uk: 'Курка Гриль' },
    description: { tr: 'Baharatlarla marine edilmiş izgara tavuk', uk: 'Курка гриль маринована зі спеціями' },
    image: 'https://readdy.ai/api/search-image?query=Grilled%20chicken%20breast%20with%20herbs%20and%20spices%20on%20wooden%20cutting%20board%2C%20rustic%20kitchen%20background%2C%20professional%20food%20photography%2C%20appetizing%20golden%20color&width=400&height=300&seq=chicken-recipe-1&orientation=landscape',
    time: 35,
    difficulty: { tr: 'Orta', uk: 'Середньо' },
    servings: 4,
    category: 'dinner'
  },
  {
    id: 6,
    title: { tr: 'Meyve Salatası', uk: 'Фруктовий Салат' },
    description: { tr: 'Taze meyvelerle renkli salata', uk: 'Барвистий салат зі свіжих фруктів' },
    image: 'https://readdy.ai/api/search-image?query=Fresh%20fruit%20salad%20in%20glass%20bowl%20with%20colorful%20mixed%20fruits%2C%20bright%20natural%20lighting%2C%20healthy%20food%20photography%2C%20vibrant%20colors%2C%20clean%20background&width=400&height=300&seq=fruit-salad-1&orientation=landscape',
    time: 15,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 4,
    category: 'dessert'
  },
  {
    id: 7,
    title: { tr: 'Çorba', uk: 'Суп' },
    description: { tr: 'Sıcacık ve besleyici ev yapımı çorba', uk: 'Теплий і поживний домашній суп' },
    image: 'https://readdy.ai/api/search-image?query=Homemade%20soup%20in%20white%20bowl%20with%20vegetables%2C%20steam%20rising%2C%20cozy%20kitchen%20background%2C%20comfort%20food%20photography%2C%20warm%20lighting%2C%20appetizing%20presentation&width=400&height=300&seq=soup-recipe-1&orientation=landscape',
    time: 40,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 6,
    category: 'lunch'
  },
  {
    id: 8,
    title: { tr: 'Pancake', uk: 'Панкейки' },
    description: { tr: 'Fluffy Amerikan usulü pancake', uk: 'Пухкі американські панкейки' },
    image: 'https://readdy.ai/api/search-image?query=Stack%20of%20fluffy%20pancakes%20with%20syrup%20and%20butter%2C%20breakfast%20table%20setting%2C%20warm%20morning%20lighting%2C%20comfort%20food%20photography%2C%20golden%20brown%20color&width=400&height=300&seq=pancake-recipe-1&orientation=landscape',
    time: 20,
    difficulty: { tr: 'Kolay', uk: 'Легко' },
    servings: 4,
    category: 'breakfast'
  }
];

export default function RecipesPage() {
  const [language, setLanguage] = useState('tr');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  
  const t = translations[language as keyof typeof translations];

  const categories = [
    { key: 'all', label: t.all },
    { key: 'breakfast', label: t.breakfast },
    { key: 'lunch', label: t.lunch },
    { key: 'dinner', label: t.dinner },
    { key: 'dessert', label: t.dessert }
  ];

  const difficulties = [
    { key: 'all', label: t.all },
    { key: 'easy', label: t.easy },
    { key: 'medium', label: t.medium },
    { key: 'hard', label: t.hard }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title[language as keyof typeof recipe.title]
      .toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || 
      recipe.difficulty[language as keyof typeof recipe.difficulty].toLowerCase() === 
      difficulties.find(d => d.key === selectedDifficulty)?.label.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header - Mobil Optimized */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <i className="ri-restaurant-line text-white text-lg sm:text-xl"></i>
              </div>
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {t.title}
              </h1>
            </Link>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-gray-100 border border-gray-300 rounded-lg px-2 sm:px-4 py-1 sm:py-2 pr-6 sm:pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer text-sm sm:text-base"
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
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 text-center bg-gradient-to-r from-orange-500 to-red-500 text-white">
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
            <button className="absolute right-1 sm:right-2 top-1 sm:top-2 bg-orange-600 text-white p-2 sm:p-3 rounded-full hover:bg-orange-700 transition-colors">
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
                        ? 'bg-orange-500 text-white'
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
                        ? 'bg-red-500 text-white'
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

      {/* Recipes Grid - Mobil Optimized */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-600 text-sm sm:text-base">
              {filteredRecipes.length} tarif bulundu
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredRecipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={recipe.image}
                      alt={recipe.title[language as keyof typeof recipe.title]}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800 line-clamp-1">
                      {recipe.title[language as keyof typeof recipe.title]}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                      {recipe.description[language as keyof typeof recipe.description]}
                    </p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        <span>{recipe.time} dk</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-user-line mr-1"></i>
                        <span>{recipe.servings}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-star-line mr-1"></i>
                        <span className="hidden sm:inline">
                          {recipe.difficulty[language as keyof typeof recipe.difficulty]}
                        </span>
                        <span className="sm:hidden">
                          {recipe.difficulty[language as keyof typeof recipe.difficulty].charAt(0)}
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
