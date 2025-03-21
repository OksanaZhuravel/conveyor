'use client';
import { Button } from '@/components/ui/button';
import { StarIcon } from '@/components/ui/star-icon';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export const PromoMain = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <section className="bg-muted w-full p-5 lg:py-15 lg:pr-17.5 lg:pl-17.5 xl:pr-32.5">
      <div className="m-auto flex max-w-[1780px] flex-col items-center justify-between gap-10 md:flex-row xl:gap-32">
        <div className="flex h-full w-full max-w-[800px] flex-col items-start gap-5 lg:gap-10">
          <h1 className="font-montserrat text-3xl leading-none font-bold md:text-4xl lg:text-5xl xl:text-[80px]">
            <span className="font-montserrat text-accent text-3xl leading-none font-bold md:text-4xl lg:text-5xl xl:text-[80px]">
              Лидогенерация
            </span>{' '}
            для&nbsp;бизнеса
          </h1>
          <div className="flex items-center justify-center gap-3 lg:gap-5">
            <p className="lg:text-32 max-w-xs text-left lg:max-w-[525px]">
              Покупайте только целевые лиды по фиксированной цене от 300 ₽
            </p>
            <Image
              src="/money_mouth.png"
              alt="Лицо с денежным ртом"
              width={72}
              height={72}
              className="h-8 w-8 md:h-12 md:w-12 xl:h-18 xl:w-18"
            />
          </div>
          <Button
            className={cn('uppercase', { 'bg-active': isActive })}
            onClick={handleClick}
          >
            Выбрать пакет лидов
          </Button>
        </div>
        <div className="relative">
          <Image
            src="/promo.png"
            alt="Девушка с ноутбуком"
            width={791}
            height={497}
            className="object-cover"
          />
          <StarIcon className="absolute top-4 right-0 h-10 w-10 md:top-26.5 md:-right-7.5 lg:h-15.5 lg:w-15.5" />
          <StarIcon className="absolute bottom-4 h-10 w-10 md:bottom-19.5 md:-left-7 lg:h-15.5 lg:w-15.5" />
        </div>
      </div>
    </section>
  );
};
