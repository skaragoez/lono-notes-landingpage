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
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-50/80 to-orange-50/80 p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-red-100/50 hover-lift glass"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-warning)]/10 to-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-warning)] text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 glow-pulse">
                  <point.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-sm font-medium text-[var(--color-text-dark)] leading-relaxed">
                  {point.text}
                </p>
              </div>
              
              {/* Pulsing Background Circle */}
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-[var(--color-warning)] opacity-5 group-hover:opacity-10 transition-opacity scale-pulse" />
              
              {/* Shimmer on Hover */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Visual Divider with App Icon */}
        <div className="mt-12 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[var(--color-warning)] via-[var(--color-accent)] to-transparent gradient-animated" />
            <div className="relative magnetic">
              <div className="absolute inset-0 bg-[var(--color-primary)] opacity-30 blur-2xl rounded-full glow-pulse" />
              <div className="relative z-10 p-2 rounded-2xl glass">
                <Image
                  src="/images/app-icon-raw.png"
                  alt="LONO Notes"
                  width={56}
                  height={56}
                  className="drop-shadow-2xl float-smooth"
                />
              </div>
            </div>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-[var(--color-primary)] gradient-animated" />
          </div>
        </div>
      </div>
    </section>
  );
}

