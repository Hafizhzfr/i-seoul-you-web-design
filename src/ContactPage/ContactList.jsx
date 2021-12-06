import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = (props) => {
  const { data } = props;
  return (
    <div>
      <h3>list of contact</h3>
      <ul>
        {data?.map((contact) => (
          <ContactItem key={contact.id} data={contact} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired
  })).isRequired
};

export default ContactList;
