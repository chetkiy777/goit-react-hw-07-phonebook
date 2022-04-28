import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import { ContactFormSubmitButton, AddContactForm } from './ContactForm.styled';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux'
import { setContacts } from 'redux/store';

 

export const ContactForm = ({contacts}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isDisabled, toggleDisbled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    toggleDisbled(false);
    let finder = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (finder) {
      toggleDisbled(true);
      alert(`${name} is already in contacts.`);
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

    dispatch(setContacts(contact));
    console.log(contact)
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
          type="tel"
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

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  addContact: PropTypes.func,
};
