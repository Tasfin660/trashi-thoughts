import Image from 'next/image'

import logo from '@/app/_icons/logo.svg'
import CreateThought from './CreateThought'

export default function Header() {
	return (
		<header className="to-primary-600/30 flex flex-col items-center gap-6 bg-gradient-to-b from-white via-white py-16">
			<Image src={logo} alt="website logo" className="size-40" />
			<h1 className="mb-3">
				<span className="to-primary-600 from-primary-400 via-primary-300 bg-gradient-to-b bg-clip-text text-5xl font-bold text-transparent">
					Your Trashiest Shower Thoughts Online
				</span>
			</h1>
			<CreateThought />
		</header>
	)
}
