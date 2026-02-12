import axios from 'axios';

// En développement, utiliser le proxy Vite, en production utiliser l'URL complète
const API_BASE_URL = import.meta.env.DEV 
  ? '' // Utilise le proxy Vite
  : 'https://server-headless.imagink.agency';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = {
  // Pages
  getPage: async (slug) => {
    const response = await apiClient.get(`/api/pages/${slug}/`);
    return response.data;
  },

  // Navigation
  getMenu: async (menuSlug) => {
    const response = await apiClient.get(`/api/navigation/menus/${menuSlug}/`);
    return response.data;
  },

  // Settings
  getGlobalSettings: async () => {
    const response = await apiClient.get('/api/settings/global/');
    return response.data;
  },

  // Blog
  getArticles: async (params) => {
    const response = await apiClient.get('/api/blog/articles/', { params });
    return response.data;
  },
};

export default apiClient;
