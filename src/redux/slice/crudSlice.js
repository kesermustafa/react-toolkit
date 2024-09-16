import {createSlice} from "@reduxjs/toolkit";
import {v4} from "uuid";
import {initialTask} from "../../constans.js";


const crudSlice = createSlice({
    name: "crud",
    initialState: {tasks: initialTask},
    reducers:{
        addTask: (state, action) => {
            action.payload.id = v4();
            // diziye yeni nesneyi ekle
            state.tasks.push(action.payload)
        },

        deleteTask: (state, action) => {
            /*
            const filtered = state.tasks.filter((task) => task.id !== action.payload);
            state.tasks = filtered;
            */
            const index = state.tasks.findIndex((task) => task.id === action.payload);
             state.tasks.splice(index, 1);
        },

        editTask: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            state.tasks.splice(index, 1, action.payload);
        }
    }
});


export default crudSlice.reducer;

export const {addTask, deleteTask, editTask} = crudSlice.actions;