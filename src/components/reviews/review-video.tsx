import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const ReviewVideo = () => {
  return (
    <div className="relative h-full max-h-[320px] max-w-[580px] basis-1/3">
      <video
        className="rounded-30 h-full max-h-[320px] w-full max-w-[580px]"
        controls
      >
        <source src="/video.mp4" type="video/mp4" width={580} height={320} />
      </video>
      <Button className="absolute top-1/2 left-1/2 z-10 -translate-1/2 bg-transparent hover:scale-105 hover:bg-transparent active:bg-transparent">
        <Image src="/videoButton.svg" alt="Видео" width={70} height={70} />
      </Button>
      <div className="pt-3 text-2xl">
        Отзыв: <span className="text-2xl">название</span>
      </div>
    </div>
  );
};
