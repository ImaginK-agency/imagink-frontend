# 🚀 Déploiement du site ImaginK'

## Option 1 : Vercel (Recommandé - Gratuit)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Installer Vercel CLI :
```bash
npm install -g vercel
```

3. Déployer :
```bash
cd ~/agency/site_frontend
vercel
```

4. Suivre les instructions (appuyer sur Entrée pour les valeurs par défaut)

## Option 2 : Netlify (Gratuit)

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Installer Netlify CLI :
```bash
npm install -g netlify-cli
```

3. Build et déployer :
```bash
cd ~/agency/site_frontend
npm run build
netlify deploy --prod
```

## Option 3 : GitHub Pages

1. Installer gh-pages :
```bash
npm install --save-dev gh-pages
```

2. Ajouter dans `package.json` :
```json
"homepage": "https://votre-username.github.io/site-imagink",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Déployer :
```bash
npm run deploy
```

## Build local

Pour tester la version de production localement :

```bash
npm run build
npm run preview
```

Le site sera disponible sur http://localhost:4173

## Variables d'environnement (optionnel)

Si vous ajoutez un backend plus tard, créez un fichier `.env` :

```
VITE_API_URL=https://api.imagink.dev
VITE_CONTACT_EMAIL=contact@imagink.dev
```

Et utilisez-les dans le code :
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Optimisations avant déploiement

1. **Compresser les images** :
   - Utiliser TinyPNG ou Squoosh
   - Format WebP recommandé

2. **Vérifier les performances** :
   - Lighthouse dans Chrome DevTools
   - Viser 90+ sur tous les scores

3. **SEO** :
   - Ajouter un fichier `robots.txt`
   - Ajouter un `sitemap.xml`
   - Vérifier les meta tags

## Domaine personnalisé

Une fois déployé sur Vercel/Netlify :
1. Acheter un domaine (ex: imagink.dev)
2. Configurer les DNS dans les paramètres
3. Ajouter le domaine dans Vercel/Netlify

---

**Le site est prêt pour le déploiement ! 🎉**
