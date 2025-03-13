'use client'
import { Paths } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export const Social = () => {
	return (
		<div className='flex items-center gap-3'>
			<Link
				href={Paths.WHATSAPP}
				target='_blank'
				rel='noopener noreferrer'
				className='w-10 h-10 flex items-center justify-center '
			>
				<Image src='/whatsapp.png' alt='Telegram' width={40} height={40} />
			</Link>
			<Link
				href={Paths.TELEGRAM}
				target='_blank'
				rel='noopener noreferrer'
				className='w-10 h-10 flex items-center justify-center '
			>
				<Image src='/telegram.png' alt='Telegram' width={40} height={40} />
			</Link>
			<Link href={Paths.TELEPHONE} className='text-2xl text-background'>
				+7 495 118-32-82
			</Link>
		</div>
	)
}
