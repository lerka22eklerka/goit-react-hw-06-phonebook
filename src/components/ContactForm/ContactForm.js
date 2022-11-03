import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BtnStyled,
  FormStyled,
  Input,
  LabelStyled,
} from './ContactForm.styled';

export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const handelChange = event => {
    const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
  }

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({name, number});
    console.log('new data');
    setName('');
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
            value={name}
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
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};