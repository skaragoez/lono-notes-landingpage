# LONO Notes Landing Page

A modern, conversion-optimized landing page for LONO Notes - a natural medicine and herbal remedy note-taking app.

![LONO Notes](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)

## 🌿 About LONO Notes

LONO Notes helps users organize their natural medicine knowledge, track symptoms, set health goals, and maintain a wellness journal. The tagline: **"Schluss mit Chaos in deinen Rezepten"** (Stop the chaos in your recipes).

## ✨ Features

- 🌍 **Multilingual Support** - Full i18n for German, English, and Turkish
- 🎨 **Beautiful Design** - Nature-inspired, minimalist UI with LONO brand colors
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Built with Next.js 14+ App Router
- ♿ **Accessible** - WCAG AA compliant
- 🔍 **SEO Optimized** - Meta tags, sitemap, structured data
- ✨ **Smooth Animations** - Framer Motion for delightful interactions
- 🎯 **Conversion Focused** - Clear CTAs and user journey

## 🚀 Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** [Inter](https://fonts.google.com/specimen/Inter)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/lono-notes-landingpage.git
   cd lono-notes-landingpage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Type check
npm run type-check
```

### Project Structure

```
lono-notes-landingpage/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Homepage
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt configuration
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── FinalCTASection.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── PhoneMockup.tsx
│       ├── LanguageSwitcher.tsx
│       ├── AnimatedSection.tsx
│       └── Counter.tsx
├── lib/
│   └── utils.ts           # Utility functions
├── locales/               # Translation files
│   ├── de.json
│   ├── en.json
│   └── tr.json
├── public/                # Static assets
│   └── images/
├── i18n.ts               # i18n configuration
├── middleware.ts         # Next.js middleware for i18n
└── next.config.ts        # Next.js configuration
```

## 🌐 Internationalization

### Adding a New Language

1. Create a new translation file in `locales/`:
   ```bash
   cp locales/en.json locales/fr.json
   ```

2. Update `i18n.ts`:
   ```typescript
   export const locales = ['de', 'en', 'tr', 'fr'] as const;
   ```

3. Add the language to middleware and layouts.

### Translation Structure

All translations follow this structure:
```json
{
  "nav": { ... },
  "hero": { ... },
  "problem": { ... },
  "features": { ... },
  "howItWorks": { ... },
  "socialProof": { ... },
  "pricing": { ... },
  "finalCta": { ... },
  "footer": { ... }
}
```

## 🎨 Design System

### Brand Colors

```css
--color-primary: #556B2F      /* Olive Green */
--color-secondary: #4CAF50    /* Secondary Green */
--color-warning: #F44336      /* Warning Red */
--color-accent: #FF9800       /* Accent Orange */
--color-subtle: #f3e5f5       /* Light Lavender */
```

### Typography

- **Font Family:** Inter
- **Headings:** Bold, confident (700-800 weight)
- **Body:** Readable, warm (400 weight)

### Components

All UI components are built with:
- Consistent spacing and sizing
- Accessible focus states
- Hover and active states
- Mobile-responsive design

## 📱 Adding Assets

### App Screenshots

Place app screenshots in `public/images/`:
```
public/images/
├── app-screenshot-1.png
├── app-screenshot-2.png
└── app-mockup.png
```

Update the `PhoneMockup` component to use real images:
```tsx
<PhoneMockup screenshot="/images/app-screenshot-1.png" />
```

### Icons and Illustrations

- Use Lucide React icons throughout the app
- Place custom illustrations in `public/images/`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Manual Deployment

```bash
# Build the application
npm run build

# The output will be in the .next folder
# Deploy .next, public, and package.json to your hosting provider
```

### Environment Variables

Set these in your deployment platform:
- `NEXT_PUBLIC_SITE_URL` - Your production URL

## 🔧 Customization

### Changing Brand Colors

Edit `app/globals.css`:
```css
:root {
  --color-primary: #YOUR_COLOR;
  --color-secondary: #YOUR_COLOR;
}
```

### Modifying Content

All content is in translation files (`locales/*.json`). Edit these files to change:
- Headlines and copy
- Feature descriptions
- Testimonials
- CTAs

### Adding New Sections

1. Create a new component in `components/sections/`
2. Add translations to all locale files
3. Import and use in `app/[locale]/page.tsx`

## 📊 Analytics

To add analytics (e.g., Google Analytics):

1. Add your GA ID to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. Add the analytics script to `app/[locale]/layout.tsx`

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Type Errors

```bash
# Run type check
npm run type-check
```

### Translation Issues

Ensure all locale files have matching keys. Use the German version as the reference.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential.

## 💬 Support

For questions or support, contact:
- Email: support@lononotes.com
- Website: https://lononotes.com

---

Made with 🌿 for natural health enthusiasts
