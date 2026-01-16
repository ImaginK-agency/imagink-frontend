import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Footer = () => {
  const { email, phone, address, socialLinks } = siteContent.contact;

  return (
    <footer style={{
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-light)',
      padding: '4rem 0 2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Logo & Description */}
          <div>
            <img 
              src="/logo.png" 
              alt="ImaginK' Logo" 
              style={{ height: '50px', marginBottom: '1rem', filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              Transformons ensemble vos idées en solutions digitales performantes et évolutives.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}>
                Accueil
              </Link>
              <Link to="/services" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}>
                Services
              </Link>
              <Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}>
                À Propos
              </Link>
              <Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}>
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} />
                <a href={`mailto:${email}`} style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>{phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={18} />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>{address}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>
              Suivez-nous
            </h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
              >
                <Github size={20} />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.5)'
        }}>
          <p>© {new Date().getFullYear()} ImaginK'. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
