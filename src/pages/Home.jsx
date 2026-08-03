import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, Flame, Award, Heart, ShoppingBag, Eye } from 'lucide-react';
import { menuProducts } from './Menu.jsx';
import { locationsData } from './Locations.jsx';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Local Foodie',
    content: "Mendez Fuel is an absolute Miami staple! Their cold-pressed green juice keeps me energized, and the sandwiches are gourmet-level. You wouldn't expect this from a gas station, but it's a 5-star experience.",
    rating: 5,
  },
  {
    name: 'David K.',
    role: 'Craft Beer Enthusiast',
    content: "The craft beer selection here is hands down one of the best in Coral Way. Getting fresh local growler fills while filling up my gas tank is a game-changer.",
    rating: 5,
  },
  {
    name: 'Elena R.',
    role: 'Daily Regular',
    content: "The Coral Way Club sandwich is my absolute favorite. Quick service, premium ingredients, and the staff treats you like family. Modern, clean, and highly recommended!",
    rating: 5,
  },
];

const bestsellers = menuProducts.filter((product) => product.tag === 'best_seller');

const categories = [
  {
    title: 'Cold-Pressed Fuel Juice',
    description: '100% organic, hydraulic cold-pressed elixirs crafted raw for maximum nutritional benefit.',
    image: 'https://static.wixstatic.com/media/472773_307e8fd65f844fd1bb035710e4f00982~mv2_d_2676_2702_s_4_2.jpg/v1/fill/w_980,h_535,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/472773_307e8fd65f844fd1bb035710e4f00982~mv2_d_2676_2702_s_4_2.jpg',
    link: '/juice',
    color: 'border-emerald-500/20 text-emerald-800 bg-emerald-50/50 hover:bg-emerald-50',
    btnColor: 'bg-emerald-700 hover:bg-emerald-800',
  },
  {
    title: 'Gourmet Deli & Eats',
    description: 'Freshly roasted meats, organic veggies, and artisanal spreads on local fresh-baked bread.',
    image: 'https://static.wixstatic.com/media/472773_279c95df503e4d8e849b541f0746f054~mv2.jpg/v1/fit/w_1740,h_763,q_90,enc_avif,quality_auto/472773_279c95df503e4d8e849b541f0746f054~mv2.jpg',
    link: '/deli',
    color: 'border-amber-500/20 text-amber-800 bg-amber-50/50 hover:bg-amber-50',
    btnColor: 'bg-amber-700 hover:bg-amber-800',
  },
  {
    title: 'Curated Craft Beer',
    description: 'Fill up your growlers or pick up rare local and imported cans from our signature beer cave.',
    image: 'https://static.wixstatic.com/media/472773_b50f4d723cc54d75a211f4c81e64ad12~mv2.png/v1/fit/w_890,h_763,q_90,enc_avif,quality_auto/472773_b50f4d723cc54d75a211f4c81e64ad12~mv2.png',
    link: '/beer',
    color: 'border-slate-500/20 text-slate-800 bg-slate-50/50 hover:bg-slate-50',
    btnColor: 'bg-slate-700 hover:bg-slate-800',
  },
];

