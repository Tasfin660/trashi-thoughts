import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="flex w-full flex-col items-center gap-8 pb-16">
			<p className="text-lg font-medium text-red-500/80">
				The page you are looking for doesn&apos;t exist. Thanks for using
				TrashiThoughts.
			</p>
			<Link
				href="/"
				className="hover:bg-primary-500 border-primary-500 text-primary-500 rounded-lg border bg-white px-14 py-3 text-lg font-medium transition-all duration-500 hover:rounded-4xl hover:text-white">
				Go back to home page
			</Link>
		</div>
	)
}
