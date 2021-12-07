import PropTypes from 'prop-types';
import { useState } from 'react';

const ContactForm = (props) => {
  const { createContact } = props;
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (

    <form className="contact-form" onSubmit={(event) => createContact(event, { name, phoneNumber })}>
      <p>Name</p>
      <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
      <input type="text" id="phone-number" name="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      <br />
      <br />
      <button type="submit" value="Submit" id="submit" name="submit">Submit</button>
    </form>
  );
};

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired
};

export default ContactForm;
