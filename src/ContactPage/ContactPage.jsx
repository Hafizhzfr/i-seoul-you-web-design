import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import { fetchContacts } from './utils';

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');

  const createContact = (contact) => {
    const generateId = Math.random() * 101;
    const newContact = { ...contact, id: generateId };
    setContacts([...contacts, newContact]);
  };

  const filterChange = (event) => {
    setFilterKeyword(event.target.value.toLowerCase());
  };

  useEffect(async () => {
    const { data } = await fetchContacts();
    setContacts(data);
  }, []);

  let filteredContacts = contacts;
  if (filterKeyword !== '') {
    filteredContacts = contacts.filter(
      (item) => (item.name?.toLowerCase().includes(filterKeyword))
    );
  }

  return (
    <div className="contact-page">
      <ContactForm createContact={createContact} />
      <ContactFilter onChange={filterChange} />
      <ContactList data={filteredContacts} />
    </div>
  );
};

export default ContactPage;
