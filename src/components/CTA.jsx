import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, var(--bleu-creatif), var(--violet-technologie))',
      color: 'white'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            marginBottom: '1.5rem'
          }}>
            Prêt à transformer vos idées ?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '2.5rem',
            opacity: 0.95
          }}>
            Discutons de votre projet et construisons ensemble la solution qui fera la différence.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              backgroundColor: 'white',
              color: 'var(--cta-primaire)',
              padding: '1.2rem 2.5rem',
              borderRadius: '10px',
              fontSize: '1.1rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}>
              Démarrer un projet
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
