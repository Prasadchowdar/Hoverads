import React from 'react';
import { heroData } from '../mock';
import { ArrowRight, Play } from 'lucide-react';

const Hero = ({ onBookDemo, onGetQuote }) => {
  return (
    <section
      id="hero"
      style={{
        background: '#000000',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px'
      }}
    >
      {/* Ambient glow effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 255, 209, 0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '80px 7.6923%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '80px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Left Content */}
        <div style={{ zIndex: 2 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 255, 209, 0.1)',
            border: '1px solid rgba(0, 255, 209, 0.3)',
            padding: '8px 20px',
            marginBottom: '32px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#00FFD1',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></div>
            <span style={{
              fontSize: '14px',
              color: '#00FFD1',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              Next-Gen Aerial Advertising
            </span>
          </div>

          <h1
            className="display-huge"
            style={{
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: '#FFFFFF',
              marginBottom: '24px',
              fontFamily: 'Space Grotesk, Outfit, sans-serif',
              textShadow: '0 0 40px rgba(0, 255, 209, 0.2)'
            }}
          >
            {heroData.headline}
          </h1>
          <p
            className="body-large"
            style={{
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '48px',
              maxWidth: '600px'
            }}
          >
            {heroData.subheadline}
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '48px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div>
              <div style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#00FFD1',
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: '4px'
              }}>10x</div>
              <div style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 500
              }}>More Attention</div>
            </div>
            <div>
              <div style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#00FFD1',
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: '4px'
              }}>500m</div>
              <div style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 500
              }}>Visibility Range</div>
            </div>
            <div>
              <div style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#00FFD1',
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: '4px'
              }}>24/7</div>
              <div style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 500
              }}>Support</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={onBookDemo}
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #00FFD1 0%, #00D4AA 100%)',
                color: '#000000',
                border: 'none',
                borderRadius: '0px',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                minHeight: '56px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontFamily: 'Space Grotesk, sans-serif',
                boxShadow: '0 0 30px rgba(0, 255, 209, 0.3)'
              }}
            >
              {heroData.ctaPrimary}
              <ArrowRight size={20} />
            </button>
            <button
              onClick={onGetQuote}
              className="btn-secondary"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0px',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                minHeight: '56px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontFamily: 'Space Grotesk, sans-serif',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Play size={20} />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right - Product Image */}
        <div style={{
          width: '100%',
          height: '700px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Glow effect behind image */}
          <div style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0, 255, 209, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
            zIndex: 0
          }}></div>

          {/* Product Image */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/drone-hero.png"
              alt="HoverAds Drone Advertising"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 60px rgba(0, 255, 209, 0.3))',
                animation: 'float 6s ease-in-out infinite'
              }}
            />
          </div>

          {/* Floating info cards */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '0',
            background: 'rgba(10, 10, 10, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 255, 209, 0.3)',
            padding: '16px 20px',
            zIndex: 2,
            animation: 'slideInLeft 1s ease-out'
          }}>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
              LED Resolution
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#00FFD1', fontFamily: 'Space Grotesk, sans-serif' }}>
              1920 x 1080 Full HD
            </div>
          </div>

          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '0',
            background: 'rgba(10, 10, 10, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 255, 209, 0.3)',
            padding: '16px 20px',
            zIndex: 2,
            animation: 'slideInRight 1s ease-out 0.3s both'
          }}>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
              Flight Time
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#00FFD1', fontFamily: 'Space Grotesk, sans-serif' }}>
              30-45 Minutes
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
