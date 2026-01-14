import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { socialLinks, contactData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: '#000000',
      borderTop: '1px solid rgba(255, 255, 255, 0.25)',
      padding: '60px 7.6923% 30px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand Column */}
          <div>
            <div style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#00FFD1',
              marginBottom: '16px',
              fontFamily: 'KodeMono, Inter, system-ui'
            }}>
              HoverAds
            </div>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.5,
              marginBottom: '20px'
            }}>
              The future of advertising is here. High-impact flying digital advertising drones for events & brand promotions.
            </p>
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0px',
                  transition: 'all 0.3s ease',
                  color: '#FFFFFF'
                }}
              >
                <Facebook size={20} />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0px',
                  transition: 'all 0.3s ease',
                  color: '#FFFFFF'
                }}
              >
                <Instagram size={20} />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0px',
                  transition: 'all 0.3s ease',
                  color: '#FFFFFF'
                }}
              >
                <Twitter size={20} />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0px',
                  transition: 'all 0.3s ease',
                  color: '#FFFFFF'
                }}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0px',
                  transition: 'all 0.3s ease',
                  color: '#FFFFFF'
                }}
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '20px'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { label: 'How It Works', id: 'how-it-works' },
                { label: 'Use Cases', id: 'use-cases' },
                { label: 'Technology', id: 'technology' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id} style={{ marginBottom: '12px' }}>
                  <a
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      fontSize: '16px',
                      color: 'rgba(255, 255, 255, 0.85)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '20px'
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                'Product Launches',
                'Political Campaigns',
                'Concerts & Festivals',
                'Real Estate Marketing',
                'Wedding Entries',
                'Mall Activations'
              ].map((service) => (
                <li key={service} style={{ marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.85)'
                  }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '20px'
            }}>
              Contact Us
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '12px' }}>
                <a 
                  href={`tel:${contactData.phone}`}
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none'
                  }}
                >
                  {contactData.phone}
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a 
                  href={`mailto:${contactData.email}`}
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none'
                  }}
                >
                  {contactData.email}
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <span style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}>
                  {contactData.address}
                </span>
              </li>
              <li>
                <span style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}>
                  {contactData.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.25)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#4D4D4D',
            margin: 0
          }}>
            © {currentYear} HoverAds. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{
              fontSize: '16px',
              color: '#4D4D4D',
              textDecoration: 'none'
            }}>
              Privacy Policy
            </a>
            <a href="#" style={{
              fontSize: '16px',
              color: '#4D4D4D',
              textDecoration: 'none'
            }}>
              Terms of Service
            </a>
            <a href="#" style={{
              fontSize: '16px',
              color: '#4D4D4D',
              textDecoration: 'none'
            }}>
              DGCA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
