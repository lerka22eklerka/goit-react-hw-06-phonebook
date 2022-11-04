import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { BtnDelete, ContactBox, ContactStyled } from './ContactPerson.styled';

export const ContactPerson = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <ContactBox>
        <ContactStyled>{name}: {number}</ContactStyled>
        <BtnDelete onClick={() => dispatch(deleteContact(id))}>Delete</BtnDelete>
      </ContactBox>
    </li>
  );
};

ContactPerson.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};