import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'premium';
  size?: 'medium' | 'large';
  loading?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'medium', loading = false, children, ...props }, ref) => {
    // Custom border radius to match app: top-left/top-right/bottom-left = 36px, bottom-right = 8px
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:opacity-80';

    const variants = {
      primary:
        'bg-[#556B2F] text-white hover:bg-[#4a5a28] focus:ring-[#556B2F]',
      secondary:
        'bg-white text-[#556B2F] border-2 border-[#556B2F] hover:bg-gray-50 focus:ring-[#556B2F]',
      premium:
        'bg-[#FFD700] text-[#8B4513] border-2 border-[#FFA500] hover:bg-[#FFC700] focus:ring-[#FFD700]',
    };

    const sizes = {
      medium: variant === 'secondary' 
        ? 'px-5 py-3.5 text-base' // 14px vertical padding for secondary (accounting for border)
        : 'px-6 py-4 text-base',   // 16px vertical padding for primary/premium
      large: 'px-7 py-[18px] text-lg', // 18px vertical padding
    };

    const borderRadius = {
      borderTopLeftRadius: '36px',
      borderTopRightRadius: '36px',
      borderBottomLeftRadius: '36px',
      borderBottomRightRadius: '8px',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        style={borderRadius}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

