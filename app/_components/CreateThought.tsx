'use client'

import Button from '@/app/_components/Button'
import { createThought } from '@/app/actions'
import { useFormStatus } from 'react-dom'
import Spinner from './Spinner'
import toast from 'react-hot-toast'

export default function CreateThought() {
	async function handleSubmit(formData: FormData) {
		const { success, message } = await createThought(formData)

		if (success) toast.success(message)
		else toast.error(message)
	}

	return (
		<form action={handleSubmit} className="contents w-max bg-red-500">
			<input
				type="text"
				name="title"
				placeholder="Title"
				className="border-primary-200/80 focus:border-primary-500/60 -mb-2 h-12 w-2xl resize-none rounded-md border bg-white px-4 py-3 text-sm transition"
			/>
			<textarea
				name="thought"
				placeholder="Your thoughts..."
				className="border-primary-200/80 focus:border-primary-500/60 h-40 w-2xl resize-none rounded-lg border bg-white px-4 py-3 text-sm transition"
			/>
			<SubmitButton />
		</form>
	)
}

function SubmitButton() {
	const { pending } = useFormStatus()

	return (
		<Button type="submit" disabled={pending}>
			{pending ? (
				<>
					<Spinner /> Posting...
				</>
			) : (
				'Post'
			)}
		</Button>
	)
}
