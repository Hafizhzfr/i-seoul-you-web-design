import axios from 'axios';
import { useState, useEffect } from 'react';
import ElementList from '../Components/ElementList';
import ContactItem from '../ContactPage/ContactItem';
import './HomePage.css';

const HomePage = () => {
  const [lastContacts, setLastContacts] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get('http://localhost:3001/contacts?_sort=id&_limit=2&_order=desc');
    setLastContacts(data);
  }, []);

  return (
    <div className="home-page">
      <h1>Hello Trainess</h1>
      <h3>you recently added:</h3>
      <ElementList
        data={lastContacts}
        render={(data) => (
          <ContactItem key={data.id} data={data} />
        )}
      />
    </div>
  );
};

export default HomePage;
