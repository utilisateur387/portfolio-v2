import { Link } from 'react-router-dom';

const Card = ({ project }) => {
  const coverUrl = `images/${project.title
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll('.', '')
  }/cover_image.png`;

  return (
    <Link to={`/${project.id}`}>
      <div className="card">
        {project.title}
        <div className="img-container">
          <img src={coverUrl} alt="" />
        </div>
      </div>
    </Link>
  )
}

export default Card;
