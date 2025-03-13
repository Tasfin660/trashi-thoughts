import Thoughts from '@/app/_components/Thoughts'

// this line here controls how caching will work on this page, or to opt out put 0, or 'force-dynamic'
// export const revalidate = <time>

export default function Page() {
	return (
		<section className="border-t-primary-500 mx-auto w-full max-w-7xl border-t-2 px-6 py-16">
			<Thoughts />
		</section>
	)
}
