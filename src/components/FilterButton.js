import Tags from './Tags';
import { useState } from 'react';

const FilterButton = () => {
  const [tagsDisplay, setTagsDisplay] = useState('none');
  const handleClick = () => {
    setTagsDisplay(tagsDisplay == 'none' ? 'block' : 'none')
  };

  return (
    <div className="filter-button" onClick={handleClick}>
      Filters
      <Tags tagsDisplay={tagsDisplay} />
    </div>
  )
};

export default FilterButton;
