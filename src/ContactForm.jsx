import PropTypes from 'prop-types';
import { useState } from 'react';

const ContactForm = (props) => {
  const { handleSubmit } = props;
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <form className="contact-form" onSubmit={(event) => handleSubmit(event, { name, phoneNumber })}>
      <p>Name</p>
      <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
      <p>Phone number</p>
      <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      <br />
      <br />
      <button type="submit" value="Submit" id="submit" name="submit">Submit</button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default ContactForm;
