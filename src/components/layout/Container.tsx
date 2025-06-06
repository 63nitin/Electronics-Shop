import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </Component>
  );
}
