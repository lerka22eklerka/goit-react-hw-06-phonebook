import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Section } from "./Section/Section";
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

const initialState = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? initialState
  );
  const [filter, setFilter] = useState('');


  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = contact => {
    console.log('new submit');
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
     return alert(contact.name + ' is already in contacts!');
    }
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={handleFormSubmit} />
      </Section>
      <Section title={'Contacts'}>
        <Filter filter={filter} onFilterChange={handleFilterChange} />
        <ContactList
          contacts={filterContacts()}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
    </>
  );
};
