#!/bin/bash

echo "🚀 Démarrage du serveur ImaginK'"
echo "================================"

# Vérifier si le port 5173 est libre
if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port 5173 occupé, arrêt du processus..."
    pkill -f "vite"
    sleep 2
fi

# Démarrer le serveur
echo "🌐 Démarrage sur toutes les interfaces..."
cd /home/sinella/agency/site_frontend

# Démarrer avec host explicite
npm run dev -- --host 0.0.0.0 --port 5173

echo ""
echo "✅ Serveur accessible sur :"
echo "   - Local:    http://localhost:5173"
echo "   - Réseau:   http://$(hostname -I | awk '{print $1}'):5173"
