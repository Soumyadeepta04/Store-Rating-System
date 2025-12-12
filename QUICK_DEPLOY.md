# ⚡ Quick Deploy Guide

## 🎯 Deploy Frontend in 3 Steps

### Option 1: Automated Script (Windows)

```bash
cd frontend
deploy.bat
```

### Option 2: Automated Script (Mac/Linux)

```bash
cd frontend
chmod +x deploy.sh
./deploy.sh
```

### Option 3: Manual Deployment

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Login**
```bash
vercel login
```

**Step 3: Deploy**
```bash
cd frontend
vercel --prod
```

---

## 🔧 After Deployment

### 1. Copy Your Frontend URL
After deployment, you'll get a URL like:
```
https://your-app-name.vercel.app
```

### 2. Update Backend CORS

Edit `backend/src/server.js` and add your frontend URL:

```javascript
const corsOptions = {
  origin: [
    'https://your-app-name.vercel.app',  // 👈 Add this line
    'https://roxiller-systems-xe4x.vercel.app',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};
```

### 3. Redeploy Backend

```bash
cd backend
vercel --prod
```

---

## ✅ Test Your Deployment

Visit your frontend URL and test:
- ✅ Login page loads
- ✅ Can login with: `olivia.martinez@gmail.com` / `Welcome@123`
- ✅ Dashboard works
- ✅ Can rate stores
- ✅ No errors in console

---

## 🐛 Common Issues

### CORS Error?
→ Make sure you added frontend URL to backend CORS and redeployed

### API Not Working?
→ Check environment variable in Vercel dashboard:
```
VITE_API_URL=https://store-rating-system-rose.vercel.app/api
```

### 404 on Page Refresh?
→ Already fixed! `vercel.json` is configured correctly

---

## 📞 Need Help?

Check the detailed guide: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**That's it! Your app is live! 🎉**
