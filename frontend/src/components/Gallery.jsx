import React, { useState } from 'react';
import { galleryData } from '../mock';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(galleryData.map(item => item.category))];

  const filteredGallery = selectedCategory === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <section 
      id="gallery"
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
          Our Work in Action
        </h2>
        <p style={{
          fontSize: '20px',
          color: 'rgba(255, 255, 255, 0.85)',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Explore our portfolio of successful aerial advertising campaigns
        </p>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '60px',
          flexWrap: 'wrap'
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                background: selectedCategory === category ? '#00FFD1' : 'rgba(255, 255, 255, 0.1)',
                color: selectedCategory === category ? '#000000' : '#FFFFFF',
                border: 'none',
                borderRadius: '0px',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.4s ease-in-out'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {filteredGallery.map((item) => (
            <div 
              key={item.id}
              style={{
                background: '#121212',
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
                height: '280px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease-in-out'
                  }}
                />
                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: '#00FFD1',
                  color: '#000000',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: 600,
                  borderRadius: '0px'
                }}>
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.5
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
