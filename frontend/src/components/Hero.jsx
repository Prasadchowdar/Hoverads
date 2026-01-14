import React from 'react';
import { heroData } from '../mock';
import { ArrowRight, Play } from 'lucide-react';

const Hero = ({ onBookDemo, onGetQuote }) => {
  return (
    <section
      id="hero"
      className="bg-mesh bg-noise bg-grid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px'
      }}
    >
      {/* Ambient Glow - Gold */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(245, 166, 35, 0.12) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      {/* Ambient Glow - Violet */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(107, 70, 193, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div className="container-max section-padding" style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '60px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Left Content */}
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="badge-accent" style={{ marginBottom: '2rem' }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: 'var(--gold-400)',
              borderRadius: '50%'
            }} className="animate-glow"></div>
            <span>Next-Gen Aerial Advertising</span>
          </div>

          {/* Headline */}
          <h1 className="display-hero" style={{
            color: 'var(--cream-100)',
            marginBottom: '1.5rem'
          }}>
            <span className="text-gradient">Turn Heads</span>
            <br />
            in the Sky.
          </h1>

          {/* Subheadline */}
          <p className="text-lead" style={{
            maxWidth: '540px',
            marginBottom: '3rem'
          }}>
            {heroData.subheadline}
          </p>

          {/* Stats Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div className="animate-fade-in delay-100">
              <div className="stat-value">10x</div>
              <div className="stat-label">More Attention</div>
            </div>
            <div className="animate-fade-in delay-200">
              <div className="stat-value">500m</div>
              <div className="stat-label">Visibility Range</div>
            </div>
            <div className="animate-fade-in delay-300">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onBookDemo}
              className="btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>{heroData.ctaPrimary}</span>
              <ArrowRight size={18} style={{ position: 'relative', zIndex: 1 }} />
            </button>
            <button
              onClick={onGetQuote}
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <Play size={18} />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right - Hero Image */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Glow behind image */}
          <div className="glow-gold" style={{
            position: 'absolute',
            width: '70%',
            height: '70%',
            borderRadius: '50%',
            opacity: 0.4,
            zIndex: 0
          }}></div>

          {/* Main Image */}
          <div className="animate-float" style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '600px'
          }}>
            <img
              src="/drone-hero.png"
              alt="HoverAds Drone Advertising"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 30px 60px rgba(245, 166, 35, 0.2))'
              }}
            />
          </div>

          {/* Floating Info Cards */}
          <div className="glass-card animate-slide-left" style={{
            position: 'absolute',
            top: '15%',
            left: '0',
            padding: '1rem 1.25rem',
            zIndex: 3
          }}>
            <div style={{
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '0.25rem',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              LED Resolution
            </div>
            <div style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--gold-400)',
              fontFamily: 'var(--font-display)'
            }}>
              1920 x 1080 Full HD
            </div>
          </div>

          <div className="glass-card animate-slide-right delay-200" style={{
            position: 'absolute',
            bottom: '20%',
            right: '0',
            padding: '1rem 1.25rem',
            zIndex: 3
          }}>
            <div style={{
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '0.25rem',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Flight Time
            </div>
            <div style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--gold-400)',
              fontFamily: 'var(--font-display)'
            }}>
              30-45 Minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
