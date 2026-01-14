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
      style={{
        background: '#000000',
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
          Why HoverAds?
        </h2>
        <p style={{
          fontSize: '20px',
          color: 'rgba(255, 255, 255, 0.85)',
          textAlign: 'center',
          marginBottom: '60px',
          maxWidth: '700px',
          margin: '0 auto 60px'
        }}>
          The future of advertising is here. See why brands choose HoverAds.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {whyChooseUsData.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div 
                key={item.id}
                style={{
                  background: '#121212',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  padding: '40px',
                  transition: 'all 0.4s ease-in-out'
                }}
                className="hover-card"
              >
                {/* Icon */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(0, 255, 209, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  borderRadius: '0px'
                }}>
                  {IconComponent && <IconComponent size={28} color="#00FFD1" />}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '18px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.5
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
