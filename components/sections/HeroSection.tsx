'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import PhoneMockup from '@/components/ui/PhoneMockup';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[var(--color-subtle)]/30 to-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      {/* Decorative Elements - More Subtle */}
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-[var(--color-primary)] opacity-5 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-[var(--color-secondary)] opacity-5 blur-3xl" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-5 leading-tight text-[var(--color-text-dark)]">
              {t('headline')}
            </h1>
            <p className="mb-7 text-lg text-[var(--color-text)] md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('subheadline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                {t('cta')}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                {t('ctaSecondary')}
              </Button>
            </div>

            {/* Trust Element */}
            <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] shadow-sm"
                  />
                ))}
              </div>
              <p className="text-sm text-[var(--color-text-light)] font-medium">
                {t('trustElement')}
              </p>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="animate-float">
              <PhoneMockup 
                screenshot="/images/home-categories-stats.png"
                alt="LONO Notes Home Screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

