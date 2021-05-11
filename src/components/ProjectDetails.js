import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import data from "../data/projects_data.json";
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top to prevent landing at the bottom
  }, []);

  const {id} = useParams();
  const project = data.find(project => project.id == id);
  const coverUrl = `images/${project.title
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll('.', '')
  }/cover_image.jpg`;

  const history = useHistory();
  const handleBack = () => {
    history.go(-1);
    // history.push('/#filters');
  }

  return (
      <>
        <p className="btn" onClick={handleBack}>
          <img src="images/general/arrow_left.png" alt="" className="arrow-back" />
          Back to index
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>

          <div className="project-details">
            <p className="project-headline">
              <span className="uppercase">
                {project.title}
              </span>
              <span className="italic">
                , {project.type}, {project.date}
              </span>
            </p>

            <img src={coverUrl} alt="Project cover" className='project-cover-img' />

            {/* DESKTOP LAYOUT */}
            <div className="project-infos desktop">
              <div className="categories">
                <p className='content-title'>Categories</p>
                <div className="container-categories-tags">
                  {project.tags.map(tag => <span className="tag tag-details-page" key={tag}>{`${tag} `}</span>)}
                </div>
              </div>

              <div className="description">
                <p className='content-title'>Project information</p>
                {project.full_description}
              </div>

              <div></div>

              <div className="credits">
                <p className='content-title'>Credits</p>
                Team: 
                <br/>
                Louise Michelle Duigou <br/>
                Ambre Lemaitre <br/>
                Maxime Lorem<br/>
                <br/>
                Fonts: <br/>
                Lorem Ipsum<br/>
                <br/>
                Motion Motion, Stereolux
              </div>
            </div>


            {/* MOBILE LAYOUT */}
            <div className="description">
              <p className='content-title'>Project information</p>
              {project.full_description}
            </div>

            <div className="project-infos mobile">

              <div className="categories">
                <p className='content-title'>Categories</p>
                <div className="container-categories-tags">
                  {project.tags.map(tag => <span className="tag tag-details-page" key={tag}>{`${tag} `}</span>)}
                </div>
              </div>

              <div className="credits">
                <p className='content-title'>Credits</p>
                Team: 
                <br/>
                Louise Michelle Duigou <br/>
                Ambre Lemaitre <br/>
                Maxime Lorem<br/>
                <br/>
                Fonts: <br/>
                Lorem Ipsum<br/>
                <br/>
                Motion Motion, Stereolux
              </div>
            </div>
          </div>
        </motion.div>
      </>
  )
}

export default ProjectDetails;
