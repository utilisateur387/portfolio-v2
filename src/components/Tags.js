import useAnchor from './useAnchor';
import { useState } from 'react';
// import data from "../data/projects_data.json";

// const allTags = [];
// data.forEach(project => allTags.push(project.tags));
// const tags = [...new Set(allTags.flat())];

const Tags = ({ tags, tagsDisplay, toggleFilters }) => {
  const anchor = useAnchor();
  const handleClick = () => {
    anchor.scrollIntoView({ behavior: 'smooth' });
  };

  const [isActive, setIsActive] = useState(false);

  const handleFilter = (e) => {
    toggleFilters(e.target.value);
    setIsActive(isActive === true ? false : true);
  }

  return (
    <div
      id="filters"
      className='tag-list'
      style={{ display: tagsDisplay }}
      onClick={handleClick} >

      {tags.map(tag =>
        <button
          className="tags-clickable"
          value={tag}
          key={tag}
          onClick={handleFilter}>

          {tag}
          { isActive && <span> x</span>}
        </button>)}
    </div>
  )
}

export default Tags;
