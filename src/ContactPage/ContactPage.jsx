import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './ContactPage.css';
import ContactFilter from './ContactFilter';
import { fetchContacts } from './utils';

// class ContactPage extends React.Component {
//   constructor(props) {
//     super(props);
// this.state = {
//   contacts: [],
//   filterKeyword: ''
// };
//   }

//   async componentDidMount() {
// const { data } = await fetchContacts();
// this.setState({ contacts: data });
//   }

// createContact = (contact) => {
//   const { contacts } = this.state;
//   const INCREMENT = 1;
//   const generateId = () => contacts.length + INCREMENT;
//   const newContact = { ...contact, id: generateId() };
//   this.setState(
//     { contacts: [...contacts, newContact] }
//   );
// }

// filterChange = (event) => {
//   this.setState({ filterKeyword: event.target.value.toLowerCase() });
// }

//   render() {
// const { contacts, filterKeyword } = this.state;
// let filteredContacts = contacts;
// if (filterKeyword !== '') {
//   filteredContacts = contacts.filter(
//     (item) => (item.name?.toLowerCase().includes(filterKeyword))
//   );
//     }
const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  const createContact = (event, contact) => {
    event.preventDefault();
    const INCREMENT = 1;
    const generateId = () => contacts.length + INCREMENT;
    const newContact = { ...contact, id: generateId() };
    setContacts([...contacts, newContact]);
  };
  const filterChange = (event) => {
    console.log(event.target.value);
    setFilterKeyword(event.target.value.toLowerCase());
    const newContact = contacts;
    if (filterKeyword !== '') {
      setFilteredContacts(newContact.filter(
        (item) => (item.name?.toLowerCase().includes(filterKeyword))
      ));
    } else {
      setFilteredContacts(newContact);
    }
  };
  useEffect(async () => {
    const { data } = await fetchContacts();
    setContacts(data);
    setFilteredContacts(data);
  }, []);
  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  return (
    <div>
      <ContactForm createContact={createContact} />
      <ContactFilter onChange={filterChange} />
      <ContactList data={filteredContacts} />
    </div>
  );
};

export default ContactPage;
