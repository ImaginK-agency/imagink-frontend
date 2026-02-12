# 🚀 GUIDE DE DÉPLOIEMENT - SITE IMAGINK'

## ✅ MÉTHODE 1 : VERCEL (RECOMMANDÉ - 5 MINUTES)

### Étape 1 : Créer un compte Vercel
1. Aller sur https://vercel.com
2. Cliquer sur "Sign Up"
3. Se connecter avec GitHub

### Étape 2 : Importer le projet
1. Cliquer sur "Add New..." → "Project"
2. Sélectionner votre repository GitHub
3. Vercel détecte automatiquement Vite

### Étape 3 : Configuration (automatique)
Vercel configure automatiquement :
- Build Command : `npm run build`
- Output Directory : `dist`
- Install Command : `npm install`

### Étape 4 : Déployer
1. Cliquer sur "Deploy"
2. Attendre 2-3 minutes
3. Votre site est en ligne ! 🎉

**URL :** `votre-projet.vercel.app`

---

## ✅ MÉTHODE 2 : NETLIFY (ALTERNATIVE)

### Étape 1 : Créer un compte
1. Aller sur https://netlify.com
2. Se connecter avec GitHub

### Étape 2 : Nouveau site
1. "Add new site" → "Import an existing project"
2. Choisir GitHub
3. Sélectionner votre repository

### Étape 3 : Configuration
```
Build command: npm run build
Publish directory: dist
```

### Étape 4 : Deploy
Cliquer sur "Deploy site"

**URL :** `votre-projet.netlify.app`

---

## ✅ MÉTHODE 3 : GITHUB PAGES

### Étape 1 : Installer gh-pages
```bash
cd ~/agency/site_frontend
npm install --save-dev gh-pages
```

### Étape 2 : Modifier package.json
Ajouter :
```json
{
  "homepage": "https://votre-username.github.io/nom-repo",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Étape 3 : Déployer
```bash
npm run deploy
```

### Étape 4 : Activer GitHub Pages
1. Aller dans Settings → Pages
2. Source : gh-pages branch
3. Save

---

## 🔧 VÉRIFICATIONS AVANT DÉPLOIEMENT

### ✅ Checklist
- [x] Code compilé sans erreur (`npm run build`)
- [x] Fichier vercel.json créé
- [x] Repository GitHub à jour
- [x] Logo présent dans public/
- [x] Toutes les pages fonctionnent

### 🧪 Tester localement la version production
```bash
npm run build
npm run preview
```
Ouvrir : http://localhost:4173

---

## 🌐 DOMAINE PERSONNALISÉ (OPTIONNEL)

### Après déploiement sur Vercel/Netlify :

1. **Acheter un domaine**
   - Namecheap, GoDaddy, OVH, etc.
   - Ex : imagink.dev

2. **Configurer les DNS**
   
   **Pour Vercel :**
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com
   
   **Pour Netlify :**
   - Type: A, Name: @, Value: 75.2.60.5
   - Type: CNAME, Name: www, Value: votre-site.netlify.app

3. **Ajouter le domaine**
   - Dans Vercel/Netlify : Settings → Domains
   - Ajouter votre domaine
   - Attendre propagation DNS (24-48h max)

---

## 📊 APRÈS DÉPLOIEMENT

### ✅ Tests à faire
1. Ouvrir le site sur mobile
2. Tester toutes les pages
3. Vérifier les images
4. Tester le formulaire de contact
5. Vérifier la navigation

### 🔍 Outils de test
- **Google PageSpeed Insights** : https://pagespeed.web.dev
- **GTmetrix** : https://gtmetrix.com
- **Mobile-Friendly Test** : https://search.google.com/test/mobile-friendly

### 📈 Analytics (optionnel)
Ajouter Google Analytics :
1. Créer un compte GA4
2. Ajouter le script dans index.html
3. Suivre les visiteurs

---

## 🚀 DÉPLOIEMENT AUTOMATIQUE

### Avec Vercel/Netlify :
Chaque push sur GitHub déclenche automatiquement :
1. Build du projet
2. Tests
3. Déploiement
4. Mise en ligne

**Workflow :**
```bash
git add .
git commit -m "Update content"
git push
# → Site mis à jour automatiquement ! 🎉
```

---

## 🆘 DÉPANNAGE

### Erreur de build
```bash
# Vérifier localement
npm run build

# Si erreur, corriger et push
git add .
git commit -m "Fix build"
git push
```

### Site ne s'affiche pas
1. Vérifier les logs de build
2. Vérifier que dist/ est généré
3. Vérifier vercel.json

### Images ne s'affichent pas
1. Vérifier les chemins (relatifs)
2. Vérifier que les images sont dans public/
3. Rebuild le projet

---

## 📞 SUPPORT

**Vercel :** https://vercel.com/docs
**Netlify :** https://docs.netlify.com
**GitHub Pages :** https://pages.github.com

---

## ✅ RÉSUMÉ RAPIDE

**Pour déployer maintenant :**

1. Aller sur https://vercel.com
2. Se connecter avec GitHub
3. Importer votre repository
4. Cliquer sur "Deploy"
5. Attendre 2-3 minutes
6. **C'est en ligne ! 🎉**

**Votre site sera accessible sur :**
`https://votre-projet.vercel.app`

---

**Bon déploiement ! 🚀**
