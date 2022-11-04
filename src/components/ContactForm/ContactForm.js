import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BtnStyled,
  FormStyled,
  Input,
  LabelStyled,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const [userName, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handelChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setUsername(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  // console.log(contacts);
  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.some(contact => {
        return contact.name.userName.toLowerCase() === userName.toLowerCase();
      })
    ) {
      return alert(userName + ' is already in contacts!');
    }

    dispatch(addContact({ userName, number }));
    setUsername('');
    setNumber('');
  };

  return (
    <FormStyled autoComplete="off" onSubmit={handleSubmit}>
      <LabelStyled htmlFor="name">
        Name
        <Input
          onChange={handelChange}
          type="text"
          name="name"
          value={userName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelStyled>
      <LabelStyled htmlFor="number">
        Number
        <Input
          onChange={handelChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?[0-9\s\-\(\)]+"
          title="You can enter only numbers, spaces and symbols. For example +380967775533"
        />
      </LabelStyled>
      <BtnStyled type="submit">Add contact</BtnStyled>
    </FormStyled>
  );
};

ContactForm.propTypes = {
  userName: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;
