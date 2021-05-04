const Card = ({ project }) => {
  const coverUrl = `images/${project.title
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll('.', '')
  }/cover_image.png`;

  return (
    <div className="card">
      {project.title}
      <div className="img-container">
        <img src={coverUrl} alt="" />
      </div>
    </div>
  )
}

export default Card;
