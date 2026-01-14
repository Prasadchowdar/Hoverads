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

  const navLinks = [
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'technology', label: 'Technology' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'pricing', label: 'Pricing' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        background: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 7.6923%',
        maxWidth: '1400px',
        margin: '0 auto',
        height: '80px'
      }}>
        {/* Logo */}
        <div
          onClick={() => scrollToSection('hero')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.02em'
          }}>
            <span style={{ color: 'var(--gold-400)' }}>Hover</span>
            <span style={{ color: 'var(--cream-100)' }}>Ads</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--gold-400)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '0.8rem'
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Contact Us</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--cream-100)',
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
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '1.5rem 7.6923%'
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  padding: '0.5rem 0'
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
              style={{
                width: '100%',
                marginTop: '0.5rem'
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Contact Us</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
