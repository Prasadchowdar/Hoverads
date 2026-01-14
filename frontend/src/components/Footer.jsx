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

  const quickLinks = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Use Cases', id: 'use-cases' },
    { label: 'Technology', id: 'technology' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' }
  ];

  const services = [
    'Product Launches',
    'Political Campaigns',
    'Concerts & Festivals',
    'Real Estate Marketing',
    'Wedding Entries',
    'Mall Activations'
  ];

  const socialIcons = [
    { Icon: Facebook, link: socialLinks.facebook },
    { Icon: Instagram, link: socialLinks.instagram },
    { Icon: Twitter, link: socialLinks.twitter },
    { Icon: Linkedin, link: socialLinks.linkedin },
    { Icon: Youtube, link: socialLinks.youtube }
  ];

  return (
    <footer style={{
      background: 'var(--black-pure)',
      position: 'relative'
    }}>
      {/* Gradient top border */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold-400), var(--violet-500), transparent)'
      }}></div>

      <div className="container-max" style={{ padding: '4rem 7.6923% 2rem' }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Column */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              <span style={{ color: 'var(--gold-400)' }}>Hover</span>
              <span style={{ color: 'var(--cream-100)' }}>Ads</span>
            </div>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.5)',
              lineHeight: 1.7,
              marginBottom: '1.5rem'
            }}>
              The future of advertising is here. High-impact flying digital advertising drones for events & brand promotions.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialIcons.map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255, 255, 255, 0.5)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--cream-100)',
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.id} style={{ marginBottom: '0.75rem' }}>
                  <a
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.5)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--gold-400)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}
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
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--cream-100)',
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((service) => (
                <li key={service} style={{ marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.5)'
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
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--cream-100)',
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Contact Us
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href={`tel:${contactData.phone}`}
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--gold-400)',
                    textDecoration: 'none',
                    fontWeight: 500
                  }}
                >
                  {contactData.phone}
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href={`mailto:${contactData.email}`}
                  style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.5)',
                    textDecoration: 'none'
                  }}
                >
                  {contactData.email}
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <span style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.5)'
                }}>
                  {contactData.address}
                </span>
              </li>
              <li>
                <span style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.5)'
                }}>
                  {contactData.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.3)',
            margin: 0
          }}>
            © {currentYear} HoverAds. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'DGCA Compliance'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--gold-400)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.3)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
