import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { siteContent } from '../data/content';

const Testimonials = () => {
  const testimonials = siteContent.testimonials;

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
            Ce que disent nos <span className="gradient-text">clients</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
            La satisfaction client au cœur de notre mission
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: 'var(--bg-light)',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--orange-vitalite)" color="var(--orange-vitalite)" />
                ))}
              </div>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                fontStyle: 'italic',
                color: 'var(--text-dark)'
              }}>
                "{testimonial.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                    {testimonial.name}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
