import React from 'react';
import { AppWrapper } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  return (
    <AppWrapper>
      <h1>Phonebook</h1>
      <ContactForm />

      <h1>Contacts</h1>
      <Filter />

      <Contacts/>
    </AppWrapper>
  );
};
