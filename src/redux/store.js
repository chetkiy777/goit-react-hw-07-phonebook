import { configureStore, createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

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
    initialState: [
        {
            "id": "1",
            "name": "Anna",
            "number": 1111111    
        },
        {
            "id": "2",
            "name": "Igor",
            "number": 2222222    
        },
        
    ],
    reducers: {
        setContacts(state, action) {
            return [...state, action.payload]
        },
        delContact(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        }
    }
})

export const {setContacts, delContact} = contactsSlice.actions;



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