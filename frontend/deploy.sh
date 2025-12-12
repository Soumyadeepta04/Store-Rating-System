#!/bin/bash

# RateMaster Frontend Deployment Script
echo "🚀 Starting RateMaster Frontend Deployment..."
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating..."
    echo "VITE_API_URL=https://store-rating-system-rose.vercel.app/api" > .env
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 Deploying to Vercel..."
    echo ""
    
    # Deploy to Vercel
    vercel --prod
    
    echo ""
    echo "✅ Deployment complete!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Copy your frontend URL from above"
    echo "2. Add it to backend CORS in backend/src/server.js"
    echo "3. Redeploy backend with: cd ../backend && vercel --prod"
    echo ""
else
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi
