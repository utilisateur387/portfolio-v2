import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/">Work</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default Navbar;
