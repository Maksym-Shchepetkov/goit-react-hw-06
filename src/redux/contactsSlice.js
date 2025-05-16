import { createSlice } from '@reduxjs/toolkit';
import contacts from '../assets/contact.json';

const initialState = {
  items: contacts,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactReducer = slice.reducer;
