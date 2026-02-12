// Couleurs ImaginK' Brand Book - EXACTES
export const colors = {
  // Palette principale (Tourbillon) - Brand Book 4.1
  primary: {
    'blue-creative': '#4A148C',      // Bleu Créatif (Départ Idée) - RGB(74, 20, 140)
    'violet-tech': '#7B1FA2',       // Violet Technologie - RGB(123, 31, 162)
    'green-solution': '#689F38',    // Vert Solution (Concrétisation) - RGB(104, 159, 56)
    'orange-vitality': '#FF9800',   // Orange Vitalité (Énergie) - RGB(255, 152, 0)
  },
  
  // Palette secondaire - Brand Book 4.2
  cta: {
    primary: '#1976D2',             // CTA Primaire (Confiance) - RGB(25, 118, 210)
    secondary: '#BDBDBD',           // CTA Secondaire (Subtil) - RGB(189, 189, 189)
  },
  
  // Couleurs d'arrière-plan - Brand Book 4.3
  background: {
    light: '#F5F5F5',              // Fond Clair (Gris très clair)
    dark: '#212121',               // Fond Sombre (Gris presque noir)
    neutral: '#FFFFFF',            // Fond Neutre (Blanc pur)
  }
};

// Dégradés recommandés selon le brand book
export const gradients = {
  primary: 'from-[#4A148C] to-[#7B1FA2]',           // Bleu créatif vers Violet tech
  solution: 'from-[#7B1FA2] to-[#689F38]',          // Violet tech vers Vert solution
  vitality: 'from-[#689F38] to-[#FF9800]',          // Vert solution vers Orange vitalité
  tourbillon: 'from-[#4A148C] via-[#7B1FA2] via-[#689F38] to-[#FF9800]', // Tourbillon complet
  cta: 'from-[#1976D2] to-[#7B1FA2]',               // CTA avec violet tech
  hero: 'from-purple-50 to-blue-50',                // Fond hero léger
};

// Typographie - Brand Book 5.1 & 5.2
export const typography = {
  fonts: {
    heading: 'Poppins',           // Titres, sous-titres, nom de marque
    body: 'Montserrat',           // Paragraphes, légendes, textes longs
  },
  
  // Brand Book 5.3
  weights: {
    bold: 700,                    // Titres importants, mots-clés
    semibold: 600,               // Sous-titres, navigation
    regular: 400,                // Corps de texte standard
    black: 900,                  // Titres hero massifs
  }
};

// Animations et transitions
export const animations = {
  duration: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.6s',
  },
  
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  }
};

export default {
  colors,
  gradients,
  typography,
  animations,
};
