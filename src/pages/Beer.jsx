import { motion } from 'framer-motion';
import { Compass, Beer as BeerIcon, Flame, ShieldAlert, Award, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';

const localBreweries = [
  {
    name: 'J. Wakefield Brewing',
    location: 'Wynwood, Miami',
    desc: 'Famous for sour beers and unique culinary flavor infusions, they represent Miami’s creative edge in brewing.',
  },
  {
    name: 'Wynwood Brewing Co.',
    location: 'Wynwood, Miami',
    desc: 'Miami’s very first craft production brewery, celebrated for bringing clean, drinkable styles like La Rubia Blonde to local taps.',
  },
  {
    name: 'Tripping Animals Brewing',
    location: 'Doral, Miami',
    desc: 'Known for their hazy double IPAs, smoothie sours, and incredibly artistic can art and animal themes.',
  },
  {
    name: 'Cigar City Brewing',
    location: 'Tampa, FL',
    desc: 'Florida’s craft pioneer, globally acclaimed for bold wood-aged stouts and their signature citrusy Jai Alai IPA.',
  },
];

const tapList = [
  {
    name: 'El Jefe Coconut Hefeweizen',
    brewery: 'J. Wakefield Brewing',
    style: 'Coconut Hefeweizen',
    abv: '5.5%',
    status: 'Freshly Tapped',
    statusColor: 'bg-emerald-100 text-emerald-800',
  },
  {
    name: 'La Rubia Blonde Ale',
    brewery: 'Wynwood Brewing Co.',
    style: 'Blonde Ale',
    abv: '5.0%',
    status: 'Active Tap',
    statusColor: 'bg-slate-100 text-slate-800',
  },
  {
    name: 'Koala Kuddles Smoothie Sour',
    brewery: 'Tripping Animals',
    style: 'Fruited Pastry Sour',
    abv: '6.0%',
    status: 'Freshly Tapped',
    statusColor: 'bg-emerald-100 text-emerald-800',
  },
  {
    name: 'Jai Alai American IPA',
    brewery: 'Cigar City Brewing',
    style: 'India Pale Ale',
    abv: '7.5%',
    status: 'Low Tap Alert',
    statusColor: 'bg-amber-100 text-amber-800 border border-amber-200',
  },
];

export default function Beer() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <Hero
        title="Craft Beer & Growler Station"
        subtitle="Explore our walk-in Beer Cave featuring rare local Florida releases, imported cans, and a custom rotating growler tap station."
        bgImage="https://images.unsplash.com/photo-1649292529219-381f8f46b976?q=80&w=800&auto=format&fit=crop&"
      />

      {/* Intro & Curation philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Story text */}
            <div className="space-y-6">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block">
                The Beer Cave Experience
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Craft Curation in the Heart of Miami
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Mendez Fuel is not just a convenience stop—it is a destination for beer lovers. Our signature custom walk-in Beer Cave is kept at a freezing 34°F to preserve the freshness and flavor profiles of some of the rarest cans in the country.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We maintain direct relationships with Florida's local craft breweries, securing exclusive releases and limited small-batch kegs. Whether you are searching for a heavy double dry-hopped IPA, a fruited pasture sour, or a barrel-aged imperial stout, our beer cave has something to delight your palate.
              </p>
            </div>

            {/* Beer Cave Image */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group">
              <img
                src="https://images.unsplash.com/photo-1471421298428-1513ab720a8e?q=80&w=800&auto=format&fit=crop"
                alt="Craft beer bottles and cans selection"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Growlers & Crowlers Sizes Showcase */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
              Growlers & Crowlers Explained
            </h2>
            <p className="text-slate-500 font-medium">
              Take draft beer fresh from the tap straight to your dining room table or beach blanket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Size 1: The Crowler */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">Single Use Can</span>
                <h3 className="font-display font-extrabold text-xl text-slate-900 mb-4">32oz Big Ass Can Crowler</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Perfect for a single evening session. We seal your selected craft draft fresh from the tap into a recyclable aluminum 32oz can on the spot. Keeps beer carbonated for up to 3 weeks unopened.
                </p>
              </div>
              <span className="font-display font-bold text-lg text-brand-navy">Recyclable & Portable</span>
            </div>

            {/* Size 2: Half Growler */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">Reusable Glass</span>
                <h3 className="font-display font-extrabold text-xl text-slate-900 mb-4">32oz Glass Growler</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  A classic reusable amber glass growler. Features a hermetically sealing cap. Bring it back empty and washed for sanitization, and we will refill it with any beer currently on tap at a discount.
                </p>
              </div>
              <span className="font-display font-bold text-lg text-brand-navy">Eco-friendly Refills</span>
            </div>

            {/* Size 3: Full Growler */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-2">Shared Pour</span>
                <h3 className="font-display font-extrabold text-xl text-slate-900 mb-4">64oz Glass Growler</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  The ultimate container for weekend gatherings or barbecue hosting. Safely holds 4 full pints of draft beer. Featuring double amber UV shielding glass to keep hops crisp and fresh.
                </p>
              </div>
              <span className="font-display font-bold text-lg text-brand-navy">Perfect for Parties</span>
            </div>

          </div>
        </div>
      </section>

      {/* Rotating Tap List Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-red font-bold text-xs uppercase tracking-widest block">
              What's Flowing
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
              Rotating Tap List
            </h2>
            <p className="text-slate-500 font-medium">
              We clean our draft lines meticulously between every single keg change. Here is what is on tap right now.
            </p>
          </div>

          {/* Interactive Tap widget */}
          <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg space-y-4">
            {tapList.map((tap, index) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={tap.name}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group hover:border-slate-200 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                    <BeerIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                      {tap.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      {tap.brewery} • {tap.style}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 border-t border-slate-50 pt-4 sm:border-t-0 sm:pt-0 shrink-0">
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-bold block">ABV</span>
                    <span className="font-display font-extrabold text-sm text-slate-800">{tap.abv}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-3xs font-extrabold uppercase tracking-widest ${tap.statusColor}`}>
                    {tap.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brewery Partners Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
              Featured Florida Breweries
            </h2>
            <p className="text-slate-500 font-medium">
              We proudly partner with regional brewers to bring you the best Florida has to offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localBreweries.map((brew) => (
              <div key={brew.name} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <span className="text-brand-red font-bold text-3xs uppercase tracking-widest block mb-1">
                  {brew.location}
                </span>
                <h3 className="font-display font-bold text-base text-slate-900 mb-3">{brew.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{brew.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(217,30,46,0.1),rgba(255,255,255,0))]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Heading to a Party or Beach?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Order fresh growlers filled from our tap list, or reserve limited release four-packs of rare craft cans for easy curbside pickup.
          </p>
          <div className="pt-2">
            <Link
              to="/order"
              className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all"
            >
              <span>Order Growlers & Cans</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
