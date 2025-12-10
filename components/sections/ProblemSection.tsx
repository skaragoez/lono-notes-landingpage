'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Check, Download } from 'lucide-react';

export default function ProblemSection() {
  const t = useTranslations('problem');
  const params = useParams();
  const locale = params.locale as string;

  // Map locale to App Store badge
  const appStoreBadges: Record<string, string> = {
    de: '/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg',
    en: '/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg',
    tr: '/images/Download_on_the_App_Store_Badge_TR_RGB_blk_100217.svg',
  };

  const problems = [
    {
      image: '/images/frau-mit-migreane-sucht-nach-rezept.png',
      title: t('pain1'),
      description: 'Deine wichtigsten Heilmittel sind über verschiedene Notizen verstreut. Wenn du sie wirklich brauchst, findest du sie nicht.',
    },
    {
      image: '/images/frau-schaut-nach-etwas-im-regal.png',
      title: 'Welches Mittel hat bei meinen Symptomen geholfen?',
      description: 'Du kannst dich nicht mehr erinnern, welches Heilmittel dir beim letzten Mal wirklich geholfen hat. War es Ingwer oder Kamille? Welche Dosierung?',
    },
    {
      image: '/images/frau-ist-verloren-im-notizen-jungel.png',
      title: t('pain4'),
      description: 'Unübersichtliche Notizen machen es unmöglich, den Überblick zu behalten.',
    },
    {
      image: '/images/mockup.png',
      title: 'Die Lösung: LONO Notes',
      description: 'Schluss mit dem Chaos! Mit LONO Notes hast du endlich alles unter Kontrolle.',
      benefits: [
        'Alle Rezepte an einem Ort',
        'Symptome tracken und Muster erkennen',
        'Fortschritte sichtbar machen',
        'Gesundheitsziele erreichen',
      ],
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-24">
          {problems.map((problem, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === problems.length - 1;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center ${
                  isLast ? 'bg-gradient-to-br from-[var(--color-subtle)] to-white rounded-3xl p-8 lg:p-12' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`relative ${isLast ? 'flex items-center justify-center' : 'aspect-[4/3]'}`}>
                    {!isLast && (
                      <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                        <Image
                          src={problem.image}
                          alt={problem.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {isLast && (
                      <Image
                        src={problem.image}
                        alt={problem.title}
                        width={300}
                        height={650}
                        className="h-auto max-h-[500px] w-auto drop-shadow-2xl"
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`max-w-lg ${isEven ? '' : 'lg:ml-auto'}`}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {problem.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {problem.description}
                    </p>

                    {/* Benefits List - nur bei Lösung */}
                    {isLast && 'benefits' in problem && (
                      <ul className="space-y-3 mb-8">
                        {problem.benefits.map((benefit: string, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            </div>
                            <span className="text-gray-700 font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA Buttons - nur bei Lösung */}
                    {isLast && (
                      <div className="space-y-4">
                        <Button size="lg" className="w-full sm:w-auto gap-2">
                          <Download className="w-5 h-5" />
                          Jetzt kostenlos herunterladen
                        </Button>
                        
                        <div className="flex justify-start">
                          <a 
                            href="https://apps.apple.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-105"
                          >
                            <Image
                              src={appStoreBadges[locale] || appStoreBadges.en}
                              alt="Download on the App Store"
                              width={160}
                              height={48}
                              className="h-[48px] w-auto"
                            />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
