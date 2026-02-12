import { Star } from 'lucide-react';
import { siteContent } from '../data/content';

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-imagink-blue to-imagink-violet bg-clip-text text-transparent">
          Témoignages Clients
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {siteContent.testimonials.map((t) => (
            <div key={t.id} className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-imagink-orange fill-imagink-orange" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-bold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
