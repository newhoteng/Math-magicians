import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="nav">
        <div>Math Magicians</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
