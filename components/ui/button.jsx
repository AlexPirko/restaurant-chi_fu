import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap text-base font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'text-white bg-primary hover:bg-primary-hover',
                secondary: 'text-white bg-secondary hover:bg-secondary-hover',
                outline: 'text-white bg-white/20 border border-white/25 hover:border-white/75',
            },
            size: {
                default: 'w-40 h-14 px-6',
                sm: 'w-36 h-12 px-6',
                xsm: 'w-32 h-10 px-4',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
