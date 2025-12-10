'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FileQuestion, Search, BookX, Shuffle } from 'lucide-react';

export default function ProblemSection() {
  const t = useTranslations('problem');

  const painPoints = [
    { icon: Search, text: t('pain1') },
    { icon: FileQuestion, text: t('pain2') },
    { icon: BookX, text: t('pain3') },
    { icon: Shuffle, text: t('pain4') },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-warning)] text-white transition-transform group-hover:scale-110">
                <point.icon className="h-7 w-7" />
              </div>
              <p className="text-sm font-medium text-[var(--color-text-dark)]">
                {point.text}
              </p>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-[var(--color-warning)] opacity-5" />
            </div>
          ))}
        </div>

        {/* Visual Divider with App Icon */}
        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[var(--color-warning)] to-transparent" />
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-primary)] opacity-20 blur-2xl rounded-full" />
              <Image
                src="/images/app-icon-raw.png"
                alt="LONO Notes"
                width={64}
                height={64}
                className="relative z-10 drop-shadow-xl animate-pulse"
              />
            </div>
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-transparent to-[var(--color-secondary)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

