import { useParams } from 'react-router-dom';
import { data } from './data'

const ProjectDetails = () => {
  const {id} = useParams();
  const project = data.find(project => project.id == id);
  const coverUrl = `images/${project.title
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll('.', '')
  }/cover_image.png`;

  return (
    <div className="project-details">
      <img src={coverUrl} alt="" />
      <h1>{project.title}</h1>
    </div>
  )
}

export default ProjectDetails;
