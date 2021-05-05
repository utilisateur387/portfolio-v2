import Tags from './Tags';
import { useState } from 'react';

const FilterButton = () => {
  const [tagsDisplay, setTagsDisplay] = useState('none');

  return (
    <div className="filter-button">
      Filters

      <Tags />
    </div>
  )
};

export default FilterButton;
