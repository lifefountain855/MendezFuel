import { motion } from 'framer-motion';
import { Award, Compass, Heart, Users, ShieldCheck, Zap } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: <ShieldCheck size={24} className="text-brand-red" />,
    title: 'Uncompromised Freshness',
    desc: 'Whether it is cold-pressing raw juice daily or slicing organic roasted meats at the deli, freshness is our highest law.',
  },
  {
    icon: <Zap size={24} className="text-brand-red" />,
    title: 'Hospitality Refined',
    desc: "We greet every customer with warmth and speed. Elevating your day is what keeps our team fueled.",
  },
  {
    icon: <Compass size={24} className="text-brand-red" />,
    title: 'Curated Choices',
    desc: 'From hard-to-find local double dry-hopped IPAs to custom vegan sandwich sauces, we curate options that excite.',
  },
  {
    icon: <Users size={24} className="text-brand-red" />,
    title: 'Community First',
    desc: 'We are proudly Miami-born and breed. We support local breweries, regional farms, and our neighborhood initiatives.',
  },
];

const milestones = [
  { year: '2011', title: 'The Spark', desc: 'Mendez Fuel opens its flagship Coral Way station, reimagining a local service station as a warm, upscale community convenience node.' },
  { year: '2014', title: 'The Fuel Juice', desc: 'We made luxurous, good tasting smoothies from organic ingredients.' },
  { year: '2017', title: 'The Craft Cave', desc: 'We build our signature walk-in Beer Cave, partnering with local breweries to offer fresh craft growler & crowler tap fills.' },
  { year: '2021', title: 'Gourmet Kitchen Expansion', desc: 'We expand our deli menu with vegan-friendly selections, artisanal toasted sandwiches, and house-made nutritional sauces.' },
  { year: '2026', title: 'A New Digital Era', desc: 'We launch our brand-new modern web ordering experience, bringing our complete catalog of convenience, beer, and juice to your doorstep.' },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <Hero
        title="Our Story"
        subtitle="More than just a convenience store."
        bgImage="https://static.wixstatic.com/media/472773_29a5de3827694bceac26bbe908575b56~mv2_d_2880_2304_s_2.jpg/v1/fill/w_980,h_911,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/472773_29a5de3827694bceac26bbe908575b56~mv2_d_2880_2304_s_2.jpg"
      />

      {/* Narrative Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story text */}
            <div className="space-y-6">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block">
                How We Started
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Reimagining the Neighborhood Pit Stop
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Making clean eating and drinking both accessible and delicious to Miami locals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Michael and Andrew Mendez, the brother duo behind Mendez Fuel, have revamped the conventional idea of what a gas station should be. Step inside our three locations and witness some of the cleanest gas stations in Miami. Mendez Fuel flagship convenience store located at 3201 Coral Way, features an impressive lineup of local and popular craft beer, a growler and crowler station, along with our own line of organic cold-pressed juices, Fuel Juice Miami, and gourmet breakfast and lunch menus.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Mendez Fuel is all about tasting good and feeling good. Whether you are taking a bite out of one of our many açaí bowls or expanding your beer palette with a locally brewed IPA, expect to find high-caliber customer service and products, which have not been the hallmarks of convenience stores in the past.
              </p>
            </div>

            {/* Narrative Image Grid */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop"
                  alt="Prepping fresh food at Mendez Fuel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-navy text-white p-6 rounded-2xl shadow-lg max-w-[240px] hidden sm:block">
                <span className="font-display font-bold text-3xl block text-brand-red">15+</span>
                <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Years of community trust in South Florida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
              Values That Drive Us
            </h2>
            <p className="text-slate-500 font-medium">
              We guide every decision, recipe, and customer greeting by these foundational pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-brand-red/5 flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-brand-red font-bold text-xs uppercase tracking-widest">
              Our Milestones
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
              The Journey of Mendez Fuel
            </h2>
            <p className="text-slate-500 font-medium">
              From a single humble gas pump to Miami’s beloved wellness and gourmet pit-stop.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

            <div className="space-y-16 md:space-y-24">
              {milestones.map((m, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col md:flex-row items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content Column */}
                    <div className="w-full md:w-1/2 flex justify-center px-4 md:px-8">
                      <div className={`bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm w-full ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        <span className="font-display font-extrabold text-3xl text-brand-red block mb-2">{m.year}</span>
                        <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">{m.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    {/* Timeline Node (Sphere) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-brand-navy border-4 border-white shadow-md z-10 hidden md:block" />

                    {/* Empty Space Column (to offset timeline) */}
                    <div className="w-full md:w-1/2 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Showcase / CTA */}
      <section className="py-24 bg-brand-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(217,30,46,0.1),rgba(255,255,255,0))]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-none">
            Join the Lifestyle Revolution
          </h2>
          <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Stop by today to refuel, request a craft beer growler filling, or order fresh raw cold-pressed organic juice. We can't wait to serve you!
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/locations"
              className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all"
            >
              Find a Station
            </Link>
            <Link
              to="/order"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all backdrop-blur-sm"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
