import useAnchor from './useAnchor';
// import data from "../data/projects_data.json";

// const allTags = [];
// data.forEach(project => allTags.push(project.tags));
// const tags = [...new Set(allTags.flat())];

const Tags = ({ tags, tagsDisplay }) => {
  // console.log(tags);
  const anchor = useAnchor();
  const handleClick = () => {
    anchor.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="filters"
      className='tag-list'
      style={{ display: tagsDisplay }}
      onClick={handleClick} >
      {tags.map(tag => <p className="tags-clickable">{tag}</p>)}
    </div>
  )
}

export default Tags;
