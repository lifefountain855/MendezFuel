import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Fuel } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Deli', path: '/deli' },
    { name: 'Smoothies & Bowls', path: '/smoothies' },
    { name: 'Craft Beer', path: '/beer' },
    { name: 'Menu', path: '/menu' },
    { name: 'Locations', path: '/locations' },
    { name: 'About', path: '/about' },
  ];

  // Check if current page is Home. If not, navbar is always scrolled (solid) for readability.
  const isHomePage = location.pathname === '/';
  const navbarActive = isScrolled || !isHomePage;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navbarActive
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-900 border-b border-slate-100'
            : 'bg-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-brand-navy shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.jpg"
                  alt="Mendez Fuel Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight">
                MENDEZ <span className={navbarActive ? 'text-brand-red' : 'text-brand-red'}>FUEL</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-medium tracking-wide text-sm transition-colors duration-200 hover:text-brand-red relative py-1 ${
                      isActive
                        ? navbarActive
                          ? 'text-brand-navy font-semibold'
                          : 'text-white font-semibold'
                        : navbarActive
                        ? 'text-slate-600'
                        : 'text-slate-200'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                          navbarActive ? 'bg-brand-red' : 'bg-white'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Order CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/order"
                className={`px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg ${
                  navbarActive
                    ? 'bg-brand-red text-white hover:bg-brand-red-dark hover:scale-102'
                    : 'bg-white text-brand-navy hover:bg-slate-100 hover:scale-102'
                }`}
              >
                Order Online
              </Link>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="flex lg:hidden items-center space-x-4">
              <Link
                to="/order"
                className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                  navbarActive
                    ? 'bg-brand-red text-white'
                    : 'bg-white text-brand-navy'
                }`}
              >
                Order
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  navbarActive ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-white shadow-xl border-b border-slate-200 lg:hidden max-h-[calc(100vh-65px)] overflow-y-auto"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-brand-navy/5 text-brand-navy'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-brand-red'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/order"
                  className="block w-full py-3 text-center bg-brand-red text-white font-bold rounded-lg uppercase tracking-wider hover:bg-brand-red-dark transition-all"
                >
                  Order Online
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
