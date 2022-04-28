import { useDispatch, useSelector } from 'react-redux';
import {ContactsList, ContactsItem} from './Contacts.styled';
import { deleteContact } from 'redux/store';

export const Contacts = () => {

  const contacts = useSelector(state => state.contacts.items)
  const filter = useSelector(state => state.contacts.filter)
  const dispatch = useDispatch()

  const filtered = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    )
  }; 

  let rendered = filter === '' ? contacts : filtered();
 
  return (
    <ContactsList>
      {rendered.map(({ name, id, number }) => (
        <ContactsItem key={id} id={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button onClick={(e) => dispatch(deleteContact(e.currentTarget.parentNode.id))}>delete</button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
