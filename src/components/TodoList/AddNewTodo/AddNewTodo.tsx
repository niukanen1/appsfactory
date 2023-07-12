"use client";
import { addNewTodo } from "@/app/features/todoList/todoListSlice";
import { useAppDispatch } from "@/app/hooks/reduxHooks";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { ChangeEvent, useEffect, useState } from "react";
import {IoAddOutline} from 'react-icons/io5'
export default function AddNewTodo() {
	const dispatch = useAppDispatch();
	const [text, setText] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length > 3) {
            // empty error if text is more than 3 symbols long
            setError(""); 
        } 
		setText(e.currentTarget.value);
	};

	const createNewTodo = () => {

        // checking if text is more than 3 symbols, to not allow user add meaningless/empty todos
        if (text.trim().length <= 3) {
            setError("Todo text is too short..."); 
            return 
        } else { 
            setError("")
        }

        // adding new todo
		dispatch(
			addNewTodo({
				id: Date.now().toString(),
				text: text,
				isDone: false,
			})
		);

        // clearing input field
        setText("");
	};
	const checkError = () => {
		return error != "";
	};

	return (
		<div className="flex flex-col gap-2">
            <ErrorAlert message={error} showAlert={checkError()} />
			<div className={"flex flex-row gap-2 w-full"}>
				
				<input
					className='px-3 py-2 flex-1 w-auto rounded-md bg-gray-200 dark:bg-zinc-900'
					type='text'
					value={text}
					placeholder='Enter your task here'
					onChange={handleChange}
				/>
				<Button isPrimary action={createNewTodo}>
                    Add new Todo 
                    <IoAddOutline size={25}/>
                </Button>
			</div>
		</div>
	);
}
