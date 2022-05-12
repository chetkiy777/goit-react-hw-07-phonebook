import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer
    }
})

export const persistor = persistStore(store)