#!/bin/bash

echo "🧪 TEST DU SITE IMAGINK'"
echo "========================"
echo ""

# Test 1: Fichiers
echo "✓ Test 1: Vérification des fichiers..."
if [ -f "src/pages/Home.jsx" ] && [ -f "src/pages/Services.jsx" ] && [ -f "src/pages/About.jsx" ] && [ -f "src/pages/Contact.jsx" ]; then
    echo "  ✅ Toutes les pages existent"
else
    echo "  ❌ Pages manquantes"
fi

if [ -f "src/components/Navbar.jsx" ] && [ -f "src/components/Footer.jsx" ]; then
    echo "  ✅ Composants principaux existent"
else
    echo "  ❌ Composants manquants"
fi

if [ -f "src/data/content.js" ]; then
    echo "  ✅ Fichier de contenu existe"
else
    echo "  ❌ Fichier de contenu manquant"
fi

if [ -f "public/logo.png" ]; then
    echo "  ✅ Logo existe"
else
    echo "  ❌ Logo manquant"
fi

echo ""

# Test 2: Compilation
echo "✓ Test 2: Compilation..."
npm run build > /tmp/build.log 2>&1
if [ $? -eq 0 ]; then
    echo "  ✅ Compilation réussie"
else
    echo "  ❌ Erreur de compilation"
    cat /tmp/build.log
fi

echo ""

# Test 3: Serveur
echo "✓ Test 3: Serveur de développement..."
if curl -s http://localhost:5173 > /dev/null 2>&1; then
    echo "  ✅ Serveur actif sur http://localhost:5173"
elif curl -s http://localhost:5174 > /dev/null 2>&1; then
    echo "  ✅ Serveur actif sur http://localhost:5174"
else
    echo "  ⚠️  Serveur non démarré. Lancez: npm run dev"
fi

echo ""
echo "========================"
echo "✅ TESTS TERMINÉS"
echo ""
echo "Pour voir le site:"
echo "  1. cd ~/agency/site_frontend"
echo "  2. npm run dev"
echo "  3. Ouvrir http://localhost:5173"
