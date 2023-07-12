import { todo } from "@/app/types/todo";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: todo[] = [] 

export const todoListSlice = createSlice({
	name: "todoList",
	initialState: { 
        todos: initialState as todo[]
    },
    reducers: { 
        addNewTodo: (state, action: PayloadAction<todo>) => { 
            state.todos.push(action.payload); 
        }, 
        completeById: (state, action: PayloadAction<{id: string, isDone: boolean}>) => { 
            const filteredList: todo[] = state.todos.filter(el => el.id == action.payload.id); 
            const todo = filteredList[0]; 
            todo.isDone = action.payload.isDone; 
        }, 
        deleteTodoById: (state, action: PayloadAction<string>) => { 
            let copy = state.todos
            const filteredTodos = copy.filter(el => el.id != action.payload); 
            state.todos = [...filteredTodos]; 
        }
    }
});

// exporting actions 
export const { addNewTodo, completeById, deleteTodoById } = todoListSlice.actions; 

export default todoListSlice.reducer; 
