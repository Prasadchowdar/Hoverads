import React from 'react';
import { ArrowRight } from 'lucide-react';
import { howItWorksData } from '../mock';

const HowItWorks = () => {
  return (
    <section 
      id="how-it-works"
      style={{
        background: '#000000',
        padding: '100px 7.6923%',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 
          className="display-large"
          style={{
            fontSize: '48px',
            fontWeight: 600,
            lineHeight: 1.1,
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          How It Works
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {howItWorksData.map((step, index) => (
            <div 
              key={step.id}
              style={{
                background: '#121212',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '40px',
                position: 'relative',
                transition: 'all 0.4s ease-in-out'
              }}
              className="hover-card"
            >
              {/* Step Number */}
              <div style={{
                fontSize: '72px',
                fontWeight: 600,
                color: '#00FFD1',
                opacity: 0.3,
                lineHeight: 1,
                marginBottom: '20px'
              }}>
                {step.step}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '16px'
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.5,
                marginBottom: '20px'
              }}>
                {step.description}
              </p>

              {/* Arrow indicator */}
              {index < howItWorksData.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#00FFD1',
                  display: 'none'
                }} className="hidden lg:block">
                  <ArrowRight size={32} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
