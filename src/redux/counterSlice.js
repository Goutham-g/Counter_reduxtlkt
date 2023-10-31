import { createSlice } from "@reduxjs/toolkit";


// define state
const initialState = {
    value: 0

}
// slice
export const counterSlice = createSlice({
    // slice name, state,reducers
    name: 'counter',
    initialState,
    reducers: {
        //  actions
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        }

    }
}

)
// export actions

export const { increment, decrement, reset } = counterSlice.actions

//export reducer

export default counterSlice.reducer