import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, isLoading, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center font-medium rounded-full
      transition-all duration-200 ease-out
      focus:outline-none focus:ring-2 focus:ring-[#0a90ff] focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
      primary: `
        bg-[#0a90ff] text-white
        hover:bg-opacity-90 active:bg-opacity-80
      `,
      secondary: `
        bg-[#1a1d26] text-[#eff1f4]
        border border-[#252a34]
        hover:bg-[#12141a] hover:border-[#0a90ff]
      `,
      ghost: `
        bg-transparent text-[#eff1f4]
        hover:bg-[#1a1d26] hover:text-[#0a90ff]
      `,
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <motion.div
            className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
