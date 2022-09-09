import { ADD_CONTACT, DELETE_CONTACT, CHANGE_CONTACTS } from './action-types';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(ADD_CONTACT);
export const deleteContact = createAction(DELETE_CONTACT);
export const changeContacts = createAction(CHANGE_CONTACTS);
