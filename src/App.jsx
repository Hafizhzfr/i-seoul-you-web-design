import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ContactPage from './ContactPage/ContactPage';
import HomePage from './HomePage/HomePage';

const App = () => (
  <div>
    <nav className="navbar">
      <Link className="link-text" to="/contact">CONTACT</Link>
      <Link className="link-text" to="/">HOME</Link>
    </nav>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </div>
);

export default App;
