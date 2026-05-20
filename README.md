# Solid Form Pty Ltd - Construction Company Website

**This is a frontend-only React application.**

## 🚀 Vercel Deployment Instructions

### IMPORTANT: Configure Root Directory

When deploying to Vercel, you **MUST** set the Root Directory to `frontend`:

1. **Go to Vercel Dashboard**
2. **Import your GitHub repository**
3. **Before clicking Deploy, configure these settings:**
   - **Root Directory**: `frontend` ⚠️ (CRITICAL - Set this!)
   - **Framework Preset**: Create React App (auto-detected)
   - **Build Command**: `yarn build` (auto-detected)
   - **Output Directory**: `build` (auto-detected)
   - **Install Command**: `yarn install --legacy-peer-deps`
4. **Click Deploy**

### Alternative: Use Vercel CLI

```bash
cd frontend
vercel
# When prompted, confirm the settings
```

### Why Set Root Directory?

This repository contains both `frontend/` and `backend/` directories. Vercel needs to know to build ONLY the frontend React app. Setting Root Directory to `frontend` tells Vercel to ignore everything else.

## Project Structure:
```
/
├── frontend/          # React app (Deploy from here!)
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── .npmrc         # Handles dependency conflicts
│   └── vercel.json    # SPA routing config
├── backend/           # FastAPI (Not deployed to Vercel)
└── .vercelignore      # Ignores backend files
```

## Live Website
- **Company**: Solid Form Pty Ltd
- **Services**: Formwork Contractors & Labour Hire
- **Contact**: Solid_form@hotmail.com | +61 0431 017 079
- **Regions**: NSW, ACT & Victoria, Australia

## Tech Stack
- Frontend: React 19, Tailwind CSS, Shadcn UI
- Deployment: Vercel (Free Tier)
