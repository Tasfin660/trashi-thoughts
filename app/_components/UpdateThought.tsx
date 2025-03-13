'use client'

import { IThought } from '@/app/_models/thought.models'
import Button from '@/app/_components/Button'
import Spinner from './Spinner'
import { useFormStatus } from 'react-dom'
import { deleteThought, updateThought } from '../actions'
import toast from 'react-hot-toast'

export default function UpdateThought({
	data,
	closeModal
}: {
	data: IThought
	closeModal: () => void
}) {
	const { title, thought } = data

	async function handleSubmit(formData: FormData) {
		const { success, message } = await updateThought(formData)

		if (success) {
			closeModal()
			toast.success(message)
		} else toast.error(message)
	}

	async function handleDelete() {
		const { success, message } = await deleteThought(title)

		if (success) toast.success(message)
		else toast.error(message)

		closeModal()
	}

	return (
		<form action={handleSubmit} className="flex flex-col items-center gap-3">
			<h3 className="text-primary-700 font-semibold">{title}</h3>
			<input type="hidden" name="title" value={title} />
			<input type="hidden" name="prev" value={thought} />
			<textarea
				name="thought"
				placeholder="Your thoughts..."
				defaultValue={thought}
				className="border-primary-200/80 focus:border-primary-500/60 h-40 w-2xl resize-none rounded-lg border bg-white px-4 py-3 text-sm transition"
			/>
			<div className="mt-4 mb-2 flex space-x-5">
				<Button variant="danger" onClick={async () => handleDelete()}>
					Delete
				</Button>
				<SubmitButton />
			</div>
		</form>
	)
}

function SubmitButton() {
	const { pending } = useFormStatus()

	return (
		<Button type="submit" disabled={pending}>
			{pending ? (
				<>
					<Spinner /> Updating...
				</>
			) : (
				'Update'
			)}
		</Button>
	)
}
