import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


// create store
export const store = configureStore({
    reducer: {
        counterReducer: counterSlice
    }
})