import { MapPin, Phone, Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-imagink-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="ImaginK'" 
                className="h-8 w-auto mr-3 brightness-0 invert"
              />
              <span className="text-xl font-bold">ImaginK'</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Agence de développement freelance spécialisée dans la transformation d'idées complexes 
              en solutions numériques concrètes.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-imagink-violet hover:bg-imagink-blue rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-imagink-violet hover:bg-imagink-blue rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-imagink-violet hover:bg-imagink-blue rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-imagink-orange">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Développement Web
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Applications Mobile
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Solutions SaaS
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  IA & Automatisation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-imagink-orange">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-imagink-orange mt-1 flex-shrink-0" />
                <a href="mailto:contact@imagink.dev" className="text-gray-300 hover:text-white transition-colors duration-200">
                  contact@imagink.dev
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-imagink-orange mt-1 flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +33 1 23 45 67 89
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-imagink-orange mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  Paris, France<br />
                  <span className="text-sm text-gray-400">Intervention à distance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Barre de copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} ImaginK'. Tous droits réservés.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
