import Button from '@/app/_components/Button'

export default function CreateThought() {
	return (
		<form className="contents w-max bg-red-500">
			<input
				type="text"
				placeholder="Title"
				className="border-primary-200/80 focus:border-primary-500/60 -mb-2 h-12 w-2xl resize-none rounded-md border bg-white px-4 py-3 text-sm transition"
			/>
			<textarea
				name=""
				id=""
				placeholder="Your thoughts..."
				className="border-primary-200/80 focus:border-primary-500/60 h-40 w-2xl resize-none rounded-lg border bg-white px-4 py-3 text-sm transition"
			/>
			<Button>Post</Button>
		</form>
	)
}
