# Strong Form Construction Website - Product Requirements Document

## Project Overview
**Project Name:** Strong Form Construction Company Website  
**Created:** December 2025  
**Status:** Frontend MVP Complete  

## Original Problem Statement
Create a website for Strong Form, a formwork construction company operating across NSW, ACT and Victoria. The website should showcase their services, experience, work process, and safety commitment with a professional red and white color scheme.

## User Personas
1. **Potential Clients** - Construction project managers looking for formwork contractors
2. **Industry Partners** - Companies seeking labour hire and formwork services
3. **Job Seekers** - Professionals interested in working with Strong Form

## Core Requirements (Static)

### Brand Identity
- Company Name: Strong Form Pty Ltd
- Tagline: "Building Trust with Quality Formwork"
- Color Scheme: Red (#DC2626, #EF4444) and White
- Operating Regions: NSW, ACT, Victoria

### Key Sections
1. **Hero Section**
   - Headline: "Building Trust with Quality Formwork"
   - Subheadline: "We'll help get the job done!"
   - Call-to-action: Get Quote (phone) and Email Us buttons
   - Background: Professional construction site image

2. **About Us**
   - Company overview and director information (Mohammed Alazawi)
   - 10+ years experience highlight
   - Key features: Expert team, quality service, timely delivery

3. **How We Work**
   - Business approach and methodology
   - Project management philosophy
   - Communication and onsite management details

4. **WHS & OHS**
   - Safety commitment
   - Compliance with industry codes
   - Key requirements: training, PPE, safe work methods, risk mitigation

5. **Footer**
   - Contact information (phone, email, location)
   - Quick links navigation
   - Services list
   - Social media links
   - Copyright notice

## What's Been Implemented

### Phase 1: Frontend MVP (December 2025) ✅
**Date Completed:** December 2025

#### Components Created
- `/app/frontend/src/pages/Home.jsx` - Main page container
- `/app/frontend/src/components/Header.jsx` - Sticky navigation with smooth scroll
- `/app/frontend/src/components/Hero.jsx` - Hero section with CTA buttons
- `/app/frontend/src/components/AboutUs.jsx` - About section with feature cards
- `/app/frontend/src/components/HowWeWork.jsx` - Process section with principles
- `/app/frontend/src/components/WHS.jsx` - Safety section with requirements
- `/app/frontend/src/components/Footer.jsx` - Footer with links and contact info

#### Features Implemented
✅ Responsive design (mobile, tablet, desktop)  
✅ Smooth scroll navigation  
✅ Red and white color scheme throughout  
✅ Professional construction imagery  
✅ Interactive hover states and animations  
✅ Click-to-call and click-to-email functionality  
✅ Mobile-friendly hamburger menu  
✅ Sticky header with scroll effect  
✅ Icon integration using lucide-react  
✅ Shadcn UI components (Button, Card layouts)  

#### Design Elements
- Custom scrollbar in red theme
- Smooth scrolling behavior
- Gradient overlays on images
- Hover effects on all interactive elements
- Decorative red accent blocks
- Professional typography and spacing
- Shadow effects for depth

## Technology Stack
- **Frontend:** React 19, Tailwind CSS
- **Components:** Shadcn UI
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Backend (Future):** FastAPI, MongoDB

## Prioritized Backlog

### P0 Features (Not Started)
- Backend API development
- Contact form with backend integration
- Quote request system
- Admin panel for content management

### P1 Features (Not Started)
- Project portfolio/gallery section
- Client testimonials
- Team member profiles
- Services detail pages
- Case studies

### P2 Features (Not Started)
- Blog/news section
- Career opportunities page
- Document downloads (brochures, certifications)
- Live chat integration
- Analytics integration

## Next Tasks
1. User feedback on frontend design
2. Logo upload/replacement
3. Update contact information (phone, email)
4. Backend development planning
5. Contact form implementation with email notifications
6. Project gallery development
7. SEO optimization

## Notes
- All images are professional quality from Unsplash/Pexels
- Phone number (+61 234 567 890) and email (info@strongform.com.au) are placeholders
- Social media links are placeholder (#)
- Logo is text-based, awaiting actual company logo
- Website is frontend-only, no backend functionality yet
