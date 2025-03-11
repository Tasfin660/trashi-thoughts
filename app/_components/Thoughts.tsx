import ThoughtType from '../_types/Thought'
import Thought from './Thought'

import thoughtsData from '@/app/_data/data-thoughts.json'

export default function Thoughts() {
	const thoughts: ThoughtType[] = thoughtsData

	return (
		<ul className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-12">
			{thoughts.map((th, i) => (
				<Thought data={th} key={i} i={i + 1} />
			))}
		</ul>
	)
}
