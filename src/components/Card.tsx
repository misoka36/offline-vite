import type { ReactNode } from 'react';
import { cn } from '../utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bordered';
}

export const Card = ({ children, className, variant = 'default' }: CardProps) => {
  const variants = {
    default: 'bg-white dark:bg-gray-800 shadow rounded-lg',
    bordered: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg',
  };

  return (
    <div className={cn(variants[variant], 'p-6', className)}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <h3 className={cn('text-lg font-semibold text-gray-900 dark:text-white', className)}>
      {children}
    </h3>
  );
};

export const CardContent = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn('text-gray-700 dark:text-gray-300', className)}>
      {children}
    </div>
  );
};