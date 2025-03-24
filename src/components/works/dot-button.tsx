import { useCarousel } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

export interface ComponentProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}
export const DotButton = ({ isActive, children, ...rest }: ComponentProps) => {
  const { canScrollNext } = useCarousel();
  if (!canScrollNext) {
    return null;
  }
  return (
    <button
      type="button"
      {...rest}
      className={cn(
        'bg-secondary m-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-none p-0 transition-colors duration-500 after:flex after:h-full after:w-full after:items-center after:rounded-full after:border after:border-transparent after:p-2 after:transition-colors after:duration-500 after:content-[""] md:h-7.5 md:w-7.5',
        {
          'bg-accent after:border-accent': isActive,
        }
      )}
    >
      {children}
    </button>
  );
};
