import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Card = ({ project }) => {
  const coverUrl = `images/${project.title
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll('.', '')
  }/cover_image.jpg`;

  const [ref, inView] = useInView({
    threshold: 0,
  })

  return (
    <div className="card" ref={ref}>
      <div
        className="card-top-infos"
        style={{ opacity: inView ? 1 : 0, transition: '0.4s' }}
        >
        <p className="uppercase">{project.title}</p>
        <div className="tags-container">
          {project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
      <Link to={`/${project.id}`}>
        <div
          className="img-container"
          style={{ opacity: inView ? 1 : 0, transition: '1s', transitionDelay: '50ms'}}>
          <img src={coverUrl} alt="" />
        </div>
      </Link>
    </div>
  )
}

export default Card;
