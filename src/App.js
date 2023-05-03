import {
  BrowserRouter, Routes, Route, Outlet, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import HomePage from './components/HomePage';
import './App.css';

function NavBar() {
  return (
    <>
      <nav className="nav">
        <div>Math Magicians</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="calculator">Calculator</Link></li>
          <li><Link to="quote">Quote</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
