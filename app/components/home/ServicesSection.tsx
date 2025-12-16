import React from 'react';

/**
 * SERVICES SECTION
 * Présente les domaines d'expertise clés de l'agence.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-bleu-creatif mb-12">
          Nos services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Création de sites web",
            "Applications web & mobiles",
            "UI/UX Design",
          ].map((service) => (
            <div
              key={service}
              className="p-8 rounded-2xl shadow-xl hover:shadow-violet-technologie/20 transition duration-300 border border-border-light text-center bg-card-light"
            >
              <h3 className="font-semibold text-xl mb-4 text-text-light">{service}</h3>
              <p className="text-text-muted-light">
                Des solutions modernes, performantes et adaptées à votre
                activité.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}