import Image from 'next/image'

import thinking from '@/app/_icons/thinking.svg'

import OptimisticThoughts from '@/app/_components/OptimisticThoughts'

import { getThoughts } from '@/app/actions'

export default async function ThoughtsList() {
	// controlling caching on individual fetch requests, or to opt out `fetch('-', { cache: 'no-store' })`
	/*
	const res = await fetch('http://localhost:3000/api/thoughts', {
		next: { revalidate: <time> }
		})
		const thoughts = await res.json()
		*/
	// to control cache on server components, if we write 'unstable_noStore()' it will opt out of caching
	// unstable_noStore()
	const { data: thoughts, error } = await getThoughts()

	if (error) throw new Error(error)

	if (thoughts.length === 0)
		return (
			<div className="col-span-full -mt-7 -mb-4 flex flex-col items-center gap-3">
				<Image src={thinking} alt="no thought found" className="size-24" />
				<p className="text-lg font-medium text-gray-500">No thought found.</p>
			</div>
		)

	return <OptimisticThoughts thoughts={thoughts} />
}
