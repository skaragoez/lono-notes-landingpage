'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function HowItWorksSection() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      number: '01',
      title: t('step1.title'),
      description: t('step1.description'),
      image: '/images/new-note-editor.png',
    },
    {
      number: '02',
      title: t('step2.title'),
      description: t('step2.description'),
      image: '/images/note-detail-view.png',
    },
    {
      number: '03',
      title: t('step3.title'),
      description: t('step3.description'),
      image: '/images/journal-entries-list.png',
    },
    {
      number: '04',
      title: t('step4.title'),
      description: t('step4.description'),
      image: '/images/symptom-tracking-form.png',
    },
    {
      number: '05',
      title: t('step5.title'),
      description: t('step5.description'),
      image: '/images/symptom-tracking-detail.png',
    },
    {
      number: '06',
      title: t('step6.title'),
      description: t('step6.description'),
      image: '/images/goals-tracking-progress.png',
    },
    {
      number: '07',
      title: t('step7.title'),
      description: t('step7.description'),
      image: '/images/goals-create-new.png',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps - Alternating Layout */}
        <div className="space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                  {/* Image */}
                  <div className={`relative order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[9/16] max-w-sm mx-auto">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-contain drop-shadow-2xl rounded-[2.5rem]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} text-center lg:text-left`}>
                    <div className="mb-4 text-6xl font-extrabold text-[var(--color-primary)]">
                      {step.number}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-[var(--color-text)] leading-relaxed max-w-lg mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

