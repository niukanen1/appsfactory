import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./features/todoList/todoListSlice";
import filtersReducer from './features/filters/filtersSlice';

export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
        filters: filtersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch