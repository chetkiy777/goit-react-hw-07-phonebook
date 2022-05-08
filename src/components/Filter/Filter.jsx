import { FilteredBlock } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/store';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter)
  const dispatch = useDispatch()

  return (
    <div>
      <FilteredBlock>Find contacts by name</FilteredBlock>
      <input
        name="filter"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.currentTarget.value))}
      />
    </div>
  );
};
