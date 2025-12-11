'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import { Shield, Lock, MapPin, Sparkles, Zap, Palette, Rocket } from 'lucide-react';

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
    { icon: Shield, label: t('badges.gdpr') },
    { icon: Lock, label: t('badges.privacy') },
    { icon: MapPin, label: t('badges.madeIn') },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-[var(--color-subtle)] to-white">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => (
            <Card key={index} hover className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
                  <point.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-6 py-3 rounded-full shadow-lg">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">{t('earlyAccess')}</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md"
            >
              <badge.icon className="h-6 w-6 text-[var(--color-primary)]" />
              <span className="text-sm font-semibold text-[var(--color-text-dark)]">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

