import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Beliefs from './components/Beliefs';
import Skills from './components/Skills';
import Talks from './components/Talks';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <div className="relative z-10">
          <Header scrollY={scrollY} />
          <main>
            <Hero />
            <About />
            <Projects />
            <Beliefs />
            <Skills />
            <Talks />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;