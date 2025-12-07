import React from 'react';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-playfair font-bold">Shalini Koshta</h2>
            <p className="text-gray-400 text-sm mt-2">Bridal Makeup Artist | Pune</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-500 transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-yellow-500 transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-yellow-500 transition-colors"><Twitter /></a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shalini Koshta. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors group">
               Back to Top <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;