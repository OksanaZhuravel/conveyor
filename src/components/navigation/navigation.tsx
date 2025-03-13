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
			title: 'Главная',
			url: Paths.BASE,
		},
	]

	return (
		<nav className={cn('flex gap-2 w-full', className)} {...props}>
			{navItems.map((item) => (
				<NavigationLink key={item.url} href={item.url}>
					{item.title}
				</NavigationLink>
			))}
		</nav>
	)
}
