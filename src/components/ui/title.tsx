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
        'font-montserrat flex flex-col items-center pb-5 text-5xl leading-13 font-bold',
        className
      )}
      {...rest}
    >
      {title}
      <span className="font-montserrat text-accent text-5xl leading-13 font-bold">
        {titleAccent}
      </span>
    </h2>
  );
};
