import { motion } from 'framer-motion';
import { Lightbulb, Shield, Eye, TrendingUp } from 'lucide-react';
import { siteContent } from '../data/content';
import Footer from '../components/Footer';

const iconMap = {
  Lightbulb, Shield, Eye, TrendingUp
};

const About = () => {
  const { values, timeline } = siteContent;

  return (
    <div style={{ marginTop: '70px' }}>
      {/* Hero */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
        background: 'linear-gradient(135deg, var(--violet-technologie), var(--cta-primaire))',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 800,
              marginBottom: '1.5rem'
            }}
          >
            Nous construisons le futur du digital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '1.3rem',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.95
            }}
          >
            Une équipe passionnée dédiée à transformer vos idées les plus audacieuses en solutions digitales concrètes
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)', backgroundColor: 'white' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              Notre <span className="gradient-text">Histoire</span>
            </h2>
          </motion.div>

          <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            {/* Vertical Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(180deg, var(--violet-technologie), var(--cta-primaire))',
              transform: 'translateX(-50%)'
            }} />

            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '1fr auto 1fr' : '1fr auto 1fr',
                  gap: '2rem',
                  marginBottom: '3rem',
                  alignItems: 'center'
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div style={{ textAlign: 'right' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                        {item.description}
                      </p>
                    </div>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--cta-primaire)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      zIndex: 1
                    }}>
                      {item.year}
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--violet-technologie)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      zIndex: 1
                    }}>
                      {item.year}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              Nos <span className="gradient-text">Valeurs</span>
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {values.map((value, index) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, rotateY: 5 }}
                  style={{
                    backgroundColor: 'white',
                    padding: '2.5rem',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '15px',
                    background: 'linear-gradient(135deg, var(--violet-technologie), var(--cta-primaire))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Icon size={35} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                    {value.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
