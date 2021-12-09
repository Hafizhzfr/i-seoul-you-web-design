import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ContactDetail = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({});

  useEffect(async () => {
    const { data } = await axios.get(`http://localhost:3001/contacts/${id}`);
    setContact(data);
  }, [id]);

  return (
    <div data-testid="detail-page">
      <h1>
        {contact.name}
      </h1>
      <p>{contact.address}</p>
    </div>
  );
};

export default ContactDetail;
