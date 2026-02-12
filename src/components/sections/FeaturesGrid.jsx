import React from 'react';
import { motion } from 'framer-motion';

const FeaturesGrid = ({ items = [] }) => {
  return (
    <section className="py-16 bg-blue-creative text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 ${
                feature.col_span === 2 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="text-3xl mb-4">
                <i className={`fas ${feature.icon} text-blue-300`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
