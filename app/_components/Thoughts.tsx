import { Suspense } from 'react'

import Loader from '@/app/_components/Loader'
import ThoughtsList from '@/app/_components/ThoughtsList'

export default function Thoughts() {
	return (
		<ul className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-12">
			<Suspense fallback={<Loader />}>
				<ThoughtsList />
			</Suspense>
		</ul>
	)
}
