import {createSlice} from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {count: 0},
    reducers: {
        increment: (state, action) => {
            state.count +=1;
        },
        decrement: (state, action) => {
            state.count -=1;
        },

        setCount: (state, action) => {
            state.count = action.payload;
        }
    }
})



export default counterSlice.reducer;

export const {increment, decrement, setCount} = counterSlice.actions;