import React from 'react';
import { Eye, Zap, Leaf, Moon, MapPin, Shield } from 'lucide-react';
import { whyChooseUsData } from '../mock';

const iconMap = {
  Eye: Eye,
  Zap: Zap,
  Leaf: Leaf,
  Moon: Moon,
  MapPin: MapPin,
  Shield: Shield
};

const WhyChooseUs = () => {
  return (
    <section
      className="bg-mesh bg-noise"
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-max section-padding">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge-accent" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            Our Advantage
          </span>
          <h2 className="display-large" style={{ color: 'var(--cream-100)', marginBottom: '1rem' }}>
            Why <span className="text-gradient">HoverAds</span>?
          </h2>
          <p className="text-lead" style={{ maxWidth: '600px', margin: '0 auto' }}>
            The future of advertising is here. See why brands choose HoverAds.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {whyChooseUsData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.15), rgba(107, 70, 193, 0.1))',
                  border: '1px solid rgba(245, 166, 35, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {IconComponent && <IconComponent size={24} color="var(--gold-400)" />}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--cream-100)'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: 1.7
                }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
