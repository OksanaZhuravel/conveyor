'use client';
import { Paths } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export const Social = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className={cn('flex gap-3', className)} {...props}>
      <div className="flex gap-3">
        <Link
          href={Paths.WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center transition-all hover:scale-105"
        >
          <Image src="/whatsapp.png" alt="Telegram" width={40} height={40} />
        </Link>
        <Link
          href={Paths.TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center transition-all hover:scale-105"
        >
          <Image src="/telegram.png" alt="Telegram" width={40} height={40} />
        </Link>
      </div>
      <Link href={Paths.TELEPHONE} className="text-background text-2xl">
        +7 495 118-32-82
      </Link>
    </div>
  );
};
