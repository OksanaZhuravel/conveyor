'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ComponentProps, Suspense, useEffect, useState } from 'react';

function NavigationLinkComponent({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const searchParams = useSearchParams();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsActive(window.location.hash === href);
    };

    // Проверка при загрузке страницы
    handleHashChange();

    // Добавление обработчика события изменения хеша
    window.addEventListener('hashchange', handleHashChange);

    // Удаление обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [href]);

  useEffect(() => {
    setIsActive(window.location.hash === href);
  }, [searchParams, href]);

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'hover:text-disabled inline-block text-2xl whitespace-nowrap transition-colors',
        isActive ? 'text-accent' : 'text-background'
      )}
      href={href}
      {...rest}
    />
  );
}

export default function NavigationLink(props: ComponentProps<typeof Link>) {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <NavigationLinkComponent {...props} />
    </Suspense>
  );
}
