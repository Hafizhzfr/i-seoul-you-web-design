import './App.css';
import ContactPage from './ContactPage/ContactPage';

export const CONTACTS = [
  {
    id: 1,
    name: 'Thalut',
    phoneNumber: '213'
  },
  {
    id: 2,
    name: 'Dewi',
    phoneNumber: '123'
  }
];

const App = () => (
  <div>
    <ContactPage />
  </div>
);

export default App;
