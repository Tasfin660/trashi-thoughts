/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI)
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env'
	)

let cached = (global as any)._mongoose
if (!cached) cached = (global as any)._mongoose = { conn: null, promise: null }

export default async function connectDB() {
	if (cached.conn) return cached.conn

	cached.promise = mongoose
		.connect(MONGODB_URI, {
			dbName: 'thoughtsDatabase'
		})
		.then((mongoose) => mongoose)

	try {
		cached.conn = await cached.promise
	} catch (error) {
		cached.promise = null
		console.error('MongoDB connection failed.', error)
		throw error
	}

	return cached.conn
}
