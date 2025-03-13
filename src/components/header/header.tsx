'use client'
import { Navigation } from '@/components/navigation/navigation'
import { Button } from '@/components/ui/button'
import { DialogTitle } from '@/components/ui/dialog'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MOBILE_WIDTH, Paths } from '@/constants'
import { useIsMobile } from '@/hooks/use-mobile'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Header = () => {
	const isMobile = useIsMobile(MOBILE_WIDTH)
	const [isSheetOpen, setIsSheetOpen] = useState(false)
	const pathname = usePathname()

	const router = useRouter()

	useEffect(() => {
		setIsSheetOpen(false)
	}, [pathname])

	return (
		<header className='flex gap-4 w-full items-center justify-start '>
			<div
				className='cursor-pointer hover:opacity-60 flex items-center gap-1.5 flex-1'
				onClick={() => {
					router.replace(Paths.BASE)
				}}
			>
				<Image
					src='/logo.png'
					alt='ООО «ДС-ГРУПП»'
					width={251}
					height={70}
					className='w-auto h-auto '
				/>
			</div>
			{!isMobile && (
				<>
					<Navigation />
				</>
			)}
			{isMobile && (
				<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
					<SheetTrigger asChild>
						<Button variant='outline' size='icon'>
							<Menu className='h-8 w-8' />
						</Button>
					</SheetTrigger>
					<SheetContent side='left' className='w-62 pt-10'>
						<DialogTitle>
							<VisuallyHidden>Меню</VisuallyHidden>
						</DialogTitle>

						<Navigation className='flex-col h-full' />
					</SheetContent>
				</Sheet>
			)}
		</header>
	)
}
