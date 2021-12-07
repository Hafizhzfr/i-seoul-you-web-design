import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './ContactPage.css';

const dummyContacts = [
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
];

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: dummyContacts };
    this.createContact = this.createContact.bind(this);
  }

  createContact(contact) {
    const { contacts } = this.state;
    const INCREMENT = 1;
    const generateId = () => contacts.length + INCREMENT;
    const newContact = { ...contact, id: generateId() };
    this.setState({ contacts: [...contacts, newContact] });
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <ContactForm createContact={this.createContact} />
        <ContactList data={contacts} />
      </div>
    );
  }
}
