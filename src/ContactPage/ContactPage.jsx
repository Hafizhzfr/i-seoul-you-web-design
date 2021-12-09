import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementList from '../Components/ElementList';
import ContactFilter from './ContactFilter';
import ContactForm from './ContactForm';
import ContactItem from './ContactItem';
import ErrorMessage from './ErrorMessage';

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  const createContact = async (contact) => {
    const { data } = await axios.post('http://localhost:3001/contacts', contact);
    setContacts([...contacts, data]);
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
    <div className="contact-page" data-testid="contact-page">
      <ContactForm createContact={createContact} />
      <ContactFilter onChange={filterChange} />
      <div className="contact-list">
        <h2>List of Contact</h2>
        {/* ctrl + space for hint */}
        <ElementList
          data={filteredContacts} // what do u want to render
          renderItem={(data) => ( // how u render it
            <ContactItem data={data} />
          )}
          keyExtractor={(data) => data.id}
        />
      </div>
    </div>
  );
};

export default ContactPage;
