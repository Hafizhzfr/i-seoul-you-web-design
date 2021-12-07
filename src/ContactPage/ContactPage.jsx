import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './ContactPage.css';
import ContactFilter from './ContactFilter';
import { fetchContacts } from './utils';

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filterKeyword: ''
    };
  }

  async componentDidMount() {
    const { data } = await fetchContacts();
    this.setState({ contacts: data });
  }

  createContact = (contact) => {
    const { contacts } = this.state;
    const INCREMENT = 1;
    const generateId = () => contacts.length + INCREMENT;
    const newContact = { ...contact, id: generateId() };
    this.setState(
      { contacts: [...contacts, newContact] }
    );
  }

  filterChange = (event) => {
    this.setState({ filterKeyword: event.target.value.toLowerCase() });
  }

  render() {
    const { contacts, filterKeyword } = this.state;
    let filteredContacts = contacts;
    if (filterKeyword !== '') {
      filteredContacts = contacts.filter(
        (item) => (item.name?.toLowerCase().includes(filterKeyword))
      );
    }
    return (
      <div>
        <ContactForm createContact={this.createContact} />
        <ContactFilter onChange={this.filterChange} />
        <ContactList data={filteredContacts} />
      </div>
    );
  }
}
