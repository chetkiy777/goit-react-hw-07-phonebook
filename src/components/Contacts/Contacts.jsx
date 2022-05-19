import { useSelector } from 'react-redux';
import {ContactsList, ContactsItem} from './Contacts.styled';
import {useGetContactsQuery, useDeleteContactMutation} from 'redux/contactsApi';

export const Contacts = () => {

  const {data} = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation()
  const filter = useSelector(state => state.contacts.filter)

  const filtered = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    )
  }; 

  let rendered = filter === '' ? data : filtered();
 
  return (
    <ContactsList>
      {data && rendered.map(({ name, id, phone }) => (
        <ContactsItem key={id} id={id}>
          <span>{name}: </span>
          <span>{phone}</span>
          <button onClick={() => deleteContact(id)}>delete</button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
