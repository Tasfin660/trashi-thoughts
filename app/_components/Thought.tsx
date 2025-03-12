'use client'
import Image from 'next/image'

import click from '@/app/_icons/click.svg'

import Modal from '@/app/_components/Modal'
import UpdateThought from '@/app/_components/UpdateThought'

import { IThought } from '@/app/_models/thought.models'

interface ThoughtProps {
	data: IThought
	i: number
}

export default function Thought({ data, i }: ThoughtProps) {
	const { title, thought } = data

	return (
		<li className="card relative flex flex-col space-y-1 rounded-lg bg-white px-3 py-2">
			<Modal>
				<Modal.Action>
					<button className="flex items-center gap-1.5">
						<h3 className="text-primary-700 font-medium">{title}</h3>
						<Image
							src={click}
							alt="click icon"
							className="text-primary-500 size-5 -translate-y-0.5"
						/>
					</button>
				</Modal.Action>
				<p className="line-clamp-2 grow text-justify text-sm break-all">
					{thought}
				</p>
				<p className="text-primary-600 self-end rounded-full bg-gradient-to-br font-medium">
					#{i}
				</p>
				<Modal.Content>
					<UpdateThought data={data} />
				</Modal.Content>
			</Modal>
		</li>
	)
}
