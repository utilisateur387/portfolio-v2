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

      <div className="scroll-message">
        <a href="#projects" onClick={handleClick}>
          <img src="images/general/arrow_down.png" alt="" />
        </a>
      </div>
  {/*     <div className="links">
       Work</a>
        <Link to="/about">About</Link>
        </div> */}
    </div>
  )
}

export default Headline;
