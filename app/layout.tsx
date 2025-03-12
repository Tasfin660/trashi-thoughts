import { Sen } from 'next/font/google'

import type { Metadata } from 'next'

import '@/app/_styles/globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'
import About from './_components/About'

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
				className={`${sen.className} grid min-h-screen grid-rows-[max-content_max-content_1fr_max-content] text-gray-700`}>
				<Header />
				<About />
				{children}
				<Footer />
			</body>
		</html>
	)
}
