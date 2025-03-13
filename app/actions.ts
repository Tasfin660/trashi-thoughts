'use server'

import connectDB from '@/app/_lib/mongodb'

import { IThought, Thought } from '@/app/_models/thought.models'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export async function getThoughts(): Promise<{
	success: boolean
	data: IThought[]
	error: string
}> {
	try {
		await connectDB()
		const thoughts: IThought[] = (await Thought.find({})).map((th) => ({
			...th.toObject(),
			_id: th._id.toString()
		}))

		return { success: true, data: thoughts, error: '' }
	} catch (error) {
		if (error instanceof Error)
			console.error('Error fetching thoughts.', error.message)
		return {
			success: false,
			data: [],
			error: 'Error fetching thoughts. Try again later.'
		}
	}
}

export async function createThought(formData: FormData): Promise<{
	success: boolean
	message: string
}> {
	const schema = z.object({
		title: z.string().min(3).max(150),
		thought: z.string().min(10).max(500)
	})
	const parse = schema.safeParse({
		title: formData.get('title'),
		thought: formData.get('thought')
	})

	if (!parse.success)
		return {
			success: false,
			message: 'Use a proper title and share a good thought'
		}

	const data = parse.data

	try {
		await connectDB()

		const existingThought = await Thought.findOne({ title: data.title })

		if (existingThought)
			return {
				success: false,
				message: `${data.title} already exist. Try something new`
			}

		const newThought = new Thought(data)
		await newThought.save()

		revalidatePath('/')

		return { success: true, message: 'Thought added' }
	} catch (error) {
		if (error instanceof Error)
			console.error('Error creating thought.', error.message)
		return {
			success: false,
			message: 'Error creating thought'
		}
	}
}

export async function updateThought(formData: FormData): Promise<{
	success: boolean
	message: string
}> {
	const schema = z.object({
		title: z.string().min(3).max(150),
		prev: z.string().min(10).max(500),
		thought: z.string().min(10).max(500)
	})
	const parse = schema.safeParse({
		title: formData.get('title'),
		prev: formData.get('prev'),
		thought: formData.get('thought')
	})

	if (!parse.success)
		return {
			success: false,
			message: 'Share a good thought'
		}

	const data = parse.data

	if (data.prev === data.thought)
		return {
			success: false,
			message: 'Update your thought first'
		}

	try {
		await connectDB()

		await Thought.findOneAndUpdate(
			{ title: data.title },
			{
				thought: data.thought
			}
		)

		revalidatePath('/')

		return { success: true, message: 'Thought updated' }
	} catch (error) {
		if (error instanceof Error)
			console.error('Error updating thought.', error.message)
		return {
			success: false,
			message: 'Error updating thought'
		}
	}
}

export async function deleteThought(title: string): Promise<{
	success: boolean
	message: string
}> {
	try {
		await connectDB()
		await Thought.findOneAndDelete({
			title
		})
		revalidatePath('/')

		return {
			success: true,
			message: 'Thought deleted'
		}
	} catch (error) {
		if (error instanceof Error)
			console.error('Error deleting thought.', error.message)
		return {
			success: false,
			message: 'Error deleting thought'
		}
	}
}
