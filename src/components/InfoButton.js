const InfoButton = ({ isActive }) => {
  return (
    <div
      className="info-button"
      style={{ display: isActive ? 'block' : 'none' }}>
      About me
    </div>
  )
};

export default InfoButton;
