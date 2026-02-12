import React from 'react';
import { motion } from 'framer-motion';
import SmartLink from '../SmartLink';

const ServicesList = ({ title, subtitle, services = [] }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-tech/5 to-blue-creative/5">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-violet-tech/20 transition-all duration-300 group-hover:-translate-y-2">
                {service.icon && (
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-tech to-blue-creative rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-violet-tech transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {service.features && (
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-violet-tech rounded-full mr-3 flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {service.price && (
                  <div className="text-2xl font-bold text-violet-tech mb-4">
                    {service.price}
                  </div>
                )}
                
                {service.cta_text && (
                  <SmartLink
                    href={service.cta_url}
                    className="inline-flex items-center text-violet-tech font-medium hover:text-blue-creative transition-colors duration-200"
                  >
                    {service.cta_text}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </SmartLink>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
