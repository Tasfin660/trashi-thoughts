'use client'

import Image from 'next/image'
import { Toaster } from 'react-hot-toast'

import check from '@/app/_icons/check.svg'
import error from '@/app/_icons/error.svg'

export default function HotToast() {
	return (
		<Toaster
			position="bottom-center"
			gutter={12}
			toastOptions={{
				success: {
					style: {
						backgroundColor: 'var(--color-primary-700)'
					},
					icon: (
						<Image
							src={check}
							alt="success icon"
							className="-mr-0.5 size-4.5"
						/>
					),
					duration: 3000
				},
				error: {
					style: {
						backgroundColor: 'var(--color-red-600)'
					},
					icon: (
						<Image src={error} alt="error icon" className="-mr-0.5 size-3.5" />
					),
					duration: 5000
				},
				style: {
					color: '#fff',
					fontWeight: '500',
					padding: '0.5rem 1.2rem',
					borderRadius: '100px',
					textWrap: 'nowrap'
				}
			}}
		/>
	)
}
