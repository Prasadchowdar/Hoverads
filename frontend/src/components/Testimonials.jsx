import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../mock';

const Testimonials = () => {
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
          What Our Clients Say
        </h2>
        <p style={{
          fontSize: '20px',
          color: 'rgba(255, 255, 255, 0.85)',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          Don't just take our word for it
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px'
        }}>
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id}
              style={{
                background: '#121212',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '40px',
                transition: 'all 0.4s ease-in-out'
              }}
              className="hover-card"
            >
              {/* Rating */}
              <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '20px'
              }}>
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} size={20} fill="#00FFD1" color="#00FFD1" />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.6,
                marginBottom: '24px',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '4px'
                }}>
                  {testimonial.name}
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#4D4D4D'
                }}>
                  {testimonial.position}
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#00FFD1',
                  marginTop: '4px'
                }}>
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
