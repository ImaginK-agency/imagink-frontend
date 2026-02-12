import React from 'react';
import { motion } from 'framer-motion';

const ValuesGrid = ({ content }) => {
  const values = content?.values || content?.items || [];
  
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        {content?.title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h2>
            {content.subtitle && (
              <p className="text-xl text-gray-600">
                {content.subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu group-hover:scale-105 border border-gray-100">
                {/* Icon */}
                {value.icon && (
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {typeof value.icon === 'string' ? (
                      <i className={value.icon}></i>
                    ) : (
                      value.icon
                    )}
                  </div>
                )}
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
                
                {/* Badge or highlight */}
                {value.highlight && (
                  <div className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {value.highlight}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;
