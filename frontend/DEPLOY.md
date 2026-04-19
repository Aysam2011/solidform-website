# Strong Form - Construction Company Website

Professional website for Strong Form Pty Ltd, a specialist formwork contractor operating across NSW, ACT, and Victoria.

## 🚀 Quick Deploy to Vercel (FREE)

### Option 1: Deploy via GitHub (Recommended)

1. **Push this repository to GitHub**
2. **Go to [Vercel](https://vercel.com)** and sign up with GitHub
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure:**
   - Framework Preset: Create React App
   - Root Directory: `frontend`
   - Build Command: `yarn build`
   - Output Directory: `build`
6. **Click Deploy**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend directory
cd frontend

# Deploy
vercel

# For production deployment
vercel --prod
```

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
