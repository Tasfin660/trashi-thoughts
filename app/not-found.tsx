import Link from 'next/link'
import Button from './_components/Button'

export default function NotFound() {
	return (
		<div className="flex w-full flex-col items-center gap-8 pb-16">
			<p className="text-lg font-medium text-red-500/80">
				The page you are looking for doesn&apos;t exist. Thanks for using
				TrashiThoughts.
			</p>
			<Link href="/">
				<Button>Go back to home page</Button>
			</Link>
		</div>
	)
}
