import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type filters = "none" | "doneAtTop" | "InProgressAtTop"; 

export const filtersSlice = createSlice({ 
    name: "filters", 
    initialState: { 
        filter: "none" as filters
    },
    reducers: {
        applyFilter: (state, payload: PayloadAction<filters>) => { 
            state.filter = payload.payload; 
        },
    }
})

// exporting actions 
export const { applyFilter } = filtersSlice.actions; 

export default filtersSlice.reducer