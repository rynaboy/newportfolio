# MOL RYNA Portfolio

Modern portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with glassmorphism effects
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js 15
- 🎯 SEO optimized
- 📄 Social media page with QR code support

## Tech Stack
  
- **Framework**: Next.js 15.2.4
- **React**: 19
- **TypeScript**: 5
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Radix UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.18 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment to Vercel

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The project includes:
- ✅ `vercel.json` configuration
- ✅ Optimized `next.config.mjs` for production
- ✅ PostCSS configuration with autoprefixer
- ✅ Proper TypeScript configuration

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx            # Home page
│   ├── social/             # Social media page
│   └── layout.tsx          # Root layout
├── components/             # React components
│   ├── Navigation.tsx      # Main navigation
│   └── sections/           # Page sections
├── public/                 # Static assets
└── lib/                    # Utility functions
```

## Pages

- **Home** (`/`) - Main portfolio page with all sections
- **Social** (`/social`) - Social media links and QR code

## Customization

### Adding Social Media Links

Edit `components/sections/SocialSection.tsx` and update the `socialLinks` array with your links.

## DEMO

- Home Page: https://info.molryna.com/
- Social Media: https://info.molryna.com/social
- Contact: https://info.molryna.com/#contact

## License

Public project - All rights reserved 
Power by Ryna Mol
