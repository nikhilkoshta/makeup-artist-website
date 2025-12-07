import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-stone-900 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl ring-1 ring-stone-100 dark:ring-stone-800">
              <img 
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop" 
                alt="Shalini Koshta Makeup Artist" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-rose-100 dark:bg-rose-900/20 -z-10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-amber-100 dark:bg-amber-900/20 -z-10 rounded-full blur-3xl opacity-50"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-rose-700 dark:text-rose-500 font-medium tracking-widest uppercase mb-4">About Me</h3>
            <h2 className="text-4xl md:text-5xl font-playfair text-stone-900 dark:text-stone-100 mb-8 leading-tight">
              Blending Tradition with <br/> <span className="italic text-stone-500 dark:text-stone-400">Modern Elegance</span>
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-6 leading-relaxed text-lg">
              Shalini Koshta is a passionate bridal makeup artist from Pimpri-Chinchwad, specializing in natural glow, HD bridal looks, and cultural fusion styles for Indian weddings.
            </p>
            <p className="text-stone-700 dark:text-stone-300 mb-10 leading-relaxed text-lg">
              With over 5 years of experience in the beauty industry, she understands that every bride is unique. Her signature style focuses on enhancing your natural features rather than masking them, ensuring you look like the best version of yourself on your special day.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-amber-700 dark:text-amber-500" />
                    <span className="text-3xl font-playfair font-bold text-stone-900 dark:text-stone-100">{stat.value}</span>
                  </div>
                  <span className="text-sm text-stone-500 dark:text-stone-400 uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;