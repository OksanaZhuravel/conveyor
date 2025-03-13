import { Promo } from '@/components/promo/promo'
import { Paths } from '@/constants'

export default function Home() {
	return (
		<div className='w-full h-screen max-h-[calc(100%-312px)]  font-[family-name:var(--font-inter)] '>
			<main className='w-full h-full m-auto'>
				{/* max-w-[1780px] */}
				<Promo />
				<Promo id={Paths.CONTACT} />
			</main>
		</div>
	)
}
