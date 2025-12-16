import React from 'react';

/**
 * CTA SECTION
 * Appel à l'action final pour inciter au contact.
 */
export default function CtaSection() {
  return (
    <section className="py-24 bg-violet-technologie text-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        Prêt à lancer votre projet ?
      </h2>
      <p className="mb-8 opacity-90">
        Contactez-nous et transformons vos idées en réalité.
      </p>
      <button className="bg-white text-violet-technologie px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition">
        Nous contacter
      </button>
    </section>
  );
}