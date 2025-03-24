import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Title } from '@/components/ui/title';
import Image from 'next/image';

export const Answers = () => {
  return (
    <section className="m-auto w-full max-w-[1780px] pt-10 md:pt-20 xl:pt-30">
      <div className="flex flex-col items-center pb-5 md:pb-15">
        <Title title="Вопросы и ответы" />
      </div>
      <div className="flex items-start justify-between">
        <Accordion
          type="single"
          collapsible
          className="flex w-1/2 flex-col gap-5"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              На сколько это безопасно, законно и может ли навредить моему
              сайту?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mt-2 text-2xl">
                Происходит обработка обезличенных данных (cookies). Cookies -
                маленький фрагмент данных, который сохраняется в браузере и
                передается при обращению к сайтам.
              </p>
              <p className="mt-2 text-2xl">
                Вы можете разместить в политике конфиденциальности условия с
                согласием на передачу и обработку cookies посетителями вашего
                сайта. Таким образом, это гарантирует полную легальность работы
                с данными.
              </p>
              <p className="text-2xl">
                Для сайта это не может навредить, и санкций со стороны поисковых
                системы (Яндекс, Google) нет.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Откуда берутся номера телефонов?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-2xl">
                Происходит обработка обезличенных данных (cookies). Cookies -
                маленький фрагмент данных, который сохраняется в браузере и
                передается при обращению к сайтам.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Смогу ли я сам установить код на сайт?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-2xl">
                Происходит обработка обезличенных данных (cookies). Cookies -
                маленький фрагмент данных, который сохраняется в браузере и
                передается при обращению к сайтам.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              На какую CMS или конструктор можно установить код «Лид Конвейер»?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-2xl">
                Происходит обработка обезличенных данных (cookies). Cookies -
                маленький фрагмент данных, который сохраняется в браузере и
                передается при обращению к сайтам.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Как оплатить ваш сервис?</AccordionTrigger>
            <AccordionContent>
              <p className="text-2xl">
                Оплата производится на сайте через платежный сервис
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Image
          src="/answer.png"
          alt="Девушка с ноутбуком"
          width={879}
          height={581}
          className="w-1/2 max-w-[879px]"
        />
      </div>
    </section>
  );
};
