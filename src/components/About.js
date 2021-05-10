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
        <div onClick={toggleAbout}><u>Home</u></div>
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
      </motion.div> )}
    </AnimatePresence>

  )
}

export default About;
