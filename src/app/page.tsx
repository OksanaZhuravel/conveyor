import { Answer } from '@/components/answer/answer'
import { Client } from '@/components/client-page/client'
import { MainTabs } from '@/components/content-tabs/main-tabs'
import { Pricing } from '@/components/pricing/pricing'
import { Promo } from '@/components/promo/promo'

export default function Home() {
	return (
		<div className='w-full font-[family-name:var(--font-inter)] '>
			<main className='w-full h-full m-auto'>
				<Promo />
				<MainTabs />
				<Pricing />
				<Client />

				<Answer />
			</main>
		</div>
	)
}
