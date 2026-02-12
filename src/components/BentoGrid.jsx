import { Code, Smartphone, Cloud, Database, Sparkles, Zap } from 'lucide-react';
import { siteContent } from '../data/content';

const iconMap = {
  Code, Smartphone, Cloud, Database, Sparkles, Zap
};

const BentoGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-imagink-blue to-imagink-violet bg-clip-text text-transparent">
          Nos Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-imagink-blue to-imagink-violet rounded-lg flex items-center justify-center mb-4">
                  {Icon && <Icon className="text-white" size={24} />}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
