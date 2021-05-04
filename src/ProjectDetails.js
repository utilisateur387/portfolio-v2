import { useParams } from 'react-router-dom';
import { data } from './data'
// import projectsData from './data/projects_data';

const ProjectDetails = () => {
  const {id} = useParams();
  const project = data.find(project => project.id == id);

  return (
    <div>
      {project.title}
    </div>
  )
}

export default ProjectDetails;
