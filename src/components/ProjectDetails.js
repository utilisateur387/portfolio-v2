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
    <div className="project-details">
      <img src={coverUrl} alt="" />
      <button onClick={handleBack}>Back</button>
      <h1>{project.title}</h1>
    </div>
  )
}

export default ProjectDetails;
