'use client';
import { Button } from '@/components/ui/button';
import { StarIcon } from '@/components/ui/star-icon';
import Image from 'next/image';
import { useState } from 'react';

export const LeadGeneration = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="m-auto mt-10 flex max-w-[1780px] items-center justify-start gap-15 md:mt-20 xl:mt-30">
      <div className="flex h-full w-full max-w-[762px] flex-col items-start pl-37">
        <h2 className="font-montserrat max-w-[560px] text-3xl leading-[80px] font-bold md:text-4xl lg:text-5xl">
          <span className="leading-[80px]text-accent text-3xl font-bold md:text-4xl lg:text-5xl">
            Лидогенерация —{' '}
          </span>
          это новая эра маркетинга!
        </h2>
        <Image
          src="/rocket.png"
          alt="Ракета"
          width={72}
          height={72}
          className="pt-7.5 pb-15"
        />
        <Button className="uppercase">Купить Лиды</Button>
      </div>
      <div className="relative flex max-w-[730px] flex-col items-start gap-5">
        <p className="text-2xl font-normal">
          Использование лидогенерации снижает стоимость привлечения клиентов,
          позволяет бизнесу сосредоточиться на основном продукте и значительно
          упрощает процесс работы.
        </p>
        <p className="text-2xl font-normal">
          Стоимость заявок на нашей платформе зависит от их качества и
          сложности. Мы предоставляем прозрачные тарифы и выгодные условия
          сотрудничества.
        </p>
        <p className="text-2xl font-normal">
          Наша биржа — это место встречи тех, кто заказывает заявки, и тех, кто
          их предоставляет. Мы создаём условия для успешного сотрудничества и
          взаимной выгоды.
        </p>
        {isExpanded && (
          <>
            <p className="text-2xl font-normal">
              Биржа лидов — это современное решение для бизнеса, которое
              позволяет эффективно находить новых клиентов и масштабировать свою
              деятельность.
            </p>
            <p className="text-2xl font-normal">
              Использование биржи помогает оптимизировать стоимость привлечения
              заявок и получить готовые решения для лидогенерации. Наш сервис
              предоставляет уникальную возможность купить или продать лиды,
              обеспечивая прозрачность и надёжность каждой сделки.
            </p>
            <p className="text-2xl font-normal">
              Мы объединяем вебмастеров, готовых передать заявки, и бизнесы,
              которым нужны новые клиенты. На нашей платформе вебмастеры
              размещают готовые заявки, которые затем приобретаются бизнесами
              для привлечения новых клиентов. Это упрощает процесс
              взаимодействия и повышает эффективность работы. Каждая заявка
              проходит тщательную проверку, чтобы обеспечить максимальную
              ценность для бизнеса.
            </p>
            <p className="text-2xl font-normal">
              Вы покупаете лиды, уже готовые к взаимодействию, и получаете
              гарантированный результат.
            </p>
          </>
        )}
        <Button
          variant={'link'}
          className="text-muted-foreground h-max w-max p-0 pt-2.5 text-2xl font-normal underline"
          onClick={handleToggle}
        >
          {isExpanded ? 'Скрыть' : 'Читать больше'}
        </Button>
        <StarIcon className="absolute top-2 -right-19 h-14.25 w-14.25" />
      </div>
    </section>
  );
};
