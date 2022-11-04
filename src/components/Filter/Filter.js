import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';
import { InputStyled, Label } from './Filter.styled';

export const Filter = () => {
   const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <InputStyled
        type="text"
        id="filter"
        value={filter}
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </div>
  );
};


Filter.propTypes = {
  filter: PropTypes.string,
};
