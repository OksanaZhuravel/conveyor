'use client';
import { Navigation } from '@/components/navigation/navigation';
import { Button } from '@/components/ui/button';
import { DialogTitle } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MOBILE_WIDTH, Paths } from '@/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Social } from './social';

export const Header = () => {
  const isMobile = useIsMobile(MOBILE_WIDTH);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <header className="bg-foreground rounded-b-30 flex min-h-[82px] w-full items-center justify-between py-1.5 pr-7.5 pl-7.5 xl:pl-17.5">
      <div
        className="cursor-pointer transition-opacity hover:opacity-60"
        onClick={() => {
          router.replace(Paths.BASE);
        }}
      >
        <Image
          src="/logo.png"
          alt="ООО «ДС-ГРУПП»"
          width={251}
          height={70}
          className="h-[40px] w-[140px] lg:h-[70px] lg:w-[251px]"
        />
      </div>
      {!isMobile && (
        <>
          <Navigation className="flex-1 justify-center gap-5 lg:gap-10 xl:gap-15" />
          <Social className="items-center" />
        </>
      )}
      {isMobile && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-8 w-8" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-62 pt-10">
            <DialogTitle>
              <VisuallyHidden>Меню</VisuallyHidden>
            </DialogTitle>

            <Navigation className="flex-col gap-3" />
            <Social className="flex-col-reverse" />
          </SheetContent>
        </Sheet>
      )}
    </header>
  );
};
