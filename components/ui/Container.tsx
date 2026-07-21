import { cn } from '@/lib/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[1280px] px-6 lg:px-8',
        className,
      )}
    >
      {children}
    </div>
  );
}