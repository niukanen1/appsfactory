import ThemeSwitcher from "../ui/ThemeSwitcher";

export default function Header() {
	return (
		
			<div className={"flex justify-between flex-row px-4 py-3 rounded-lg backdrop:blur-lg bg-white/25 border-[0.5px] border-gray-300 dark:border-gray-600 dark:bg-black my-3"}>
				<p className='font-medium'>Todo App</p>
                <ThemeSwitcher/> 
			</div>
	);
}
