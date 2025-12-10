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
    <section id="how-it-works" className="section-padding bg-white pattern-dots relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-40 h-40 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl particle" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-[var(--color-secondary)] opacity-5 rounded-full blur-3xl float-smooth" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)]/40 via-[var(--color-accent)]/30 to-[var(--color-secondary)]/40 transform -translate-x-1/2 hidden lg:block gradient-animated" />
          
          {/* Glow Along Timeline */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-32 bg-[var(--color-primary)] blur-xl opacity-20 hidden lg:block glow-pulse" />

          <div className="space-y-12 lg:space-y-14">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center group`}>
                  <div className="inline-block mb-3 px-3.5 py-1 bg-[var(--color-primary)] text-white rounded-full text-xs font-bold tracking-wide glow-primary group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2.5 group-hover:text-gradient transition-all">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Icon Circle with Glow */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-lg lg:h-18 lg:w-18 hover-lift glow-pulse magnetic cursor-pointer">
                  <step.icon className="h-8 w-8 lg:h-9 lg:w-9" />
                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition-opacity" />
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

