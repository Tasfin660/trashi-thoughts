import { Suspense } from 'react'

import Loader from '@/app/_components/Loader'
import ThoughtsList from '@/app/_components/ThoughtsList'

export default function Thoughts() {
	return (
		<ul className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-12 max-[1280px]:gap-8 max-[425px]:grid-cols-1">
			<Suspense fallback={<Loader />}>
				<ThoughtsList />
			</Suspense>
		</ul>
	)
}
