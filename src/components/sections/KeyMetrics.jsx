import React from 'react';
import { motion } from 'framer-motion';

const KeyMetrics = ({ title, subtitle, metrics = [], items = [], style }) => {
  const data = metrics.length > 0 ? metrics : items;
  
  return (
    <section className={`py-20 ${style === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-50 to-blue-50'}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${style === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-xl ${style === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`text-5xl md:text-6xl font-black mb-4 ${
                style === 'dark' 
                  ? 'text-blue-400 group-hover:text-purple-400' 
                  : 'text-purple-600 group-hover:text-blue-600'
              } transition-colors duration-300 group-hover:scale-110 transform`}>
                {metric.value}{metric.suffix || ''}
              </div>
              <div className={`text-lg font-semibold ${
                style === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {metric.label}
              </div>
              {metric.description && (
                <p className={`text-sm mt-2 ${
                  style === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {metric.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
