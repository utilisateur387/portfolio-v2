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
          I'm an arts and culture enthusiast, especially when it comes to new technologies and immersive experiences. After working as a graphic designer in New York, I joined Le Wagon coding bootcamp to become a web developer and extend my skills in the digital field.
        </p>

        <div className="about-links">
          Github <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
          LinkedIn <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
          Instagram <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
        </div>

        <hr style={{ marginBottom: 32 }}/>

        <div className="about-content">
          <div className="about-content-block">
            <p className="about-section-title">
              Experience
            </p>
            <p>
              Base Design, NYC<br/>
              Digital Designer
            </p>
            <p>
              Double Standards, Berlin<br/>
              Graphic Designer
            </p>
            <p>
              Studio150, Bangkok<br/>
              Design Intern
            </p>
            <p>
              UsBerlin, Berlin<br/>
              Design Intern
            </p>
          </div>

          <div className="about-content-block">
            <p className="about-section-title">
              Education
            </p>
            <p>
              Le Wagon coding bootcamp<br/>
              Fullstack Web Development
            </p>
            <p>
              MA Graphic Design<br/>
              ENSAAMA Olivier de Serres, Paris, FR
            </p>
            <p>
              BA Graphic Design<br/>
              ESAAT, Roubaix, FR
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
                APIs, JSON, scraping<br/>
                Git, GitHub<br/>
                SQL, Postgres<br/>
              </div>

              <div>
                Clever Cloud<br/>
                Figma, Sketch<br/>
                Adobe Creative Suite<br/>
                Blender 3D<br/>
                Max/MSP<br/>
                Arduino<br/>
                Resolume
              </div>
            </p>
          </div>


        </div>

      </motion.div> )}
    </AnimatePresence>

  )
}

export default About;
