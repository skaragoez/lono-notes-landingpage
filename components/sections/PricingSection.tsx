'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import { Check, Sparkles } from 'lucide-react';

export default function PricingSection() {
  const t = useTranslations('pricing');
  const [isYearly, setIsYearly] = useState(true); // Default auf Jährlich
  
  // FAQ Items
  const faqItems = [
    {
      question: t('faq.items.0.question'),
      answer: t('faq.items.0.answer'),
    },
    {
      question: t('faq.items.1.question'),
      answer: t('faq.items.1.answer'),
    },
    {
      question: t('faq.items.2.question'),
      answer: t('faq.items.2.answer'),
    },
    {
      question: t('faq.items.3.question'),
      answer: t('faq.items.3.answer'),
    },
    {
      question: t('faq.items.4.question'),
      answer: t('faq.items.4.answer'),
    },
    {
      question: t('faq.items.5.question'),
      answer: t('faq.items.5.answer'),
    },
  ];

  const freePlan = {
    label: t('free.label'),
    title: t('free.title'),
    price: t('free.price'),
    shortDescription: t('free.shortDescription'),
    features: [
      t('free.features.0'),
      t('free.features.1'),
      t('free.features.2'),
      t('free.features.3'),
      t('free.features.4'),
    ],
    cta: t('free.cta'),
    microcopy: t('free.microcopy'),
    highlighted: false,
    badge: undefined,
  };

  const basisPlan = {
    label: t('basis.label'),
    subLabel: t('basis.subLabel'),
    title: t('basis.title'),
    priceMonthly: t('basis.priceMonthly'),
    priceYearly: t('basis.priceYearly'),
    pricePeriod: isYearly ? t('basis.pricePeriod.yearly') : t('basis.pricePeriod.monthly'),
    badge: t('basis.badge'),
    shortDescription: t('basis.shortDescription'),
    additionalText: t('basis.additionalText'),
    features: [
      t('basis.features.0'),
      t('basis.features.1'),
      t('basis.features.2'),
      t('basis.features.3'),
    ],
    cta: t('basis.cta'),
    microcopy: t('basis.microcopy'),
    microcopyNote: t('basis.microcopyNote'),
    highlighted: true,
  };

  const proPlan = {
    label: t('pro.label'),
    subLabel: t('pro.subLabel'),
    title: t('pro.title'),
    priceMonthly: t('pro.priceMonthly'),
    priceYearly: t('pro.priceYearly'),
    pricePeriod: isYearly ? t('pro.pricePeriod.yearly') : t('pro.pricePeriod.monthly'),
    badge: t('pro.badge'),
    shortDescription: t('pro.shortDescription'),
    additionalText: t('pro.additionalText'),
    features: [
      t('pro.features.0'),
      t('pro.features.1'),
      t('pro.features.2'),
    ],
    cta: t('pro.cta'),
    microcopy: t('pro.microcopy'),
    microcopyNote: t('pro.microcopyNote'),
    highlighted: false,
  };

  const plans = [freePlan, basisPlan, proPlan];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-[var(--color-text-dark)]">
            {t('title')}
          </h2>
          <p className="text-lg text-[var(--color-text)] max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('subtitle')}
          </p>

          {/* Billing Toggle */}
          <div className="flex flex-col items-center justify-center gap-3 mt-8">
            <div className="flex items-center justify-center gap-4">
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
            </div>
            {isYearly && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
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
                {/* Label */}
                {'label' in plan && plan.label && (
                  <div className="text-xs font-bold text-[var(--color-primary)] mb-1 uppercase tracking-wider">
                    {plan.label}
                  </div>
                )}
                {/* Sub-Label (für Basis/Pro) */}
                {'subLabel' in plan && plan.subLabel && (
                  <div className="text-xs font-semibold text-[var(--color-text)] mb-2 uppercase tracking-wide">
                    {plan.subLabel}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">
                  {plan.title}
                </h3>
                <div className="text-4xl font-extrabold text-[var(--color-primary)] mb-3">
                  {'priceMonthly' in plan ? (isYearly ? plan.priceYearly : plan.priceMonthly) : plan.price}
                  {('pricePeriod' in plan) && (
                    <span className="text-lg font-normal text-[var(--color-text)] ml-1">
                      {plan.pricePeriod}
                    </span>
                  )}
                </div>
                {/* Short Description */}
                {'shortDescription' in plan && plan.shortDescription && (
                  <p className="text-base text-[var(--color-text)] mb-2">
                    {plan.shortDescription}
                  </p>
                )}
                {/* Additional Text (für Basis/Pro) */}
                {'additionalText' in plan && plan.additionalText && (
                  <p className="text-sm text-[var(--color-text)] mb-4 italic">
                    {plan.additionalText}
                  </p>
                )}
              </div>

              {/* Features List (für Free) oder Features List (für Basis/Pro) */}
              {'features' in plan && plan.features && plan.features.length > 0 && (
                <ul className="space-y-3 mb-6">
                  {plan.features.slice(0, 5).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="h-5 w-5 text-[var(--color-secondary)]" />
                      </div>
                      <span className="text-[var(--color-text)] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA Button */}
              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="w-full"
                size="medium"
              >
                {plan.cta}
              </Button>

              {/* Microcopy unter CTA */}
              {'microcopy' in plan && plan.microcopy && (
                <div className="mt-3">
                  <p className="text-xs text-center text-[var(--color-text)]">
                    {plan.microcopy}
                  </p>
                  {/* Optional: Sehr kleine Note unter "In-App-Kauf" (nur für Basis/Pro) */}
                  {'microcopyNote' in plan && plan.microcopyNote && index !== 0 && (
                    <p className="text-[10px] text-center text-[var(--color-text)] mt-1 opacity-70">
                      {plan.microcopyNote}
                    </p>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Price Transparency */}
        <div className="text-center mt-12">
          <p className="text-sm text-[var(--color-text)] max-w-2xl mx-auto mb-6">
            {t('priceTransparency')}
          </p>
          
          {/* Warum Abo? Micro-Explanation */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-medium text-[var(--color-text-dark)] mb-1">
              {t('whySubscription.title')}
            </p>
            <p className="text-xs text-[var(--color-text)] leading-relaxed">
              {t('whySubscription.description')}
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[var(--color-text-dark)] text-center mb-8">
            {t('faq.title')}
          </h3>
          
          {/* Desktop: Alle FAQs angezeigt */}
          <div className="hidden md:block">
            <div className="space-y-0 bg-white rounded-lg border border-gray-200 p-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0 py-4 first:pt-0 last:pb-0">
                  <h4 className="font-semibold text-[var(--color-text-dark)] mb-2">
                    {item.question}
                  </h4>
                  <p className="text-[var(--color-text)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Accordion */}
          <div className="md:hidden">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

