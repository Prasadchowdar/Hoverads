import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import WhyChooseUs from './components/WhyChooseUs';
import Technology from './components/Technology';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookDemo = () => {
    scrollToContact();
  };

  const handleGetQuote = () => {
    scrollToContact();
  };

  const handleSelectPlan = (plan) => {
    console.log('Selected plan:', plan);
    scrollToContact();
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Toaster position="top-right" richColors />
        <Header />
        <Hero onBookDemo={handleBookDemo} onGetQuote={handleGetQuote} />
        <HowItWorks />
        <UseCases />
        <WhyChooseUs />
        <Technology />
        <Gallery />
        <Pricing onSelectPlan={handleSelectPlan} />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
