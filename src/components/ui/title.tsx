import { cn } from '@/lib/utils';

export interface ContentTabProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  titleAccent?: string;
}

export const Title = ({
  title,
  className,
  titleAccent,
  ...rest
}: ContentTabProps) => {
  return (
    <h2
      className={cn(
        'font-montserrat flex flex-col items-center pb-5 text-center text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-13 xl:text-5xl',
        className
      )}
      {...rest}
    >
      {title}
      <span className="font-montserrat text-accent text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-13 xl:text-5xl">
        {titleAccent}
      </span>
    </h2>
  );
};
