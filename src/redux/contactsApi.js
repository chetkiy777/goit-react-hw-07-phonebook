import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://627d4e2ce5ac2c452a011a33.mockapi.io/contacts/'}),
    tagTypes: ['contact'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => `/contacts/`,
            providesTags: ['contact']
        }),

        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['contact']
        }),

        createContact: builder.mutation({
            query: newContact => ({
                url: '/contacts',
                method: 'POST',
                body: newContact
            }),
            invalidatesTags: ['contact']

            
        })
    })
})

export const {useGetContactsQuery, useDeleteContactMutation, useCreateContactMutation} = contactsApi;