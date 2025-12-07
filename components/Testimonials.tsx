import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-950 dark:bg-black text-white overflow-hidden relative transition-colors duration-500">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-amber-700 rounded-full blur-[100px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-900 rounded-full blur-[120px] opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair mb-4 text-white">Love Notes</h2>
          <p className="text-stone-400 font-light">Words from our beautiful brides</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-amber-600 mb-6 opacity-80" />
              <p className="text-stone-200 leading-relaxed mb-8 italic">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-amber-600/50" />
                <div>
                  <h4 className="font-playfair text-lg text-white">{t.name}</h4>
                  <span className="text-xs uppercase tracking-wider text-amber-600">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;