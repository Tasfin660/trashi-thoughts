import { Document, model, models, Schema } from 'mongoose'

export interface IThought extends Document {
	readonly title: string
	thought: string
}

const ThoughtSchema: Schema = new Schema<IThought>(
	{
		title: {
			type: String,
			required: true,
			unique: true,
			maxlength: 150
		},
		thought: {
			type: String,
			required: true,
			maxlength: 500
		}
	},
	{
		timestamps: true
	}
)

export const Thought =
	models.Thought || model<IThought>('Thought', ThoughtSchema)
