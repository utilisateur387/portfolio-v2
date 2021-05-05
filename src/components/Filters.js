import FilterButton from './FilterButton';
import Tags from './Tags';
import { useState } from 'react';

const Filters = () => {
  const [tagsAreVisible, setTagsAreVisible] = useState(false);

  return (
    <div id="filters" className='filters'>
      <FilterButton />
      <Tags style={{ display: 'none'}} />
    </div>
  )
}

export default Filters;

