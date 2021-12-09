import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContactItem = ({ data }) => {
  const { id, name, phoneNumber } = data;

  return (
    <>
      <span className="name">{name}</span>
      {' '}
      :
      {' '}
      <span className="phone-number">{phoneNumber}</span>
      <Link to={`/contact/${id}`}>Detail</Link>
    </>
  );
};

// data memiliki isi berupa name dan phoneNumber, ditentukan melalui shape
ContactItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired
  }).isRequired
};

export default ContactItem;
