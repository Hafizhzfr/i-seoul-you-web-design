import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import HotSix from './HotSix/HotSix';

const App = () => (
  <div>
    <nav className="navbar">
      <div className="nav-text">
        <Link className="link-text" to="/">HOME</Link>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hot-six" element={<HotSix />} />
    </Routes>
  </div>
);

export default App;
