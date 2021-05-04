import { Link } from 'react-router-dom';

const Headline = () => {
  return (
    <div className="headline">
      <p className="headlines">
        Hi, I’m Miebi, a web developer and digital designer currently based in France
      </p>
{      <div className="links">
        <a href="#filters">Work</a>
        <Link to="/about">About Me</Link>
      </div>}
    </div>
  )
}

export default Headline;
