import { Routes, Route, Link } from 'react-router-dom';
import ButtonTest from './ButtonTest/ButtonTest';
import './App.css';

const App = () => (
  <div>
    <nav className="navbar">
      <div className="nav-text">
        <Link className="link-text" to="/increments">INCREMENTS</Link>
      </div>
    </nav>

    <Routes>
      <Route path="/increments" element={<ButtonTest />} />
    </Routes>
  </div>
);

export default App;
