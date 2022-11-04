import { ContactPerson } from "components/ContactPerson/ContactPerson";
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter, getItems } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);

console.log(contacts);
  const filterContacts = contacts.filter(contact => {
    const { userName } = contact.name;
  console.log(contact.name);
   return userName.toLowerCase().includes(filter.toLowerCase());
  });
      
  

    return (
      <List>
        {filterContacts.map(contact => (
          <ContactPerson key={contact.id} id={contact.id } contact={contact.name} />
        ))}
      </List>
    );
}

export default ContactList;