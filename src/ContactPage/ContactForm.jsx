import PropTypes from 'prop-types';
import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', phoneNumber: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { createContact } = this.props;
    const { name, phoneNumber } = this.state;
    if (name === '' || phoneNumber === '') {
      return;
    }
    createContact({ name, phoneNumber });
    this.setState({ name: '', phoneNumber: '' });
  }

  render() {
    const { name, phoneNumber } = this.state;
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
        <input type="text" id="phone-number" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
        <br />
        <br />
        <button type="submit" value="Submit" id="submit" name="submit">Submit</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired
};
