import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export const ContactForm = props => {
  const [name, changeName] = useState('');
  const [number, changeNumber] = useState('');
  const [isDisabled, toggleDisbled] = useState(false);

  useEffect(() => {
    toggleDisbled(false);
    let finder = props.contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (finder) {
      toggleDisbled(true);
      alert(`${name} is already in contacts.`);
    }
  }, [name, number]);

  const resetForm = () => {
    changeName('');
    changeNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    props.addContact(contact);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => changeName(e.currentTarget.value)}
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
          onChange={e => changeNumber(e.currentTarget.value)}
        />
      </label>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={isDisabled}
      >
        add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  addContact: PropTypes.func,
};
