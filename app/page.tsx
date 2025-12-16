import HeroSection from "./components/home/HeroSection";
import ServicesSection from "./components/home/ServicesSection";
import StatsSection from "./components/home/StatsSection";
import ClientsSection from "./components/home/ClientsSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import FaqSection from "./components/home/FaqSection";
import CtaSection from "./components/home/CtaSection";

// Import des composants de layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

/**
 * PAGE D'ACCUEIL (HomePage)
 * C'est le composant principal qui assemble toutes les sections pour former la page.
 * Utilisé comme 'page.js' dans l'architecture Next.js App Router.
 */
export default function Page() {
  return (
    // Fragment React pour contenir tous les éléments
    <>
      {/* 1. Entête du site (Header) */}
      <Header />
      
      {/* 2. Corps de la page d'accueil (Assemblage de vos sections) */}
      <main>
        <HeroSection />          {/* Capture l'attention */}
        <ClientsSection />       {/* Établit la confiance (placé tôt) */}
        <ServicesSection />      {/* Présente l'offre */}
        <StatsSection />         {/* Chiffres clés */}
        <TestimonialsSection />  {/* Preuve sociale */}
        <FaqSection />           {/* Lève les objections */}
        <CtaSection />           {/* Appel à l'action final */}
      </main>

      {/* 3. Pied de page du site (Footer) */}
      <Footer />
    </>
  );
}