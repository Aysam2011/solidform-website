# Solid Form Pty Ltd - Construction Company Website

**This is a frontend-only React application.**

## Vercel Deployment

This repository contains both frontend and backend directories, but **only the frontend should be deployed to Vercel**.

### Quick Deploy Steps:

1. **Import this repository** to Vercel
2. Vercel will automatically use the `vercel.json` configuration
3. The build will only process the `frontend` directory
4. **No additional configuration needed** - just click Deploy!

### Project Structure:
```
/
├── frontend/          # React app (Deploy this to Vercel)
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # FastAPI (Ignored by Vercel)
├── vercel.json        # Vercel config (frontend only)
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
