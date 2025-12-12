# 🚀 Deployment Guide - RateMaster

## ✅ Backend Deployment (Completed)

Your backend is already deployed at:
```
https://store-rating-system-rose.vercel.app
```

---

## 🎨 Frontend Deployment to Vercel

### Method 1: Using Vercel CLI (Recommended)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Login to Vercel**
```bash
vercel login
```

**Step 3: Navigate to Frontend Directory**
```bash
cd frontend
```

**Step 4: Deploy**
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → ratemaster-frontend (or your choice)
- **Directory?** → ./ (current directory)
- **Override settings?** → No

**Step 5: Deploy to Production**
```bash
vercel --prod
```

---

### Method 2: Using Vercel Dashboard (Easier)

**Step 1: Push to GitHub**
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

**Step 2: Import to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

**Step 3: Add Environment Variables**
In Vercel dashboard, add:
```
VITE_API_URL=https://store-rating-system-rose.vercel.app/api
```

**Step 4: Deploy**
Click **"Deploy"** and wait for deployment to complete.

---

## 🔧 Update Backend CORS

After deploying frontend, you need to update backend CORS to allow your frontend domain.

**Step 1: Get Your Frontend URL**
After deployment, you'll get a URL like:
```
https://ratemaster-frontend.vercel.app
```

**Step 2: Update Backend CORS**

Edit `backend/src/server.js`:
```javascript
const corsOptions = {
  origin: [
    'https://ratemaster-frontend.vercel.app',  // Add your frontend URL
    'https://roxiller-systems-xe4x.vercel.app',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};
```

**Step 3: Redeploy Backend**
```bash
cd backend
vercel --prod
```

---

## 📋 Pre-Deployment Checklist

### Frontend
- [x] Environment variables configured
- [x] API URL points to production backend
- [x] vercel.json configured for SPA routing
- [x] Build command works locally (`npm run build`)
- [ ] No console errors in production build

### Backend
- [x] Database connected (Neon PostgreSQL)
- [x] Environment variables set in Vercel
- [x] CORS configured
- [ ] Frontend URL added to CORS after deployment
- [x] API endpoints tested

---

## 🧪 Testing Deployment

### 1. Test Backend
```bash
curl https://store-rating-system-rose.vercel.app/api/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "API is healthy",
  "timestamp": "2024-..."
}
```

### 2. Test Frontend
After deployment, visit your frontend URL and:
- ✅ Login page loads
- ✅ Can login with demo credentials
- ✅ Dashboard loads
- ✅ API calls work
- ✅ No CORS errors

---

## 🔑 Demo Credentials for Testing

### Admin
```
Email: sophia.anderson@ratemaster.com
Password: SuperAdmin@2024
```

### Customer
```
Email: olivia.martinez@gmail.com
Password: Welcome@123
```

### Store Owner
```
Email: michael.chen@luxuryemporium.com
Password: Luxury@2024
```

---

## 🐛 Troubleshooting

### Issue: CORS Error
**Solution**: Add your frontend URL to backend CORS configuration

### Issue: API calls fail
**Solution**: Check VITE_API_URL environment variable in Vercel

### Issue: 404 on refresh
**Solution**: Ensure vercel.json has proper rewrites configuration

### Issue: Build fails
**Solution**: 
```bash
# Test build locally first
cd frontend
npm run build
npm run preview
```

---

## 📝 Environment Variables

### Backend (Vercel Dashboard)
```env
DATABASE_URL=your_neon_postgres_url
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=production
```

### Frontend (Vercel Dashboard)
```env
VITE_API_URL=https://store-rating-system-rose.vercel.app/api
```

---

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to main branch
- Create preview deployments for pull requests
- Run build checks before deployment

---

## 📊 Monitoring

### Vercel Dashboard
- View deployment logs
- Monitor performance
- Check analytics
- View error logs

### Health Check Endpoints
```
Backend:  https://store-rating-system-rose.vercel.app/
Frontend: https://your-frontend-url.vercel.app/
```

---

## 🎉 Post-Deployment

After successful deployment:

1. ✅ Test all features
2. ✅ Update README with live URLs
3. ✅ Share with team/stakeholders
4. ✅ Monitor for errors
5. ✅ Set up custom domain (optional)

---

## 🌐 Custom Domain (Optional)

### Add Custom Domain in Vercel:
1. Go to Project Settings
2. Click "Domains"
3. Add your domain
4. Update DNS records as instructed
5. Wait for SSL certificate

---

## 📞 Support

If you encounter issues:
- Check Vercel deployment logs
- Review browser console for errors
- Verify environment variables
- Test API endpoints directly

---

**Happy Deploying! 🚀**
