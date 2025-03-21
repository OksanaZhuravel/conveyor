import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LinkFooterProps {
  links: { href: string; label: string }[];
}

export const LinkFooter = ({ links }: LinkFooterProps) => {
  return (
    <nav className="text-muted-foreground flex flex-wrap justify-center md:pt-5">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={cn('text-sm xl:text-xl', {
            'after:mx-2 after:content-["|"]': index !== links.length - 1,
          })}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
