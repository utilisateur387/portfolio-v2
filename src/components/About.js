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

        <div className="about-content">
          <div>
            Education

            Le Wagon coding bootcamp
            Fullstack Web Development

            MA Graphic Design
            ENSAAMA Olivier de Serres, Paris, FR

            BA Graphic Design
            ESAAT, Roubaix, FR
          </div>

          <div>
            Experience

            Base Design, NYC
            Digital Designer

            Double Standards, Berlin
            Graphic Designer

            Studio150, Bangkok
            Design Intern

            UsBerlin, Berlin
            Design Intern
          </div>

          <div>
            Clients / Collaborators
          </div>
        </div>

        <div className="about-links">
          Github,
          LinkedIn,
          Instagram
        </div>

      </motion.div> )}
    </AnimatePresence>

  )
}

export default About;
