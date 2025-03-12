import { NextResponse } from 'next/server'

import { Thought } from '@/app/_models/thought.models'

import connectDB from '@/app/_lib/mongodb'

export async function GET() {
	await connectDB()

	try {
		const thoughts = await Thought.find({})
		return NextResponse.json(thoughts)
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json({ error: error.message })
		else return NextResponse.json({ error: 'An unknown error occurred' })
	}
}
