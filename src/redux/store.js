import { configureStore, createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
    name: 'myValue',
    initialState: 0,
    reducers: {
        incrementValue(state, action) {
            return state + action.payload;
        },
        decrementValue(state, action) {
            return state - action.payload;
        }
    }
})

export const {incrementValue, decrementValue} = mySlice.actions;


export const store = configureStore({
    reducer: {
        myValue: mySlice.reducer
    }
})