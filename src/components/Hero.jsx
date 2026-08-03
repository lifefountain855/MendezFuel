import { motion } from 'framer-motion';

export default function Hero({ title, subtitle, bgImage, height = 'h-[50vh]', overlayColor = 'bg-brand-navy/60' }) {
  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden bg-slate-900`}>
      {/* Background Image with Zoom-in on mount */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay for contrast and readability */}
      <div className={`absolute inset-0 ${overlayColor} backdrop-blur-[2px]`} />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight leading-none mb-6 drop-shadow-md"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto drop-shadow"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Modern Wave or Slope Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white pointer-events-none" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
    </div>
  );
}
