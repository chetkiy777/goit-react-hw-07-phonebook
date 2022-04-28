import React, { useEffect, useState } from 'react';
import Contacts from './Contacts/Contacts';
import { AppWrapper } from './App.styled';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import {useDispatch, useSelector} from 'react-redux';
import { delContact } from 'redux/store';

export const App = () => {
  // let [contacts, setContacts] = useState([]);

  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch();


  let [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const data = localStorage.getItem('contacts');
  //   const parsedData = JSON.parse(data);
  //   if (parsedData) {
  //     dispatch(() => setContacts(parsedData));
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);


  const deleteItem = e => {
    const elemToRemove = e.currentTarget.parentNode.id;
    dispatch(delContact(elemToRemove));
  };

  const onFilterInput = value => {
    setFilter(value);
  };

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  

  return (
    <AppWrapper>
      <h1>Phonebook</h1>
      <ContactForm  contacts={contacts} />

      <h1>Contacts</h1>
      <Filter onFilterInput={onFilterInput} />
      <Contacts
        contacts={contacts}
        filter={filter}
        filtered={filterContact}
        deleteItem={deleteItem}
      />
    </AppWrapper>
  );
};
