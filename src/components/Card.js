import { Link } from 'react-router-dom';

const Card = ({ project }) => {
  const coverUrl = `images/${project.title
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll('.', '')
  }/cover_image.png`;

  return (
    <div className="card">
      <div className="card-top-infos">
        <p className="uppercase">{project.title}</p>
        <p>
          {project.tags.map(tag => <span className="tag">{tag}</span>)}
        </p>
      </div>
      <Link to={`/${project.id}`}>
        <div className="img-container">
          <img src={coverUrl} alt="" />
        </div>
      </Link>
    </div>
  )
}

export default Card;