'use client';

import { useTranslations } from 'next-intl';
import { PlusCircle, ClipboardList, Lightbulb, Target } from 'lucide-react';

export default function HowItWorksSection() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      number: '01',
      icon: PlusCircle,
      title: t('step1.title'),
      description: t('step1.description'),
    },
    {
      number: '02',
      icon: ClipboardList,
      title: t('step2.title'),
      description: t('step2.description'),
    },
    {
      number: '03',
      icon: Lightbulb,
      title: t('step3.title'),
      description: t('step3.description'),
    },
    {
      number: '04',
      icon: Target,
      title: t('step4.title'),
      description: t('step4.description'),
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] transform -translate-x-1/2 hidden lg:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                  <div className="inline-block mb-4 px-4 py-1 bg-[var(--color-primary)] text-white rounded-full text-sm font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text)]">
                    {step.description}
                  </p>
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-xl lg:h-24 lg:w-24">
                  <step.icon className="h-10 w-10 lg:h-12 lg:w-12" />
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

