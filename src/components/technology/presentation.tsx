import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Presentation = () => {
  return (
    <section className="m-auto mt-30 flex max-w-[1180px] flex-col items-center gap-10">
      <div className="relative">
        <h2 className="font-montserrat text-center text-5xl/[52px] font-bold">
          Мы подготовили для вас видео&nbsp;-&nbsp;презентацию{' '}
          <span className="text-accent font-montserrat text-5xl/[52px] font-bold">
            нашей работы
          </span>
        </h2>
        <Image
          src="/video_camera.png"
          alt="Видео"
          width={72}
          height={72}
          className="absolute right-15 bottom-0"
        />
      </div>
      <div className="relative h-[540px] w-[1180px]">
        <video
          className="rounded-30 h-full max-h-[540px] w-full max-w-[1180px]"
          controls
        >
          <source src="/video.mp4" type="video/mp4" width={1180} height={540} />
        </video>
        <Button className="absolute top-1/2 left-1/2 z-10 -translate-1/2 bg-transparent hover:scale-105 hover:bg-transparent active:bg-transparent">
          <Image src="/videoButton.svg" alt="Видео" width={70} height={70} />
        </Button>
      </div>
    </section>
  );
};
