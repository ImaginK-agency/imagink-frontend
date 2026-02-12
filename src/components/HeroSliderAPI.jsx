import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSlider = ({ slides = [], autoplay = true, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoplay || slides.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, interval, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  if (slides.length === 0) {
    return (
      <section className="h-screen gradient-tourbillon flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Aucun slide disponible</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden gradient-tourbillon">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center text-white px-4 max-w-6xl mx-auto">
            {slides[currentSlide]?.tag && (
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium mb-6 border border-white/30"
              >
                {slides[currentSlide].tag}
              </motion.span>
            )}
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-orange-vitality/80 to-green-solution/80 bg-clip-text text-transparent"
            >
              {slides[currentSlide]?.title}
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              {slides[currentSlide]?.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {slides[currentSlide]?.btn_primary_text && (
                <a
                  href={slides[currentSlide].btn_primary_url || '#'}
                  className="bg-white text-violet-tech px-8 py-4 rounded-xl font-semibold hover:bg-orange-vitality hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {slides[currentSlide].btn_primary_text}
                </a>
              )}
              
              {slides[currentSlide]?.btn_secondary_text && (
                <a
                  href={slides[currentSlide].btn_secondary_url || '#'}
                  className="border-2 border-white/70 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm"
                >
                  {slides[currentSlide].btn_secondary_text}
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 z-10 bg-white/10 hover:bg-orange-vitality/80 rounded-full p-3 backdrop-blur-sm hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 z-10 bg-white/10 hover:bg-orange-vitality/80 rounded-full p-3 backdrop-blur-sm hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-orange-vitality scale-125 shadow-lg' 
                    : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-vitality/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-green-solution/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSlider;
