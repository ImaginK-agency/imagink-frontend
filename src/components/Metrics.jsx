import { motion } from 'framer-motion';
import { siteContent } from '../data/content';

const Metrics = () => {
  const metrics = siteContent.metrics;

  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, var(--bleu-creatif), var(--violet-technologie), var(--cta-primaire))',
      color: 'white'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          textAlign: 'center'
        }}>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 800,
                marginBottom: '0.5rem'
              }}>
                {metric.number}{metric.suffix}
              </h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
