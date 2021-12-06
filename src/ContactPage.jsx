import ContactList from './ContactList';

const ContactPage = () => {
  const contacts = [
    {
      id: 1,
      name: 'John',
      phoneNumber: '0812'
    },
    {
      id: 2,
      name: 'Bob',
      phoneNumber: '0814'
    }
  ];

  return (
    <ContactList data={contacts} />
  );
};

export default ContactPage;
