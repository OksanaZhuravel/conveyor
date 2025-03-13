export interface ContentTabProps {
	title: string
	titleAccent?: string
}

export const Title = ({ title, titleAccent }: ContentTabProps) => {
	return (
		<h2 className='text-5xl flex flex-col font-bold font-montserrat leading-13 items-center pb-5'>
			{title}
			<span className='text-5xl leading-13  font-bold font-montserrat text-accent'>
				{titleAccent}
			</span>
		</h2>
	)
}
