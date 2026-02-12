import React from 'react';
import DOMPurify from 'dompurify';

const RichTextSection = ({ content, background, align }) => {
  if (!content) return null;
  
  const sanitizedContent = DOMPurify.sanitize(content);
  
  return (
    <section className={`py-16 ${background === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto ${align === 'center' ? 'text-center' : ''}`}>
          <div 
            className="prose prose-lg prose-purple max-w-none
              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:font-poppins
              prose-h2:text-3xl prose-h2:mb-6 prose-h2:text-violet-tech
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-4
              prose-a:text-violet-tech prose-a:no-underline hover:prose-a:underline
              prose-strong:text-violet-tech prose-strong:font-semibold
              prose-ul:text-gray-700 prose-ol:text-gray-700"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        </div>
      </div>
    </section>
  );
};

export default RichTextSection;
