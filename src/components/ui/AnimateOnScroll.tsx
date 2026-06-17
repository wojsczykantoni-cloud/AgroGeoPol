'use client';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'fade-in';
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({ children, animation = 'fade-up', delay = 0, className = '' }: Props) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      {children}
    </div>
  );
}
