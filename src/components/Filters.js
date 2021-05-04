import useAnchor from './useAnchor';
import {data} from './data';

const allFilters = [];
data.forEach(project => allFilters.push(project.tags));
const filters = [...new Set(allFilters.flat())];

const Filters = () => {
  const anchor = useAnchor();
  const handleClick = () => {
    anchor.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="filters" style={{ paddingTop: 4}}>
      <p onClick={handleClick}>
        {filters.map(filter => <span className="tags-clickable">{filter}</span>)}
      </p>
      <hr/>
    </div>
  )
}

export default Filters;

