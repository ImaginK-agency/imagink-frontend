import React from 'react';

/**
 * TESTIMONIALS SECTION
 * Témoignages des clients pour la preuve sociale.
 */
export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-card-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-bleu-creatif mb-12">
          Témoignages clients
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-border-light shadow-md bg-card-light"
            >
              <p className="text-text-muted-light italic mb-4">
                “Une équipe professionnelle et réactive. Résultat au-delà de
                nos attentes.”
              </p>
              <p className="font-semibold text-text-light">Client {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}