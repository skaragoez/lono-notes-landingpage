'use client';

import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface PhoneMockupProps extends HTMLAttributes<HTMLDivElement> {
  screenshot?: string;
  alt?: string;
}

export default function PhoneMockup({
  className,
  screenshot,
  alt = 'App Screenshot',
  ...props
}: PhoneMockupProps) {
  return (
    <div
      className={cn('relative mx-auto w-full max-w-[280px]', className)}
      {...props}
    >
      {/* Phone Frame */}
      <div className="relative aspect-[9/19] w-full rounded-[3rem] border-[12px] border-gray-900 bg-gray-900 shadow-xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
        
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-white">
          {screenshot ? (
            <Image
              src={screenshot}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 280px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-secondary)]">
              <div className="text-center text-white">
                <div className="mb-4 text-4xl">🌿</div>
                <p className="text-sm font-semibold">LONO Notes</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-gray-200 opacity-40" />
      </div>
    </div>
  );
}

