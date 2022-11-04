// import PropTypes from 'prop-types';
import { ContactPerson } from "components/ContactPerson/ContactPerson";
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter, getItems } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);

  // const filterContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  // const contactsList = filterContacts();

    return (
      <List>
        {filterContacts.map(({ id, name, number }) => (
          <ContactPerson key={id} id={id} name={name} number={number} />
        ))}
      </List>
    );
}

