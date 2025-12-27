import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Method from './components/Method';
import PracticeAreas from './components/PracticeAreas';
import About from './components/About';
import Staff from './components/Staff';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingAIChat from './components/FloatingAIChat';
import CookieConsent from './components/CookieConsent';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <Navbar mode="enhanced" />
      
      <main>
        <Hero mode="enhanced" />
        <About mode="enhanced" />
        <Method mode="enhanced" />
        <PracticeAreas mode="enhanced" />
        <Staff mode="enhanced" />
        <FAQ mode="enhanced" />
        <Testimonials mode="enhanced" />
        <Contact mode="enhanced" />
      </main>

      <Footer mode="enhanced" />
      
      <FloatingAIChat mode="enhanced" />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default App;