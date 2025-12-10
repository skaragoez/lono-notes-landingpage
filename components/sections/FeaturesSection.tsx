'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { BookOpen, TrendingUp, Sparkles, Smartphone } from 'lucide-react';

export default function FeaturesSection() {
  const t = useTranslations('features');

  const features = [
    {
      icon: BookOpen,
      title: t('organization.title'),
      description: t('organization.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: t('tracking.title'),
      description: t('tracking.description'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Sparkles,
      title: t('insights.title'),
      description: t('insights.description'),
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Smartphone,
      title: t('accessible.title'),
      description: t('accessible.description'),
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-[var(--color-subtle)]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card
                hover
                className="group h-full"
              >
              <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg transition-transform group-hover:scale-110`}>
                <feature.icon className="h-8 w-8" />
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
    </section>
  );
}

