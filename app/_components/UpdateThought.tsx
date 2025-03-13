'use client'

import { IThought } from '@/app/_models/thought.models'
import Button from '@/app/_components/Button'

export default function UpdateThought({ data }: { data: IThought }) {
	const { title, thought } = data

	return (
		<form className="flex flex-col items-center gap-3">
			<h3 className="text-primary-700 font-semibold">{title}</h3>
			<textarea
				name=""
				id=""
				defaultValue={thought}
				className="border-primary-200/80 focus:border-primary-500/60 h-40 w-2xl resize-none rounded-lg border bg-white px-4 py-3 text-sm transition"
			/>
			<div className="mt-4 mb-2 flex space-x-5">
				<Button type="danger" onClick={() => {}}>
					Delete
				</Button>
				<Button onClick={() => {}}>Update</Button>
			</div>
		</form>
	)
}
