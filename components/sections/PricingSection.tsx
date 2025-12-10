'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Check, Sparkles } from 'lucide-react';

export default function PricingSection() {
  const t = useTranslations('pricing');

  const freePlan = {
    title: t('free.title'),
    price: t('free.price'),
    features: [
      t('free.features.0'),
      t('free.features.1'),
      t('free.features.2'),
      t('free.features.3'),
      t('free.features.4'),
    ],
    cta: t('free.cta'),
    highlighted: false,
    badge: undefined,
  };

  const proPlan = {
    title: t('pro.title'),
    price: t('pro.price'),
    badge: t('pro.badge'),
    features: [
      t('pro.features.0'),
      t('pro.features.1'),
      t('pro.features.2'),
      t('pro.features.3'),
      t('pro.features.4'),
    ],
    cta: t('pro.cta'),
    highlighted: true,
  };

  const plans = [freePlan, proPlan];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-[var(--color-subtle)]/20 pattern-grid relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl particle" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[var(--color-secondary)] opacity-5 rounded-full blur-3xl float-smooth" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden group ${
                plan.highlighted
                  ? 'gradient-border glow-primary hover-lift'
                  : 'glass hover-lift'
              }`}
            >
              {/* Animated Background for Highlighted Card */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-[var(--color-secondary)]/5 gradient-animated" />
              )}
              
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-warning)] text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-lg glow-pulse magnetic">
                    <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '3s' }} />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 mt-2 relative z-10">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-gradient' : 'text-[var(--color-text-dark)]'}`}>
                  {plan.title}
                </h3>
                <div className={`text-3xl font-extrabold ${plan.highlighted ? 'text-gradient' : 'text-[var(--color-primary)]'}`}>
                  {plan.price}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-7 relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2.5 group/item">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-4.5 w-4.5 text-[var(--color-secondary)] group-hover/item:scale-125 transition-transform" />
                    </div>
                    <span className="text-sm text-[var(--color-text)] leading-relaxed group-hover/item:text-[var(--color-text-dark)] transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                className={`w-full relative z-10 ${plan.highlighted ? 'hover-glow' : 'magnetic'}`}
                size="lg"
              >
                {plan.cta}
              </Button>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

