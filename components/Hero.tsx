import React from 'react';
import { motion } from 'framer-motion';
import ThreeHero from './ThreeHero';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-50 dark:bg-stone-950 transition-colors duration-500">
      {/* 3D Background */}
      <ThreeHero />

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl tracking-[0.3em] uppercase text-stone-500 dark:text-stone-400 mb-4 font-medium">
            Bridal Makeup Artist
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-playfair font-medium text-stone-900 dark:text-stone-100 mb-6 relative drop-shadow-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-stone-800 via-rose-900 to-stone-800 dark:from-stone-200 dark:via-rose-400 dark:to-stone-200 animate-gradient-x">
              Shalini Koshta
            </span>
          </h1>
          <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Crafting timeless beauty for your most cherished moments. 
            Elevate your special day with artistry that lasts forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-rose-900 dark:bg-rose-800 text-white font-medium tracking-wide hover:bg-rose-800 dark:hover:bg-rose-700 transition-colors duration-300 rounded-full shadow-xl"
            >
              Book Your Transformation
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-white dark:bg-transparent text-stone-900 dark:text-stone-200 border border-stone-200 dark:border-stone-700 font-medium tracking-wide hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors duration-300 rounded-full shadow-md"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-6 h-6 text-stone-400 dark:text-stone-600" />
      </motion.div>
    </section>
  );
};

export default Hero;