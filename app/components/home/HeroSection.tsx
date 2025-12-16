import React from 'react';

/**
 * HERO SECTION
 * Section principale avec image de fond et un titre percutant.
 */
export default function HeroSection() {
  return (
    <section className="relative h-[700px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYR9jpkeHhdE1QZFjAPXOluxApWKKw7UgZEdO6w0P6HoMTRQI5_VfuL9zHhNj4OgnDUJ7yYB8-Oc24qjGjN2xUMfDO449MyUAZ7P-BgcqgxPQ6w1HzfBeTKUtHTgFKX_2gX-GQCBuKMi_w6JZyCz0Rp51pQpWyv0i3Pbw2JN2lximEEq9E9_R1BgW37ruDDvRr13k87nJBC543KwkWjVspmDsIvlOVumHVQzSlC-MEYZ5K0yFrmJNJsGQ1hQxNggxEPy4RDL1poEI" // Remplacer par l'URL de votre image
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu textuel */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {/* Titre avec dégradé de marque */}
          <span className="bg-gradient-to-r from-violet-technologie via-bleu-creatif to-vert-solution bg-clip-text text-transparent">
            Accélérez votre transformation numérique
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Nous concevons des solutions digitales sur-mesure pour propulser votre entreprise.
        </p>

        {/* Bouton CTA */}
        <button className="bg-gradient-to-r from-violet-technologie to-bleu-creatif px-8 py-3 rounded-md font-semibold hover:scale-105 transition shadow-xl">
          Découvrir nos solutions
        </button>
      </div>
    </section>
  );
}