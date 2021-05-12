import { motion, AnimatePresence } from 'framer-motion';

const About = ({ toggleAbout, showAbout }) => {
  return (
    <AnimatePresence>
    { showAbout &&
      (<motion.div
        className="about"
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, stiffness: 30 }}
        exit={{ y: '100vh' }}>
        <div class="about-close">

          <img
            src="images/general/cross.png" alt=""
            onClick={toggleAbout}
            class="img-cross-block cross-about"
            />
        </div>

        <div class="about-back" onClick={toggleAbout}>
          <img src="images/general/arrow_left.png" alt="" className="arrow-back-about" />
          Back
        </div>

        <p>
          I'm a web developer and digital designer with a deep-seated passion for digital arts and immersive experiences.
          After working as a graphic designer in New York, I enrolled in Le Wagon's fullstack coding bootcamp in France which has provided me with a new sense of technical and creative freedom.
          <br/>
          I'm currently working on web development projects, all the while deepening my knowledge of technologies through self-learning.
          Feel free to reach out for a chat, a project, or anything else.
        </p>


        <div className="about-links">
          <div>
            <p className="about-section-title">Say hi</p>
            <a href="/" target="_blank">
              iyeyemim @ gmail.com
            </a>
          </div>

          <div>
            <p className="about-section-title">Find me online</p>
            <span className="link nobreak">
              <a href="https://github.com/utilisateur387/" rel="noreferrer" target="_blank">
                Github <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
              </a>
            </span>
            <span className="link nobreak">
              <a href="https://www.linkedin.com/in/utilisateur387/" rel="noreferrer" arget="_blank">
                LinkedIn <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
              </a>
            </span>
            <span className="link nobreak">
              <a href="/" target="_blank">
                Instagram <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
              </a>
            </span>
          </div>
        </div>

        <hr className="about-hr" />

        <div className="about-content">
          <div className="about-content-block">
            <p className="about-section-title">
              Experience
            </p>
            <p>
              <span className="uppercase">Base Design, NYC</span><br/>
              <span className="additional-infos">Digital Designer</span>
            </p>
            <p>
              <span className="uppercase">Double Standards, Berlin</span><br/>
              <span className="additional-infos">Graphic Designer</span>
            </p>
            <p>
              <span className="uppercase">Studio150, Bangkok</span><br/>
              <span className="additional-infos">Design Intern</span>
            </p>
            <p>
              <span className="uppercase">UsBerlin, Berlin</span><br/>
              <span className="additional-infos">Design Intern</span>
            </p>
          </div>

          <div className="about-content-block">
            <p className="about-section-title">
              Education
            </p>
            <p>
              <span className="uppercase">Le Wagon coding bootcamp</span><br/>
              <span className="additional-infos">Fullstack Web Development</span>
            </p>
            <p>
              <span className="uppercase">MA Graphic Design</span><br/>
              <span className="additional-infos">ENSAAMA Olivier de Serres, Paris</span><br/>
              <span className="additional-infos link nobreak">
                <a rel="noreferrer" href="http://ensaama.net/site/home/diplomes/2018/dsaa-design-graphique/Iyeyemi-Miebi" target="_blank">
                  Graduation project <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
                </a>
              </span>
            </p>
            <p>
              <span className="uppercase">BA Graphic Design</span><br/>
              <span className="additional-infos">ESAAT, Roubaix</span>
            </p>
          </div>

          <div className="about-content-block">
            <p className="about-section-title">
              Clients / Collaborators
            </p>
            <p>
              Apple, Facebook, The New York Times, Equinox, RFK Human Rights, Dreamscape, IFAW, Matouk, MCR Labs, Mykita, Perlon, Funkhaus Berlin, Pfalzbau Theater, Münchner Kammerspiele
            </p>
          </div>

          <div className="about-content-block">
            <p className="about-section-title">
              Technologies I enjoy using
            </p>
            <p className="technologies">
              <div>
                ReactJS<br/>
                Ruby on Rails<br/>
                ES6 Javascript<br/>
                HTML, CSS<br/>
                Git, GitHub<br/>
                SQL, Postgres<br/>
                Heroku, Clever Cloud<br/>
              </div>

              <div>
                Figma<br/>
                Adobe Creative Suite<br/>
                Blender 3D<br/>
                Resolume<br/>
                Arduino<br/>
                Max/MSP<br/>
              </div>
            </p>
          </div>


        </div>

      </motion.div> )}
    </AnimatePresence>

  )
}

export default About;
