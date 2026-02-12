// Types pour l'API Django
export interface Section {
  id: string;
  type: string;
  title?: string;
  content?: string;
  data?: any;
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  meta_description?: string;
  sections: Section[];
}

export interface MenuItem {
  id: string;
  title: string;
  url: string;
  children?: MenuItem[];
}

export interface Menu {
  slug: string;
  items: MenuItem[];
}

export interface GlobalSettings {
  site_title: string;
  site_description: string;
  logo?: string;
  contact_email?: string;
}
