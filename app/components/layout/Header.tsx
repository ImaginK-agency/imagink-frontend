import Link from 'next/link';
import React from 'react';

/**
 * Composant d'entête (Header) de la navigation principale.
 * Intègre le logo et le menu principal pour naviguer entre les pages.
 */
export default function Header() {
  const navItems = [
    // Mise à jour des liens pour correspondre aux routes Next.js
    { name: 'Accueil', href: '/' },          // Page d'accueil (app/page.js)
    { name: 'Services', href: '/services' }, // Page Services (app/services/page.js)
    { name: 'À Propos', href: '/about' },    // Page À Propos (app/about/page.js)
    { name: 'FAQ', href: '/#faq' },          // Lien vers la section FAQ de la page d'accueil
  ];

  return (
    // Utilise les classes du Design System Tailwind v4 (bg-card-light, shadow-lg)
    <header className="sticky top-0 z-50 bg-card-light shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo de l'agence (Lien vers l'accueil) */}
        <Link href="/" className="text-2xl font-bold text-bleu-creatif">
          Imagink<span className="text-violet-technologie">'</span>
        </Link>

        {/* Menu de navigation Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-text-light hover:text-violet-technologie transition font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Bouton de Contact / Call To Action */}
        <Link 
          href="/contact" // Route fictive de la page Contact
          className="bg-violet-technologie text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition hidden sm:block shadow-md"
        >
          Contactez-nous
        </Link>

        {/* Icône Menu mobile (Reste un placeholder pour le moment) */}
        <button className="md:hidden text-bleu-creatif">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}