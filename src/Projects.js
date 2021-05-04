import Card from './Card';
import { data } from './data'

const Projects = () => {
  // console.log(data[0]);

  return (
    <div>
      Projects
      { data.map(project => {
        return <Card project={project} />
      })}
    </div>
  )
}

export default Projects;
