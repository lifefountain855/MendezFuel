import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Compass, Navigation, PhoneCall, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';

export const locationsData = [
  {
    name: 'Coral Way (Flagship)',
    address: '3201 Coral Way, Miami, FL 33145',
    phone: '(305) 443-2976',
    phoneRaw: '+13054432976',
    hours: 'Deli/Juice: 7:00 AM - 10:00 PM Daily',
    pumpHours: 'Pumps: Open 24 Hours / 7 Days',
    mapLink: 'https://maps.google.com/?q=Mendez+Fuel+3201+Coral+Way+Miami+FL',
    amenities: ['Juice Bar', 'Full Deli Kitchen', 'Walk-in Beer Cave', 'Air/Vacuum', 'Premium Shell Fuel'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Coral Terrace',
    address: '7490 Coral Way Miami, FL 33155',
    phone: '(305) 443-2976',
    phoneRaw: '+13054432976',
    hours: 'Deli/Juice: 7:00 AM - 10:00 PM Daily',
    pumpHours: 'Pumps: Open 24 Hours / 7 Days',
    mapLink: 'https://maps.google.com/?q=Mendez+Fuel+7490+Coral+Way+Miami+FL',
    amenities: ['Juice Bar', 'Hot/Cold Deli', 'Beer Selection', 'Premium Shell Fuel'],
    image: 'https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'MIA',
    address: '701 NW 72nd Ave Miami, FL 33126',
    phone: '(305) 443-2976',
    phoneRaw: '+13054432976',
    hours: 'Deli/Juice: 7:00 AM - 10:00 PM Daily',
    pumpHours: 'Pumps: Open 24 Hours / 7 Days',
    mapLink: 'https://maps.google.com/?q=Mendez+Fuel+701+NW+72nd+Ave+Miami+FL',
    amenities: ['Juice Bar', 'Sandwich Counter', 'Beach Supplies', 'Shell Fuel'],
    image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Locations() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <Hero
        title="Our Locations"
        subtitle="Three convenient stations located in Coral Way, Coral Gables, and Key Biscayne to serve the Miami community."
        bgImage="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Main Grid: Location details and Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left: Cards column */}
            <div className="lg:col-span-2 space-y-12">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">
                Find Mendez Fuel
              </span>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight leading-none mb-8">
                Miami Service Locations
              </h2>

              <div className="space-y-8">
                {locationsData.map((loc, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={loc.name}
                    className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
                  >
                    {/* Visual block */}
                    <div className="md:col-span-2 h-48 rounded-2xl overflow-hidden shadow border border-white">
                      <img
                        src={loc.image}
                        alt={loc.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Details block */}
                    <div className="md:col-span-3 space-y-4">
                      <h3 className="font-display font-extrabold text-xl text-slate-900">{loc.name}</h3>

                      <div className="space-y-2 text-xs text-slate-600">
                        <div className="flex items-center space-x-2.5">
                          <MapPin size={15} className="text-brand-red shrink-0" />
                          <span>{loc.address}</span>
                        </div>
                        <div className="flex items-center space-x-2.5">
                          <Phone size={15} className="text-brand-red shrink-0" />
                          <a href={`tel:${loc.phoneRaw}`} className="hover:underline hover:text-brand-red">{loc.phone}</a>
                        </div>
                        <div className="flex items-center space-x-2.5">
                          <Clock size={15} className="text-brand-red shrink-0" />
                          <div>
                            <p className="font-semibold">{loc.hours}</p>
                            <p className="text-slate-400 text-3xs font-medium">{loc.pumpHours}</p>
                          </div>
                        </div>
                      </div>

                      {/* Amenities chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {loc.amenities.map((amenity) => (
                          <span key={amenity} className="inline-flex items-center bg-white border border-slate-200 text-slate-500 text-3xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                            <CheckCircle size={8} className="text-brand-red mr-1 shrink-0" /> {amenity}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center space-x-3 pt-4 border-t border-slate-200/50">
                        <a
                          href={loc.mapLink}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full flex items-center shadow shadow-brand-red/10 transition-colors"
                        >
                          <Navigation size={12} className="mr-1.5" /> Directions
                        </a>
                        <a
                          href={`tel:${loc.phoneRaw}`}
                          className="bg-brand-navy hover:bg-brand-red text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full flex items-center transition-colors"
                        >
                          <PhoneCall size={12} className="mr-1.5" /> Call Store
                        </a>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Embedded map column */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-slate-50 rounded-3xl p-4 border border-slate-100 shadow-md">
                <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-slate-800 mb-4 px-2">
                  Coral Way Google Map
                </h4>
                <div className="rounded-2xl overflow-hidden shadow border border-white h-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1818290317585!2d-80.24859942369677!3d25.75053381504938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7ea2fb44bfd%3A0xe9f7956bc229d91f!2sMendez%20Fuel%20Co.!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Mendez Fuel Flagship Google Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Ordering CTA */}
      <section className="py-20 bg-brand-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(217,30,46,0.1),rgba(255,255,255,0))]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Want Curbside Pickup?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Skip the convenience line. Pre-order your fuel snacks, cold press juices, and gourmet breakfast subs online and grab them when you arrive.
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
