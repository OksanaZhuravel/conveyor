'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ComponentProps, useEffect, useState } from 'react'

export default function NavigationLink({
	href,
	...rest
}: ComponentProps<typeof Link>) {
	const searchParams = useSearchParams()
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		const handleHashChange = () => {
			setIsActive(window.location.hash === href)
		}

		// Проверка при загрузке страницы
		handleHashChange()

		// Добавление обработчика события изменения хеша
		window.addEventListener('hashchange', handleHashChange)

		// Удаление обработчика события при размонтировании компонента
		return () => {
			window.removeEventListener('hashchange', handleHashChange)
		}
	}, [href])

	useEffect(() => {
		setIsActive(window.location.hash === href)
	}, [searchParams, href])

	return (
		<Link
			aria-current={isActive ? 'page' : undefined}
			className={cn(
				'inline-block transition-colors whitespace-nowrap hover:text-disabled',
				isActive ? 'text-accent' : 'text-background'
			)}
			href={href}
			{...rest}
		/>
	)
}