const instagramFeed = [
  { id: 1, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop', likes: 142, comments: 12 },
  { id: 2, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=400&auto=format&fit=crop', likes: 210, comments: 24 },
  { id: 3, image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=400&auto=format&fit=crop', likes: 185, comments: 19 },
  { id: 4, image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=400&auto=format&fit=crop', likes: 320, comments: 45 },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="w-full">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        {/* Background Image Zooming on Load */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
          style={{ backgroundImage: `url("/mendez_hero.png")` }}
        />

        {/* Soft Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/60" />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-red text-white shadow-md animate-pulse">
              <Flame size={12} className="mr-1.5" /> Miami's Premium Fuel Destination
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white drop-shadow-lg">
              MENDEZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-rose-400">FUEL</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Elevate your daily routine with fresh organic cold-pressed juices, gourmet deli eats, and a signature craft beer cave.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                to="/order"
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-bold text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-red/35 flex items-center justify-center space-x-2"
              >
                <span>Order Online</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/menu"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center"
              >
                Explore Menu
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Down-Arrow Hint */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-85">
          <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-6 border-b-2 border-r-2 border-slate-300 transform rotate-45"
          />
        </div>
      </section>

      {/* 2. FEATURED CATEGORIES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
              Fueling Your Body & Mind
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              We've redefined convenience by sourcing the highest-quality local ingredients for our signature menus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col rounded-3xl overflow-hidden border ${category.color} transition-all duration-300 shadow-md hover:shadow-xl group`}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-slate-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {category.description}
                  </p>
                  <Link
                    to={category.link}
                    className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-widest ${category.btnColor} self-start transition-all`}
                  >
                    <span>Discover More</span>
                    <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[71/40] rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white">
                {/* <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
                  alt="Mendez Fuel Cafe Vibe"
                  className="w-full h-full object-cover"
                /> */}
                <iframe src="https://player.vimeo.com/video/357927443?title=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963" width="700" height="395" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Mendez Fuel" data-ready="true"></iframe>
              </div>
              {/* Decorative Red Accent Box */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-red/10 rounded-3xl -z-10 animate-bounce" style={{ animationDuration: '6s' }} />
              {/* Decorative Dark Navy Box */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-navy/5 rounded-3xl -z-10" />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest flex items-center">
                <Award size={16} className="mr-2" /> Serving Miami Since 2011
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Not Your Average Gas Station Experience
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Mendez Fuel was founded in Miami with a clear purpose: to bridge the gap between absolute convenience and raw health. Over the last decade, we have grown from a traditional fuel station into a multi-faceted wellness hub, a craft beer sanctuary, and a destination for foodies seeking honest, hand-prepared culinary creations.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Whether you stop by to refuel your car, fill a growler with rare local IPA, or grab an organic cold-pressed wellness shot, you'll immediately feel our dedication to freshness, quality, and hospitality.
              </p>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center text-brand-navy font-bold hover:text-brand-red group text-sm uppercase tracking-wider transition-colors"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. BESTSELLERS GALLERY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-red font-bold text-xs uppercase tracking-widest">
              Fan Favorites
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
              Featured Menu Highlights
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Explore the signature recipes and elixirs our customers order daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestsellers.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md border-1 border-brand-red hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with Hover zoom */}
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-brand-red text-white font-bold text-2xs uppercase tracking-wider px-3 py-1 rounded-full shadow-md pr-10">
                    {item.tag.replace('_', ' ')}
                  <div className="absolute bottom-1 left-34">
                      <div className="bg-brand-red brightness-190 text-white p-1 rounded-full shadow-lg">
                        <Star size={16} fill="currentColor" />
                      </div>
                    </div>
                  </span>
                </div>

                {/* Details */}
                <div className="p-6">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <div className="flex justify-between items-center">
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand-red transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-display font-bold text-brand-navy">
                      ${item.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand-navy hover:bg-brand-red text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-md"
            >
              <span>Explore Complete Menu</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LOCATIONS PREVIEW */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

            {/* Header/Callout Column */}
            <div className="lg:col-span-1 space-y-6">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block">
                Find Your Fuel
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Three Miami Spots to Serve You
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Whether you are driving through Coral Way, visiting Gables, or heading out to Key Biscayne, there is a Mendez Fuel station ready to energize your trip.
              </p>
              <div className="pt-2">
                <Link
                  to="/locations"
                  className="inline-flex items-center px-6 py-3 rounded-full border-2 border-brand-navy text-brand-navy font-bold text-sm hover:bg-brand-navy hover:text-white transition-all uppercase tracking-wider"
                >
                  <span>All Maps & Info</span>
                  <MapPin size={16} className="ml-2 animate-bounce" />
                </Link>
              </div>
            </div>

            {/* Quick Cards Column (Takes up 2 cols) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

              {locationsData.map((location, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{location.name}</h3>
                    <p className="text-slate-500 text-sm mb-4">{location.address}</p>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-6 flex items-center">
                      <span className="w-2 h-12 rounded-full bg-emerald-500 mr-2 inline-block"></span> {location.amenities.join(" • ")}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                    <span className="text-xs text-slate-400 font-medium">{location.hours}</span>
                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-brand-red hover:underline uppercase tracking-wider"
                    >
                      Directions
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. CUSTOMER TESTIMONIALS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-red font-bold text-xs uppercase tracking-widest">
              Reviews
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
              Loved by Miami Locals
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Here is what our daily community members have to say about the Mendez Fuel experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <motion.div
                key={test.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={"bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative flex flex-col justify-between"}
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center space-x-1 text-amber-500 mb-6">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                    "{test.content}"
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{test.name}</h4>
                  <span className="text-xs text-slate-400 font-semibold">{test.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM/SOCIAL FEED PREVIEW */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-brand-red font-bold text-xs uppercase tracking-widest">
              Stay Connected
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
              Follow Us @MendezFuel
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              Share your fuel experience with us! Tag us in your juice, sandwiches, and beer hauls.
            </p>
          </div>

          {/* Insta Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramFeed.map((post) => (
              <a
                href="https://www.instagram.com/mendezfuel/"
                target="_blank"
                rel="noreferrer"
                key={post.id}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm block border border-white"
              >
                <img
                  src={post.image}
                  alt={`Instagram Post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 text-white text-sm font-bold">
                  <span className="flex items-center space-x-1.5 hover:scale-105 transition-transform">
                    <Heart size={18} fill="currentColor" className="text-rose-500" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1.5 hover:scale-105 transition-transform">
                    <ShoppingBag size={18} />
                    <span>Buy</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL-TO-ACTION */}
      <section className="relative py-28 bg-brand-navy text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,30,46,0.15),rgba(255,255,255,0))]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight leading-none">
            Ready to Fuel Your Day?
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Order your raw cold-pressed juices, freshly toasted gourmet subs, or local craft brew crowlers for immediate pickup or delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/order"
              className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-bold text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-red/35"
            >
              Order Online Now
            </Link>
            <Link
              to="/locations"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Find a Station
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
