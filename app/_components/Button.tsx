import { ReactNode } from 'react'

interface ButtonProps {
	type?: 'primary' | 'danger'
	children: ReactNode
}

export default function Button({ type = 'primary', children }: ButtonProps) {
	const style =
		type === 'primary'
			? 'hover:bg-primary-500 border-primary-500 text-primary-500 rounded-lg border bg-white px-14 py-3 text-lg font-medium transition-all duration-500 hover:rounded-4xl hover:text-white'
			: 'hover:bg-red-500 border-red-500 text-red-500 rounded-lg border bg-white px-14 py-3 text-lg font-medium transition-all duration-500 hover:rounded-4xl hover:text-white'

	return <button className={style}>{children}</button>
}
