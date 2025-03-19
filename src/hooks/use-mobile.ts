import { useMediaQuery } from 'usehooks-ts';

export const useIsMobile = (widthMobile: number) => {
  const isMobile = useMediaQuery(`(max-width: ${widthMobile}px)`);

  return isMobile;
};
