'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Gift, ShieldCheck, Bot, Sparkles, Zap, Palette, Rocket } from 'lucide-react';

export default function SocialProofSection() {
  const t = useTranslations('socialProof');

  const trustPoints = [
    {
      icon: Palette,
      title: t('trustPoints.design.title'),
      description: t('trustPoints.design.description'),
    },
    {
      icon: Zap,
      title: t('trustPoints.simple.title'),
      description: t('trustPoints.simple.description'),
    },
    {
      icon: Rocket,
      title: t('trustPoints.evolution.title'),
      description: t('trustPoints.evolution.description'),
    },
  ];

  const badges = [
    { icon: Gift, label: t('badges.free') },
    { icon: ShieldCheck, label: t('badges.gdpr') },
    { icon: Bot, label: t('badges.ai') },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-[var(--color-subtle)] to-white">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="mb-6 text-4xl md:text-5xl font-extrabold text-[var(--color-text-dark)]">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text)] leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => (
            <Card
              key={index}
              hover
              className="text-center p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <point.icon className="h-16 w-16 text-[var(--color-primary)] transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-4">
                {point.title}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed">
                {point.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Early Access Badge */}
        <div className="text-center mb-16">
          <Button
            variant="primary"
            size="large"
            className="inline-flex items-center gap-3"
          >
            <Sparkles className="h-5 w-5" />
            <span>{t('earlyAccess')}</span>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm"
            >
              <badge.icon className="h-5 w-5 text-[var(--color-primary)]" />
              <span className="text-base font-semibold text-[var(--color-text-dark)]">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

