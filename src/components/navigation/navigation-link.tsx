'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ComponentProps } from 'react'

export default function NavigationLink({
	href,
	...rest
}: ComponentProps<typeof Link>) {
	const selectedLayoutSegment = useSelectedLayoutSegment()
	const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
	const isActive = pathname === href

	return (
		<Link
			aria-current={isActive ? 'page' : undefined}
			className={cn(
				'inline-block px-6 py-1 md:px-2 transition-colors whitespace-nowrap border-0  rounded-sm ',
				isActive
					? 'text-white bg-linear-65 from-accent to-accent-foreground shadow-sm shadow-accent-foreground'
					: 'text-gray-800 dark:text-gray-300 hover:text-accent-foreground dark:hover:text-accent-foreground '
			)}
			href={href}
			{...rest}
		/>
	)
}
