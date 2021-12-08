import axios from 'axios';
import { useState, useEffect } from 'react';
import ContactList from '../ContactPage/ContactList';

const HomePage = () => {
  const [lastContacts, setLastContacts] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get('http://localhost:3001/contacts?_sort=id&_limit=2&_order=desc');
    setLastContacts(data);
  }, []);

  return (
    <div className="home-page">
      <h1>Hello Trainess</h1>
      <ContactList data={lastContacts} title="You recently added :" />
    </div>
  );
};

export default HomePage;
