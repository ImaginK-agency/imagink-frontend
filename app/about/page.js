import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CtaSection from '../components/home/CtaSection';
import StatsSection from '../components/home/StatsSection'; // Réutilisation des stats de la home
import MissionVisionSection from '../components/about/MissionVisionSection';

/**
 * Composant Hero pour la page À Propos
 */
function AboutHero() {
  return (
    <div className="bg-violet-technologie py-32 text-center text-white">
      <h1 className="text-6xl font-extrabold mb-4">
        Qui sommes-nous ?
      </h1>
      <p className="text-xl opacity-90 max-w-4xl mx-auto px-6">
        Imagink' est un collectif d'experts passionnés par la construction de solutions logicielles robustes et évolutives.
      </p>
    </div>
  );
}

/**
 * PAGE À PROPOS
 * Assemble les sections pour la présentation globale de l'agence.
 */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <MissionVisionSection />
        <StatsSection /> {/* Montrer les chiffres clés à propos */}
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}