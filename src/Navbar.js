import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Work</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar;
