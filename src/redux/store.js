import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts-slice';
import { filterReducer } from './filter/reducer';

const rootReducer = combineReducers({
  items: contactsSlice,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
