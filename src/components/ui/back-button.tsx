'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export const BackButton = () => {
	const router = useRouter()

	return (
		<Button size={'lg'} onClick={() => router.back()}>
			Назад
		</Button>
	)
}
