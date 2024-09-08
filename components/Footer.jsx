import ChurchWorldMark from '@/assets/ChurchOfJesusChristWorldMark.svg';

export default function Footer() {
	return (
		<footer className="container mx-auto px-4 border-t dark:border-slate-600 border-slate-400">
			<div className="flex flex-col md:flex-row items-center justify-between py-8">
				<ChurchWorldMark className="h-20" />
				<p className="text-sm text-gray-500 text-balance text-center">
					This website <span className="underline font-bold"> is not </span> an official website of The Church of Jesus Christ of Latter-day Saints.
				</p>
			</div>
		</footer>
	);
}
