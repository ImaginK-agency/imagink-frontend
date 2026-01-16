import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { siteContent } from '../data/content';
import Footer from '../components/Footer';

const Contact = () => {
  const { email, phone, address, faq } = siteContent.contact;
  const [openFaq, setOpenFaq] = useState(-1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Nous vous répondrons rapidement.');
  };

  return (
    <div style={{ marginTop: '70px' }}>
      {/* Hero */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) clamp(1rem, 3vw, 2rem)',
        background: 'linear-gradient(135deg, var(--vert-solution), var(--cta-primaire))',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              marginBottom: '1rem'
            }}
          >
            Parlons de votre projet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', opacity: 0.95 }}
          >
            Nous sommes là pour vous écouter et vous accompagner
          </motion.p>
        </div>
      </section>

      {/* Split Screen Form */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'start'
          }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>
                Contactez-nous
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                marginBottom: '3rem',
                lineHeight: 1.7
              }}>
                Que vous ayez un projet en tête ou simplement une question, nous sommes à votre écoute.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--violet-technologie), var(--cta-primaire))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={24} color="white" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Email</h4>
                    <a href={`mailto:${email}`} style={{ color: 'var(--cta-primaire)' }}>
                      {email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--violet-technologie), var(--cta-primaire))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={24} color="white" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Téléphone</h4>
                    <p style={{ color: 'var(--text-muted)' }}>{phone}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--violet-technologie), var(--cta-primaire))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={24} color="white" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Adresse</h4>
                    <p style={{ color: 'var(--text-muted)' }}>{address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              style={{
                backgroundColor: 'var(--bg-light)',
                padding: '3rem',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: 'var(--text-dark)'
                }}>
                  Nom complet
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: '2px solid transparent',
                    backgroundColor: 'white',
                    fontSize: '1rem',
                    transition: 'border 0.3s'
                  }}
                  placeholder="Votre nom"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: 'var(--text-dark)'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: '2px solid transparent',
                    backgroundColor: 'white',
                    fontSize: '1rem'
                  }}
                  placeholder="votre@email.com"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: 'var(--text-dark)'
                }}>
                  Sujet
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: '2px solid transparent',
                    backgroundColor: 'white',
                    fontSize: '1rem'
                  }}
                  placeholder="Sujet de votre message"
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: 'var(--text-dark)'
                }}>
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: '2px solid transparent',
                    backgroundColor: 'white',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: 'var(--cta-primaire)',
                  color: 'white',
                  padding: '1.2rem',
                  borderRadius: '10px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.2s'
                }}
              >
                Envoyer le message
                <Send size={20} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              Questions <span className="gradient-text">Fréquentes</span>
            </h2>
          </motion.div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {siteContent.faq.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  backgroundColor: 'white',
                  marginBottom: '1rem',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}
                >
                  {item.question}
                  <span style={{
                    transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s'
                  }}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7
                  }}>
                    {item.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
