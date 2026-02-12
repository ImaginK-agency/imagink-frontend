import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../OptimizedImage';

const LogoCloud = ({ title, logos = [] }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-600 mb-8">
              {title}
            </h2>
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <OptimizedImage
                src={logo.image}
                alt={logo.name || `Logo ${index + 1}`}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
