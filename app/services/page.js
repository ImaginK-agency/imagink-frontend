import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CtaSection from '../components/home/CtaSection';
import ServicesList from '../components/services/ServicesList';

/**
 * Composant Hero simple pour la page Services
 */
function ServicesHero() {
  return (
    <div className="bg-bleu-creatif py-24 text-center text-white">
      <h1 className="text-5xl font-bold mb-4">
        Notre Expertise en Solutions Digitales
      </h1>
      <p className="text-xl opacity-90 max-w-3xl mx-auto px-6">
        Nous transformons votre vision en une réalité technologique performante, de la conception à la mise en production.
      </p>
    </div>
  );
}

/**
 * PAGE SERVICES
 * Assemble les sections pour la page de liste des services.
 */
export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}