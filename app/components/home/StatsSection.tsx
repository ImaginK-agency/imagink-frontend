import React from 'react';

/**
 * STATS SECTION
 * Affiche les statistiques clés de l'agence.
 */
export default function StatsSection() {
  return (
    <section className="py-20 bg-bleu-creatif text-white">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: "Projets livrés", value: "120+" },
          { label: "Clients satisfaits", value: "95%" },
          { label: "Années d'expérience", value: "6+" },
          { label: "Experts", value: "10+" },
        ].map((stat) => (
          <div key={stat.label}>
            {/* Chiffres avec couleur d'accentuation */}
            <p className="text-4xl font-bold text-vert-solution">{stat.value}</p>
            <p className="opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}