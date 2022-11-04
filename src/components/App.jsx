import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Section } from "./Section/Section";
import { Filter } from './Filter/Filter';
import { useSelector } from "react-redux";


export const App = () => {
const contacts = useSelector(state => state.contacts);
 
  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList
        />
      </Section>
    </>
  );
};
