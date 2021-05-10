import { Link } from 'react-router-dom';

const About = ({ toggleAbout }) => {
  return (
    <div className="about">
      {/*<Link to="/">Home</Link>*/}
      <div onClick={toggleAbout}>Home</div>
      <p>
        I'm an arts and culture enthusiast, especially when it comes to new technologies and immersive experiences. After working as a graphic designer in New York, I joined Le Wagon coding bootcamp to become a web developer and extend my skills in the digital field.
      </p>
      <div className="about-content">
        <div>
          Hello
        </div>
        <div>
          Hello
        </div>
      </div>
      <div className="about-links">
        Github,
        LinkedIn,
        Instagram
      </div>
    </div>

  )
}

export default About;
