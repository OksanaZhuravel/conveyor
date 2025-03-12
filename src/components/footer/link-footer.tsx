import { cn } from '@/lib/utils'
import Link from 'next/link'

interface LinkFooterProps {
	links: { href: string; label: string }[]
}

export const LinkFooter = ({ links }: LinkFooterProps) => {
	return (
		<nav className='text-muted-foreground pt-5 flex flex-wrap justify-center'>
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					className={cn('text-sm md:text-xl', {
						'after:content-["|"] after:mx-2': index !== links.length - 1,
					})}
				>
					{link.label}
				</Link>
			))}
		</nav>
	)
}
