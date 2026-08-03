import { motion } from 'framer-motion';
import { Leaf, ArrowRight, ShieldCheck, Heart, Sparkles, CupSoda } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';
import { menuProducts } from './Menu.jsx';

const smoothieCollection = menuProducts.filter((item) => item.category === 'Smoothie').slice(0,4)
// [
//   {
//     name: 'Super Berry',
//     price: '$8.50',
//     desc: 'Banana, mixed berries, and organic hemp seeds blended to perfection.',
//     benefits: 'Antioxidants • Fibre Boost',
//     color: 'border-rose-500/25 bg-rose-50/30 text-rose-800',
//     dotColor: 'bg-rose-500',
//     image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=400&auto=format&fit=crop',
//   },
//   {
//     id: 32,
//     name: 'Acai Power Energy Bowl',
//     category: 'Smoothie',
//     price: 10.99,
//     desc: 'Organic acai berry base, gluten-free granola, sliced fresh strawberries, organic bananas, organic chia, honey.',
//     image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=400&auto=format&fit=crop',
//     nutrition: '380 Cal • Superfood',
//     tag: ''
//   },
//   {
//     name: 'Super Tropical',
//     price: '$8.50',
//     desc: 'Organic kale, fresh pineapple, banana, blended and topped with toasted coconut.',
//     benefits: 'Alkalizing • Vitamin C',
//     color: 'border-emerald-500/25 bg-emerald-50/30 text-emerald-800',
//     dotColor: 'bg-emerald-500',
//     image: 'https://images.unsplash.com/photo-1628557006851-a57141f2eefd?q=80&w=400&auto=format&fit=crop',
//   },
//   {
//     name: 'Super Matcha',
//     price: '$9.00',
//     desc: 'Japanese matcha, banana, sweet pineapple, organic spinach, almond butter, and raw vanilla.',
//     benefits: 'Clean Focus • Energy',
//     color: 'border-teal-500/25 bg-teal-50/30 text-teal-800',
//     dotColor: 'bg-teal-500',
//     image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=400&auto=format&fit=crop',
//   },
//   {
//     name: 'Super Caveman',
//     price: '$9.50',
//     desc: 'Banana, mixed berries, almond butter, topped with organic chia seeds. Served with your choice of chocolate or vanilla plant protein.',
//     benefits: 'High Protein • Post Workout',
//     color: 'border-amber-500/25 bg-amber-50/30 text-amber-800',
//     dotColor: 'bg-amber-500',
//     image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=400&auto=format&fit=crop',
//   },
// ];

const bowlCollection = menuProducts.filter((item) => item.category === 'Açaí Bowls').slice(0,4)
// [
//   {
//     name: '305 Bowl',
//     price: '$10.99',
//     desc: 'Açai blended with pineapple and banana. Topped with mixed berries, fresh banana, toasted coconut, hemp granola, and raw honey.',
//     benefits: 'Granola • Fresh Fruit',
//     color: 'border-purple-500/25 bg-purple-50/30 text-purple-800',
//     dotColor: 'bg-purple-500',
//     image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=400&auto=format&fit=crop',
//   },
//   {
//     name: 'Gables Bowl',
//     price: '$11.50',
//     desc: 'Pitaya (dragonfruit) blended with pineapple and banana. Topped with hemp granola, shredded coconut, banana, strawberries, and blueberries.',
//     benefits: 'Vibrant Pitaya • Fiber',
//     color: 'border-pink-500/25 bg-pink-50/30 text-pink-800',
//     dotColor: 'bg-pink-500',
//     image: 'https://images.unsplash.com/photo-1626700051175-6518c4793fde?q=80&w=400&auto=format&fit=crop',
//   },
//   {
//     name: 'Wynwood Bowl',
//     price: '$11.99',
//     desc: 'Açai blended with mixed berries, peanut butter, and maca root. Topped with hemp seeds, cacao nibs, dates, granola, and sliced banana.',
//     benefits: 'Peanut Butter • Superfoods',
//     color: 'border-indigo-500/25 bg-indigo-50/30 text-indigo-800',
//     dotColor: 'bg-indigo-500',
//     image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop',
//   },
//   {
//     name: 'The Hulk Bowl',
//     price: '$11.99',
//     desc: 'Açai blended with organic kale, pineapple, banana, and organic spirulina. Topped with strawberries, hemp granola, coconut, and honey.',
//     benefits: 'Green Blended • Detox',
//     color: 'border-emerald-500/25 bg-emerald-50/30 text-emerald-800',
//     dotColor: 'bg-emerald-500',
//     image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400&auto=format&fit=crop',
//   },
// ];

