'use client'

import { ReactNode } from 'react'

interface ButtonProps {
	type?: 'button' | 'submit'
	variant?: 'primary' | 'danger'
	onClick?: () => void
	disabled?: boolean
	children: ReactNode
}

export default function Button({
	type = 'button',
	variant = 'primary',
	onClick,
	disabled = false,
	children
}: ButtonProps) {
	const style =
		variant === 'primary'
			? 'hover:bg-primary-500 border-primary-500 text-primary-500 disabled:bg-primary-500/40'
			: 'border-red-500 text-red-500 hover:bg-red-500 disabled:bg-red-500/60'

	return (
		<button
			type={type}
			className={`${style} flex h-14 w-44 items-center justify-center overflow-hidden rounded-lg border bg-white text-lg font-medium transition-all duration-500 hover:rounded-4xl hover:text-white disabled:cursor-auto disabled:rounded-4xl disabled:text-white`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	)
}
