import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface CardPriceProps {
  title: string;
  header: string;
  price: string;
  description: string;
  features: string[];
}

export const CardPrice = ({
  title,
  header,
  description,
  features,
  price,
}: CardPriceProps) => {
  const cardClass =
    title === 'Стандарт' ? 'bg-foreground text-background' : 'bg-muted';
  const starIcon =
    title === 'Стандарт' ? '/starIconWhite.svg' : '/starIconBlack.svg';

  return (
    <article
      className={cn(
        'rounded-30 flex h-full min-h-[813px] flex-col gap-7.5 p-10 hover:shadow-lg 2xl:w-[580px]',
        cardClass
      )}
    >
      <div className="flex max-w-[424px] gap-5">
        <p className="lg:text-32 rounded-20 h-11 border px-2.5 py-2.5 lg:h-auto lg:px-5">
          {title}
        </p>
        <Image src={starIcon} alt="Звезда" width={56} height={56} />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-montserrat mb-2 max-w-[424px] text-2xl font-bold lg:text-4xl">
          {header}&nbsp;
          <span
            className="font-montserrat bg-clip-text text-2xl font-bold text-transparent lg:text-4xl"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #FF6600 0%, #F26659 27%, #F06177 37%, #E55D97 48%, #CA46D2 71%, #8D13F9 100%)',
            }}
          >
            {price}
          </span>
        </h2>
        <p className="max-w-[424px] text-2xl">{description}</p>
      </div>
      <ul className="max-w-[424px]">
        {features.map((feature, index) => (
          <li
            key={index}
            className={cn('mb-5 flex items-center', {
              'font-bold': index === 1,
            })}
          >
            <Check className="mr-4" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button className="uppercase">Купить</Button>
      </div>
    </article>
  );
};
