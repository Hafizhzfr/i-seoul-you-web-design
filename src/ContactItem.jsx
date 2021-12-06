import PropTypes from 'prop-types';

const ContactItem = ({ data }) => {
  const { name, phoneNumber } = data;
  return (
    <li>
      {name}
      {' '}
      :
      {' '}
      {phoneNumber}
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
