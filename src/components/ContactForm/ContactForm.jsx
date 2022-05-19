import React, { useEffect, useState } from 'react';
import { ContactFormSubmitButton, AddContactForm } from './ContactForm.styled';
import { useCreateContactMutation, useGetContactsQuery } from 'redux/contactsApi';

export const ContactForm = () => {

  const [createContact] = useCreateContactMutation();
  const {data} = useGetContactsQuery();

  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const [isDisabled, toggleDisbled] = useState(true);

  useEffect(() => {
    if (name.length > 0 && phone.length > 0) {
      toggleDisbled(false)
    } else {
      toggleDisbled(true)
    }
  }, [name, phone])

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

    let findedName = data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    let findedNumber = data.find(contact => contact.phone === phone)
    if (findedName) {
      return alert(`${name} is already in contacts.`);
    } else if (findedNumber) {
      return alert(`${phone} is already in contacts.`);
    }

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

