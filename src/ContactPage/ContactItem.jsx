import PropTypes from 'prop-types';

const ContactItem = ({ data }) => {
  const { name, phoneNumber } = data;
  return (
    <>
      <span className="name">{name}</span>
      {' '}
      :
      {' '}
      <span className="phone-number">{phoneNumber}</span>
    </>
  );
};

// data memiliki isi berupa name dan phoneNumber, ditentukan melalui shape
ContactItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired
  }).isRequired
};

export default ContactItem;
