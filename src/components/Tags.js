import useAnchor from './useAnchor';
// import data from "../data/projects_data.json";

// const allTags = [];
// data.forEach(project => allTags.push(project.tags));
// const tags = [...new Set(allTags.flat())];

const Tags = ({ tags, tagsDisplay, toggleFilters }) => {
  const anchor = useAnchor();
  const handleClick = () => {
    anchor.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFilter = (e) => {
    console.log(e.currentTarget);

    toggleFilters(e.currentTarget.value);

    const cross = e.currentTarget.querySelector('.cross');
    cross.classList.toggle('cross-active');

    e.currentTarget.classList.toggle('tag-active');
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
          {tag }
          <span className="cross" > x</span>
        </button>)}
    </div>
  )
}

export default Tags;
