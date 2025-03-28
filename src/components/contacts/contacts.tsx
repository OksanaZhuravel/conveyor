import { IDs, Paths } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export const Contacts = () => {
  return (
    <section
      id={IDs.CONTACT}
      className="bg-muted rounded-30 m-auto my-10 flex h-full max-w-[1780px] flex-col items-center justify-start gap-5 md:my-20 md:flex-row md:gap-10 lg:gap-15 xl:my-30"
    >
      <div className="flex h-full w-full flex-col items-center p-5 md:max-w-1/2 md:pt-20 md:pb-20 md:pl-20">
        <h2 className="font-montserrat text-3xl leading-[80px] font-bold md:text-4xl lg:text-5xl">
          Контакты
        </h2>
        <p className="lg:text-32 text-muted-foreground max-w-[760px] py-5 text-center">
          Есть вопрос, или вы хотите получить бесплатную консультацию? Свяжитесь
          с нами, и мы предоставим необходимую информацию!
        </p>
        <div className="flex w-full flex-col items-start gap-7.5 pt-10">
          <address className="not-italic">
            <p className="lg:text-32 text-muted-foreground">Адрес офиса</p>
            <p className="lg:text-32">г. Москва, ул. Дубининская, д. 53</p>
          </address>
          <div>
            <p className="lg:text-32 text-muted-foreground">Телефон:</p>
            <Link
              href={Paths.TELEPHONE}
              className="lg:text-32 hover:text-accent transition-[color,box-shadow]"
            >
              +7 495 118-32-82
            </Link>
          </div>
          <div>
            <p className="lg:text-32 text-muted-foreground">
              Электронная почта
            </p>
            <Link
              href={Paths.EMAIL}
              className="lg:text-32 hover:text-accent transition-[color,box-shadow]"
            >
              mailbox@leadconveer.ru
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <p className="lg:text-32 text-muted-foreground max-w-[489px]">
              Или напишите нам в любимом мессенджере:
            </p>
            <Link
              href={Paths.TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:text-32 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Image
                src="/telegram.png"
                alt="Telegram"
                width={64}
                height={64}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-start gap-5">
        <Image
          src="/contact.png"
          alt="Здание"
          width={880}
          height={847}
          className="object-cover"
        />
      </div>
    </section>
  );
};
