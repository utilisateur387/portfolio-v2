import useAnchor from './useAnchor';
// import data from "../data/projects_data.json";

// const allTags = [];
// data.forEach(project => allTags.push(project.tags));
// const tags = [...new Set(allTags.flat())];

const Tags = ({ tags, tagsDisplay, toggleFilters }) => {
  // console.log(tags);
  const anchor = useAnchor();
  const handleClick = () => {
    anchor.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFilter = (e) => {
    console.log(e.target.value);
    // toggleFilters();
  }

  return (
    <div
      id="filters"
      className='tag-list'
      style={{ display: tagsDisplay }}
      onClick={handleClick} >
      {tags.map(tag => <button
        className="tags-clickable"
        value={tag}
        key={tag}
        onClick={handleFilter}>
          {tag}
        </button>)}
    </div>
  )
}

export default Tags;
