import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = (props) => {
  const { data, title } = props;
  return (
    <div className="contact-list">
      <h2>{title}</h2>
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
  })).isRequired,
  title: PropTypes.string.isRequired
};

export default ContactList;
