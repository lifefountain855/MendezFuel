import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Flame, Leaf, Compass, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';
import { menuProducts } from './Menu.jsx';

const deliCategories = ['All', 'Breakfast', 'Hot Sandwiches', 'Cold Sandwiches', 'Bowls & Wraps'];

const deliItems = menuProducts.filter((item) => item.category === "Sandwiches" || item.category === "Avocado Toasts");

const qualityStandards = [
  {
    title: 'Artisanal Breads',
    desc: 'Baked fresh daily by local Miami bakeries, featuring wild-fermented sourdough and organic grains.',
  },
  {
    title: 'Gourmet Meats & Cheeses',
    desc: 'We use high-grade turkey, pasture-raised steak, and imported cheeses, sliced fresh to order.',
  },
  {
    title: '100% Organic Produce',
    desc: 'All avocados, greens, microgreens, and tomatoes are sourced from organic regional distributors.',
  },
];

export default function Deli() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // // Filtering Logic
  // const filteredItems = deliItems.filter((item) => {
  //   const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
  //   const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     item.desc.toLowerCase().includes(searchQuery.toLowerCase());
  //   return matchesCategory && matchesSearch;
  // });

  return (
    <div className="w-full">
      {/* Page Hero */}
      <Hero
        title="Gourmet Deli & Kitchen"
        subtitle="Artisanal sandwiches, breakfast staples, and energy bowls sliced fresh daily with premium organic ingredients."
        bgImage="https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Interactive Menu Filtering Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">
                Fresh Eats
              </span>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
                Explore the Deli Menu
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search sandwich, ingredient..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 px-5 pl-12 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:bg-white transition-all shadow-sm"
              />
              <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
            {deliCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap ${selectedCategory === cat
                  ? 'bg-brand-red text-white shadow-md shadow-brand-red/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {deliItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.name}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Photo with zoom */}
                  <div className="h-60 overflow-hidden relative select-none">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                      loading="lazy"
                    />

                    {/* Dietary Tags Overlay */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                      {/* {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/90 backdrop-blur-sm text-slate-900 font-bold text-3xs uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm"
                        >
                          {tag}
                        </span>
                      ))} */}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-brand-red transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-display font-extrabold text-brand-navy shrink-0 ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-3xs text-slate-400 font-semibold uppercase tracking-widest block">
                        {item.nutrition}
                      </span>
                      <Link
                        to="/order"
                        className="bg-slate-900 hover:bg-brand-red text-white p-2.5 rounded-full transition-colors flex items-center justify-center shadow"
                        aria-label={`Order ${item.name}`}
                      >
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* {filteredItems.length === 0 && (
              <div className="col-span-full text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">No sandwich matching your search query. Try another keyword!</p>
              </div>
            )} */}
          </div>
        </div>
      </section>

      {/* Ingredient Standards Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

            {/* Callout */}
            <div className="space-y-6">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block">
                Quality First
              </span>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight leading-tight">
                Our Kitchen Integrity Standards
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                We believe that premium flavor comes directly from clean sourcing. We refuse to cut corners, selecting only the finest artisanal bread and locally harvested herbs for our daily preparations.
              </p>
            </div>

            {/* List columns */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {qualityStandards.map((std) => (
                <div key={std.title} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/5 flex items-center justify-center mb-4">
                    <ShieldCheck size={20} className="text-brand-red" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-900 mb-2">{std.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{std.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Online Ordering CTA Banner */}
      <section className="py-20 bg-brand-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(217,30,46,0.1),rgba(255,255,255,0))]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Craving a Fresh Sandwich?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Order for pickup or delivery now. Get it toasted and prepared exactly how you like it.
          </p>
          <div className="pt-2">
            <Link
              to="/order"
              className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all"
            >
              <span>Order Online Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
