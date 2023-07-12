export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className='m-auto flex flex-col gap-5 bg-white dark:bg-black max-w-[800px] px-4 py-5 rounded-md border-[0.5px] border-gray-300 dark:border-gray-600 '>
			{children}
		</div>
	);
}
