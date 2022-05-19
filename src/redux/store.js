import { configureStore, createSlice } from "@reduxjs/toolkit"
import { contactsApi } from "./contactsApi"

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [
            {
                "id": "1",
                "name": "Anna",
                "number": 1111111    
             },
            {
                "id": "2",
                "name": "Igor",
                "number": 2222222
            }
        ],
        filter: ''
    },

    reducers: {
        addContacts(state, action) {
            state.items.push(action.payload)
        },
        deleteContact(state, action) {
           return {...state, items: state.items.filter(contact => contact.id !== action.payload)}
        },
        setFilter(state, action) {
           return {...state, filter: action.payload }
        }
    }
})

export const {addContacts, deleteContact, setFilter} = contactsSlice.actions;

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware
    ]
})
