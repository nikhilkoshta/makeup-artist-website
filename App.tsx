import React, { Suspense, useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Loading Screen Component
const LoadingScreen = () => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-stone-950">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-stone-800 border-t-rose-600 rounded-full animate-spin mb-4"></div>
      <h2 className="text-2xl font-playfair text-rose-500 animate-pulse">Shalini Koshta</h2>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  // Default to 'dark' as requested
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="antialiased selection:bg-rose-500/30 selection:text-rose-200">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Suspense fallback={<div className="h-screen bg-stone-950" />}>
          <Hero />
        </Suspense>
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;