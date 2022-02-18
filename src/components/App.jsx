import React from 'react';
import Contacts from './Contacts/Contacts';
import styles from './styles.module.css';
import { Filter } from './Filter/Filter';

import { ContactForm } from './ContactForm/ContactForm';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const data = localStorage.getItem('contacts');
    const parsedData = JSON.parse(data);
    if (parsedData) {
      this.setState({ contacts: parsedData });
    }
  }

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filtered = () => {
    return [...this.state.contacts].filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  deleteItem = e => {
    const elemToRemove = e.currentTarget.parentNode.id;
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== elemToRemove),
    });
  };

  componentDidUpdate(prevState, prevProps) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />

        <h1>Contacts</h1>
        <Filter onInput={this.onInput} />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          filtered={this.filtered}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}
