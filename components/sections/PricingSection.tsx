'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Check, Sparkles } from 'lucide-react';

export default function PricingSection() {
  const t = useTranslations('pricing');
  const [isYearly, setIsYearly] = useState(false);

  const freePlan = {
    title: t('free.title'),
    price: t('free.price'),
    features: [
      t('free.features.0'),
      t('free.features.1'),
    ],
    cta: t('free.cta'),
    highlighted: false,
    badge: undefined,
  };

  const basisPlan = {
    title: t('basis.title'),
    priceMonthly: t('basis.priceMonthly'),
    priceYearly: t('basis.priceYearly'),
    pricePeriod: isYearly ? t('basis.pricePeriod.yearly') : t('basis.pricePeriod.monthly'),
    badge: t('basis.badge'),
    features: [
      t('basis.features.0'),
      t('basis.features.1'),
      t('basis.features.2'),
      t('basis.features.3'),
      t('basis.features.4'),
      t('basis.features.5'),
      t('basis.features.6'),
    ],
    cta: t('basis.cta'),
    highlighted: true,
  };

  const proPlan = {
    title: t('pro.title'),
    priceMonthly: t('pro.priceMonthly'),
    priceYearly: t('pro.priceYearly'),
    pricePeriod: isYearly ? t('pro.pricePeriod.yearly') : t('pro.pricePeriod.monthly'),
    badge: t('pro.badge'),
    features: [
      t('pro.features.0'),
      t('pro.features.1'),
      t('pro.features.2'),
      t('pro.features.3'),
    ],
    cta: t('pro.cta'),
    highlighted: false,
  };

  const plans = [freePlan, basisPlan, proPlan];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto mb-8">
            {t('subtitle')}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-[var(--color-text-dark)]' : 'text-[var(--color-text)]'}`}>
              {t('billingToggle.monthly')}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
              style={{ backgroundColor: isYearly ? 'var(--color-primary)' : '' }}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform ${
                  isYearly ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-[var(--color-text-dark)]' : 'text-[var(--color-text)]'}`}>
              {t('billingToggle.yearly')}
            </span>
            {isYearly && (
              <span className="ml-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {t('billingToggle.save')}
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.highlighted
                  ? 'border-2 border-[var(--color-primary)] shadow-2xl'
                  : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-warning)] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">
                  {plan.title}
                </h3>
                <div className="text-4xl font-extrabold text-[var(--color-primary)]">
                  {'priceMonthly' in plan ? (isYearly ? plan.priceYearly : plan.priceMonthly) : plan.price}
                  {('pricePeriod' in plan) && (
                    <span className="text-lg font-normal text-[var(--color-text)] ml-1">
                      {plan.pricePeriod}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-[var(--color-secondary)]" />
                    </div>
                    <span className="text-[var(--color-text)]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="w-full"
                size="medium"
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

