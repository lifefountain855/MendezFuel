import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Plus, Minus, X, Check, ShoppingBag, Star } from 'lucide-react';
import Hero from '../components/Hero.jsx';

const menuCategories = ['All', 'Sandwiches', 'Avocado Toasts', 'Smoothie', 'Açaí Bowls', 'Beer', 'Coffee'];

export const menuProducts = [
  // Smoothie (Custom item added on top of the ones provided earlier)
  {
    id: 15,
    name: 'Custom Smoothie',
    category: 'Smoothie',
    price: 10,
    desc: 'Pick Your 1 Base, 3 Fruit, 1 Superfood.',
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=400&auto=format&fit=crop",
    nutrition: 'Customizable • Price Varies',
    tag: ''
  },

  // Beer
  {
    id: 30,
    name: 'Specialty Lager 6pk Can',
    category: 'Beer',
    price: 11.99,
    desc: 'Palatable and refreshing Mexican-inspired lager.',
    image: 'https://static.wixstatic.com/media/5ac7e3_35425b4b8fd7411a8a8b998abaf99dc7~mv2.jpg/v1/fill/w_608,h_608,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5ac7e3_35425b4b8fd7411a8a8b998abaf99dc7~mv2.jpg',
    nutrition: 'ABV: 5.5% • 6pk Can',
    tag: 'best_seller'
  },
  {
    id: 31,
    name: 'Jai Alai American IPA',
    category: 'Beer',
    price: 22.00,
    desc: '64oz Growler Fill. Cigar City Brewing. Citrus-forward double dry-hopped IPA boasting flavors of tangerine and pine.',
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80&w=400&auto=format&fit=crop',
    nutrition: 'ABV: 7.5% • Growler Fill',
    tag: ''
  },
  {
    id: 33,
    name: 'Super Berry',
    category: 'Smoothie',
    price: 8.50,
    desc: 'Banana, mixed berries, and organic hemp seeds blended to perfection.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=400&auto=format&fit=crop',
    nutrition: 'Antioxidants • Fibre Boost',
    tag: ''
  },
  {
    id: 34,
    name: 'Super Tropical',
    category: 'Smoothie',
    price: 8.50,
    desc: 'Organic kale, fresh pineapple, banana, blended and topped with toasted coconut.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=400&auto=format&fit=crop',
    nutrition: 'Alkalizing • Vitamin C',
    tag: ''
  },
  {
    id: 35,
    name: 'Super Matcha',
    category: 'Smoothie',
    price: 9.00,
    desc: 'Japanese matcha, banana, sweet pineapple, organic spinach, almond butter, and raw vanilla.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=400&auto=format&fit=crop',
    nutrition: 'Clean Focus • Energy',
    tag: ''
  },
  {
    id: 36,
    name: 'Super Caveman',
    category: 'Smoothie',
    price: 9.50,
    desc: 'Banana, mixed berries, almond butter, topped with organic chia seeds. Served with your choice of chocolate or vanilla plant protein.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=400&auto=format&fit=crop',
    nutrition: 'High Protein • Post Workout',
    tag: ''
  },

  // SANDWICHES
  {
    id: 1,
    name: 'Breakfast Sammy',
    category: 'Sandwiches',
    price: 10.99, // Price not explicitly listed on board
    desc: 'Egg and cheese sandwich. Choice of avocado, bacon or ham.',
    image: "https://static.wixstatic.com/media/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg",
    nutrition: 'Served All Day',
    tag: ''
  },
  {
    id: 2,
    name: 'Little Richard',
    category: 'Sandwiches',
    price: 10.99,
    desc: 'Prosciutto, mozzarella, basil, tomato, olive oil, supa vinaigrette.',
    image: "https://static.wixstatic.com/media/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg",
    nutrition: 'Served on Sourdough Bread',
    tag: ''
  },
  {
    id: 3,
    name: 'Fishy Fishy',
    category: 'Sandwiches',
    price: 10.99,
    desc: 'Tuna salad, sprouts, tomato.',
    image: "https://static.wixstatic.com/media/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg",
    nutrition: 'Served on Multigrain Bread',
    tag: ''
  },
  {
    id: 4,
    name: 'Pavo Club',
    category: 'Sandwiches',
    price: 10.99,
    desc: 'Turkey, avocado, provolone, tomato, bacon, egg.',
    image: "https://static.wixstatic.com/media/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg",
    nutrition: 'Served on Sourdough Bread',
    tag: ''
  },
  {
    id: 5,
    name: 'B.L. & Mr. T',
    category: 'Sandwiches',
    price: 10.99,
    desc: 'Bacon, lettuce, tomato, sprouts, basil, mayo.',
    image: "https://static.wixstatic.com/media/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg",
    nutrition: 'Served on Sourdough Bread',
    tag: ''
  },
  {
    id: 6,
    name: 'Build Your Own Sandwich',
    category: 'Sandwiches',
    price: 10.99,
    desc: 'Pick Your Bread: White, Multigrain, Whole Wheat Wrap. Pick Your Protein: Ham, Turkey, Roast Beef, Pork, Prosciutto, Bacon, Tuna. Pick Your Cheese: Mozzarella, Provolone, Swiss, Cheddar. Pick Your Toppings (3): Lettuce, Spinach, Tomato, Carrots, Sprouts, Avocado, Basil, Pickles.',
    image: "https://static.wixstatic.com/media/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_24103ebc2f2647a585a35add874f70bd~mv2.jpg",
    nutrition: 'Customizable',
    tag: ''
  },

  // AVOCADO TOASTS
  {
    id: 7,
    name: 'With or Without You',
    category: 'Avocado Toasts',
    price: 10.99,
    desc: 'Avocado, fried egg, salt, pepper, olive oil, cayenne.',
    image: "https://static.wixstatic.com/media/472773_311108d1f1214b2c9bfb16fc448f7254~mv2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_311108d1f1214b2c9bfb16fc448f7254~mv2.jpg",
    nutrition: 'Served on Multigrain Bread',
    tag: ''
  },
  {
    id: 8,
    name: 'Spicy Feta',
    category: 'Avocado Toasts',
    price: 10.99,
    desc: 'Sun-dried tomato pesto, avocado, feta, spicy chili crunch, pepper.',
    image: "https://static.wixstatic.com/media/472773_311108d1f1214b2c9bfb16fc448f7254~mv2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_311108d1f1214b2c9bfb16fc448f7254~mv2.jpg",
    nutrition: 'Served on Multigrain Bread',
    tag: ''
  },

  // EMPANADAS
  {
    id: 9,
    name: 'Spinach Empanada',
    category: 'Empanadas',
    price: 4.39,
    desc: 'Spinach, garlic, ricotta.',
    image: "https://static.wixstatic.com/media/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg",
    nutrition: 'Handmade In House',
    tag: ''
  },
  {
    id: 10,
    name: 'Chicken, Bacon & Cheese Empanada',
    category: 'Empanadas',
    price: 4.39,
    desc: 'Seasoned chicken, bacon, mozzarella.',
    image: "https://static.wixstatic.com/media/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg",
    nutrition: 'Handmade In House',
    tag: ''
  },
  {
    id: 11,
    name: 'Chicken Empanada',
    category: 'Empanadas',
    price: 4.39,
    desc: 'Seasoned chicken, sautéed onions.',
    image: "https://static.wixstatic.com/media/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg",
    nutrition: 'Handmade In House',
    tag: ''
  },
  {
    id: 12,
    name: 'Beef Empanada',
    category: 'Empanadas',
    price: 4.39,
    desc: 'Seasoned ground beef, sautéed onions.',
    image: "https://static.wixstatic.com/media/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg",
    nutrition: 'Handmade In House',
    tag: ''
  },
  {
    id: 13,
    name: 'Ham & Cheese Empanada',
    category: 'Empanadas',
    price: 4.39,
    desc: 'Ham & mozzarella.',
    image: "https://static.wixstatic.com/media/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg",
    nutrition: 'Handmade In House',
    tag: ''
  },
  {
    id: 14,
    name: 'Caprese Empanada',
    category: 'Empanadas',
    price: 4.39,
    desc: 'Basil, tomato, mozzarella.',
    image: "https://static.wixstatic.com/media/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_971afb40cf2246eaa7da075fe73ed054~mv2_d_2880_2304_s_2.jpg",
    nutrition: 'Handmade In House',
    tag: ''
  },

  // ACAI BOWLS
  
  {
    id: 20,
    name: 'Build Your Own Bowl',
    category: 'Açaí Bowls',
    price: 10.99,
    desc: 'Pick Your 1 Base (Açaí or Pitaya), 2 Fruits, and 4 toppings.',
    image: "https://static.wixstatic.com/media/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg",
    nutrition: 'Customizable',
    tag: ''
  },
  {
    id: 37,
    name: 'Acai Power Energy Bowl',
    category: 'Açaí Bowls',
    price: 10.99,
    desc: 'Organic acai berry base, gluten-free granola, sliced fresh strawberries, organic bananas, organic chia, honey.',
    image: 'https://static.wixstatic.com/media/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg',
    nutrition: '380 Cal • Superfood',
    tag: ''
  },
  {
    id: 16,
    name: '305 Bowl',
    category: 'Açaí Bowls',
    price: 10.99,
    desc: 'Açaí, pineapple, banana. Topped with berries, banana, coconut, granola, honey.',
    image: "https://static.wixstatic.com/media/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg",
    nutrition: 'Blended with Coconut Milk',
    tag: 'best_seller'
  },
  {
    id: 17,
    name: 'Gables Bowl',
    category: 'Açaí Bowls',
    price: 10.99,
    desc: 'Pitaya, pineapple, banana. Topped with granola, coconut, banana, strawberry, blueberry.',
    image: "https://static.wixstatic.com/media/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg",
    nutrition: 'Blended with Coconut Milk',
    tag: ''
  },
  {
    id: 18,
    name: 'Wynwood Bowl',
    category: 'Açaí Bowls',
    price: 10.99,
    desc: 'Açaí, mixed berries, peanut butter, maca. Topped with hemp seeds, cacao nibs, dates, granola, banana.',
    image: "https://static.wixstatic.com/media/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg",
    nutrition: 'Blended with Coconut Milk',
    tag: ''
  },
  {
    id: 19,
    name: 'The Hulk Bowl',
    category: 'Açaí Bowls',
    price: 10.99,
    desc: 'Açaí, kale, pineapple, banana, spirulina. Topped with strawberry, granola, coconut, honey.',
    image: "https://static.wixstatic.com/media/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_0357fa1abe4c495987ac75e4f1a3b848~mv2_d_2880_2304_s_2.jpg",
    nutrition: 'Blended with Coconut Milk',
    tag: ''
  },

  // COFFEE
  {
    id: 21,
    name: 'Colada',
    category: 'Coffee',
    price: 2.50,
    desc: 'Traditional Cuban Espresso.',
    image: "https://images.unsplash.com/photo-1764332854941-6d577414c120?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nutrition: 'Hot',
    tag: ''
  },
  {
    id: 22,
    name: 'Cortadito',
    category: 'Coffee',
    price: 2.75,
    desc: 'Cuban espresso cut with steamed milk.',
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nutrition: 'Hot',
    tag: 'best_seller'
  },
  {
    id: 23,
    name: 'Latte',
    category: 'Coffee',
    price: 4.00,
    desc: 'Espresso with steamed milk.',
    image: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nutrition: 'Hot or Iced',
    tag: ''
  },
  {
    id: 24,
    name: 'Matcha Latte',
    category: 'Coffee',
    price: 4.00,
    desc: 'Matcha green tea with milk.',
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nutrition: 'Hot or Iced',
    tag: ''
  }

];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  // Filters
  const filteredProducts = menuProducts.filter((product) => {
    const matchesCat = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Adjust Quantity
  const adjustQuantity = (productId, amount) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const nextQuantity = item.quantity + amount;
            return { ...item, quantity: nextQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // Cart Totals
  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.07;
  const grandTotal = subtotal + tax;

  const handleCheckout = () => {
    setIsCheckoutSuccess(true);
    setCart([]);
    setTimeout(() => {
      setIsCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 3000);
  };

  return (
    <div className="w-full relative">
      {/* Page Hero */}
      <Hero
        title="Our Digital Menu"
        subtitle="Browse and pre-order our raw juices, handcrafted gourmet sandwiches, and seasonal growler fills."
        bgImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Main Catalog View */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Headline and Search */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">
                Order Ahead
              </span>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
                Mendez Fuel Catalog
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search the menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 px-5 pl-12 text-sm text-slate-800 focus:outline-none focus:border-brand-red focus:bg-white transition-all shadow-sm"
              />

              <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap ${selectedCategory === cat
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group ${prod.tag === 'best_seller' ? 'border-3 border-brand-red' : 'border border-slate-100'}`}
              >
                {/* Photo container */}
                <div className="h-48 overflow-hidden relative select-none">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                    loading="lazy"
                  />

                  {prod.tag === 'best_seller' && (
                    <div className="absolute top-5 right-3">
                      <div className="bg-brand-red text-white p-1 rounded-full shadow-lg">
                        <Star size={16} fill="currentColor" />
                      </div>
                    </div>
                  )}

                  <span className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-sm px-3 py-1 rounded-full text-3xs font-extrabold uppercase tracking-wider text-white shadow-sm">
                    ${prod.price.toFixed(2)}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-3xs text-slate-400 font-bold uppercase tracking-wider block">
                      {prod.category}
                    </span>
                    <h3 className="font-display font-extrabold text-sm text-slate-900 group-hover:text-brand-red transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-slate-500 text-3xs leading-relaxed line-clamp-3">
                      {prod.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-3xs text-slate-400 font-bold uppercase tracking-wider">
                      {prod.nutrition}
                    </span>
                    <button
                      onClick={() => addToCart(prod)}
                      className="bg-brand-red hover:bg-brand-red-dark text-white p-2 rounded-full transition-colors flex items-center justify-center shadow shadow-brand-red/10"
                      aria-label={`Add ${prod.name} to cart`}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">No items matched your filter query. Try another keyword!</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Floating Cart Button (visible on mobile/desktop if items in cart) */}
      {cart.length > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 z-40 bg-brand-red text-white p-5 rounded-full shadow-2xl hover:bg-brand-red-dark hover:scale-105 transition-all flex items-center justify-center"
          aria-label="Open ordering cart"
        >
          <ShoppingCart size={24} />
          <span className="absolute -top-1 -right-1 bg-brand-navy text-white text-xs font-bold w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </motion.button>
      )}

      {/* Slide-out Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-50 bg-black"
            />

            {/* Cart Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full sm:w-[450px] bg-white shadow-2xl flex flex-col justify-between border-l border-slate-100"
            >
              {/* Cart Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-3 text-brand-navy">
                  <ShoppingCart size={22} className="text-brand-red" />
                  <h3 className="font-display font-extrabold text-lg">Your Cart</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cart Body Items list */}
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {isCheckoutSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Check size={32} />
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-slate-900">Order Placed!</h3>
                    <p className="text-slate-400 text-xs max-w-[260px]">
                      Your order has been routed to our Coral Way kitchen. You will receive an SMS status update shortly.
                    </p>
                  </div>
                ) : cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
                    <ShoppingBag size={48} className="text-slate-300" />
                    <p className="text-slate-400 font-medium">Your cart is currently empty.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded-xl shadow-xs"
                        />
                        <div>
                          <h4 className="font-bold text-xs text-slate-800">{item.product.name}</h4>
                          <span className="text-3xs text-brand-red font-semibold">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 bg-white rounded-full border border-slate-200 p-1 shrink-0">
                        <button
                          onClick={() => adjustQuantity(item.product.id, -1)}
                          className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold text-slate-800 w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item.product)}
                          className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Footer Checkout Actions */}
              {!isCheckoutSuccess && cart.length > 0 && (
                <div className="p-6 border-t border-slate-100 space-y-4">
                  <div className="space-y-2 text-xs text-slate-500">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Tax (7%)</span>
                      <span className="font-semibold text-slate-800">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-slate-900 border-t border-slate-100 pt-2">
                      <span>Total Amount</span>
                      <span>${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm uppercase tracking-wider py-4 rounded-full shadow-lg shadow-brand-red/10 transition-colors"
                  >
                    Place Pickup Order
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
