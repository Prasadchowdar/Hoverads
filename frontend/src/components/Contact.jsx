import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { contactData } from '../mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with actual API call
    console.log('Form submitted:', formData);
    toast.success('Thank you! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    const message = formData.name 
      ? `Hi, I'm ${formData.name}. I'm interested in HoverAds drone advertising services.` 
      : "Hi, I'm interested in HoverAds drone advertising services.";
    const whatsappUrl = `https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="contact"
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
          Ready to Make Your Brand Fly?
        </h2>
        <p style={{
          fontSize: '20px',
          color: 'rgba(255, 255, 255, 0.85)',
          textAlign: 'center',
          marginBottom: '60px',
          maxWidth: '700px',
          margin: '0 auto 60px'
        }}>
          Get in touch with us to discuss your aerial advertising campaign
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px'
        }}>
          {/* Contact Information */}
          <div>
            <h3 style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '30px'
            }}>
              Get In Touch
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0, 255, 209, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0px',
                  flexShrink: 0
                }}>
                  <Phone size={24} color="#00FFD1" />
                </div>
                <div>
                  <div style={{
                    fontSize: '16px',
                    color: '#4D4D4D',
                    marginBottom: '4px'
                  }}>
                    Phone
                  </div>
                  <a 
                    href={`tel:${contactData.phone}`}
                    style={{
                      fontSize: '18px',
                      color: '#FFFFFF',
                      textDecoration: 'none'
                    }}
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0, 255, 209, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0px',
                  flexShrink: 0
                }}>
                  <MessageCircle size={24} color="#00FFD1" />
                </div>
                <div>
                  <div style={{
                    fontSize: '16px',
                    color: '#4D4D4D',
                    marginBottom: '4px'
                  }}>
                    WhatsApp
                  </div>
                  <a 
                    href={`https://wa.me/${contactData.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '18px',
                      color: '#FFFFFF',
                      textDecoration: 'none'
                    }}
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0, 255, 209, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0px',
                  flexShrink: 0
                }}>
                  <Mail size={24} color="#00FFD1" />
                </div>
                <div>
                  <div style={{
                    fontSize: '16px',
                    color: '#4D4D4D',
                    marginBottom: '4px'
                  }}>
                    Email
                  </div>
                  <a 
                    href={`mailto:${contactData.email}`}
                    style={{
                      fontSize: '18px',
                      color: '#FFFFFF',
                      textDecoration: 'none'
                    }}
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0, 255, 209, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0px',
                  flexShrink: 0
                }}>
                  <MapPin size={24} color="#00FFD1" />
                </div>
                <div>
                  <div style={{
                    fontSize: '16px',
                    color: '#4D4D4D',
                    marginBottom: '4px'
                  }}>
                    Location
                  </div>
                  <div style={{
                    fontSize: '18px',
                    color: '#FFFFFF'
                  }}>
                    {contactData.address}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0, 255, 209, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0px',
                  flexShrink: 0
                }}>
                  <Clock size={24} color="#00FFD1" />
                </div>
                <div>
                  <div style={{
                    fontSize: '16px',
                    color: '#4D4D4D',
                    marginBottom: '4px'
                  }}>
                    Business Hours
                  </div>
                  <div style={{
                    fontSize: '18px',
                    color: '#FFFFFF'
                  }}>
                    {contactData.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Button */}
            <button
              onClick={handleWhatsApp}
              style={{
                background: '#00FFD1',
                color: '#000000',
                border: 'none',
                borderRadius: '0px',
                padding: '14px 24px',
                fontSize: '18px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.4s ease-in-out',
                minHeight: '56px',
                width: '100%',
                marginTop: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}
            >
              <MessageCircle size={20} />
              Message on WhatsApp
            </button>
          </div>

          {/* Contact Form */}
          <div style={{
            background: '#000000',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '40px'
          }}>
            <h3 style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '30px'
            }}>
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '8px'
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#121212',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '0px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '8px'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#121212',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '0px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '8px'
                }}>
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#121212',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '0px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '8px'
                }}>
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#121212',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '0px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">Select event type</option>
                  <option value="product-launch">Product Launch</option>
                  <option value="political">Political Campaign</option>
                  <option value="concert">Concert/Festival</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="wedding">Wedding</option>
                  <option value="mall">Mall Activation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '8px'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#121212',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '0px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: '#00FFD1',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '0px',
                  padding: '14px 24px',
                  fontSize: '18px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.4s ease-in-out',
                  minHeight: '56px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
