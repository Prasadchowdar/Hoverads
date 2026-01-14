import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { pricingData } from '../mock';

const Pricing = ({ onSelectPlan }) => {
  return (
    <section
      id="pricing"
      className="bg-noise"
      style={{
        background: 'var(--gray-900)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Gradient accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--violet-500), transparent)'
      }}></div>

      <div className="container-max section-padding">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            Pricing
          </span>
          <h2 className="display-large" style={{ color: 'var(--cream-100)', marginBottom: '1rem' }}>
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Choose the package that fits your campaign needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch'
        }}>
          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className={plan.popular ? 'border-gradient' : 'glass-card'}
              style={{
                background: plan.popular
                  ? 'linear-gradient(180deg, rgba(245, 166, 35, 0.08) 0%, rgba(0,0,0,0.9) 100%)'
                  : undefined,
                padding: '2.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-1px',
                  right: '2rem',
                  background: 'linear-gradient(135deg, var(--gold-400), var(--gold-600))',
                  color: 'var(--black-pure)',
                  padding: '0.5rem 1rem',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Sparkles size={12} />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--cream-100)',
                marginBottom: '0.75rem'
              }}>
                {plan.name}
              </h3>

              {/* Price */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3rem',
                fontWeight: 700,
                color: plan.popular ? 'var(--gold-400)' : 'var(--cream-100)',
                marginBottom: '0.25rem',
                lineHeight: 1
              }}>
                {plan.price}
              </div>

              {/* Duration */}
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '2rem'
              }}>
                {plan.duration}
              </div>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: 'rgba(255, 255, 255, 0.08)',
                marginBottom: '1.5rem'
              }}></div>

              {/* Features */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 2rem 0',
                flex: 1
              }}>
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '1rem',
                      fontSize: '0.95rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.5
                    }}
                  >
                    <Check
                      size={18}
                      color="var(--gold-400)"
                      style={{ flexShrink: 0, marginTop: '2px' }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => onSelectPlan(plan)}
                className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                style={{ width: '100%' }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Select Plan</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
