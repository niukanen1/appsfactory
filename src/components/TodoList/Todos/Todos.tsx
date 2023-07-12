"use client";

import { useAppSelector } from "@/app/hooks/reduxHooks";
import TodoItem from "../TodoItem/TodoItem";
import { useEffect, useState } from "react";
import { todo } from "@/app/types/todo";

// this component is used to display the list of todos;
export default function Todos() {
	const [sortedTodos, setSortedTodos] = useState<todo[]>([]);
	const todos = useAppSelector((state) => state.todoList.todos);
	const filter = useAppSelector((state) => state.filters.filter);
	useEffect(() => {
		let todosCopy = [...todos];
		switch (filter) {
			case "doneAtTop":
				todosCopy.sort((a, b) => {
					if (a.isDone) {
						return -1;
					}
					if (b.isDone) {
						return 1;
					}
					return 0;
				});
                break
			case "InProgressAtTop":
				todosCopy.sort((a, b) => {
					if (a.isDone) {
						return 1;
					}
					if (b.isDone) {
						return -1;
					}
					return 0;
				});
                break
			case "none":
				setSortedTodos(todos);
		}
		setSortedTodos([...todosCopy]);
	}, [todos, filter]);

	return (
		<>
			<div className='flex flex-col gap-2'>
				{sortedTodos.map((todo) => (
					<TodoItem key={todo.id} todoItem={todo} />
				))}
			</div>
		</>
	);
}
