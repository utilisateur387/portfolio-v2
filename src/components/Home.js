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

  const toggleFilters = (tag) => {
    if (activeFilters.includes(tag)) {
      setActiveFilters(activeFilters.filter(current => current !== tag))
    } else {
      setActiveFilters([...activeFilters, tag])
    }
  }
  console.log(activeFilters);

  return (
    <>
      <Headline/>
      <NavButtons active={refPoint} tags={tags} toggleFilters={toggleFilters} />
      <Projects activeFilters={activeFilters} />
    </>
  )
}

export default Home;
