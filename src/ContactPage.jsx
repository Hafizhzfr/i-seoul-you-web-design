import React from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import './ContactPage.css';

const ContactPage = () => {
  const [contacts, setContacts] = React.useState([
    {
      id: 1,
      name: 'John',
      phoneNumber: '0812'
    },
    {
      id: 2,
      name: 'Bob',
      phoneNumber: '0814'
    }
  ]);

  const handleSubmit = (event, newContact) => {
    event.preventDefault();
    const { name, phoneNumber } = newContact;
    setContacts([...contacts, { id: contacts.length + 1, name, phoneNumber }]);
  };

  return (
    <div className="contact-page">
      <ContactForm handleSubmit={handleSubmit} />
      <ContactList data={contacts} />
    </div>
  );
};

export default ContactPage;
