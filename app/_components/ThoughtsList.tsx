import Thought from '@/app/_components/Thought'
import type ThoughtType from '@/app/_types/Thought'
import thoughtsData from '@/app/_data/data-thoughts.json'
import Image from 'next/image'

import thinking from '@/app/_icons/thinking.svg'

export default async function ThoughtsList() {
	const thoughts: ThoughtType[] = thoughtsData

	if (!thoughts.length)
		return (
			<div className="col-span-full -mt-7 -mb-4 flex flex-col items-center gap-3">
				<Image src={thinking} alt="no thought found" className="size-24" />
				<p className="text-lg font-medium text-gray-500">No thought found.</p>
			</div>
		)

	return (
		<>
			{thoughts.map((th, i) => (
				<Thought data={th} key={i} i={i + 1} />
			))}
		</>
	)
}
