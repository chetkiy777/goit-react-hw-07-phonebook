import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import { ContactFormSubmitButton, AddContactForm } from './ContactForm.styled';
import {useDispatch, useSelector} from 'react-redux'
import { addContacts } from 'redux/store';

export const ContactForm = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isDisabled, toggleDisbled] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items)

  useEffect(() => {
    toggleDisbled(false);
    let findedName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    let findedNumber = contacts.find(contact => contact.number === +number)

    if (findedName) {
      toggleDisbled(true);
      alert(`${name} is already in contacts.`);
    } else if (findedNumber) {
      alert(`${number} is already in contacts.`);
    }
  }, [name, number, contacts]);

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    dispatch(addContacts(contact));
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
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
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

