'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import PhoneMockup from '@/components/ui/PhoneMockup';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[var(--color-subtle)] to-white pt-32 pb-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-[var(--color-primary)] opacity-10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-[var(--color-secondary)] opacity-10 blur-3xl" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-[var(--color-text-dark)] md:text-5xl lg:text-6xl">
              {t('headline')}
            </h1>
            <p className="mb-8 text-lg text-[var(--color-text)] md:text-xl max-w-2xl mx-auto lg:mx-0">
              {t('subheadline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                {t('cta')}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                {t('ctaSecondary')}
              </Button>
            </div>

            {/* Trust Element */}
            <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]"
                  />
                ))}
              </div>
              <p className="text-sm text-[var(--color-text)]">
                {t('trustElement')}
              </p>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-float">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

