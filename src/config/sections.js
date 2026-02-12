// Configuration des types de sections disponibles
export const SECTION_TYPES = {
  // Hero sections
  HERO_SLIDER: 'hero_slider',
  HERO_SIMPLE: 'hero_simple',
  
  // Content sections
  TEXT_BLOCK: 'text_block',
  BLOC_TEXTE_RICHE: 'bloc_texte_riche',
  
  // Grid sections
  BENTO_GRID: 'bento_grid',
  GRILLE_FONCTIONNALITES_BENTO: 'grille_de_fonctionnalites_bento',
  
  // Logo and partners
  LOGO_CLOUD: 'logo_cloud',
  BARRE_LOGOS: 'barre_de_logos',
  
  // Metrics
  KEY_METRICS: 'key_metrics',
  CHIFFRES_CLES: 'chiffres_cles',
  
  // Interactive
  ACCORDION: 'accordion',
  FAQ: 'faq',
  
  // Testimonials
  TESTIMONIALS: 'testimonials',
  CARROUSEL_TEMOIGNAGES: 'carrousel_temoignages',
  
  // CTA
  CTA: 'cta',
  APPEL_ACTION_CTA_FINAL: 'appel_a_l_action_cta_final',
  
  // About
  TIMELINE: 'timeline',
  CHRONOLOGIE: 'chronologie',
  CHRONOLOGIE_HISTOIRE: 'chronologie_histoire',
  
  VALUES_GRID: 'values_grid',
  GRILLE_VALEURS: 'grille_de_valeurs',
  
  TEAM_GRID: 'team_grid',
  GRILLE_EQUIPE: 'grille_equipe',
  
  // Portfolio
  PROJECTS_GRID: 'projects_grid',
  GRILLE_PROJETS: 'grille_des_projets',
  
  // Services
  SERVICES_GRID: 'services_grid',
  LISTE_SERVICES: 'liste_des_services',
};

// Pages et leurs sections associées
export const PAGE_SECTIONS = {
  accueil: [
    'hero_slider',
    'barre_de_logos',
    'bloc_texte_riche',
    'grille_de_fonctionnalites_bento',
    'chiffres_cles',
    'accordion',
    'carrousel_temoignages',
    'appel_a_l_action_cta_final'
  ],
  
  'a-propos': [
    'hero_simple',
    'chronologie_histoire',
    'grille_de_valeurs',
    'grille_equipe',
    'bloc_texte_riche',
    'appel_a_l_action_cta_final'
  ],
  
  'nos-services': [
    'hero_simple',
    'liste_des_services',
    'bloc_texte_riche'
  ],
  
  'nos-realisations': [
    'hero_simple',
    'grille_des_projets',
    'appel_a_l_action_cta_final'
  ],
  
  // Services détaillés
  'architecture-backend-api': [
    'hero_simple',
    'bloc_texte_riche',
    'grille_de_fonctionnalites_bento',
    'appel_a_l_action_cta_final'
  ],
  
  'developpement-saas-web': [
    'hero_simple',
    'bloc_texte_riche',
    'grille_de_fonctionnalites_bento',
    'appel_a_l_action_cta_final'
  ],
  
  'e-commerce-erp-sur-mesure': [
    'hero_simple',
    'bloc_texte_riche',
    'grille_de_fonctionnalites_bento',
    'appel_a_l_action_cta_final'
  ],
  
  'solutions-ia-automatisation': [
    'hero_simple',
    'bloc_texte_riche',
    'grille_de_fonctionnalites_bento',
    'appel_a_l_action_cta_final'
  ]
};

export default {
  SECTION_TYPES,
  PAGE_SECTIONS
};
