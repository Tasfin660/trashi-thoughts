'use client'

import { useTransition } from 'react'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

import Button from '@/app/_components/Button'
import Spinner from '@/app/_components/Spinner'

import { IThought } from '@/app/_models/thought.models'
import { updateThought } from '@/app/actions'

export default function UpdateThought({
	data,
	closeModal,
	onDelete
}: {
	data: IThought
	closeModal: () => void
	onDelete: (title: string) => void
}) {
	const { title, thought } = data

	const [, startTransition] = useTransition()

	async function handleSubmit(formData: FormData) {
		const { success, message } = await updateThought(formData)

		if (success) {
			closeModal()
			toast.success(message)
		} else toast.error(message)
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
				className="border-primary-200/80 focus:border-primary-500/60 h-40 w-2xl resize-none rounded-lg border bg-white px-4 py-3 text-sm transition max-[768px]:w-full max-[640px]:h-52"
			/>
			<div className="mt-4 mb-2 flex gap-5 max-[640px]:flex-col">
				<Button
					variant="danger"
					onClick={() =>
						startTransition(() => {
							{
								closeModal()
								onDelete(title)
							}
						})
					}>
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
