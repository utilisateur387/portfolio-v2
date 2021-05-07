import Projects from './Projects';
import NavButtons from './NavButtons';
import Headline from './Headline';
import { useState } from 'react';
import data from "../data/projects_data.json";

const allTags = []; // Import tags from data file
data.forEach(project => allTags.push(project.tags));
const tags = [...new Set(allTags.flat())];

const Home = () => {

  const [refPoint, setRefPoint] = useState(false); // Hide nav buttons on landing

  // const showNavButtons = () => {
  //   setRefPoint(true);
  //   console.log(refPoint);
  // };

  const [activeFilters, setActiveFilters] = useState([]); // Filter projects with tags
  const [tagCount, setTagCount] = useState(0); // Track number of active tags

  const toggleFilters = (tag) => {
    console.log(tag);

    if (activeFilters.includes(tag)) {
      setActiveFilters(prev => {
        return prev.filter(current => current !== tag)
      })
      setTagCount(activeFilters.length - 1);

    } else {
      setTagCount(activeFilters.length + 1);
      return setActiveFilters(prev => [...prev, tag]);
    }
  }
  console.log(activeFilters);

  return (
    <>
      <Headline/>
      <NavButtons
        active={refPoint}
        tags={tags}
        toggleFilters={toggleFilters}
        tagCount={tagCount} />
      <Projects
        activeFilters={activeFilters}
        tagCount={tagCount}/>
    </>
  )
}

export default Home;
