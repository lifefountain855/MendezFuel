import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-slate-100 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info & Newsletter */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Mendez Fuel Logo"
                className="w-10 h-10 rounded-full border border-slate-700 object-cover"
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                MENDEZ <span className="text-brand-red">FUEL</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Miami's premier lifestyle convenience destination. Fueling your day with fresh blended smoothies, gourmet deli eats, and a world-class rotating craft beer collection.
            </p>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-3">
                Join the Fuel Club
              </h4>
              <form onSubmit={handleSubscribe} className="relative max-w-sm">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-full py-3 pl-5 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bg-brand-red hover:bg-brand-red-dark text-white p-2 rounded-full transition-all"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
              {subscribed && (
                <p className="text-emerald-400 text-xs mt-2 transition-all">
                  Welcome to the club! Check your inbox soon.
                </p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white tracking-wide uppercase text-sm mb-6 pb-2 border-b border-slate-800">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/deli" className="hover:text-brand-red transition-colors">Deli Sandwiches & Eats</Link>
              </li>
              <li>
                <Link to="/smoothies" className="hover:text-brand-red transition-colors">Fuel Smoothies & Bowls</Link>
              </li>
              <li>
                <Link to="/beer" className="hover:text-brand-red transition-colors">Craft Beer, Crowlers & Growlers</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-brand-red transition-colors">View Digital Menu</Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-brand-red transition-colors">Find a Location</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-red transition-colors">Our Story & Mission</Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-brand-red transition-colors">Order Online</Link>
              </li>
            </ul>
          </div>

          {/* Featured Location & Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white tracking-wide uppercase text-sm mb-6 pb-2 border-b border-slate-800">
              Main Location
            </h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-red mt-0.5 shrink-0" />
                <span>
                  3201 Coral Way<br />
                  Miami, FL 33145
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-red shrink-0" />
                <a href="tel:+13054432976" className="hover:text-brand-red transition-colors">
                  (305) 443-2976
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-red shrink-0" />
                <a href="mailto:info@mendezfuelholdings.com" className="hover:text-brand-red transition-colors">
                  info@mendezfuelholdings.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-brand-red mt-0.5 shrink-0" />
                <span>
                  Open Daily: 7:00 AM - 10:00 PM<br />
                  <span className="text-slate-500 text-xs">Gas station pumps open 24/7</span>
                </span>
              </div>
            </div>
          </div>

          {/* Social Channels */}
          <div>
            <h3 className="font-display font-bold text-white tracking-wide uppercase text-sm mb-6 pb-2 border-b border-slate-800">
              Follow Us
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Stay in the loop with tap changes, limited edition sandwich releases, and smoothie specials.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/MendezFuelHoldings/"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 hover:bg-brand-red text-white p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mendezfuel/"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 hover:bg-brand-red text-white p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.752.052 2.73.124 4.07 1.46 4.194 4.194.044.968.052 1.322.052 3.752 0 2.43-.008 2.784-.052 3.752-.124 2.73-1.46 4.07-4.194 4.194-.968.044-1.322.052-3.752.052-2.43 0-2.784-.008-3.752-.052-2.73-.124-4.07-1.46-4.194-4.194-.044-.968-.052-1.322-.052-3.752 0-2.43.008-2.784.052-3.752.124-2.73 1.46-4.07 4.194-4.194.968-.044 1.322-.052 3.752-.052zm.182 2.285c-2.395 0-2.707.01-3.642.053-2.18.1-2.91.83-3.01 3.01-.043.935-.053 1.247-.053 3.642 0 2.395.01 2.707.053 3.642.1 2.18.83 2.91 3.01 3.01.935.043 1.247.053 3.642.053 2.395 0 2.707-.01 3.642-.053 2.18-.1 2.91-.83 3.01-3.01.043-.935.053-1.247.053-3.642 0-2.395-.01-2.707-.053-3.642-.1-2.18-.83-2.91-3.01-3.01-.935-.043-1.247-.053-3.642-.053zm0 3.273a4.442 4.442 0 100 8.884 4.442 4.442 0 000-8.884zm0 6.6a2.158 2.158 0 110-4.316 2.158 2.158 0 010 4.316zm5.282-6.495a1.143 1.143 0 100-2.286 1.143 1.143 0 000 2.286z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://twitter.com/mendezfuel"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 hover:bg-brand-red text-white p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left text-xs text-slate-500">
          <p>&copy; {currentYear} Mendez Fuel. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/privacy" className="hover:underline">Privacy Policy and Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
