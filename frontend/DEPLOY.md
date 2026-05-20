# Strong Form - Construction Company Website

Professional website for Strong Form Pty Ltd, a specialist formwork contractor operating across NSW, ACT, and Victoria.

## 🚀 Quick Deploy to Vercel (FREE)

### Important: Frontend-Only Deployment
This is a React frontend application. The backend is NOT needed for deployment to Vercel.

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to [Vercel](https://vercel.com)** and sign up with GitHub/Email (free)
2. **Click "Add New..." → "Project"**
3. **Import your repository**
4. **Configure Project Settings:**
   - Framework Preset: **Create React App**
   - Root Directory: **`frontend`** (IMPORTANT!)
   - Build Command: `yarn install --legacy-peer-deps && yarn build`
   - Output Directory: `build`
   - Install Command: `yarn install --legacy-peer-deps`
5. **Click "Deploy"**
6. **Wait 2-3 minutes** - Your site will be live!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to frontend directory
cd frontend

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# For production deployment with custom domain
vercel --prod
```

### ⚠️ Troubleshooting Common Issues

**If you see backend/Python errors:**
- Make sure you set **Root Directory** to `frontend` in Vercel settings
- Vercel should ONLY build the frontend folder
- Check that `.vercelignore` includes `backend/`

**If you see npm dependency errors:**
- The `.npmrc` file should handle this automatically
- Make sure Vercel is using Node.js 18.x or higher

## 🌐 Custom Domain Setup

After deployment, add your custom domain in Vercel:

1. Go to your project in Vercel dashboard
2. Navigate to **Settings → Domains**
3. Add `strongform.com.au`
4. Update DNS records at your domain registrar:
   - **A Record**: `@` → `76.76.21.21` (Vercel's IP)
   - **CNAME**: `www` → `cname.vercel-dns.com`

## 📋 Environment Variables

If deploying to production, set these in Vercel dashboard:

- `REACT_APP_BACKEND_URL` - Your backend API URL (if needed)

## 🛠️ Local Development

```bash
cd frontend
yarn install
yarn start
```

Visit `http://localhost:3000`

## 📦 Build for Production

```bash
cd frontend
yarn build
```

This creates an optimized production build in the `build` folder.

## 📧 Contact Information

- **Email:** connect@strongform.com.au
- **Phone:** +61 0421 446 175
- **Website:** strongform.com.au

## 📄 License

Copyright © 2018 Strong Form Pty Ltd. All rights reserved.
