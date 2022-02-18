import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

export const Filter = ({ onFilterInput }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    onFilterInput(filter);
  }, [filter]);

  return (
    <div>
      <p className={styles.text}>Find contacts by name</p>
      <input
        name="filter"
        value={filter}
        onChange={e => setFilter(e.currentTarget.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  onInput: PropTypes.func,
};
