import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import data from "../data/projects_data.json";

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
  }/cover_image.png`;

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
        <div className="project-infos">
          <div className="categories">
            <p className='content-title'>Categories</p>
            <p>
              {project.tags.map(tag => <span className="tag tag-details-page" key={tag}>{tag}</span>)}
            </p>
          </div>
          <div className="description">
            <p className='content-title'>Project information</p>
            {project.full_description}
          </div>
          <div></div>
          <div className="credits">
            <p className='content-title'>Credits</p>
            Hello
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails;
