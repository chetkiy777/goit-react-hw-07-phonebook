import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FilteredBlock } from './Filter.styled';

export const Filter = ({ onFilterInput }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    onFilterInput(filter);
  }, [filter, onFilterInput]);

  return (
    <div>
      <FilteredBlock>Find contacts by name</FilteredBlock>
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
