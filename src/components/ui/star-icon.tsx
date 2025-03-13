import { cn } from '@/lib/utils'
import Image from 'next/image'

export const StarIcon = ({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) => {
	return (
		<Image
			src='/starIcon.svg'
			alt='Звезда'
			width={60}
			height={60}
			className={cn('', className)}
			{...props}
		/>
	)
}
