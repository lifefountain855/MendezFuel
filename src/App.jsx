import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// Pages
import Home from './pages/Home.jsx';
import Deli from './pages/Deli.jsx';
import Smoothies from './pages/Smoothies.jsx';
import Beer from './pages/Beer.jsx';
import Menu from './pages/Menu.jsx';
import Locations from './pages/Locations.jsx';
import About from './pages/About.jsx';
import OrderOnline from './pages/OrderOnline.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Auth from './pages/Auth.jsx';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deli" element={<Deli />} />
            <Route path="/smoothies" element={<Smoothies />} />
            <Route path="/beer" element={<Beer />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
            <Route path="/order" element={<OrderOnline />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/admin-login" element={<Auth />} />
            {/* Catch-all redirects to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
