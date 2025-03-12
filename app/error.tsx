'use client'

import Button from './_components/Button'

interface ErrorProps {
	error: Error & { digest?: string }
	reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
	return (
		<div className="flex w-full flex-col items-center pb-16">
			<p className="text-lg font-medium text-amber-500">
				Something went wrong.
			</p>
			<p className="mt-4 mb-8">
				<b>Message:</b> {error.message}
			</p>
			<Button onClick={() => reset()}>Reload</Button>
		</div>
	)
}
