import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid'

type ContactType = {
    id: string,
    firstName: string,
    lastName: string,
    status: string
}

type ContactListType = {
    contactList: ContactType[]
}

const initialState: ContactListType = {
    contactList: [],
};

const contactSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {
        saveContact: (state, action) => {
            const { firstName, lastName, status } = action.payload;
            const newContact: ContactType = {
                firstName,
                lastName,
                status,
                id: uuid()
            }
            state.contactList.push(newContact);
        },
        deleteContact: (state, action) => {
            const id = action.payload;
            const contacts = state.contactList.filter(contact => contact.id !== id);
            state.contactList = contacts;
        },
        updateContact: (state, action) => {
            const updatedContact = action.payload;
            const contactIndex = state.contactList.findIndex(contact => contact.id === updatedContact.id);
            if (contactIndex !== -1) {
                const updatedContacts = [...state.contactList];
                updatedContacts[contactIndex] = updatedContact;
                state.contactList = updatedContacts;
            }
        },

    }
})

const contactReducer = contactSlice.reducer;
export default contactReducer;
export const { saveContact,deleteContact,updateContact } = contactSlice.actions