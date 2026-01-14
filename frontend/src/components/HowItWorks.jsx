import React from 'react';
import { ArrowRight } from 'lucide-react';
import { howItWorksData } from '../mock';

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-noise"
      style={{
        background: 'var(--gray-900)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle gradient accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold-400), transparent)'
      }}></div>

      <div className="container-max section-padding">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            Simple Process
          </span>
          <h2 className="display-large" style={{ color: 'var(--cream-100)' }}>
            How It <span className="text-gradient">Works</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {howItWorksData.map((step, index) => (
            <div
              key={step.id}
              className="glass-card"
              style={{
                padding: '2.5rem',
                position: 'relative'
              }}
            >
              {/* Step Number */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '5rem',
                fontWeight: 700,
                color: 'var(--gold-400)',
                opacity: 0.15,
                lineHeight: 1,
                position: 'absolute',
                top: '1rem',
                right: '1.5rem'
              }}>
                {step.step}
              </div>

              {/* Step indicator */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, var(--gold-400), var(--gold-600))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: 'var(--black-pure)'
                }}>
                  {index + 1}
                </div>
                {index < howItWorksData.length - 1 && (
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'linear-gradient(90deg, var(--gold-400), transparent)'
                  }}></div>
                )}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--cream-100)',
                marginBottom: '1rem'
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: 1.7
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
