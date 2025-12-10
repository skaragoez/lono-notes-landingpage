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
    <section className="section-padding bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-secondary)] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h2 className="mb-6 text-white">{t('title')}</h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
              {t('subtitle')}
            </p>

            {/* Email Capture Form */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('emailPlaceholder')}
                    className="w-full pl-12 pr-4 py-3 rounded-lg text-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="secondary"
                  size="md"
                  className="whitespace-nowrap"
                >
                  {t('emailCta')}
                </Button>
              </div>
            </form>

            {/* Download CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-[var(--color-primary)] hover:bg-gray-100 gap-2"
              >
                <Download className="h-5 w-5" />
                {t('downloadCta')}
              </Button>
            </div>

            {/* App Store Badges Placeholder */}
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <div className="h-12 w-36 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center text-xs font-semibold border border-white/20">
                App Store
              </div>
              <div className="h-12 w-36 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center text-xs font-semibold border border-white/20">
                Google Play
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center">
            <div className="animate-float">
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

