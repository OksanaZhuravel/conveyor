import Image from 'next/image';

const clientLogos = [
  { src: '/client-logo/1.png', alt: 'Skoda', width: 298, height: 71 },
  { src: '/client-logo/2.png', alt: 'Skillbox', width: 234, height: 50 },
  { src: '/client-logo/3.png', alt: 'WorldClass', width: 250, height: 71 },
  { src: '/client-logo/4.png', alt: 'Абсолют банк', width: 230, height: 69 },
];

export const ClientList = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      {clientLogos.map((logo, index) => (
        <div
          key={index}
          className="bg-muted rounded-30 flex h-38 w-75 items-center justify-center shadow-lg md:h-50 md:w-80 2xl:w-107.5"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </div>
      ))}
    </div>
  );
};
