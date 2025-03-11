import forum from '@/app/_icons/forum.svg'
import shower from '@/app/_icons/shower.svg'
import thought from '@/app/_icons/thought.svg'

import Image from 'next/image'

export default function About() {
	return (
		<section className="flex items-center justify-center gap-12 py-16">
			<div className="border-primary-200/60 w-3xs space-y-2 rounded-2xl border p-4 shadow-sm">
				<Image src={shower} alt="shower logo" className="size-8" />
				<h2 className="text-primary-600 text-lg font-medium">Go to shower</h2>
				<p className="text-sm">
					Always takes a shower, take your time, build your thoughts.
				</p>
			</div>
			<div className="border-primary-200/60 w-3xs space-y-2 rounded-2xl border p-4 shadow-sm">
				<Image src={thought} alt="thought logo" className="size-8" />
				<h2 className="text-primary-600 text-lg font-medium">
					Pick your thoughts
				</h2>
				<p className="text-sm">
					Think stupid, be random and make it interesting.
				</p>
			</div>
			<div className="border-primary-200/60 w-3xs space-y-2 rounded-2xl border p-4 shadow-sm">
				<Image src={forum} alt="forum logo" className="size-8" />
				<h2 className="text-primary-600 text-lg font-medium">Post it online</h2>
				<p className="text-sm">
					Come here, post it and share your thought global.
				</p>
			</div>
		</section>
	)
}
