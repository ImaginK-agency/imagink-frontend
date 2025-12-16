import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: "Création de sites web sur-mesure",
    icon: "💻", // Icône représentant le développement web
    description: "Conception et développement de sites vitrines, e-commerce, et plateformes complexes basés sur Next.js pour une performance maximale et un excellent SEO.",
    detailsLink: "/services/web-design",
  },
  {
    title: "Applications Mobiles Natives & Hybrides",
    icon: "📱", // Icône représentant le mobile
    description: "Développement d'applications iOS et Android (React Native, Flutter) pour offrir des expériences utilisateurs fluides et hautement performantes.",
    detailsLink: "/services/mobile-app",
  },
  {
    title: "UI/UX Design Centré Utilisateur",
    icon: "💡", // Icône représentant le design et l'idée
    description: "De la stratégie de marque à la conception d'interfaces utilisateur (UI) intuitives et d'expériences (UX) optimisées (Figma/Sketch).",
    detailsLink: "/services/ux-ui",
  },
  {
    title: "Maintenance Évolutive et Support",
    icon: "🛠️", // Icône représentant la maintenance
    description: "Contrats de maintenance préventive et évolutive, monitoring et support technique pour garantir la pérennité et la croissance de vos applications.",
    detailsLink: "/services/maintenance",
  },
];

/**
 * Composant principal de la liste des services.
 */
export default function ServicesList() {
  return (
    <section className="py-24 bg-card-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-bleu-creatif mb-12">
          Nos Domaines d'Intervention
        </h2>
        
        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-2xl border border-border-light shadow-xl hover:shadow-violet-technologie/20 transition duration-300 flex flex-col h-full bg-card-light"
            >
              <div className="text-5xl mb-4 text-violet-technologie">{service.icon}</div>
              <h3 className="font-bold text-xl mb-4 text-text-light">{service.title}</h3>
              <p className="text-text-muted-light mb-6 flex-grow">
                {service.description}
              </p>
              <Link
                href={service.detailsLink}
                className="inline-flex items-center text-violet-technologie font-semibold hover:text-bleu-creatif transition"
              >
                Voir les détails
                {/* Icône flèche */}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}