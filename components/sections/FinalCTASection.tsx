'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import PhoneMockup from '@/components/ui/PhoneMockup';
import { Download, Mail } from 'lucide-react';
import { useState } from 'react';

export default function FinalCTASection() {
  const t = useTranslations('finalCta');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email capture when backend is ready
    console.log('Email submitted:', email);
    alert('Email capture will be implemented soon!');
    setEmail('');
  };

  return (
    <section className="section-padding bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-secondary)] text-white relative overflow-hidden gradient-animated">
      {/* Animated Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl float-smooth" />
        <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-white opacity-10 blur-3xl scale-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-[var(--color-accent)] opacity-5 blur-3xl particle" />
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-dots opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h2 className="mb-5 text-white">{t('title')}</h2>
            <p className="text-base md:text-lg text-white/90 mb-7 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('subtitle')}
            </p>

            {/* Email Capture Form */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <div className="flex-1 relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-[var(--color-primary)] transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('emailPlaceholder')}
                    className="w-full pl-12 pr-4 py-3 rounded-xl text-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-white shadow-lg glass transition-all focus:scale-105"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="secondary"
                  size="md"
                  className="whitespace-nowrap hover-glow magnetic"
                >
                  {t('emailCta')}
                </Button>
              </div>
            </form>

            {/* Download CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <Button
                size="lg"
                className="bg-white text-[var(--color-primary)] hover:bg-gray-50 gap-2 shadow-2xl hover-lift relative overflow-hidden group"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span className="relative z-10">{t('downloadCta')}</span>
                <div className="absolute inset-0 shimmer" />
              </Button>
            </div>

            {/* App Store Badges Placeholder */}
            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              <div className="h-11 w-34 glass-dark rounded-xl flex items-center justify-center text-xs font-semibold border border-white/20 px-4 hover:scale-105 transition-transform cursor-pointer magnetic">
                App Store
              </div>
              <div className="h-11 w-34 glass-dark rounded-xl flex items-center justify-center text-xs font-semibold border border-white/20 px-4 hover:scale-105 transition-transform cursor-pointer magnetic">
                Google Play
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="float-smooth hover-lift relative">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-white opacity-20 blur-3xl scale-110 glow-pulse rounded-full" />
              <PhoneMockup 
                screenshot="/images/home-symptom-tracking.png"
                alt="LONO Notes Symptom Tracking"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

