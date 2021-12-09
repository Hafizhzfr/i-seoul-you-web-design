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
        data={lastContacts} // what do u want to render
        renderItem={(data) => ( // how u render it
          <ContactItem data={data} />
        )}
        keyExtractor={(data) => data.id}
      />
    </div>
  );
};

export default HomePage;
