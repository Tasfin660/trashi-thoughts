'use client'

import Modal from '@/app/_components/Modal'
import click from '@/app/_icons/click.svg'
import type Thought from '@/app/_types/Thought'
import Image from 'next/image'
import { useState } from 'react'

export default function Thought({ data, i }: { data: Thought; i: number }) {
	const [showModal, setShowModal] = useState(false)

	function handleHideModal() {
		setShowModal(false)
	}

	const { title, thought } = data

	return (
		<li className="card relative flex flex-col space-y-1 rounded-lg bg-white px-3 py-2">
			<button
				className="flex items-center gap-1.5"
				onClick={() => setShowModal((showModal) => !showModal)}
			>
				<h3 className="text-primary-700 font-medium">{title}</h3>
				<Image
					src={click}
					alt="click icon"
					className="text-primary-500 size-5 -translate-y-0.5"
				/>
			</button>
			<p className="line-clamp-2 grow text-justify text-sm break-all">
				{thought}
			</p>
			<p className="text-primary-600 self-end rounded-full bg-gradient-to-br font-medium">
				#{i}
			</p>
			{showModal && <Modal data={data} onHideModal={handleHideModal} />}
		</li>
	)
}
