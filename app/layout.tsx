import type { Metadata } from 'next'
import { Sen } from 'next/font/google'

import About from '@/app/_components/About'
import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import HotToast from '@/app/_components/HotToast'

import '@/app/_styles/globals.css'

const sen = Sen({
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Shower Thoughts - App',
	description: 'Your Trashiest Shower Thoughts Online'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${sen.className} grid min-h-dvh grid-rows-[max-content_max-content_1fr_max-content] text-gray-700`}>
				<Header />
				<About />
				{children}
				<Footer />
				<HotToast />
			</body>
		</html>
	)
}
