import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServicesGrid = ({ content }) => {
  const services = content?.services || content?.items || [];
  
  return (
    <section className="py-20 bg-white">
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group-hover:-translate-y-2">
                {/* Icon */}
                {service.icon && (
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl text-white">
                      {typeof service.icon === 'string' ? (
                        <i className={service.icon}></i>
                      ) : (
                        service.icon
                      )}
                    </div>
                  </div>
                )}
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features list */}
                {service.features && (
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Price or CTA */}
                <div className="flex items-center justify-between">
                  {service.price && (
                    <div className="text-2xl font-bold text-purple-600">
                      {service.price}
                    </div>
                  )}
                  
                  {service.url && (
                    <a 
                      href={service.url}
                      className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200 group-hover:translate-x-1"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
