import { createSlice, nanoid } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
  contacts: [],
  filter: '',
},
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(userName, number) {
        return {
          payload: {
            id: nanoid(),
                name: userName,
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1);
    },
    filterContacts(state, action) {
        state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;