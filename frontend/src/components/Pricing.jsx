import React from 'react';
import { Check } from 'lucide-react';
import { pricingData } from '../mock';

const Pricing = ({ onSelectPlan }) => {
  return (
    <section 
      id="pricing"
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
            marginBottom: '20px'
          }}
        >
          Transparent Pricing
        </h2>
        <p style={{
          fontSize: '20px',
          color: 'rgba(255, 255, 255, 0.85)',
          textAlign: 'center',
          marginBottom: '60px',
          maxWidth: '700px',
          margin: '0 auto 60px'
        }}>
          Choose the package that fits your campaign needs
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'stretch'
        }}>
          {pricingData.map((plan) => (
            <div 
              key={plan.id}
              style={{
                background: plan.popular ? '#00FFD1' : '#000000',
                border: plan.popular ? 'none' : '1px solid rgba(255, 255, 255, 0.25)',
                padding: '40px',
                position: 'relative',
                transition: 'all 0.4s ease-in-out',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="hover-card"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: '#000000',
                  color: '#00FFD1',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: 600,
                  borderRadius: '0px'
                }}>
                  MOST POPULAR
                </div>
              )}

              {/* Plan Name */}
              <h3 style={{
                fontSize: '28px',
                fontWeight: 600,
                color: plan.popular ? '#000000' : '#FFFFFF',
                marginBottom: '12px'
              }}>
                {plan.name}
              </h3>

              {/* Price */}
              <div style={{
                fontSize: '48px',
                fontWeight: 600,
                color: plan.popular ? '#000000' : '#00FFD1',
                marginBottom: '8px'
              }}>
                {plan.price}
              </div>

              {/* Duration */}
              <div style={{
                fontSize: '16px',
                color: plan.popular ? 'rgba(0, 0, 0, 0.7)' : '#4D4D4D',
                marginBottom: '32px'
              }}>
                {plan.duration}
              </div>

              {/* Features */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 32px 0',
                flex: 1
              }}>
                {plan.features.map((feature, index) => (
                  <li 
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '16px',
                      fontSize: '16px',
                      color: plan.popular ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.5
                    }}
                  >
                    <Check 
                      size={20} 
                      color={plan.popular ? '#000000' : '#00FFD1'}
                      style={{ flexShrink: 0, marginTop: '2px' }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => onSelectPlan(plan)}
                style={{
                  background: plan.popular ? '#000000' : '#00FFD1',
                  color: plan.popular ? '#00FFD1' : '#000000',
                  border: 'none',
                  borderRadius: '0px',
                  padding: '14px 24px',
                  fontSize: '18px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.4s ease-in-out',
                  minHeight: '56px',
                  width: '100%'
                }}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
