import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';

const App = () => (
  <div>
    <nav className="navbar">
      <div className="nav-text">
        <Link className="link-text" to="/">HOME</Link>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </div>
);

export default App;
