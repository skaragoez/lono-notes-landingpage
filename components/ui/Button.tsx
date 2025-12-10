import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] focus:ring-[var(--color-primary)] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]',
      secondary:
        'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)] focus:ring-[var(--color-secondary)] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]',
      outline:
        'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)] hover:scale-[1.02] active:scale-[0.98]',
    };

    const sizes = {
      sm: 'px-4 py-2.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-3.5 text-base font-semibold',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

