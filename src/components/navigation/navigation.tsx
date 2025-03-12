'use client'

import { Paths } from '@/constants'
import { cn } from '@/lib/utils'
import NavigationLink from './navigation-link'

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {}

export const Navigation = ({ className }: ComponentProps) => {
	const navItems = [
		{
			title: 'Главная',
			url: Paths.BASE,
		},
	]

	return (
		<nav className={cn('flex gap-2 w-full ', className)}>
			{navItems.map((item) => (
				<NavigationLink key={item.url} href={item.url}>
					{item.title}
				</NavigationLink>
			))}
		</nav>
	)
}
