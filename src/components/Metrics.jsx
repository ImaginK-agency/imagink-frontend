import { siteContent } from '../data/content';

const Metrics = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-imagink-blue via-imagink-violet to-imagink-green text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {siteContent.metrics.map((stat, i) => (
            <div key={i} className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
