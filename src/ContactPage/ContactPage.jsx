import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import ErrorMessage from './ErrorMessage';

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  const createContact = (contact) => {
    const INCREMENT = 1;
    const generateId = () => contacts.length + INCREMENT;
    const newContact = { ...contact, id: generateId };
    setContacts([...contacts, newContact]);
  };

  const filterChange = (event) => {
    setFilterKeyword(event.target.value.toLowerCase());
  };

  useEffect(async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/contacts');
      setContacts(data);
    } catch (error) {
      setIsSuccess(false);
    }
  }, []);

  let filteredContacts = contacts;
  if (filterKeyword !== '') {
    filteredContacts = contacts.filter(
      (item) => (item.name?.toLowerCase().includes(filterKeyword))
    );
  }

  if (!isSuccess) {
    return <ErrorMessage />;
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
