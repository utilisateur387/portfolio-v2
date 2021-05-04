import { Link } from 'react-router-dom';

const Headline = () => {
  const anchor = document.getElementById('else');
  console.log(anchor);
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
        <a href="#filters" onClick={handleClick}>Work</a>
        <Link to="/about">About Me</Link>
      </div>
    </div>
  )
}

export default Headline;
