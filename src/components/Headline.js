import { Link } from 'react-router-dom';
import useAnchor from './useAnchor';

const Headline = () => {
  const anchor = useAnchor();
  const handleClick = (e) => {
    e.preventDefault();
    anchor.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="headline">
      <p className="headlines">
        Hi, I’m Miebi, a web developer and digital designer currently based in France
      </p>
      <div className="links">
        <a href="#projects" onClick={handleClick}>Work</a>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default Headline;
