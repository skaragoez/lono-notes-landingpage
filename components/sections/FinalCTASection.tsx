'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function FinalCTASection() {
  const t = useTranslations('finalCta');
  const params = useParams();
  const locale = params.locale as string;
  const [email, setEmail] = useState('');

  // Map locale to App Store badge
  const appStoreBadges: Record<string, string> = {
    de: '/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg',
    en: '/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg',
    tr: '/images/Download_on_the_App_Store_Badge_TR_RGB_blk_100217.svg',
  };

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
                  size="medium"
                  className="whitespace-nowrap"
                >
                  {t('emailCta')}
                </Button>
              </div>
            </form>

            {/* App Store Badge */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src={appStoreBadges[locale] || appStoreBadges.en}
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center">
            <Image
              src="/images/mockup.png"
              alt="LONO Notes Home Screen"
              width={300}
              height={650}
              className="w-full max-w-[300px] md:max-w-[350px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

