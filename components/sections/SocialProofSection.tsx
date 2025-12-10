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
    <section className="section-padding bg-gradient-to-b from-[var(--color-subtle)]/30 to-white">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('title')}</h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[var(--color-text-light)] uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover>
              <Quote className="h-8 w-8 text-[var(--color-primary)] opacity-20 mb-3" />
              <p className="text-[var(--color-text)] mb-5 italic leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-100 pt-3.5">
                <p className="font-bold text-[var(--color-text-dark)] text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-[var(--color-text-light)]">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-100"
            >
              <badge.icon className="h-5 w-5 text-[var(--color-primary)]" />
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

