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
    <section className="bg-muted w-full gap-32 py-[60px] pr-[130px] pl-[70px]">
      <div className="m-auto flex max-w-[1780px] items-center justify-between">
        <div className="flex h-full w-full max-w-[800px] flex-col items-start gap-10">
          <h1 className="font-montserrat text-[80px] leading-none font-bold">
            <span className="font-montserrat text-accent text-[80px] leading-none font-bold">
              Лидогенерация
            </span>{' '}
            для&nbsp;бизнеса
          </h1>
          <div className="flex items-center justify-center gap-5">
            <p className="text-32 max-w-[525px] text-left">
              Покупайте только целевые лиды по фиксированной цене от 300 ₽
            </p>
            <Image
              src="/money_mouth.png"
              alt="Лицо с денежным ртом"
              width={72}
              height={72}
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
          />
          <StarIcon className="absolute top-26.5 -right-7.5" />
          <StarIcon className="absolute bottom-19.5 -left-7" />
        </div>
      </div>
    </section>
  );
};
