import React from 'react';
import Link from 'next/link';

import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import cn from '@utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded text-sm font-medium transition-colors focus:outline-none  disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-100',
  {
    variants: {
      variant: {
        default: 'bg-primary-500 text-white hover:bg-primary-700 ',
        destructive: 'bg-red-500 text-white hover:bg-red-600 ',
        outline: 'border border-slate-200 bg-transparent hover:bg-slate-100  ',
        subtle: 'bg-slate-100 text-slate-900 hover:bg-slate-200  ',
        ghost:
          'bg-transparent outline-none focus:border-0 focus:outline-none focus:ring-0',
        link: 'bg-transparent text-slate-900 underline-offset-4 hover:bg-transparent hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded px-2',
        lg: 'h-11 rounded px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        type="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
