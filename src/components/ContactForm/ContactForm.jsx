import React, { useEffect, useState } from 'react';
import { ContactFormSubmitButton, AddContactForm } from './ContactForm.styled';
import {useSelector} from 'react-redux'
import { useCreateContactMutation } from 'redux/contactsApi';

export const ContactForm = () => {

  const [createContact, result] = useCreateContactMutation();

  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const [isDisabled, toggleDisbled] = useState(false);

  const contacts = useSelector(state => state.contacts.items)

  // useEffect(() => {
  //   toggleDisbled(false);
  //   let findedName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
  //   let findedNumber = contacts.find(contact => contact.number === +phone)

  //   if (findedName) {
  //     toggleDisbled(true);
  //     alert(`${name} is already in contacts.`);
  //   } else if (findedNumber) {
  //     alert(`${phone} is already in contacts.`);
  //   }
  // }, [name, phone, contacts]);

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      phone,
    };

    createContact(contact)
    resetForm();
  };

  return (
    <AddContactForm onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
      </label>
      <label>
        Number:
        <input
          type="number"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={e => setNumber(e.currentTarget.value)}
        />
      </label>

      <ContactFormSubmitButton
        type="submit"
        disabled={isDisabled}
      >
        add contact
      </ContactFormSubmitButton>
    </AddContactForm>
  );
};

