import { Suspense } from 'react'
import Loader from './Loader'
import ThoughtsList from './ThoughtsList'

export default function Thoughts() {
	return (
		<ul className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-12">
			<Suspense fallback={<Loader />}>
				<ThoughtsList />
			</Suspense>
		</ul>
	)
}
