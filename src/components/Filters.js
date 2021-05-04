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
    <div id="filters" className='filters' style={{ paddingTop: 4}}>
      {/*<p style={{ marginBottom: 12}}>Filter projects</p>*/}
      <div
        onClick={handleClick}
        style={{ marginBottom: 64}}
        >
        {filters.map(filter => <p className="tags-clickable">{filter}</p>)}
        {/*<hr />*/}
      </div>
    </div>
  )
}

export default Filters;

