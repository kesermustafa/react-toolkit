import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice.js";
import crudReducer from "./slice/crudSlice.js";

const store = configureStore({
    reducer: {counterReducer, crudReducer},

})

export default store;