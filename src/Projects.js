import Card from './Card';
import { data } from './data'

const Projects = () => {
  return (
    <div className='project-list'>
      { data.map(project => {
        return <Card project={project} />
      })}
    </div>
  )
}

export default Projects;
