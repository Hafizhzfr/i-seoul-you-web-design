import PropTypes from 'prop-types';

const ContactItem = ({ data }) => {
  const { name, phoneNumber } = data;
  return (
    <li>
      <span className="name">{name}</span>
      {' '}
      :
      {' '}
      <span className="phone-number">{phoneNumber}</span>
    </li>

  );
};

ContactItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired
  }).isRequired
};

export default ContactItem;
