import React from 'react';
import { technologyData } from '../mock';

const Technology = () => {
  return (
    <section 
      id="technology"
      style={{
        background: '#121212',
        padding: '100px 7.6923%'
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
          {technologyData.headline}
        </h2>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {technologyData.features.map((feature) => (
            <div 
              key={feature.id}
              style={{
                background: '#000000',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                overflow: 'hidden',
                transition: 'all 0.4s ease-in-out'
              }}
              className="hover-card"
            >
              {/* Image */}
              <div style={{
                width: '100%',
                height: '250px',
                overflow: 'hidden'
              }}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease-in-out'
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '30px' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '18px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.5
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Specs Grid */}
        <div style={{
          background: '#000000',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          padding: '60px'
        }}>
          <h3 style={{
            fontSize: '32px',
            fontWeight: 600,
            color: '#FFFFFF',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Technical Specifications
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {technologyData.specs.map((spec, index) => (
              <div key={index} style={{
                borderLeft: '3px solid #00FFD1',
                paddingLeft: '20px'
              }}>
                <div style={{
                  fontSize: '16px',
                  color: '#4D4D4D',
                  marginBottom: '8px'
                }}>
                  {spec.label}
                </div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#FFFFFF'
                }}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
