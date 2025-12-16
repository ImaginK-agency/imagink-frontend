import Link from 'next/link';
import React from 'react';

/**
 * Composant de pied de page (Footer).
 * Utilise 'bleu-creatif' comme couleur de fond pour un contraste premium.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Agence', links: ['À Propos', 'Carrières', 'Partenaires'] },
    { title: 'Services', links: ['Création Web', 'Applications Mobiles', 'UI/UX Design', 'Support'] },
    { title: 'Ressources', links: ['Blog', 'Études de Cas', 'FAQ'] },
  ];

  return (
    <footer className="bg-bleu-creatif text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Liens du Footer (Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/20 pb-10">
          
          {/* Section Logo / Marque */}
          <div>
            <Link href="/" className="text-3xl font-bold text-white">
              Imagink<span className="text-violet-technologie">'</span>
            </Link>
            <p className="text-sm opacity-70 mt-3 max-w-xs">
              Convertir l'imagination en solutions numériques concrètes.
            </p>
          </div>

          {/* Groupes de liens */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-lg mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(/[éèà ]/g, '-')}`} 
                      className="text-sm opacity-80 hover:opacity-100 transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Droits d'auteur et bas de page */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
          <p>
            © {currentYear} Imagink'. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Icônes de réseaux sociaux (Placeholders) */}
            <Link href="#" className="hover:opacity-100 transition">LinkedIn</Link>
            <Link href="#" className="hover:opacity-100 transition">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}