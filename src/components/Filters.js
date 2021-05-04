import { useState, useEffect } from 'react';

const Filters = () => {
  const [anchor, setAnchor] = useState(null);
  useEffect(() => {
    setAnchor(document.getElementById('filters'))
  }, [])

  console.log(anchor);
  const handleClick = () => {
    anchor.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="filters" >
      <button onClick={handleClick}>Test</button>
      <hr/>
    </div>
  )
}

export default Filters;

