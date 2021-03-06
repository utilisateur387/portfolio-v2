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
    const button = e.currentTarget;
    toggleFilters(button.value);

    const cross = button.querySelector('.cross');
    cross.classList.toggle('cross-active');

    button.classList.toggle('tag-active');
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
          <span className="cross" >
            <img class="img-cross" src="images/general/cross_blue.png" alt="" />
          </span>
        </button>)}
    </div>
  )
}

export default Tags;
