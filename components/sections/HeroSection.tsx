'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Gift, ShieldCheck, Bot } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const t = useTranslations('hero');
  const params = useParams();
  const locale = params.locale as string;

  // Map locale to App Store badge
  const appStoreBadges: Record<string, string> = {
    de: '/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg',
    en: '/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg',
    tr: '/images/Download_on_the_App_Store_Badge_TR_RGB_blk_100217.svg',
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-bg-02.png"
            alt=""
            fill
            className="object-contain object-right-bottom opacity-20"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-[var(--color-text-dark)] md:text-5xl lg:text-6xl">
              {t('headline')}
            </h1>
            <p className="mb-8 text-lg text-[var(--color-text)] md:text-xl max-w-2xl mx-auto lg:mx-0">
              {t('subheadline')}
            </p>

            {/* App Store Badge & CTA */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* App Store Badge */}
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
                
                {/* CTA Button */}
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => {
                    // Scroll to pricing or handle CTA
                    const pricingSection = document.getElementById('pricing');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t('cta')}
                </Button>
              </div>
              
              {/* CTA Note */}
              <p className="text-sm text-[var(--color-text)] text-center lg:text-left">
                {t('ctaNote')}
              </p>
            </div>

            {/* Trust Element */}
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <Gift className="h-5 w-5 text-[var(--color-primary)]" />
                <span className="text-base font-semibold text-[var(--color-text-dark)]">{t('trustElement.free')}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-[var(--color-primary)]" />
                <span className="text-base font-semibold text-[var(--color-text-dark)]">{t('trustElement.gdpr')}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <Bot className="h-5 w-5 text-[var(--color-primary)]" />
                <span className="text-base font-semibold text-[var(--color-text-dark)]">{t('trustElement.madeIn')}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/images/mockup.png"
              alt="LONO Notes Home Screen with Progress Dashboard"
              width={300}
              height={650}
              className="w-full max-w-[300px] md:max-w-[350px] h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

