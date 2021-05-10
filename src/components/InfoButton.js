import { Link } from 'react-router-dom';

const InfoButton = ({ toggleAbout }) => {
  return (
    <Link to="/about">
      <div
        className="info-button"
        onClick={toggleAbout}
        >
        About me
      </div>
    </Link>
  )
};

export default InfoButton;
