import Image from 'next/image'

import thinking from '@/app/_icons/thinking.svg'

import Thought from '@/app/_components/Thought'
import { getUsers } from '@/app/actions'

export default async function ThoughtsList() {
	// const res = await fetch('http://localhost:3000/api/thoughts')
	// const thoughts = await res.json()
	const { data: thoughts } = await getUsers()

	if (!thoughts)
		return (
			<div className="col-span-full -mt-7 -mb-4 flex flex-col items-center gap-3">
				<Image src={thinking} alt="no thought found" className="size-24" />
				<p className="text-lg font-medium text-gray-500">No thought found.</p>
			</div>
		)

	return (
		<>
			{thoughts.map((th, i) => (
				<Thought data={th} key={th.title} i={i + 1} />
			))}
		</>
	)
}
