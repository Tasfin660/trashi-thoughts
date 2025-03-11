import Image from 'next/image'
import Link from 'next/link'

import facebook from '@/app/_icons/facebook.svg'
import github from '@/app/_icons/github.svg'
import x from '@/app/_icons/x.svg'

export default function Footer() {
	const socialLinks = [
		{ icon: facebook, url: 'https://facebook.com/tasfin660/' },
		{ icon: github, url: 'https://github.com/Tasfin660/' },
		{ icon: x, url: 'https://x.com/Tasfin660/' }
	]

	return (
		<footer className="bg-primary-900 flex flex-col items-center pt-9 pb-8 text-center font-medium">
			<div className="flex items-center gap-4">
				{socialLinks.map((el) => (
					<Link href={el.url} key={el.url} target="_blank">
						<Image
							src={el.icon}
							alt={`${el.url}`}
							className="bg-primary-600/60 hover:bg-primary-800 box-content size-5 rounded-md p-1.5 shadow-sm transition"
						/>
					</Link>
				))}
			</div>
			<h4 className="text-primary-700 mt-6 mb-3 text-2xl font-semibold">
				TrashiThoughts
			</h4>
			<p className="text-sm text-white">
				Copyright © Tasfin Hasan | Cocoa Insights {new Date().getFullYear()}.
				All Rights Reserved.
			</p>
		</footer>
	)
}
