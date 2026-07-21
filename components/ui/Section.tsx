import { cn } from '@/lib/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn('py-32', className)}>
      {children}
    </section>
  );
}