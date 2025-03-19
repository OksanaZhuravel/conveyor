import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui/title';
import Image from 'next/image';

export const Additionally = () => {
  return (
    <div className="w-full pt-33">
      <Title title="Дополнительные услуги" />
      <div className="flex items-center justify-center gap-5 pt-5">
        <article className="rounded-30 bg-muted flex h-full min-h-[330px] w-full max-w-[730px] flex-col justify-between p-10">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-5">
              <p className="font-montserrat max-w-[336px] text-4xl font-bold">
                Создание промо-страницы
              </p>
              <p className="font-montserrat text-2xl">
                от
                <span
                  className="font-montserrat ml-3.5 bg-clip-text text-4xl font-bold text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #FF6600 0%, #F26659 27%, #F06177 37%, #E55D97 48%, #CA46D2 71%, #8D13F9 100%)',
                  }}
                >
                  15 000 ₽
                </span>
              </p>
            </div>
            <Image src="/starIcon.svg" alt="Звезда" width={48} height={48} />
          </div>

          <Button className="uppercase">Купить</Button>
        </article>
        <article className="rounded-30 bg-muted flex h-full min-h-[330px] w-full max-w-[730px] flex-col justify-between p-10">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-5">
              <p className="font-montserrat max-w-[556px] text-4xl font-bold">
                Настройка и ведение Яндекс.Директ
              </p>
              <p className="font-montserrat text-2xl">
                от
                <span
                  className="font-montserrat ml-3.5 bg-clip-text text-4xl font-bold text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #FF6600 0%, #F26659 27%, #F06177 37%, #E55D97 48%, #CA46D2 71%, #8D13F9 100%)',
                  }}
                >
                  10 000 ₽
                </span>
              </p>
            </div>
            <Image src="/starIcon.svg" alt="Звезда" width={48} height={48} />
          </div>

          <Button className="uppercase">Купить</Button>
        </article>
      </div>
    </div>
  );
};
