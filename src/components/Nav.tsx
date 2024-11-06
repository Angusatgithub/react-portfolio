import { Link } from 'react-router-dom';

const Nav = () => {
  return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Now">Now</Link></li>
          <li><Link to="/Silly">Silly Work</Link></li>
        </ul>
      </nav>
  );
};

export default Nav;