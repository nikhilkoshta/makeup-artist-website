import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';
import { X, Eye } from 'lucide-react';

// Define the item type based on constants
type PortfolioItem = typeof PORTFOLIO_ITEMS[0];

interface TiltCardProps {
  item: PortfolioItem;
  onClick: (item: PortfolioItem) => void;
}

// Tilt Card Component
const TiltCard: React.FC<TiltCardProps> = ({ item, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-96 w-full cursor-pointer perspective-1000"
      onClick={() => onClick(item)}
    >
      <div className="absolute inset-0 bg-stone-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-500 group-hover:shadow-2xl border border-stone-200 dark:border-stone-800">
        <img 
          src={item.image} 
          alt={item.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2 block">
            {item.category}
          </span>
          <h3 className="text-2xl font-playfair text-white mb-1">{item.title}</h3>
          <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to view details
          </p>
        </div>
        
        {/* Hover overlay icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
            <Eye className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(PORTFOLIO_ITEMS.map(item => item.category))];
  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-stone-100 dark:bg-stone-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-stone-900 dark:text-stone-100 mb-4">Featured Transformations</h2>
          <div className="w-24 h-1 bg-rose-700 dark:bg-rose-500 mx-auto mb-8"></div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm tracking-wide uppercase transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-rose-900 dark:bg-rose-700 text-white shadow-lg' 
                    : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-300 hover:bg-white hover:text-rose-700 dark:hover:text-rose-400 border border-stone-200 dark:border-stone-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='wait'>
            {filteredItems.map((item) => (
              <TiltCard key={item.id} item={item} onClick={setSelectedItem} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm" 
            />
            <motion.div 
              layoutId={`card-${selectedItem.id}`}
              className="relative bg-white dark:bg-stone-900 rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row border border-stone-200 dark:border-stone-800"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md text-white md:text-stone-800 dark:md:text-stone-200 transition-colors"
              >
                <X />
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-rose-700 dark:text-rose-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                  {selectedItem.category}
                </span>
                <h3 className="text-3xl font-playfair text-stone-900 dark:text-stone-100 mb-6">{selectedItem.title}</h3>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-8">{selectedItem.description}</p>
                
                <div className="border-t border-stone-100 dark:border-stone-800 pt-6">
                  <h4 className="font-playfair text-lg mb-4 text-stone-900 dark:text-stone-100">Look Details</h4>
                  <ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full"/> HD Long-wear Foundation</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full"/> Waterproof Eye Makeup</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full"/> 12-Hour Setting Spray</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <a href="#contact" onClick={() => setSelectedItem(null)} className="inline-block w-full text-center px-8 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium uppercase tracking-wide rounded hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors">
                    Inquire About This Look
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;