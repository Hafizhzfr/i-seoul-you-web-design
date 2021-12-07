import PropTypes from 'prop-types';

const ContactFilter = ({ onChange }) => (

  <div className="contact-filter">
    <label htmlFor="filter">
      Filter:
      <input type="text" id="filter" name="filter" onChange={onChange} />
    </label>
  </div>
);

ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default ContactFilter;
