import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import './App.css';
// App.js Link

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>Math Magicians</li>
          <li><a href="/">Home</a></li>
          <li><a href="/calculator">Calculator</a></li>
          <li><a href="/quote">Quote</a></li>
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
