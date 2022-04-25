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

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        setContacts(state, action) {
            return [...state, action.payload]
        }
    }
})

export const {setContacts} = contactsSlice.actions;



const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        
    }
})

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer
    }
})