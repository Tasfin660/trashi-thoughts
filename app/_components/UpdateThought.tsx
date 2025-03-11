'use client'

import Thought from '@/app/_types/Thought'
import Button from './Button'

export default function UpdateThought({ data }: { data: Thought }) {
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
			<div className="mt-4 mb-2 space-x-5">
				<Button type="danger">Delete</Button>
				<Button>Update</Button>
			</div>
		</form>
	)
}
