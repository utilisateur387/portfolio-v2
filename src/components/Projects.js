import Card from './Card';
import data from "../data/projects_data.json";
import { useInView } from 'react-intersection-observer';

const Projects = ({ showNavButtons }) => {

  const [ref, inView] = useInView({
    threshold: 0,
  })
  // console.log(inView);
  // if (inView) showNavButtons();

  return (
    <>
      <div ref={ref}></div>
      <div id="projects" className='project-list'>
        { data.map(project => {
          return <Card project={project} key={project.id} />
        })}
      </div>
    </>
  )
}

export default Projects;
