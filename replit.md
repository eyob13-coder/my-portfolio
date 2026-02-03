# My Portfolio - Next.js Application

## Overview
A modern portfolio website built with Next.js 15, React 19, Three.js for 3D graphics, and Tailwind CSS. Features include animated components, a 3D globe visualization, and Sentry for error monitoring.

## Project Structure
- `app/` - Next.js app router pages and layout
- `components/` - React components including UI elements
- `components/ui/` - Reusable UI components (3D effects, animations, etc.)
- `data/` - Static data files
- `lib/` - Utility functions
- `public/` - Static assets (images, icons)

## Development
- Dev server runs on port 5000 (bound to 0.0.0.0 for Replit proxy)
- Uses Turbopack for fast development builds
- Run `npm run dev` to start development server

## Build & Deployment
- `npm run build` - Create production build
- `npm run start` - Start production server on port 5000

## Dependencies
- Next.js 15.3.2 with Turbopack
- React 19
- Three.js / React Three Fiber for 3D graphics
- Framer Motion for animations
- Tailwind CSS for styling
- Sentry for error monitoring
- Nodemailer for contact form

## Recent Changes
- Feb 2026: Configured for Replit environment (port 5000, allowed dev origins)
