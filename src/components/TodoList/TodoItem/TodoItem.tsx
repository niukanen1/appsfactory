import { todo } from "@/app/types/todo";
import Box from "@/components/ui/Box";
import { useAppDispatch } from "@/app/hooks/reduxHooks";
import { completeById, deleteTodoById } from "@/app/features/todoList/todoListSlice";
import Status from "./Status/Status";
import { IoTrashBinOutline } from "react-icons/io5";

export default function TodoItem({ todoItem }: { todoItem: todo }) {
	const dispatch = useAppDispatch();
	const handleChange = () => {
		dispatch(completeById({ id: todoItem.id, isDone: !todoItem.isDone }));
	};
    const deleteTodo = () => { 
        dispatch(deleteTodoById(todoItem.id));
    }
	return (
		<div
			className={
				"z-0 p-3 relative rounded-md border-[0.5px] border-gray-300 dark:border-gray-600 " +
				(todoItem.isDone ? "bg-blue-600/30" : "")
			}>
			<div className='flex flex-row items-center gap-3'>
				<input type={"checkbox"} checked={todoItem.isDone} onChange={handleChange} />
				<p className={"flex-1 " + (todoItem.isDone ? "line-through text-zinc-400" : "")}>{todoItem.text}</p>
				<div className='flex flex-col items-end gap-2'>
					<Status isDone={todoItem.isDone} />
					<div onClick={deleteTodo} className="p-2 bg-red-900/20 rounded-md cursor-pointer border-[0.5px] border-red-800">
						<IoTrashBinOutline color='#991b1b' size={15} />
					</div>
				</div>
			</div>
		</div>
	);
}
