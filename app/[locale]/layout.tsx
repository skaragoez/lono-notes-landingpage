import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '../globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }, { locale: 'tr' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  const titles = {
    de: 'LONO Notes - Organisiere deine Naturheilkunde-Rezepte',
    en: 'LONO Notes - Organize Your Natural Medicine Knowledge',
    tr: 'LONO Notes - Doğal Tıp Bilginizi Düzenleyin',
  };

  const descriptions = {
    de: 'Schluss mit Chaos in deinen Rezepten. LONO Notes hilft dir, deine Kräuterrezepte, Symptome und Gesundheitsziele übersichtlich zu verwalten.',
    en: 'Stop the chaos in your recipes. LONO Notes helps you manage your herbal remedies, symptoms, and health goals with ease.',
    tr: 'Tariflerdeki kaosa son. LONO Notes, bitkisel ilaçlarınızı, semptomlarınızı ve sağlık hedeflerinizi kolayca yönetmenize yardımcı olur.',
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.de,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.de,
    keywords: [
      'natural medicine',
      'herbal remedies',
      'health tracking',
      'symptom diary',
      'wellness app',
      'Naturheilkunde',
      'Kräuter',
      'Gesundheit',
    ],
    authors: [{ name: 'LONO Notes' }],
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.de,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.de,
      type: 'website',
      locale: locale,
      siteName: 'LONO Notes',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'LONO Notes App',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles] || titles.de,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.de,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://lononotes.com/${locale}`,
      languages: {
        'de': 'https://lononotes.com/de',
        'en': 'https://lononotes.com/en',
        'tr': 'https://lononotes.com/tr',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!['de', 'en', 'tr'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={dmSans.variable}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/app-icon-3C4823@2x.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/app-icon-3C4823@3x.png" />
        <meta name="theme-color" content="#556B2F" />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

