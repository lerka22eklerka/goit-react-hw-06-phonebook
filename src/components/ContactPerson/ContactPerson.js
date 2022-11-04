import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { BtnDelete, ContactBox, ContactStyled } from './ContactPerson.styled';

export const ContactPerson = ({ id, contact: {userName, number}}) => {
  const dispatch = useDispatch();
  console.log(id);
  console.log(userName);
  return (
    <li>
      <ContactBox>
        <ContactStyled>
          {userName}: {number}
        </ContactStyled>
        <BtnDelete onClick={() => dispatch(deleteContact(id))}>
          Delete
        </BtnDelete>
      </ContactBox>
    </li>
  );
};

ContactPerson.propTypes = {
  id: PropTypes.string.isRequired,
  contacts: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};