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
    <section className="m-auto mt-10 flex max-w-[1780px] flex-col items-center justify-start gap-5 md:mt-20 md:flex-row md:gap-10 lg:gap-15 xl:mt-30">
      <div className="flex h-full w-full max-w-[762px] flex-col items-start p-5 md:p-10 xl:pl-37">
        <h2 className="font-montserrat max-w-[560px] text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-[80px]">
          <span className="text-accent text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-[80px]">
            Лидогенерация —{' '}
          </span>
          это новая эра маркетинга!
        </h2>
        <Image
          src="/rocket.png"
          alt="Ракета"
          width={72}
          height={72}
          className="py-3 lg:pt-7.5 lg:pb-15"
        />
        <Button className="uppercase">Купить Лиды</Button>
      </div>
      <div className="relative flex max-w-[730px] flex-col items-start gap-5 p-5 md:p-0">
        <p className="text-lg font-normal md:text-2xl">
          Использование лидогенерации снижает стоимость привлечения клиентов,
          позволяет бизнесу сосредоточиться на основном продукте и значительно
          упрощает процесс работы.
        </p>
        <p className="text-lg font-normal md:text-2xl">
          Стоимость заявок на нашей платформе зависит от их качества и
          сложности. Мы предоставляем прозрачные тарифы и выгодные условия
          сотрудничества.
        </p>
        <p className="text-lg font-normal md:text-2xl">
          Наша биржа — это место встречи тех, кто заказывает заявки, и тех, кто
          их предоставляет. Мы создаём условия для успешного сотрудничества и
          взаимной выгоды.
        </p>
        {isExpanded && (
          <>
            <p className="text-lg font-normal md:text-2xl">
              Биржа лидов — это современное решение для бизнеса, которое
              позволяет эффективно находить новых клиентов и масштабировать свою
              деятельность.
            </p>
            <p className="text-lg font-normal md:text-2xl">
              Использование биржи помогает оптимизировать стоимость привлечения
              заявок и получить готовые решения для лидогенерации. Наш сервис
              предоставляет уникальную возможность купить или продать лиды,
              обеспечивая прозрачность и надёжность каждой сделки.
            </p>
            <p className="text-lg font-normal md:text-2xl">
              Мы объединяем вебмастеров, готовых передать заявки, и бизнесы,
              которым нужны новые клиенты. На нашей платформе вебмастеры
              размещают готовые заявки, которые затем приобретаются бизнесами
              для привлечения новых клиентов. Это упрощает процесс
              взаимодействия и повышает эффективность работы. Каждая заявка
              проходит тщательную проверку, чтобы обеспечить максимальную
              ценность для бизнеса.
            </p>
            <p className="text-lg font-normal md:text-2xl">
              Вы покупаете лиды, уже готовые к взаимодействию, и получаете
              гарантированный результат.
            </p>
          </>
        )}
        <Button
          variant={'link'}
          className="text-muted-foreground h-max w-max p-0 pt-2.5 text-lg font-normal underline md:text-2xl"
          onClick={handleToggle}
        >
          {isExpanded ? 'Скрыть' : 'Читать больше'}
        </Button>
        <StarIcon className="absolute top-2 -right-19 h-14.25 w-14.25" />
      </div>
    </section>
  );
};
