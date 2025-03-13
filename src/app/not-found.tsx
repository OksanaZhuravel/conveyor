// import { BackButton } from '@/components/ui/back-button'

// export default function NotFoundPage() {
// 	return (
// 		<div className='w-full h-full flex flex-col items-center justify-center space-y-4'>
// 			<h1 className='text-3xl font-semibold leading-tight tracking-tight'>
// 				Страница не найдена
// 			</h1>
// 			<p className='max-w-[460px] text-center'>
// 				Страница, которую вы ищете, не существует.
// 			</p>
// 			<BackButton />
// 		</div>
// 	)
// }
'use client'

import { BackButton } from '@/components/ui/back-button'
import { Suspense } from 'react'

export default function NotFoundPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<NotFoundContent />
		</Suspense>
	)
}

function NotFoundContent() {
	return (
		<div className='w-full h-screen flex flex-col items-center justify-center space-y-4'>
			<h1 className='text-3xl font-semibold leading-tight tracking-tight'>
				Страница не найдена
			</h1>
			<p className='max-w-[460px] text-center'>
				Страница, которую вы ищете, не существует.
			</p>
			<BackButton />
		</div>
	)
}
