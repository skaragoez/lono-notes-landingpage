'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { FileText, TrendingUp, Target, BookOpen, CheckCircle } from 'lucide-react';

export default function FeaturesSection() {
  const t = useTranslations('features');

  const features = [
    {
      icon: FileText,
      title: t('cards.0.title'),
      description: t('cards.0.description'),
    },
    {
      icon: TrendingUp,
      title: t('cards.1.title'),
      description: t('cards.1.description'),
    },
    {
      icon: Target,
      title: t('cards.2.title'),
      description: t('cards.2.description'),
    },
    {
      icon: BookOpen,
      title: t('cards.3.title'),
      description: t('cards.3.description'),
    },
  ];

  return (
    <section id="features" className="relative min-h-screen flex items-center py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/frau-naturheilkunde-enthusiast.png"
          alt="Natural Medicine Enthusiast"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col min-h-[85vh]">
          {/* Text - Links, 50% max-width */}
          <div className="pt-8 lg:pt-16">
            <div className="w-full lg:max-w-[50%] text-left">
              <h2 className="mb-6 text-white drop-shadow-lg">{t('title')}</h2>
              <p className="text-base lg:text-lg text-white/90 drop-shadow-md leading-relaxed mb-6">
                {t('intro')}
              </p>
              <ul className="space-y-3 text-white/90">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-base lg:text-lg drop-shadow-md">{t(`list.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Feature Cards - Unten */}
          <div className="pb-8 lg:pb-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card
                    hover
                    className="group h-full backdrop-blur-sm bg-white/95"
                  >
                  <div className="mb-4">
                    <feature.icon className="h-12 w-12 text-[var(--color-primary)] transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[var(--color-text-dark)]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed">
                    {feature.description}
                  </p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
