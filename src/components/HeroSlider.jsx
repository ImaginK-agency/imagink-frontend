import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { siteContent } from '../data/content';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteContent.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      marginTop: '70px'
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: slides[currentSlide].bgGradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="container" style={{
            textAlign: 'center',
            color: 'white',
            maxWidth: '900px'
          }}>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '0.5rem 1.5rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                letterSpacing: '2px'
              }}
            >
              {slides[currentSlide].tag}
            </motion.span>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                marginBottom: '1.5rem',
                lineHeight: 1.1
              }}
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                marginBottom: '2.5rem',
                opacity: 0.95
              }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <button style={{
                backgroundColor: 'white',
                color: 'var(--cta-primaire)',
                padding: '1rem 2.5rem',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: 600,
                transition: 'transform 0.2s',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}>
                {slides[currentSlide].primaryBtn}
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: 600,
                border: '2px solid white',
                transition: 'all 0.2s'
              }}>
                {slides[currentSlide].secondaryBtn}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.3)',
          color: 'white',
          padding: '1rem',
          borderRadius: '50%',
          transition: 'background 0.3s'
        }}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.3)',
          color: 'white',
          padding: '1rem',
          borderRadius: '50%',
          transition: 'background 0.3s'
        }}
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.75rem'
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: currentSlide === index ? '2.5rem' : '0.75rem',
              height: '0.75rem',
              borderRadius: '10px',
              backgroundColor: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
