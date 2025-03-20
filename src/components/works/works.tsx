'use client';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { IDs } from '@/constants';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { DotButton } from './dot-button';

const sliders = [
  {
    title: 'Как это работает?',
    id: '01',
    image: '/slider/01.png',
    description: 'Регистрация и добавление проекта в систему',
    steps: [
      '1. Зарегистрируйтесь в нашем личном кабинете',
      '2. При добавлении проекта вам необходимо указать URL (адрес) своего сайта',
      '3. Для вашего сайта будет сгенерирован уникальный код, который необходимо установить на свой сайт (в шаблоне сайта, перед тегом </head>)',
    ],
  },
  {
    title: 'Как это работает?',
    id: '02',
    image: '/slider/02.png',
    description: 'Выбор пакета и количества Лидов',
    steps: [
      'После добавления проекта в систему, вам необходимо выбрать тот пакет и количество Лидов, которое вам необходимо.',
    ],
  },
  {
    title: 'Как это работает?',
    id: '03',
    image: '/slider/03.png',
    description: 'Оплата проекта',
    steps: [
      'Оплатить Лидов вы сможете пластиковой картой или безналичным переводом.',
    ],
  },
  {
    title: 'Как это работает?',
    id: '04',
    image: '/slider/04.png',
    description: 'Получение кода для сайта',
    steps: [
      'После оплаты, система для вас сгенерирует код, который вам необходимо установить на свой сайт (в шаблоне сайта, перед тегом </head>).',
    ],
  },
  {
    title: 'Как это работает?',
    id: '05',
    image: '/slider/05.png',
    description: 'Начало получения Лидов',
    steps: [
      'В зависимости от вашей тематики (услуги или товара),а также объёма вашего трафика сайта система будет добавлять в личном кабинете контакты потенциальных клиентов, заинтересованных в вашей услуги и из вашего региона.',
    ],
  },
];

export const Works = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (sliders.length) {
      setScrollSnaps(sliders.map((_, index) => index));
    }
  }, [sliders]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (api) api.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    if (api) {
      setScrollSnaps(api.scrollSnapList());
      api.on('select', () => setSelectedIndex(api.selectedScrollSnap()));
    }
  }, [api]);

  if (!sliders.length) {
    return null;
  }

  return (
    <section
      id={IDs.WORKS}
      className="rounded-30 bg-muted m-auto mt-30 max-w-[1780px] px-37.5 py-20"
    >
      <Carousel
        plugins={[Autoplay({ playOnInit: true, delay: 10000 })]}
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent>
          {sliders.map((slider) => (
            <CarouselItem
              key={slider.id}
              className="flex w-full flex-col items-center gap-21.5"
            >
              <h2 className="font-montserrat text-5xl/[52px] font-bold">
                {slider.title}
              </h2>
              <div className="flex w-full items-start justify-between gap-22.5">
                <div className="flex w-full max-w-[659px] flex-col gap-7.5">
                  <div className="flex items-center justify-start gap-10">
                    <span className="font-montserrat text-[80px]/[80px] font-bold">
                      {slider.id}
                    </span>
                    <Image
                      src={slider.image}
                      alt={slider.description}
                      width={72}
                      height={72}
                    />
                  </div>
                  <h3 className="font-montserrat text-5xl/[52px] font-bold">
                    {slider.description}
                  </h3>
                </div>

                <ul className="flex w-full max-w-[730px] flex-col gap-5">
                  {slider.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-2xl">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-4 pt-15">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              isActive={index === selectedIndex}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};
