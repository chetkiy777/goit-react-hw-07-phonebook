import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Contacts = ({ contacts, filter, filtered, deleteItem }) => {
  let rendered = filter === '' ? contacts : filtered();
  return (
    <ul className={styles.contactsList}>
      {rendered.map(({ name, id, number }) => (
        <li className={styles.listItem} key={id} id={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button onClick={e => deleteItem(e)}>delete</button>
        </li>
      ))}
    </ul>
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
