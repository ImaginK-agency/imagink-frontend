import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Database, Sparkles, Zap } from 'lucide-react';
import { siteContent } from '../data/content';

const iconMap = {
  Code, Smartphone, Cloud, Database, Sparkles, Zap
};

const BentoGrid = () => {
  const services = siteContent.services;

  const getGridClass = (size) => {
    if (size === 'large') return { gridColumn: 'span 2', gridRow: 'span 2' };
    return {};
  };

  return (
    <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Des solutions complètes pour transformer vos idées en produits digitaux performants
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                style={{
                  ...getGridClass(service.size),
                  backgroundColor: 'white',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, var(--violet-technologie), var(--cta-primaire))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <Icon size={30} color="white" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
