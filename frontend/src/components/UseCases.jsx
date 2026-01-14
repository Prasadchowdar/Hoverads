import React from 'react';
import { Rocket, Vote, Music, Building, Heart, ShoppingBag } from 'lucide-react';
import { useCasesData } from '../mock';

const iconMap = {
  Rocket: Rocket,
  Vote: Vote,
  Music: Music,
  Building: Building,
  Heart: Heart,
  ShoppingBag: ShoppingBag
};

const UseCases = () => {
  return (
    <section 
      id="use-cases"
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
          Use Cases
        </h2>
        <p style={{
          fontSize: '20px',
          color: 'rgba(255, 255, 255, 0.85)',
          textAlign: 'center',
          marginBottom: '60px',
          maxWidth: '700px',
          margin: '0 auto 60px'
        }}>
          From product launches to weddings, HoverAds brings your brand message to the sky
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px'
        }}>
          {useCasesData.map((useCase) => {
            const IconComponent = iconMap[useCase.icon];
            return (
              <div 
                key={useCase.id}
                style={{
                  background: '#000000',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease-in-out',
                  cursor: 'pointer'
                }}
                className="hover-card"
              >
                {/* Image */}
                <div style={{
                  width: '100%',
                  height: '250px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease-in-out'
                    }}
                  />
                  {/* Icon Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: '#00FFD1',
                    color: '#000000',
                    padding: '12px',
                    borderRadius: '0px'
                  }}>
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '30px' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '12px'
                  }}>
                    {useCase.title}
                  </h3>
                  <p style={{
                    fontSize: '18px',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.5
                  }}>
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
