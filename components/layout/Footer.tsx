'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const params = useParams();
  const locale = params.locale as string;

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: t('product.features'), href: '#features' },
      { label: t('product.pricing'), href: '#pricing' },
      { label: t('product.download'), href: '#download' },
    ],
    legal: [
      { label: t('legal.privacy'), href: `/${locale}/privacy` },
      { label: t('legal.terms'), href: `/${locale}/terms` },
      { label: t('legal.imprint'), href: `/${locale}/imprint` },
    ],
    support: [
      { label: t('support.contact'), href: `/${locale}/contact` },
      { label: t('support.faq'), href: `/${locale}/faq` },
      { label: t('support.help'), href: `/${locale}/help` },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/lono-notes@2x.png"
                alt="LONO Notes Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-[var(--color-text)] mb-4 max-w-sm">
              {t('tagline')}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[var(--color-text)] transition-all hover:bg-[var(--color-primary)] hover:text-white shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[var(--color-text-dark)]">
              {t('product.title')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[var(--color-text-dark)]">
              {t('legal.title')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[var(--color-text-dark)]">
              {t('support.title')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-[var(--color-text)]">
            © {currentYear} LONO Notes. {t('copyright').split('. ')[1]}
          </p>
        </div>
      </div>
    </footer>
  );
}

