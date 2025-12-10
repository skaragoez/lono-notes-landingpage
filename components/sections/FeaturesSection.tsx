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
    <section id="features" className="section-padding bg-gradient-to-b from-white to-[var(--color-subtle)]/30 pattern-grid relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[var(--color-primary)] opacity-10 rounded-full blur-2xl particle" />
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-[var(--color-secondary)] opacity-10 rounded-full blur-2xl particle" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card
                hover
                className="group h-full hover-lift glass relative overflow-hidden"
              >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-md transition-all group-hover:scale-110 group-hover:rotate-3 glow-pulse`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2.5 text-lg font-bold text-[var(--color-text-dark)] group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