export default function Smoothies() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <Hero
        title="Fuel Smoothies & Açai Bowls"
        subtitle="All smoothies and bowls are blended raw with pure coconut milk and topped with organic superfoods to fuel your day."
        bgImage="https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=1600&auto=format&fit=crop"
        overlayColor="bg-brand-navy/60"
      />

      {/* Blending Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story text */}
            <div className="space-y-6">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block">
                Pure Blends
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Blended with Organic Coconut Milk
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At Mendez Fuel, our Smoothies are blended raw with pure coconut milk to provide clean, dairy-free hydration and sustained energy. We never use high-fructose syrups, frozen yogurt fillers, or artificial sweeteners.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every smoothie and bowl is sweetened naturally by raw whole fruits, organic dates, and a drizzle of local honey, giving your body pure vitamins and antioxidants.
              </p>
            </div>

            {/* Visual block */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group">
              <img
                src="https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=800&auto=format&fit=crop"
                alt="Beautiful superfood smoothie bowl"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smoothies Collection */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-red font-bold text-xs uppercase tracking-widest block">
              The Menu
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
              Smoothies
            </h2>
            <p className="text-slate-500 font-medium">
              Made fresh to order. Customize with our premium superfood add-ons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smoothieCollection.map((smoothie, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                key={smoothie.name}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="h-52 overflow-hidden relative select-none">
                  <img
                    src={smoothie.image}
                    alt={smoothie.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-brand-navy/95 text-white px-3 py-1 rounded-full text-3xs font-extrabold uppercase tracking-wider shadow-sm">
                    ${smoothie.price}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-base text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                      {smoothie.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4">
                      {smoothie.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-3xs text-brand-red font-bold uppercase tracking-wider">
                      {smoothie.nutrition}
                    </span>
                    <Link
                      to="/order"
                      className="bg-slate-900 hover:bg-brand-red text-white p-2 rounded-full transition-colors"
                      aria-label={`Order ${smoothie.name}`}
                    >
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bowls Collection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-red font-bold text-xs uppercase tracking-widest block">
              Superfood Meals
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
              Açai & Pitaya Bowls
            </h2>
            <p className="text-slate-500 font-medium">
              Loaded with fresh berries, hemp granola, and organic chia seeds, or peanut butter drizzle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bowlCollection.map((bowl, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                key={bowl.name}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="h-52 overflow-hidden relative select-none">
                  <img
                    src={bowl.image}
                    alt={bowl.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-brand-navy/95 text-white px-3 py-1 rounded-full text-3xs font-extrabold uppercase tracking-wider shadow-sm">
                    {bowl.price}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-base text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                      {bowl.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4">
                      {bowl.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-3xs text-brand-red font-bold uppercase tracking-wider">
                      {bowl.benefits}
                    </span>
                    <Link
                      to="/order"
                      className="bg-slate-900 hover:bg-brand-red text-white p-2 rounded-full transition-colors"
                      aria-label={`Order ${bowl.name}`}
                    >
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Own Guide */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(217,30,46,0.1),rgba(255,255,255,0))]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">
                  Interactive Blending
                </span>
                <h2 className="font-display font-extrabold text-3xl text-white tracking-tight leading-none mb-6">
                  Build Your Own Smoothie or Bowl
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Not finding your perfect blend? You have total control. Select your base (Coconut milk, Almond milk, or Oat milk), pick your fresh fruits, and load it up with premium superfoods like Maca, Spirulina, or organic Cacao Nibs.
                </p>
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Build Yours Now</span>
                  <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-100 text-xs">
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800">
                  <span className="font-bold text-brand-red block mb-2">1. Pick Base</span>
                  <p className="text-slate-400 text-3xs">Coconut Milk, Almond Milk, Oat Milk, Acai, or Pitaya.</p>
                </div>
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800">
                  <span className="font-bold text-brand-red block mb-2">2. Pick Fruits</span>
                  <p className="text-slate-400 text-3xs">Banana, Pineapple, Strawberry, Mango, Mixed Berries.</p>
                </div>
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800">
                  <span className="font-bold text-brand-red block mb-2">3. Superfood Boost</span>
                  <p className="text-slate-400 text-3xs">Matcha, Spirulina, Maca, Chia, Hemp Seeds, Cacao, Protein.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
