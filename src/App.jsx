import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import TestSlider from './TestSlider/TestSlider';

const App = () => (
  <div>
    <nav className="navbar">
      <div className="nav-text">
        <Link className="link-text" to="/">HOME</Link>
        <Link className="link-text" to="/test-slider">TEST SLIDER</Link>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test-slider" element={<TestSlider />} />
    </Routes>
  </div>
);

export default App;
