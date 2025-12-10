'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import { Quote, Shield, Lock, MapPin } from 'lucide-react';

export default function SocialProofSection() {
  const t = useTranslations('socialProof');

  const testimonials = [
    {
      text: t('testimonial1.text'),
      author: t('testimonial1.author'),
      role: t('testimonial1.role'),
    },
    {
      text: t('testimonial2.text'),
      author: t('testimonial2.author'),
      role: t('testimonial2.role'),
    },
    {
      text: t('testimonial3.text'),
      author: t('testimonial3.author'),
      role: t('testimonial3.role'),
    },
  ];

  const stats = [
    { value: t('stats.users'), label: t('stats.usersLabel') },
    { value: t('stats.recipes'), label: t('stats.recipesLabel') },
    { value: t('stats.rating'), label: t('stats.ratingLabel') },
  ];

  const badges = [
    { icon: Shield, label: t('badges.gdpr') },
    { icon: Lock, label: t('badges.privacy') },
    { icon: MapPin, label: t('badges.madeIn') },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-[var(--color-subtle)] to-white">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4">{t('title')}</h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[var(--color-text)] uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover>
              <Quote className="h-10 w-10 text-[var(--color-primary)] opacity-30 mb-4" />
              <p className="text-[var(--color-text)] mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-[var(--color-text-dark)]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[var(--color-text)]">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md"
            >
              <badge.icon className="h-6 w-6 text-[var(--color-primary)]" />
              <span className="text-sm font-semibold text-[var(--color-text-dark)]">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

