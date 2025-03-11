'use client'

import Image from 'next/image'
import Thought from '../_types/Thought'
import Button from './Button'
import close from '@/app/_icons/close.svg'

export default function Modal({
	data,
	onHideModal
}: {
	data: Thought
	onHideModal: () => void
}) {
	const { title, thought } = data

	return (
		<div className="bg-primary-500/20 fixed top-0 left-0 z-50 h-screen w-full backdrop-blur-xs transition duration-500">
			<form className="border-primary-200/80 fixed top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-lg border bg-white p-6 shadow-xs">
				<h3 className="text-primary-700 font-semibold">{title}</h3>
				<textarea
					name=""
					id=""
					defaultValue={thought}
					className="border-primary-200/80 focus:border-primary-500/60 h-40 w-2xl resize-none rounded-lg border bg-white px-4 py-3 text-sm transition"
				/>
				<div className="mt-4 mb-2 space-x-5">
					<Button type="danger">Delete</Button>
					<Button>Update</Button>
				</div>
				<button className="absolute top-3 right-2.5" onClick={onHideModal}>
					<Image
						src={close}
						alt="close icon"
						className="size-5 opacity-60 transition hover:opacity-100"
					/>
				</button>
			</form>
		</div>
	)
}
