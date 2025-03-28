import { Button } from '@/components/ui/button';
import { StarIcon } from '@/components/ui/star-icon';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  isReverse?: boolean;
}
export const PromoSection = ({
  className,
  title,
  src,
  isReverse,
  ...rest
}: ComponentProps) => {
  return (
    <section
      className={cn(
        'bg-foreground rounded-30 m-auto mt-10 flex max-w-[1780px] flex-col items-center justify-between gap-10 px-10 py-10 md:mt-20 md:flex-row md:gap-24 md:px-30 md:py-15 xl:mt-30',
        className
      )}
      {...rest}
    >
      <div className="flex h-full w-full max-w-[762px] flex-col items-start gap-10">
        <h2 className="font-montserrat text-background text-2xl font-bold md:text-4xl lg:text-5xl lg:leading-[52px]">
          {title}
        </h2>

        <Button className="uppercase">Зарегистрироваться</Button>
      </div>
      <div className="relative">
        <Image src={src} alt="Девушка с ноутбуком" width={683} height={403} />
        <StarIcon
          className={cn(
            'absolute top-1',
            isReverse ? 'left-1.5' : '-right-6 hidden h-22 w-22'
          )}
        />
        <StarIcon
          className={cn(
            'absolute',
            isReverse ? 'right-12.5 bottom-8' : 'bottom-1 left-6 h-22 w-22'
          )}
        />
      </div>
    </section>
  );
};
