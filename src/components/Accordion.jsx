import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { siteContent } from '../data/content';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const items = siteContent.process;

  return (
    <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Comment nous <span className="gradient-text">travaillons</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
            Un processus transparent et collaboratif
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  border: '2px solid',
                  borderColor: openIndex === index ? 'var(--cta-primaire)' : 'var(--bg-light)',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s'
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: openIndex === index ? 'var(--bg-light)' : 'white',
                    textAlign: 'left',
                    transition: 'all 0.3s'
                  }}
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                    {item.question}
                  </span>
                  <ChevronDown
                    size={24}
                    style={{
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s'
                    }}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{
                      padding: '0 1.5rem 1.5rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7
                    }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              height: '500px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, var(--violet-technologie), var(--cta-primaire))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 600
            }}
          >
            Illustration
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Accordion;
