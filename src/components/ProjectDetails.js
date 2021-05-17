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
        <p
          className="btn"
          onClick={handleBack}
          style={{ zIndex: 100 }}>
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

               { (project.livesite || project.github) &&
                  <div className="project-links">
                    <p className='content-title'>Links</p>

                    { project.livesite &&
                      <span className="link nobreak">
                        <a href={project.livesite} target="_blank" rel="noreferrer">Livesite</a> <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
                      </span>
                    }

                    { project.github &&
                      <span className="link nobreak">
                        <a href={project.github} target="_blank" rel="noreferrer">Github</a> <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
                      </span>
                    }
                  </div>
                }
              </div>

              <div className="description">
                <p className='content-title'>Project information</p>
                {project.full_description}
              </div>

              <div></div>

              <div className="credits">
                <p className='content-title'>Credits</p>

                { project.tools &&
                  <div>
                    Tools:<br/>
                    {project.tools.map(person => <span>{person}<br/></span>)}
                    <br/>
                  </div>
                }

                { project.team &&
                  <div>
                    Team:<br/>
                    {project.team.map(person => <span>{person}<br/></span>)}
                    <br/>
                  </div>
                }

                { project.music &&
                  <div>
                    Music:<br/>
                    {project.music}
                  </div>
                }

              </div>
            </div>

            {/* MOBILE LAYOUT */}
            <div className="description mobile">
              <p className='content-title'>Project information</p>
              {project.full_description}
            </div>

            <div className="project-infos mobile">
              <div className="categories">
                <p className='content-title'>Categories</p>
                <div className="container-categories-tags">
                  {project.tags.map(tag => <span className="tag tag-details-page" key={tag}>{`${tag} `}</span>)}
                </div>

               { (project.livesite || project.github) &&
                  <div className="project-links">
                    <p className='content-title'>Links</p>

                    { project.livesite &&
                      <span className="link nobreak">
                        <a href={project.livesite} target="_blank" rel="noreferrer">Livesite</a> <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
                      </span>
                    }

                    { project.github &&
                      <span className="link nobreak">
                        <a href={project.github} target="_blank" rel="noreferrer">Github</a> <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
                      </span>
                    }
                  </div>
                }
              </div>

              <div className="credits">
                <p className='content-title'>Credits</p>

                { project.tools &&
                  <div>
                    Tools:<br/>
                    {project.tools.map(person => <span>{person}<br/></span>)}
                    <br/>
                  </div>
                }

                { project.team &&
                  <div>
                    Team:<br/>
                    {project.team.map(person => <span>{person}<br/></span>)}
                    <br/>
                  </div>
                }

                { project.music &&
                  <div>
                    Music:<br/>
                    {project.music}
                  </div>
                }

              </div>
            </div>

            {/* MAIN CONTENT */}
            { project.vimeo &&
              <div class="wrapper-video">
                <iframe src={`https://player.vimeo.com/video/${project.vimeo}?title=0&byline=0&portrait=0&transparent=0&autoplay=1`} width="640" height="480" frameborder="0" title={project.title} webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-ready="true"></iframe>
              </div>
            }
            { project.youtube &&
              <div class="wrapper-video">
              <iframe width="640" height="480" src={`https://www.youtube.com/embed/${project.youtube}?controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              </div>
            }

          </div>
        </motion.div>
      </>
  )
}

export default ProjectDetails;
