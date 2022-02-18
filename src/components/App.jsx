import React, { useEffect, useState } from 'react';
import Contacts from './Contacts/Contacts';
import styles from './styles.module.css';
import { Filter } from './Filter/Filter';

import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  let [contacts, setContacts] = useState([]);
  let [filter, setFilter] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('contacts');
    const parsedData = JSON.parse(data);
    if (parsedData) {
      setContacts(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = contact => {
    setContacts([...contacts, contact]);
  };

  const onFilterInput = value => {
    setFilter(value);
  };

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const deleteItem = e => {
    const elemToRemove = e.currentTarget.parentNode.id;
    setContacts(contacts.filter(item => item.id !== elemToRemove));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContacts} contacts={contacts} />

      <h1>Contacts</h1>
      <Filter onFilterInput={onFilterInput} />
      <Contacts
        contacts={contacts}
        filter={filter}
        filtered={filterContact}
        deleteItem={deleteItem}
      />
    </div>
  );
};
