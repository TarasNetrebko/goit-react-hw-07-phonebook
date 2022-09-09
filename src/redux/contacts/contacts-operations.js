import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContactToApi,
  deleteContactFromApi,
} from '../../servises/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const isDublicate = ({ name, number }, contacts) => {
  const normalizedName = name.toLowerCase();
  const result = contacts.items.find(contact => {
    return (
      normalizedName === contact.name.toLowerCase() || number === contact.number
    );
  });

  return result;
};

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContactToApi(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(data, contacts.items)) {
        alert(`${data.name} or ${data.number} is alredy exist`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/remove',
  async (contactId, { rejectWithValue }) => {
    try {
      await deleteContactFromApi(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
