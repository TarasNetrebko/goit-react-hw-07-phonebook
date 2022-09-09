import React, { useEffect } from 'react';
import { PhonebookForm } from '../PhonebookForm/PhonebookForm';
import { PhonebookList } from '../PhonebookList/PhonebookList';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selector';
import { getFilter } from 'redux/filter/selector';
import { ContentContainer } from './App.styled';
import { Filter } from '../Filter/Filter';
import { fetchContacts } from 'redux/contacts/contacts-operations';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(()=> {
        dispatch(fetchContacts())
    }, [dispatch]);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return (contact.name.toLowerCase().includes(normalizedFilter) || contact.number.includes(normalizedFilter))
    }      
  );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <ContentContainer>
          <h1>Phonebook</h1>
          <PhonebookForm />
          <h2>Contacts</h2>
          <Filter/>
          <PhonebookList
            contacts={filteredContacts}
          />
        </ContentContainer>
      </div>
    );
  }
