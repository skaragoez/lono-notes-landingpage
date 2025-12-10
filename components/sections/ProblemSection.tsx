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
        <div className="text-center mb-10">
          <h2 className="mb-4">{t('title')}</h2>
          <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-50/80 to-orange-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-red-100/50"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-warning)] text-white transition-transform group-hover:scale-105">
                <point.icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-[var(--color-text-dark)] leading-relaxed">
                {point.text}
              </p>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-[var(--color-warning)] opacity-3" />
            </div>
          ))}
        </div>

        {/* Visual Divider with App Icon */}
        <div className="mt-12 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-[var(--color-warning)] to-transparent opacity-50" />
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10 blur-xl rounded-full" />
              <Image
                src="/images/app-icon-raw.png"
                alt="LONO Notes"
                width={48}
                height={48}
                className="relative z-10 drop-shadow-lg animate-pulse-subtle"
              />
            </div>
            <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-transparent to-[var(--color-secondary)] opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

