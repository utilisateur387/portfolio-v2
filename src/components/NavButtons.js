import FilterButton from './FilterButton';
import Tags from './Tags';
import { useState } from 'react';
import InfoButton from './InfoButton';

const NavButtons = () => {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {

  }

  return (
    <div id="filters" className="nav-buttons" >
      <FilterButton />
      <InfoButton isActive={isActive} />
    </div>
  )
}

export default NavButtons;

