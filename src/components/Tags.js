import useAnchor from './useAnchor';
import {data} from './data';

const allTags = [];
data.forEach(project => allTags.push(project.tags));
const tags = [...new Set(allTags.flat())];

const Tags = ({ tagsDisplay }) => {
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




// import useAnchor from './useAnchor';
// import {data} from './data';

// const allTags = [];
// data.forEach(project => allTags.push(project.tags));
// const tags = [...new Set(allTags.flat())];

// const Tags = () => {
//   const anchor = useAnchor();
//   const handleClick = () => {
//     anchor.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div id="filters" className='filters' style={{ display: 'none'}}>
//       <div onClick={handleClick}>
//         {tags.map(tag => <p className="tags-clickable">{tag}</p>)}
//       </div>
//     </div>
//   )
// }

// export default Tags;

