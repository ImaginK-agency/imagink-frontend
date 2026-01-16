import { motion } from 'framer-motion';
import { siteContent } from '../data/content';

const Manifesto = () => {
  const { title, content } = siteContent.manifesto;

  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#FAFAFA' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '2rem',
            fontFamily: 'Georgia, serif'
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: 1.8,
            color: 'var(--text-dark)',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic'
          }}>
            {content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
