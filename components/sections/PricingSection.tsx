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
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto">
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
              className={`relative ${
                plan.highlighted
                  ? 'border-2 border-[var(--color-primary)] shadow-lg'
                  : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-warning)] text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-md">
                    <Sparkles className="h-3.5 w-3.5" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">
                  {plan.title}
                </h3>
                <div className="text-3xl font-extrabold text-[var(--color-primary)]">
                  {plan.price}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-7">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-4.5 w-4.5 text-[var(--color-secondary)]" />
                    </div>
                    <span className="text-sm text-[var(--color-text)] leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

