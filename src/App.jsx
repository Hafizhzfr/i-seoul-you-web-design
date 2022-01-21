import { Routes, Route, Link } from 'react-router-dom';
import ButtonTest from './ButtonTest/ButtonTest';
import MathForm from './MathForm/MathForm';
import CurriculumVitae from './CurriculumVitae/CurriculumVitae';
import ShoppingList from './ShoppingList/ShoppingList';
import './App.css';

const App = () => (
  <div>
    <nav className="navbar">
      <div className="nav-text">
        <Link className="link-text" to="/math">CALCULATOR</Link>
        <Link className="link-text" to="/increments">INCREMENTS</Link>
        <Link className="link-text" to="/curriculum-vitae">CV GENERATOR</Link>
        <Link className="link-text" to="/shopping-list">SHOPPING LIST</Link>
      </div>
    </nav>

    <Routes>
      <Route path="/increments" element={<ButtonTest />} />
      <Route path="/math" element={<MathForm />} />
      <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
      <Route path="/shopping-list" element={<ShoppingList />} />
    </Routes>
  </div>
);

export default App;
