'use client'

import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

import Button from '@/app/_components/Button'
import Spinner from '@/app/_components/Spinner'

import { createThought } from '@/app/actions'

export default function CreateThought() {
	async function handleSubmit(formData: FormData) {
		const { success, message } = await createThought(formData)

		if (success) toast.success(message)
		else toast.error(message)
	}

	return (
		<form action={handleSubmit} className="contents">
			<input
				type="text"
				name="title"
				placeholder="Title"
				className="border-primary-200/80 focus:border-primary-500/60 -mb-2 h-12 w-2xl resize-none rounded-md border bg-white px-4 py-3 text-sm transition max-[768px]:w-full"
			/>
			<textarea
				name="thought"
				placeholder="Your thoughts..."
				className="border-primary-200/80 focus:border-primary-500/60 h-40 w-2xl resize-none rounded-lg border bg-white px-4 py-3 text-sm transition max-[768px]:w-full"
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
