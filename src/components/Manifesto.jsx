import { siteContent } from '../data/content';

const Manifesto = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-imagink-blue via-imagink-violet to-imagink-green bg-clip-text text-transparent">
          {siteContent.manifesto.title}
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          {siteContent.manifesto.content}
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
