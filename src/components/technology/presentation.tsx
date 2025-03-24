import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Presentation = () => {
  return (
    <section className="m-auto mt-10 flex max-w-[1180px] flex-col items-center gap-10 md:mt-20 xl:mt-30">
      <div className="relative">
        <h2 className="font-montserrat text-center font-bold md:text-4xl lg:text-5xl lg:leading-[80px]">
          Мы подготовили для вас видео&nbsp;-&nbsp;презентацию{' '}
          <span className="text-accent font-montserrat font-bold md:text-4xl lg:text-5xl">
            нашей работы
          </span>
        </h2>
        <Image
          src="/video_camera.png"
          alt="Видео"
          width={72}
          height={72}
          className="absolute right-15 bottom-0 hidden md:block lg:h-18 lg:w-18"
        />
      </div>
      <div className="relative h-full max-h-[540px] w-full max-w-[1180px]">
        <video
          className="rounded-30 h-full max-h-[540px] w-full max-w-[1180px]"
          controls
        >
          <source src="/video.mp4" type="video/mp4" width={1180} height={540} />
        </video>
        <Button className="absolute top-1/2 left-1/2 z-10 -translate-1/2 bg-transparent hover:scale-105 hover:bg-transparent active:bg-transparent">
          <Image
            src="/videoButton.svg"
            alt="Видео"
            width={70}
            height={70}
            className="h-6 w-6 lg:h-17.5 lg:w-17.5"
          />
        </Button>
      </div>
    </section>
  );
};
