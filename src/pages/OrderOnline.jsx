import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronDown, CheckCircle, Navigation, Clock, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero.jsx';

const faqData = [
  {
    question: 'How does curbside pickup work?',
    answer: 'Simply place your order online, choose "Curbside Pickup" at checkout, and input your car model/color. Once you pull into our designated fuel store parking stalls, click the link in your SMS confirmation or call us directly. A team member will bring your freshly packed items out to your trunk immediately.',
  },
  {
    question: 'What delivery platforms do you partner with?',
    answer: 'We are officially integrated with UberEats, DoorDash, and Grubhub. Delivery is available within a 10-mile radius surrounding our Coral Way, Coral Gables, and Key Biscayne stations.',
  },
  {
    question: 'How do I order a custom cold-pressed juice cleanse?',
    answer: 'Our 1-day, 3-day, and 5-day juice cleanses are pressed raw to order. Because we clean and press them specifically for you, we require a 24-hour advance booking. You can order them via the Juice page or order directly on our digital cart.',
  },
  {
    question: 'Can I rent kegs or buy multiple growlers for events?',
    answer: 'Yes! We support local parties and office events. We rent out kegs of Florida craft beers (complete with tap gear and tubs) and offer bulk 64oz growler fills. Please call our Coral Way beer desk 48 hours in advance to check keg availability and schedule your fill.',
  },
];

const platforms = [
  {
    name: 'UberEats',
    logo: '🍔',
    link: 'https://www.ubereats.com/',
    desc: 'Order sandwiches, salads, cold-press juices, and fresh craft cans directly to your door.',
    bg: 'hover:border-emerald-500/30 hover:bg-emerald-50/10',
  },
  {
    name: 'DoorDash',
    logo: '🚗',
    link: 'https://www.doordash.com/',
    desc: 'Fast regional delivery. Full lunch menu, juice cleanses, growlers, and convenience essentials.',
    bg: 'hover:border-red-500/30 hover:bg-red-50/10',
  },
  {
    name: 'Grubhub',
    logo: '🥡',
    link: 'https://www.grubhub.com/',
    desc: 'Convenient delivery across Coral Gables and Miami. Select your local Mendez station menu.',
    bg: 'hover:border-orange-500/30 hover:bg-orange-50/10',
  },
];

const pickupSteps = [
  {
    step: '1',
    title: 'Order & Customise',
    desc: 'Select your cold-pressed elixirs, custom sandwich bread, and tap fillings on our platform.',
  },
  {
    step: '2',
    title: 'Drive & Park',
    desc: 'Navigate to your selected station. Park in one of our marked Curbside Pickup spots.',
  },
  {
    step: '3',
    title: 'We Bring It Out',
    desc: 'Let us know you have arrived by calling, and we will place the order directly into your vehicle.',
  },
];

export default function OrderOnline() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  return (
    <div className="w-full">
      {/* Page Hero */}
      <Hero
        title="Order Online"
        subtitle="Get fresh food, cold-pressed juices, and craft beers delivered directly to your doorstep or ready for curbside pickup."
        bgImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Main Order Choice Panels */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Delivery Platforms Card */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-brand-red font-bold text-xs uppercase tracking-widest block">
                  Doorstep Delivery
                </span>
                <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-4">
                  Order via Delivery Apps
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We are officially listed on your favorite delivery apps. Select your nearest Mendez Fuel store to browse hot sandwiches, organic cold-pressed wellness juices, craft cans, and convenience items.
                </p>

                <div className="space-y-4 pt-4">
                  {platforms.map((plat) => (
                    <a
                      key={plat.name}
                      href={plat.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`block bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs transition-all ${plat.bg} flex items-start space-x-4`}
                    >
                      <span className="text-3xl shrink-0">{plat.logo}</span>
                      <div>
                        <h3 className="font-display font-bold text-slate-800 text-base">{plat.name}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed mt-1">{plat.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* In-Store / Curbside Pickup Guide Card */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-brand-red font-bold text-xs uppercase tracking-widest block">
                  Quick Grab & Go
                </span>
                <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-4">
                  Curbside & In-Store Pickup
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Skip all delivery fees and service charges. Pre-order directly on our website cart, drive to our shop, and grab your order in minutes.
                </p>

                <div className="space-y-6">
                  {pickupSteps.map((step) => (
                    <div key={step.step} className="flex space-x-4">
                      <div className="w-8 h-8 rounded-full bg-brand-navy text-white font-bold flex items-center justify-center shrink-0 text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-slate-800 text-sm">{step.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200/50 mt-8">
                <button className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm uppercase tracking-wider py-4 rounded-full shadow-lg shadow-brand-red/10 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingBag size={18} />
                  <span>Start Pickup Order</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-red font-bold text-xs uppercase tracking-widest block">
              Any Questions?
            </span>
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
              Ordering FAQs
            </h2>
            <p className="text-slate-500 font-medium">
              Everything you need to know about our packaging, delivery range, and group orders.
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/60 shadow-xs overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left font-display font-bold text-slate-800 hover:text-brand-red transition-colors flex items-center justify-between"
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-slate-400 shrink-0 ml-4"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-slate-500 text-xs leading-relaxed border-t border-slate-50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
