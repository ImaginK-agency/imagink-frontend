import React from 'react';
import { motion } from 'framer-motion';

const BentoGridSection = ({ content }) => {
  const features = content?.features || [];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {content?.title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.title}
            </h2>
            {content.subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {content.subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                bg-gradient-to-br from-gray-50 to-gray-100 
                rounded-3xl p-6 hover:shadow-xl transition-all duration-300
                ${feature.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${feature.size === 'wide' ? 'md:col-span-2' : ''}
                ${feature.size === 'tall' ? 'md:row-span-2' : ''}
                group hover:scale-105
              `}
            >
              {feature.icon && (
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {feature.badge && (
                <div className="mt-4">
                  <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGridSection;
