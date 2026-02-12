import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-imagink-blue via-imagink-violet to-imagink-green text-white">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
        <p className="text-xl mb-8 opacity-90">Contactez-nous pour discuter de vos besoins et transformer vos idées en réalité</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-white text-imagink-violet px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Nous contacter
            <ArrowRight size={20} />
          </a>
          <a 
            href="/services" 
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-imagink-violet transition-all duration-300"
          >
            Voir nos services
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
