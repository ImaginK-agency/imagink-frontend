import React from 'react';

/**
 * FAQ SECTION
 * Section des questions fréquentes pour répondre aux doutes courants.
 */
export default function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-background-light">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Titre */}
        <h2 className="text-3xl font-bold text-bleu-creatif text-center mb-12">
          Questions fréquentes
        </h2>

        {/* FAQ list */}
        <div className="space-y-6">
          <div className="border border-border-light rounded-xl p-6 bg-card-light shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-text-light">
              Combien de temps dure un projet ?
            </h3>
            <p className="text-text-muted-light">
              La durée dépend de la complexité du projet. En moyenne, un site
              vitrine prend 2 à 4 semaines.
            </p>
          </div>

          <div className="border border-border-light rounded-xl p-6 bg-card-light shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-text-light">
              Proposez-vous un accompagnement après livraison ?
            </h3>
            <p className="text-text-muted-light">
              Oui, nous proposons des contrats de maintenance et
              d’accompagnement technique.
            </p>
          </div>

          <div className="border border-border-light rounded-xl p-6 bg-card-light shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-text-light">
              Travaillez-vous avec des startups ?
            </h3>
            <p className="text-text-muted-light">
              Absolument, nous accompagnons aussi bien les startups que les
              entreprises établies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}