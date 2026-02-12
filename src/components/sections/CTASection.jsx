import React from 'react';
import { motion } from 'framer-motion';
import SmartLink from '../SmartLink';

const CTASection = ({ title, text, primary_btn_text, primary_btn_url, secondary_btn_text, secondary_btn_url }) => {
  return (
    <section className="py-20 gradient-imagink relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h2>
          
          {text && (
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
            >
              {text}
            </motion.p>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primary_btn_text && (
              <SmartLink
                href={primary_btn_url}
                className="bg-white text-imagink-violet px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                {primary_btn_text}
              </SmartLink>
            )}
            
            {secondary_btn_text && (
              <SmartLink
                href={secondary_btn_url}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-imagink-violet transform hover:-translate-y-1 transition-all duration-300"
              >
                {secondary_btn_text}
              </SmartLink>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
