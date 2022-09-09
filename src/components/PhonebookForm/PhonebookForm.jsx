import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Label, Input, Button } from './PhonebookForm.styled';
import { addContact } from 'redux/contacts/contacts-operations';

export const PhonebookForm =() => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = e => {
    e.target.name === "name" ? setName(e.target.value) : setNumber(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
     dispatch(addContact(contact));
      setName("");
      setNumber("");    
  };
    return (
      <Form action="" onSubmit={formSubmitHandler}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </Label>
        <Label>
            Number
            <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
          </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }