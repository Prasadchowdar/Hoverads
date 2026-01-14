import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`dark-header transition-all duration-400 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-black'
      }`}
      style={{ 
        borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        boxSizing: 'border-box'
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '16px 7.6923%',
        maxWidth: '100%',
        margin: '0 auto',
        height: '80px'
      }}>
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('hero')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <div style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#00FFD1',
            letterSpacing: '-0.5px',
            fontFamily: 'Space Grotesk, Outfit, system-ui',
            textShadow: '0 0 20px rgba(0, 255, 209, 0.3)'
          }}>
            HoverAds
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="dark-nav hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a 
            onClick={() => scrollToSection('how-it-works')} 
            className="dark-nav-link" 
            style={{ 
              color: '#4D4D4D', 
              textDecoration: 'none', 
              fontSize: '18px', 
              fontWeight: 400,
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            How It Works
          </a>
          <a 
            onClick={() => scrollToSection('use-cases')} 
            className="dark-nav-link" 
            style={{ 
              color: '#4D4D4D', 
              textDecoration: 'none', 
              fontSize: '18px', 
              fontWeight: 400,
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            Use Cases
          </a>
          <a 
            onClick={() => scrollToSection('technology')} 
            className="dark-nav-link" 
            style={{ 
              color: '#4D4D4D', 
              textDecoration: 'none', 
              fontSize: '18px', 
              fontWeight: 400,
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            Technology
          </a>
          <a 
            onClick={() => scrollToSection('gallery')} 
            className="dark-nav-link" 
            style={{ 
              color: '#4D4D4D', 
              textDecoration: 'none', 
              fontSize: '18px', 
              fontWeight: 400,
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            Gallery
          </a>
          <a 
            onClick={() => scrollToSection('pricing')} 
            className="dark-nav-link" 
            style={{ 
              color: '#4D4D4D', 
              textDecoration: 'none', 
              fontSize: '18px', 
              fontWeight: 400,
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            Pricing
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
            style={{
              background: '#00FFD1',
              color: '#000000',
              border: 'none',
              borderRadius: '0px',
              padding: '12px 24px',
              fontSize: '18px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.4s ease-in-out',
              minHeight: '48px'
            }}
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden"
          style={{
            background: '#000000',
            borderTop: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '20px 7.6923%'
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a 
              onClick={() => scrollToSection('how-it-works')} 
              style={{ 
                color: '#FFFFFF', 
                textDecoration: 'none', 
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              How It Works
            </a>
            <a 
              onClick={() => scrollToSection('use-cases')} 
              style={{ 
                color: '#FFFFFF', 
                textDecoration: 'none', 
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              Use Cases
            </a>
            <a 
              onClick={() => scrollToSection('technology')} 
              style={{ 
                color: '#FFFFFF', 
                textDecoration: 'none', 
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              Technology
            </a>
            <a 
              onClick={() => scrollToSection('gallery')} 
              style={{ 
                color: '#FFFFFF', 
                textDecoration: 'none', 
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              Gallery
            </a>
            <a 
              onClick={() => scrollToSection('pricing')} 
              style={{ 
                color: '#FFFFFF', 
                textDecoration: 'none', 
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              Pricing
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
              style={{
                background: '#00FFD1',
                color: '#000000',
                border: 'none',
                borderRadius: '0px',
                padding: '14px 24px',
                fontSize: '18px',
                fontWeight: 500,
                cursor: 'pointer',
                width: '100%',
                minHeight: '56px'
              }}
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
