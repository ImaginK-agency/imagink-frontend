import React from 'react';

/**
 * CLIENTS SECTION
 * Affiche les références clients pour inspirer confiance.
 */
export default function ClientsSection() {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-bleu-creatif mb-12">
          Ils nous font confiance
        </h2>

        {/* Grille des logos/clients */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
          {["Client A", "Client B", "Client C", "Client D"].map((client) => (
            <div
              key={client}
              className="h-16 flex items-center justify-center border border-border-light rounded-xl bg-card-light font-semibold text-text-muted-light"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}