import { motion } from 'framer-motion';
import { ArrowRight, Megaphone, Palette, Code, Cloud, BarChart3, Shield } from 'lucide-react';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'Comprehensive strategies to boost your online presence, from SEO and PPC to content marketing and social media management.',
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      color: '#4A148C'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Crafting intuitive, engaging, and beautiful user interfaces that provide meaningful and relevant experiences to users.',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      color: '#7B1FA2'
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Building robust, scalable, and secure web applications tailored to your business needs using the latest technologies.',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
      color: '#689F38'
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Leverage the power of the cloud with our expert services in migration, infrastructure management, and cloud-native development.',
      icon: Cloud,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      color: '#FF9800'
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights. We provide data visualization, business intelligence, and predictive analytics services.',
      icon: BarChart3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      color: '#1976D2'
    },
    {
      id: 6,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our comprehensive cybersecurity services, including threat analysis and vulnerability assessments.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      color: '#7B1FA2'
    }
  ];

  return (
    <div style={{ marginTop: '70px' }}>
      {/* Hero Section */}
      <section style={{
        padding: 'clamp(3rem, 5vw, 5rem) 1rem',
        background: 'linear-gradient(135deg, rgba(74, 20, 140, 0.05), rgba(123, 31, 162, 0.05))',
        borderRadius: '20px',
        margin: 'clamp(1rem, 2vw, 2rem) auto',
        maxWidth: '1280px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-40px',
          left: '-40px',
          width: '200px',
          height: '200px',
          background: 'rgba(123, 31, 162, 0.2)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          opacity: 0.7
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          right: '-50px',
          width: '250px',
          height: '250px',
          background: 'rgba(255, 152, 0, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.7
        }} />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          <h1 className="gradient-text" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            marginBottom: '1.5rem'
          }}>
            Our Digital Services
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            We offer a comprehensive suite of digital services designed to elevate your brand, engage your audience, and drive business growth in the digital age.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: 'clamp(2rem, 4vw, 5rem) 1rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(1rem, 2vw, 2rem)'
        }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--bg-light)'
                }}
              >
                {/* Image with overlay */}
                <div style={{ position: 'relative', height: 'clamp(180px, 30vw, 200px)', overflow: 'hidden' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
                  }} />
                  
                  {/* Icon badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: 'clamp(40px, 8vw, 50px)',
                    height: 'clamp(40px, 8vw, 50px)',
                    backgroundColor: `${service.color}cc`,
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={window.innerWidth < 768 ? 20 : 28} color="white" />
                  </div>

                  {/* Title overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    padding: 'clamp(1rem, 2vw, 1.5rem)'
                  }}>
                    <h3 className="gradient-text" style={{
                      fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                      fontWeight: 700,
                      color: 'white'
                    }}>
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  padding: 'clamp(1rem, 2vw, 1.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}>
                  <p style={{
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                    flexGrow: 1,
                    fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
                  }}>
                    {service.description}
                  </p>
                  <a
                    href="#"
                    style={{
                      color: '#1976D2',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'gap 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.gap = '0.75rem'}
                    onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
