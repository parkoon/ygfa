var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { cn } from '@/libs/cn';
var buttonVariants = cva('inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 select-none', {
    variants: {
        variant: {
            primary: 'bg-primary text-white shadow',
            secondary: 'bg-secondary text-secondary-foreground shadow-sm',
            ghost: '',
            outlined: 'bg-white border',
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3 text-xs',
            lg: 'h-12 rounded-md px-8',
            icon: 'h-9 w-9',
        },
        danger: {
            true: 'bg-danger border-danger-foreground text-white',
        },
        loading: {
            true: 'pointer-events-none opacity-50',
        },
        block: {
            true: 'w-full',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default',
    },
});
var Button = React.forwardRef(function (_a, ref) {
    var className = _a.className, variant = _a.variant, size = _a.size, block = _a.block, loading = _a.loading, danger = _a.danger, children = _a.children, props = __rest(_a, ["className", "variant", "size", "block", "loading", "danger", "children"]);
    return (<button className={cn(buttonVariants({ variant: variant, size: size, danger: danger, className: className, block: block, loading: loading }))} ref={ref} {...props}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
        {children}
      </button>);
});
Button.displayName = 'Button';
export { Button, buttonVariants };
