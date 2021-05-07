import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import data from "../data/projects_data.json";

const ProjectDetails = () => {
  console.log(data);
  const {id} = useParams();
  const project = data.find(project => project.id == id);
  const coverUrl = `images/${project.title
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll('.', '')
  }/cover_image.png`;

  const history = useHistory();
  const handleBack = () => {
    // history.go(-1);
    history.push('/#filters');
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
        <img src={coverUrl} alt="" />
      </div>
    </>
  )
}

export default ProjectDetails;
