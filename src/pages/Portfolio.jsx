import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Footer from '../components/Footer';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "TechStart Mobile App",
      category: "Application Mobile",
      description: "Application mobile de gestion de projet avec React Native",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      tags: ["React Native", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Plateforme e-commerce complète avec paiement intégré",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Django", "PostgreSQL"],
      link: "#"
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      category: "SaaS",
      description: "Dashboard analytics pour startup B2B",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      id: 4,
      title: "AI Chatbot",
      category: "Intelligence Artificielle",
      description: "Chatbot intelligent pour service client",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      tags: ["Python", "OpenAI", "FastAPI"],
      link: "#"
    },
    {
      id: 5,
      title: "Corporate Website",
      category: "Web Design",
      description: "Site vitrine moderne pour entreprise tech",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Vue.js", "Nuxt", "Strapi"],
      link: "#"
    },
    {
      id: 6,
      title: "Booking System",
      category: "Web Application",
      description: "Système de réservation en ligne",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      tags: ["React", "Express", "MySQL"],
      link: "#"
    }
  ];

  return (
    <div style={{ marginTop: '70px' }}>
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-imagink-blue via-imagink-violet to-imagink-green text-white">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Nos Réalisations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            Découvrez les projets que nous avons concrétisés pour nos clients
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-imagink-violet text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.link}
                      className="flex items-center gap-2 text-imagink-violet hover:text-imagink-blue transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Voir le projet</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-imagink-blue to-imagink-violet text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Votre projet sera le prochain ?</h2>
          <p className="text-xl mb-8 opacity-90">Contactez-nous pour discuter de vos besoins</p>
          <a 
            href="/contact"
            className="inline-block bg-white text-imagink-violet px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Démarrer un projet
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
