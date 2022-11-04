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
console.log(contacts);
  const filterContacts = contacts.filter(contact => {
     console.log(contact);
    const { userName } = contact.name;
  console.log(contact.name);
   return userName.toLowerCase().includes(filter.toLowerCase());
  });
      
  
  // const contactsList = filterContacts();

    return (
      <List>
        {filterContacts.map(contact => (
          <ContactPerson key={contact.id} id={contact.id } contact={contact.name} />
        ))}
      </List>
    );
}

export default ContactList;