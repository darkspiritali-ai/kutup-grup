'use client';

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

type RevealVariant = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'slideUp';

interface ScrollRevealProps {
    children: ReactNode;
    variant?: RevealVariant;
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
    style?: CSSProperties;
    once?: boolean;
}

const variantStyles: Record<RevealVariant, { hidden: CSSProperties; visible: CSSProperties }> = {
    fadeUp: {
        hidden: { opacity: 0, transform: 'translateY(40px)' },
        visible: { opacity: 1, transform: 'translateY(0)' },
    },
    fadeDown: {
        hidden: { opacity: 0, transform: 'translateY(-40px)' },
        visible: { opacity: 1, transform: 'translateY(0)' },
    },
    fadeLeft: {
        hidden: { opacity: 0, transform: 'translateX(-40px)' },
        visible: { opacity: 1, transform: 'translateX(0)' },
    },
    fadeRight: {
        hidden: { opacity: 0, transform: 'translateX(40px)' },
        visible: { opacity: 1, transform: 'translateX(0)' },
    },
    scaleIn: {
        hidden: { opacity: 0, transform: 'scale(0.9)' },
        visible: { opacity: 1, transform: 'scale(1)' },
    },
    slideUp: {
        hidden: { opacity: 0, transform: 'translateY(60px)' },
        visible: { opacity: 1, transform: 'translateY(0)' },
    },
};

export default function ScrollReveal({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 700,
    threshold = 0.15,
    className = '',
    style = {},
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(el);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, once]);

    const { hidden, visible } = variantStyles[variant];

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                ...(isVisible ? visible : hidden),
                transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    );
}

/* Stagger helper — wraps children with increasing delays */
export function StaggerReveal({
    children,
    variant = 'fadeUp',
    baseDelay = 0,
    staggerDelay = 100,
    className = '',
    ...props
}: Omit<ScrollRevealProps, 'delay'> & { baseDelay?: number; staggerDelay?: number; children: ReactNode[] }) {
    return (
        <>
            {(Array.isArray(children) ? children : [children]).map((child, i) => (
                <ScrollReveal
                    key={i}
                    variant={variant}
                    delay={baseDelay + i * staggerDelay}
                    className={className}
                    {...props}
                >
                    {child}
                </ScrollReveal>
            ))}
        </>
    );
}
