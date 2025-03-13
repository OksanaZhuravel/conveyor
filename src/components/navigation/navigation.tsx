'use client'

import { Paths } from '@/constants'
import { cn } from '@/lib/utils'
import NavigationLink from './navigation-link'

export const Navigation = ({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) => {
	const navItems = [
		{
			title: 'Как это работает',
			url: Paths.WORKS,
		},
		{
			title: 'Цена',
			url: Paths.PRICING,
		},
		{
			title: 'Отзывы',
			url: Paths.REVIEWS,
		},
		{
			title: 'Контакты',
			url: Paths.CONTACT,
		},
	]

	return (
		<nav className={cn('flex flex-1 gap-[60px] w-full', className)} {...props}>
			{navItems.map((item) => (
				<NavigationLink key={item.title} href={item.url}>
					{item.title}
				</NavigationLink>
			))}
		</nav>
	)
}
