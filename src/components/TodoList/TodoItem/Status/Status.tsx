export type StatusProps = {
	isDone: boolean;
};
export default function Status({ isDone }: StatusProps) {
	if (isDone) {
		return (
			<p
				className={
					"px-3 py-1 text-xs border-[1px] rounded-full dark:text-green-500 text-green-700 border-green-600 dark:border-green-800 bg-green-500/40 dark:bg-green-400/20 "
				}>
				Done
			</p>
		);
	}
	return <div className={
        "px-3 py-1 text-xs border-[1px] rounded-full dark:text-blue-500 text-blue-700 border-blue-600 dark:border-blue-800 bg-blue-500/40 dark:bg-blue-400/20 "
    }>In Progress</div>;
}
