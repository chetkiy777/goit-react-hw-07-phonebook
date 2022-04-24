import PropTypes from 'prop-types';
import {ContactsList, ContactsItem} from './Contacts.styled'

const Contacts = ({ contacts, filter, filtered, deleteItem }) => {
  let rendered = filter === '' ? contacts : filtered();
  return (
    <ContactsList>
      {rendered.map(({ name, id, number }) => (
        <ContactsItem key={id} id={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button onClick={e => deleteItem(e)}>delete</button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filtered: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default Contacts;
