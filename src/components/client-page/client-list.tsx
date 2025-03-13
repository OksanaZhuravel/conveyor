import Image from 'next/image'

const clientLogos = [
	{ src: '/client-logo/1.png', alt: 'Skoda', width: 298, height: 71 },
	{ src: '/client-logo/2.png', alt: 'Skillbox', width: 234, height: 50 },
	{ src: '/client-logo/3.png', alt: 'WorldClass', width: 250, height: 71 },
	{ src: '/client-logo/4.png', alt: 'Абсолют банк', width: 230, height: 69 },
]

export const ClientList = () => {
	return (
		<div className='flex flex-wrap gap-4'>
			{clientLogos.map((logo, index) => (
				<div
					key={index}
					className='flex items-center bg-muted rounded-30 justify-center w-[430px] h-[200px]'
				>
					<Image
						src={logo.src}
						alt={logo.alt}
						width={logo.width}
						height={logo.height}
					/>
				</div>
			))}
		</div>
	)
}
