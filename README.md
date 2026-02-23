# Runner Gang Lifestyle

Premium minimal streetwear brand site built with Next.js 14+ and TypeScript.

> **"For The Play Runners. Built for hustlers with intent. Strategic. Disciplined. Forward."**

## Features

- ✨ **Full-page Hero** with background image overlay and dual CTAs
- 🛍️ **Product Grid** (1/2/3-col responsive) with premium hover effects
- 📱 **Responsive Design** - Mobile-first, optimized for all devices
- 🎨 **Brand Theme System** - CSS variables + Tailwind color extensions
- 🔍 **Dynamic Product Pages** - Static generation with Next.js
- 📧 **Email Capture** - Newsletter signup section
- 🎯 **Manifesto Section** - Brand philosophy
- ⚡ **Zero Heavy Animations** - Pure Tailwind, minimal transitions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Deployment**: Vercel-ready

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
runner_gang-site/
├── app/
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page (Hero + Products + Manifesto)
│   ├── globals.css          # Brand theme + CSS variables
│   ├── shop/page.tsx        # Shop grid page
│   ├── about/page.tsx       # Brand story
│   └── product/[slug]/      # Dynamic product detail
├── components/
│   ├── Header.tsx           # Navigation + SHOP CTA
│   ├── Footer.tsx           # Copyright + social links
│   ├── Hero.tsx             # Full-screen hero with overlay
│   ├── ProductGrid.tsx      # Responsive product grid
│   ├── ProductCard.tsx      # Single product card
│   ├── Manifesto.tsx        # Brand philosophy
│   └── EmailCapture.tsx     # Newsletter signup
├── lib/
│   └── products.ts          # Product data + types
├── public/
│   └── images/              # Static images folder
└── tailwind.config.ts       # Tailwind with brand colors
```

## Brand Colors

All colors exposed as Tailwind utilities and CSS variables:

- `rgBlack` / `--rg-black` - `#0f0f0f`
- `rgCharcoal` / `--rg-charcoal` - `#1a1a1a`
- `rgBone` / `--rg-bone` - `#f3f1ea`
- `rgSunset` / `--rg-sunset` - `#d86c3d`
- `rgMauve` / `--rg-mauve` - `#b07a82`

## Component Utilities

**Buttons**:
- `.btn-primary` - Bone background + Black text
- `.btn-secondary` - Transparent with Bone border

**Layout**:
- `.rg-container` - Max-width + padding container

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home page with hero + featured products |
| `/shop` | Full product grid |
| `/about` | Brand story & philosophy |
| `/product/[slug]` | Individual product detail |

## Responsive Grid

ProductGrid automatically switches:
- **Mobile** (< 768px): 1 column
- **Tablet** (768px - 1024px): 2 columns
- **Desktop** (1024px+): 3 columns

## Hover Effects

- **Product Cards**: Scale image + border color transition
- **Buttons**: Opacity fade (80% on hover)
- **Links**: Opacity transition

## Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push to GitHub repository
2. Go to [vercel.com](https://vercel.com/)
3. Click "New Project"
4. Select this repository
5. Vercel auto-detects Next.js
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 3: Manual Deployment

1. Build locally: `npm run build`
2. Deploy `.next` folder to Vercel using dashboard

### Environment Variables

No environment variables required for basic deployment. Add to Vercel Dashboard if needed:

```
# Example (not required)
NEXT_PUBLIC_SITE_URL=https://runner-gang.vercel.app
```

## Configuration Files

- **`next.config.js`** - Next.js configuration
- **`tsconfig.json`** - TypeScript compiler options (strict mode)
- **`tailwind.config.ts`** - Tailwind with brand color extensions
- **`postcss.config.js`** - PostCSS setup for Tailwind

## Performance

- ✅ Static generation for all product pages
- ✅ Optimized images (placeholder system ready)
- ✅ Minimal JavaScript payload
- ✅ No external animations library

## Image Assets

Place images in `/public/images/`:

- `hero-bg.jpg` - Hero section background (required for full experience)

## Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Run production build
npm run lint     # ESLint check
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

All rights reserved. Runner Gang Lifestyle © 2026

## Support

For issues or questions, contact the development team.

---

**Made with ❤️ for runners, hustlers, and creators.**