// Sections principales
import HeroSliderAPI from '../HeroSliderAPI';
import HeroSimple from './HeroSimple';
import BentoGridSection from './BentoGridSection';
import RichTextSection from './RichTextSection';
import CTASection from './CTASection';
import LogoCloud from './LogoCloud';
import KeyMetrics from './KeyMetrics';
import AccordionSection from './AccordionSection';
import TestimonialsCarousel from './TestimonialsCarousel';
import Timeline from './Timeline';
import ValuesGrid from './ValuesGrid';
import TeamGrid from './TeamGrid';
import ProjectsGrid from './ProjectsGrid';
import ServicesGrid from './ServicesGrid';
import FeaturesGrid from './FeaturesGrid';
import ServicesList from './ServicesList';
import PortfolioGrid from './PortfolioGrid';

export const SECTION_COMPONENTS = {
  // Hero sections
  hero_slider: HeroSliderAPI,
  hero_simple: HeroSimple,
  
  // Content sections
  text_block: RichTextSection,
  bloc_texte_riche: RichTextSection,
  
  // Grid sections
  bento_grid: BentoGridSection,
  grille_de_fonctionnalites_bento: BentoGridSection,
  grille_de_fonctionnalites: BentoGridSection,
  
  // Features
  features: FeaturesGrid,
  
  // Logo and partners
  logo_cloud: LogoCloud,
  barre_de_logos: LogoCloud,
  
  // Metrics and stats
  key_metrics: KeyMetrics,
  chiffres_cles: KeyMetrics,
  stats: KeyMetrics,
  
  // Interactive sections
  accordion: AccordionSection,
  faq: AccordionSection,
  
  // Testimonials
  testimonials: TestimonialsCarousel,
  carrousel_temoignages: TestimonialsCarousel,
  
  // CTA sections
  cta: CTASection,
  appel_a_l_action_cta_final: CTASection,
  
  // About sections
  timeline: Timeline,
  chronologie: Timeline,
  chronologie_histoire: Timeline,
  
  values_grid: ValuesGrid,
  grille_de_valeurs: ValuesGrid,
  
  team_grid: TeamGrid,
  grille_equipe: TeamGrid,
  
  // Portfolio sections
  projects_grid: ProjectsGrid,
  grille_des_projets: ProjectsGrid,
  portfolio_grid: PortfolioGrid,
  
  // Services sections
  services_grid: ServicesGrid,
  liste_des_services: ServicesGrid,
  services_list: ServicesList,
};
