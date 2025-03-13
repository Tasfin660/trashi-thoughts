import Image from 'next/image'

import logo from '@/app/_icons/logo.svg'

import CreateThought from '@/app/_components/CreateThought'

export default function Header() {
	return (
		<header className="to-primary-600/40 via-primary-600/10 flex flex-col items-center gap-6 bg-gradient-to-b from-white py-16 max-[1024px]:gap-8 max-[768px]:w-full max-[768px]:px-8">
			<Image src={logo} alt="website logo" className="size-40" />
			<h1 className="mb-3 max-[1024px]:w-xl max-[1024px]:text-center max-[640px]:w-full">
				<span className="to-primary-600 from-primary-400 via-primary-300 bg-gradient-to-b bg-clip-text text-5xl font-bold text-transparent max-[640px]:text-3xl">
					Your Trashiest Shower Thoughts Online
				</span>
			</h1>
			<CreateThought />
		</header>
	)
}
