import React from 'react';

const values = [
  { title: "Innovation Créative", description: "Encourager la recherche constante de solutions nouvelles et efficaces (basé sur le Brand Book).", icon: "💡" },
  { title: "Rigueur Technique", description: "Garantir la qualité, la robustesse et la sécurité du code (confiance).", icon: "🛠️" },
  { title: "Transparence & Partenariat", description: "Travailler main dans la main avec le client, pour une collaboration totale.", icon: "🤝" },
  { title: "Évolution & Scalabilité", description: "Construire des solutions qui peuvent grandir et s'adapter aux futurs défis du marché.", icon: "📈" },
];

/**
 * MISSION & VISION SECTION
 * Présente les valeurs et l'engagement de l'agence, extraits du Brand Book.
 */
export default function MissionVisionSection() {
  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-bleu-creatif mb-16">
          Notre Mission et nos Valeurs
        </h2>

        {/* Mission et Vision - Design en cartes côte à côte */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          <div className="p-8 rounded-2xl bg-card-light shadow-xl border border-border-light">
            <span className="text-5xl text-violet-technologie block mb-4">🚀</span>
            <h3 className="text-2xl font-bold text-text-light mb-4">Notre Mission</h3>
            <p className="text-text-muted-light">
              Convertir l'imagination débordante de nos clients en produits digitaux performants, sécurisés et évolutifs. Nous construisons l'avenir numérique avec une expertise technique de haut niveau.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card-light shadow-xl border border-border-light">
            <span className="text-5xl text-violet-technologie block mb-4">🔭</span>
            <h3 className="text-2xl font-bold text-text-light mb-4">Notre Vision</h3>
            <p className="text-text-muted-light">
              Devenir la référence des agences de développement reconnue pour sa capacité à transformer l'abstrait en solutions d'affaires tangibles, en visant les modèles SaaS et PaaS.
            </p>
          </div>
        </div>

        {/* Section Valeurs */}
        <h3 className="text-3xl font-bold text-center text-text-light mb-12 border-t border-border-light pt-12">
          Les Piliers de notre Agence
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center p-6 bg-card-light rounded-xl shadow-md border border-border-light">
              <span className="text-4xl text-vert-solution block mb-3">{value.icon}</span>
              <h4 className="font-semibold text-lg mb-2 text-text-light">{value.title}</h4>
              <p className="text-sm text-text-muted-light">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}