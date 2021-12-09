import PropTypes from 'prop-types';

const ContactItem = (props) => { // ini namanya props
  const { data, onClick } = props;
  const { id, name, phoneNumber } = data;

  return (
    <>
      <span className="name">{name}</span>
      {' '}
      :
      {' '}
      <span className="phone-number">{phoneNumber}</span>
      <button type="button" onClick={() => onClick(id)}>Detail</button>
      {/* 'Detail' --> name */}
      {/* {} dibutuhkan karna kita ingin mengakses variable didalam komponen */}
      {/* ()  */}
    </>
  );
};

// data memiliki isi berupa name dan phoneNumber, ditentukan melalui shape
ContactItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func
};

ContactItem.defaultProps = {
  onClick: undefined
};
export default ContactItem;
