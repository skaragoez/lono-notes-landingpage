# Development Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Development Workflow

### Adding New Content

1. **Update Translations** (`locales/*.json`)
   - Add new keys to all language files (de, en, tr)
   - Keep the structure consistent across all files

2. **Create/Modify Components**
   - Use TypeScript for type safety
   - Follow the existing component structure
   - Use Tailwind CSS for styling

3. **Test Across Languages**
   - Visit `/de`, `/en`, and `/tr` routes
   - Verify translations display correctly

### Component Guidelines

#### UI Components (`components/ui/`)
- Reusable, generic components
- Accept props for customization
- Use `forwardRef` for components that need DOM refs
- Include proper TypeScript types

#### Section Components (`components/sections/`)
- Page-specific sections
- Use translations with `useTranslations()`
- Keep sections self-contained
- Use `AnimatedSection` wrapper for scroll animations

#### Layout Components (`components/layout/`)
- Header, Footer, and other layout elements
- Should be used in all pages

### Styling

#### Design Tokens
All design tokens are in `app/globals.css`:
```css
--color-primary: #556B2F
--color-secondary: #4CAF50
--color-warning: #F44336
--color-accent: #FF9800
```

#### Tailwind Classes
- Use design token classes: `bg-[var(--color-primary)]`
- Mobile-first approach: `sm:`, `md:`, `lg:`, `xl:`
- Use the `cn()` utility for conditional classes

### Adding Images

1. Place images in `public/images/`
2. Use Next.js Image component:
   ```tsx
   import Image from 'next/image';
   
   <Image
     src="/images/your-image.png"
     alt="Description"
     width={800}
     height={600}
   />
   ```

### Icons

Use Lucide React icons:
```tsx
import { Heart, Star, Check } from 'lucide-react';

<Heart className="h-6 w-6 text-red-500" />
```

## Testing

### Manual Testing Checklist

- [ ] All routes work (`/de`, `/en`, `/tr`)
- [ ] Language switcher works
- [ ] Mobile menu works
- [ ] All CTAs are clickable
- [ ] Forms validate correctly
- [ ] Smooth scroll navigation works
- [ ] Animations trigger on scroll
- [ ] Page is responsive (mobile, tablet, desktop)

### Browser Testing

Test on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Testing

1. **Keyboard Navigation**
   - Tab through all interactive elements
   - Ensure visible focus indicators
   - Test escape key on modals/dropdowns

2. **Screen Reader**
   - Test with VoiceOver (macOS) or NVDA (Windows)
   - Verify all images have alt text
   - Check heading hierarchy

3. **Color Contrast**
   - Use browser dev tools or online checkers
   - Ensure WCAG AA compliance

## Common Issues

### Build Errors

**Issue:** TypeScript errors during build
```bash
# Solution: Run type check
npm run type-check

# Fix type errors in reported files
```

**Issue:** Translation key not found
```bash
# Solution: Ensure key exists in all locale files
# Check for typos in translation keys
```

### Runtime Errors

**Issue:** Hydration mismatch
```
Solution: Ensure server and client render the same content
- Avoid using Date.now() or random values
- Use 'use client' directive when needed
```

**Issue:** Image optimization failed
```
Solution: Verify image paths and formats
- Use supported formats: JPEG, PNG, WebP, AVIF
- Ensure images exist in public folder
```

## Performance Optimization

### Bundle Size

Check bundle size:
```bash
npm run build
# Review the output for large bundles
```

Optimize imports:
```tsx
// ✅ Good: Tree-shakeable
import { Button } from '@/components/ui/Button';

// ❌ Bad: Imports entire library
import * as Icons from 'lucide-react';
```

### Images

- Use WebP format when possible
- Provide appropriate width/height
- Use `loading="lazy"` for below-fold images
- Use Next.js Image component for automatic optimization

### Fonts

- Inter font is loaded via next/font (automatic optimization)
- Avoid loading multiple font families
- Use font-display: swap

## Deployment

### Pre-deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build locally (`npm run start`)
- [ ] Update environment variables
- [ ] Set correct `NEXT_PUBLIC_SITE_URL`
- [ ] Test all language routes
- [ ] Verify SEO meta tags
- [ ] Check sitemap.xml and robots.txt

### Vercel Deployment

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Custom Server Deployment

1. Build the app: `npm run build`
2. Copy `.next`, `public`, `package.json`, `node_modules`
3. Set NODE_ENV=production
4. Run: `npm start`

## Maintenance

### Adding a New Language

1. Create `locales/[lang].json`
2. Update `i18n.ts`:
   ```ts
   export const locales = ['de', 'en', 'tr', 'fr'] as const;
   ```
3. Update middleware.ts matcher
4. Update generateStaticParams in layout
5. Add to language switcher

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update Next.js
npm install next@latest react@latest react-dom@latest

# Test after updates
npm run build
```

## Getting Help

- Next.js Docs: https://nextjs.org/docs
- next-intl Docs: https://next-intl-docs.vercel.app/
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Framer Motion Docs: https://www.framer.com/motion/

## Code Style

- Use TypeScript for all files
- Use functional components
- Use hooks instead of class components
- Use `'use client'` only when necessary
- Keep components small and focused
- Use meaningful variable names
- Add comments for complex logic
- Follow ESLint rules

---

Happy coding! 🌿

