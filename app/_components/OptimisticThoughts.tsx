'use client'

import { useOptimistic } from 'react'
import toast from 'react-hot-toast'

import Thought from '@/app/_components/Thought'

import { IThought } from '@/app/_models/thought.models'
import { deleteThought } from '@/app/actions'

export default function OptimisticThoughts({
	thoughts
}: {
	thoughts: IThought[]
}) {
	const [optimisticThoughts, optimisticDelete] = useOptimistic(
		thoughts,
		(curThoughts, title) => curThoughts.filter((th) => th.title !== title)
	)

	async function handleDelete(title: string) {
		optimisticDelete(title)
		const { success, message } = await deleteThought(title)

		if (success) toast.success(message)
		else toast.error(message)
	}

	return (
		<>
			{optimisticThoughts.map((th, i) => (
				<Thought data={th} key={th.title} i={i + 1} onDelete={handleDelete} />
			))}
		</>
	)
}
