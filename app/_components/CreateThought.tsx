import Button from './Button'

export default function CreateThought() {
	return (
		<form className="contents w-max bg-red-500">
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
