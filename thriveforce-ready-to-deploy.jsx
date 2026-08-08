import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, Calendar, TrendingUp } from 'lucide-react';

export default function ThriveForceCoaching() {
  // ===== CUSTOMIZE THESE 2 LINES ONLY =====
  const COACH_PHOTO_URL = "https://imgur.com/your-photo-url-here"; // Replace with your Imgur URL
  const CALENDLY_URL = "https://calendly.com/your-username/discovery"; // Replace with your Calendly link
  // =========================================

  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investment: '',
    timeCommitment: '',
    obstacles: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission - email goes to Formspree (update action below)
    setSubmitted(true);
    setTimeout(() => {
      setFormStep(0);
      setFormData({
        name: '',
        email: '',
        phone: '',
        investment: '',
        timeCommitment: '',
        obstacles: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 3rem',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#d4af37',
            letterSpacing: '2px'
          }}>⬆</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '3px', color: '#ffffff' }}>
            THRIVEFORCE
          </div>
        </div>
        <a href="#book" style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#d4af37',
          color: '#0a0a0a',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'all 0.3s'
        }} onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#e8c547';
          e.target.style.transform = 'translateY(-2px)';
        }} onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#d4af37';
          e.target.style.transform = 'translateY(0)';
        }}>
          Book Call
        </a>
      </nav>

      {/* Hero Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        padding: '6rem 3rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div>
          <div style={{
            fontSize: '48px',
            fontWeight: 'bold',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            letterSpacing: '-1px'
          }}>
            Trade The <span style={{ color: '#d4af37' }}>Trader,</span>
            <br />Not The Ticker
          </div>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#b0b0b0',
            marginBottom: '2rem'
          }}>
            Master the psychology behind every position. This isn't a course—it's the metamorphosis of a trader into a disciplined market athlete. Learn from someone who's lived it.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a href="#book" style={{
              padding: '1rem 2rem',
              backgroundColor: '#d4af37',
              color: '#0a0a0a',
              textDecoration: 'none',
              fontWeight: 'bold',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e8c547';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#d4af37';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Schedule Discovery Call <ChevronRight size={20} />
            </a>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            aspectRatio: '1',
            backgroundColor: 'rgba(212, 175, 55, 0.05)',
            borderRadius: '12px',
            border: '2px solid rgba(212, 175, 55, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src={COACH_PHOTO_URL} 
              alt="Coach" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: COACH_PHOTO_URL.includes('imgur') && !COACH_PHOTO_URL.includes('your-photo') ? 'block' : 'none'
              }} 
            />
            {!COACH_PHOTO_URL.includes('your-photo') || !COACH_PHOTO_URL.includes('imgur') ? null : (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                <p style={{ fontSize: '14px' }}>📸 Update COACH_PHOTO_URL at top of code</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{
        padding: '4rem 3rem',
        backgroundColor: 'rgba(212, 175, 55, 0.02)',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '3rem', textAlign: 'center', letterSpacing: '-0.5px' }}>
            Built For Serious Traders
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            <div style={{
              backgroundColor: 'rgba(212, 175, 55, 0.05)',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              <TrendingUp style={{ color: '#d4af37', marginBottom: '1rem' }} size={32} />
              <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', color: '#d4af37' }}>
                Nasdaq & Forex Swing Trading
              </h3>
              <p style={{ fontSize: '14px', color: '#999', lineHeight: '1.6' }}>
                2.5+ years of proven experience with Archer methodology. Real trades. Real psychology.
              </p>
            </div>
            <div style={{
              backgroundColor: 'rgba(212, 175, 55, 0.05)',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              <CheckCircle2 style={{ color: '#d4af37', marginBottom: '1rem' }} size={32} />
              <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', color: '#d4af37' }}>
                Discipline & Integrity
              </h3>
              <p style={{ fontSize: '14px', color: '#999', lineHeight: '1.6' }}>
                Belgian entrepreneur. Father. Partner. Every principle I teach, I live.
              </p>
            </div>
            <div style={{
              backgroundColor: 'rgba(212, 175, 55, 0.05)',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              <Calendar style={{ color: '#d4af37', marginBottom: '1rem' }} size={32} />
              <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', color: '#d4af37' }}>
                1-on-1 Coaching
              </h3>
              <p style={{ fontSize: '14px', color: '#999', lineHeight: '1.6' }}>
                Personalized mentorship. Not a course. Real transformation requires real accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{
        padding: '6rem 3rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          <div>
            <h2 style={{ fontSize: '36px', marginBottom: '2rem', color: '#d4af37' }}>
              The Journey
            </h2>
            <div style={{ color: '#b0b0b0', fontSize: '16px', lineHeight: '1.9' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                I built ICM Belgium from the ground up—a professional cleaning and facilities management company. That entrepreneurial discipline? It's exactly what separates winning traders from the rest.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                My trading journey started 2.5 years ago through the Archer program. Not overnight success. Not get-rich-quick schemes. Real methodology. Real psychology. Real accountability.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Nasdaq and Forex swing trading taught me that markets don't reward hope—they reward discipline. The same discipline that built my business, the same discipline that transforms traders into market athletes.
              </p>
              <p>
                Now, as MrThriveForce, I mentor serious traders who understand: your edge isn't technical analysis. It's mental. It's knowing yourself. It's integrity when nobody's watching.
              </p>
            </div>
          </div>
          <div style={{
            backgroundColor: 'rgba(212, 175, 55, 0.05)',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <h3 style={{ fontSize: '18px', marginBottom: '1.5rem', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>
              Philosophy
            </h3>
            <p style={{ fontSize: '18px', lineHeight: '1.8', fontStyle: 'italic', color: '#d4af37', fontWeight: 'bold' }}>
              "Ik ben een creatie, geen wonder."
            </p>
            <p style={{ fontSize: '14px', color: '#999', marginTop: '1rem', lineHeight: '1.7' }}>
              I'm a creation, not a miracle. Everything I've built—in business, in trading, in life—comes from showing up every single day. No excuses. No shortcuts. That's the foundation of everything I teach.
            </p>
          </div>
        </div>
      </section>

      {/* Intake Form Section */}
      <section id="book" style={{
        padding: '6rem 3rem',
        backgroundColor: 'rgba(212, 175, 55, 0.02)',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '1rem', textAlign: 'center' }}>
            Qualify For 1-on-1 Coaching
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#999',
            textAlign: 'center',
            marginBottom: '3rem',
            lineHeight: '1.7'
          }}>
            Not everyone is ready for elite coaching. Answer these three questions honestly. If we're aligned, we'll schedule your discovery call.
          </p>

          {submitted ? (
            <div style={{
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              padding: '3rem',
              borderRadius: '8px',
              border: '2px solid #d4af37',
              textAlign: 'center'
            }}>
              <CheckCircle2 style={{ color: '#d4af37', margin: '0 auto 1rem', width: '48px', height: '48px' }} />
              <h3 style={{ fontSize: '24px', marginBottom: '1rem' }}>Application Received</h3>
              <p style={{ color: '#999', marginBottom: '1rem' }}>
                Thank you. I review every application personally. Expect a message within 24 hours.
              </p>
              <p style={{ color: '#d4af37', fontSize: '14px', fontWeight: 'bold' }}>
                Ready to transform your trading.
              </p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              style={{
                backgroundColor: 'rgba(212, 175, 55, 0.02)',
                padding: '2.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}
            >
              {/* Step 0: Contact Info */}
              {formStep === 0 && (
                <div style={{ animation: 'fadeIn 0.3s' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '1.5rem', color: '#d4af37' }}>
                    Let's Start With The Basics
                  </h3>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px', color: '#d4af37', fontWeight: 'bold' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '4px',
                        color: '#ffffff',
                        fontSize: '14px',
                        boxSizing: 'border-box'
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px', color: '#d4af37', fontWeight: 'bold' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '4px',
                        color: '#ffffff',
                        fontSize: '14px',
                        boxSizing: 'border-box'
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px', color: '#d4af37', fontWeight: 'bold' }}>
                      Phone (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '4px',
                        color: '#ffffff',
                        fontSize: '14px',
                        boxSizing: 'border-box'
                      }}
                      placeholder="+32 123 456 789"
                    />
                  </div>
                </div>
              )}

              {/* Step 1: Investment */}
              {formStep === 1 && (
                <div style={{ animation: 'fadeIn 0.3s' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '1.5rem', color: '#d4af37' }}>
                    Investment Capacity
                  </h3>
                  <p style={{ fontSize: '14px', color: '#999', marginBottom: '1.5rem' }}>
                    What are you prepared to invest in your trading education and transformation?
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {['€2,500 - €5,000', '€5,000 - €10,000', '€10,000 - €25,000', '€25,000+'].map((option) => (
                      <label key={option} style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1rem',
                        backgroundColor: formData.investment === option ? 'rgba(212, 175, 55, 0.15)' : 'rgba(0, 0, 0, 0.2)',
                        border: formData.investment === option ? '2px solid #d4af37' : '1px solid rgba(212, 175, 55, 0.2)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}>
                        <input
                          type="radio"
                          name="investment"
                          value={option}
                          checked={formData.investment === option}
                          onChange={handleInputChange}
                          required
                          style={{ marginRight: '1rem', cursor: 'pointer' }}
                        />
                        <span style={{ color: '#ffffff', fontSize: '14px' }}>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Time Commitment */}
              {formStep === 2 && (
                <div style={{ animation: 'fadeIn 0.3s' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '1.5rem', color: '#d4af37' }}>
                    Weekly Time Commitment
                  </h3>
                  <p style={{ fontSize: '14px', color: '#999', marginBottom: '1.5rem' }}>
                    How many hours per week can you dedicate to trading and your development?
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {['5-10 hours', '10-20 hours', '20-30 hours', '30+ hours'].map((option) => (
                      <label key={option} style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1rem',
                        backgroundColor: formData.timeCommitment === option ? 'rgba(212, 175, 55, 0.15)' : 'rgba(0, 0, 0, 0.2)',
                        border: formData.timeCommitment === option ? '2px solid #d4af37' : '1px solid rgba(212, 175, 55, 0.2)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}>
                        <input
                          type="radio"
                          name="timeCommitment"
                          value={option}
                          checked={formData.timeCommitment === option}
                          onChange={handleInputChange}
                          required
                          style={{ marginRight: '1rem', cursor: 'pointer' }}
                        />
                        <span style={{ color: '#ffffff', fontSize: '14px' }}>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Obstacles */}
              {formStep === 3 && (
                <div style={{ animation: 'fadeIn 0.3s' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '1.5rem', color: '#d4af37' }}>
                    Your Biggest Challenge
                  </h3>
                  <p style={{ fontSize: '14px', color: '#999', marginBottom: '1.5rem' }}>
                    What's the main obstacle preventing you from becoming a profitable trader?
                  </p>
                  <textarea
                    name="obstacles"
                    value={formData.obstacles}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '4px',
                      color: '#ffffff',
                      fontSize: '14px',
                      minHeight: '120px',
                      fontFamily: 'Arial, sans-serif',
                      boxSizing: 'border-box',
                      resize: 'vertical'
                    }}
                    placeholder="Describe your biggest struggle..."
                  />
                </div>
              )}

              {/* Navigation */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '2rem',
                gap: '1rem'
              }}>
                <button
                  type="button"
                  onClick={() => setFormStep(Math.max(0, formStep - 1))}
                  disabled={formStep === 0}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: formStep === 0 ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.2)',
                    color: '#d4af37',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '4px',
                    cursor: formStep === 0 ? 'default' : 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    opacity: formStep === 0 ? 0.5 : 1
                  }}
                >
                  Back
                </button>
                <div style={{ fontSize: '12px', color: '#999', alignSelf: 'center' }}>
                  Step {formStep + 1} of 4
                </div>
                {formStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#d4af37',
                      color: '#0a0a0a',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e8c547';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#d4af37';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Next <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#d4af37',
                      color: '#0a0a0a',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e8c547';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#d4af37';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Calendar Integration CTA */}
      <section style={{
        padding: '4rem 3rem',
        backgroundColor: 'rgba(212, 175, 55, 0.05)',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '1.5rem' }}>
            Next Step: Schedule Your Discovery Call
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#999',
            marginBottom: '2rem',
            lineHeight: '1.7'
          }}>
            After submitting your application, you'll receive a link to book a 30-minute discovery call. We'll discuss your goals, assess your readiness, and determine if 1-on-1 coaching is the right fit.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 2rem',
            backgroundColor: '#d4af37',
            color: '#0a0a0a',
            textDecoration: 'none',
            fontWeight: 'bold',
            borderRadius: '4px',
            fontSize: '16px',
            transition: 'all 0.3s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e8c547';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#d4af37';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <Calendar size={20} />
            Book Your Discovery Call
          </a>
          <p style={{
            fontSize: '12px',
            color: '#666',
            marginTop: '1rem'
          }}>
            (Update CALENDLY_URL at top of code)
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        color: '#666',
        fontSize: '14px'
      }}>
        <p style={{ marginBottom: '0.5rem' }}>THRIVEFORCE Coaching</p>
        <p>Discipline. Integrity. Excellence.</p>
        <p style={{ marginTop: '1rem', fontSize: '12px' }}>
          © 2024 THRIVEFORCE. All rights reserved.
        </p>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}