import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-stone-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-rose-700 dark:text-rose-500 font-medium tracking-widest uppercase mb-4">Investment</h3>
          <h2 className="text-4xl md:text-5xl font-playfair text-stone-900 dark:text-stone-100">Services & Packages</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative group bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 to-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" />
              
              <div className="w-14 h-14 bg-stone-50 dark:bg-stone-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-50 dark:group-hover:bg-rose-900/30 transition-colors">
                <service.icon className="w-7 h-7 text-stone-800 dark:text-stone-200 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-playfair text-stone-900 dark:text-stone-100 mb-2">{service.title}</h3>
              <p className="text-3xl font-light text-amber-700 dark:text-amber-500 mb-8">{service.price}</p>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600 dark:text-stone-400 text-sm">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="block w-full text-center py-3 border border-stone-200 dark:border-stone-600 text-stone-800 dark:text-stone-200 rounded-lg hover:bg-stone-900 dark:hover:bg-stone-700 hover:text-white transition-colors duration-300 uppercase text-sm tracking-widest"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center bg-stone-50 dark:bg-stone-800 p-8 rounded-2xl max-w-4xl mx-auto border border-stone-100 dark:border-stone-700">
          <h4 className="font-playfair text-2xl mb-2 text-stone-900 dark:text-stone-100">Need a Custom Package?</h4>
          <p className="text-stone-600 dark:text-stone-300 mb-6">Whether it's for a destination wedding or a large bridal party, I can create a bespoke package just for you.</p>
          <a href="#contact" className="text-rose-700 dark:text-rose-400 font-medium hover:text-rose-800 dark:hover:text-rose-300 border-b border-rose-700 dark:border-rose-400 pb-0.5">Contact for Consultation &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default Services;