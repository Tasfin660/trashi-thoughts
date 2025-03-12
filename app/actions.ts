'use server'

import connectDB from '@/app/_lib/mongodb'

import { IThought, Thought } from '@/app/_models/thought.models'

export async function getUsers(): Promise<{
	success: boolean
	data: IThought[]
}> {
	try {
		await connectDB()
		const thoughts: IThought[] = (await Thought.find({})).map((th) => ({
			...th.toObject(),
			_id: th._id.toString()
		}))
		return { success: true, data: thoughts }
	} catch (error) {
		if (error instanceof Error)
			console.error('Error fetching thoughts', error.message)
		return { success: false, data: [] }
	}
}
