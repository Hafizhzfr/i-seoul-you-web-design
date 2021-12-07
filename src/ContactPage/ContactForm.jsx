import PropTypes from 'prop-types';
import { useState } from 'react';

const ContactForm = (props) => {
  const { createContact } = props;
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' || phoneNumber === '') {
      return;
    }
    createContact({ name, phoneNumber });
    setName('');
    setPhoneNumber('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Insert New Contact</h2>
      <label htmlFor="name">
        Name :
        <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label htmlFor="phone-number">
        Phone Number :
        <input type="text" id="phone-number" name="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      </label>
      <label htmlFor="submit">
        <input type="submit" value="Submit" id="submit" name="submit" />
      </label>
    </form>
  );
};

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired
};

export default ContactForm;
