'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const params = useParams();
  const locale = params.locale as string;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('features'), href: '#features' },
    { label: t('howItWorks'), href: '#how-it-works' },
    { label: t('pricing'), href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-lg border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3.5">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 hover:scale-105 transition-transform">
          <Image
            src="/images/lono-notes@2x.png"
            alt="LONO Notes Logo"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--color-primary)] after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA & Language Switcher */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button size="md" className="hover-glow glow-primary">{t('download')}</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-[var(--color-text)] transition-colors hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="container mx-auto space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full" size="lg">
              {t('download')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

