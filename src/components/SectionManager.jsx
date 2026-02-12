import React from 'react';
import { SECTION_COMPONENTS } from './sections';

const SectionManager = ({ sections }) => {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col w-full">
      {sections.map((section) => {
        const Component = SECTION_COMPONENTS[section.type];
        
        if (!Component) {
          // En développement, afficher un placeholder
          if (import.meta.env.DEV) {
            return (
              <div
                key={section.id}
                className="p-8 border-2 border-dashed border-red-400
                bg-red-50 text-red-800 rounded-lg my-4 mx-4"
              >
                <h3 className="font-bold text-lg mb-2">
                  ■■ Section non implémentée : "{section.type}"
                </h3>
                <p className="text-sm mb-4">
                  Ajoutez ce composant dans{' '}
                  <code className="bg-white px-2 py-1 rounded text-xs">
                    src/components/sections/index.js
                  </code>
                </p>
                <details className="text-xs">
                  <summary className="cursor-pointer font-bold mb-2">
                    Voir le payload JSON
                  </summary>
                  <pre className="bg-white p-2 rounded overflow-auto">
                    {JSON.stringify(section.content || section.data, null, 2)}
                  </pre>
                </details>
              </div>
            );
          }
          // En production, ignorer silencieusement
          return null;
        }

        return (
          <section
            key={section.id}
            id={`section-${section.id}`}
            className="w-full"
          >
            <Component {...(section.content || section.data)} />
          </section>
        );
      })}
    </div>
  );
};

export default SectionManager;
