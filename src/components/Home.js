import Projects from './Projects';
import NavButtons from './NavButtons';
import Headline from './Headline';
import { useState } from 'react';
import data from "../data/projects_data.json";

// Import tags from data file
const allTags = [];
data.forEach(project => allTags.push(project.tags));
const tags = [...new Set(allTags.flat())];

const Home = () => {

  // Hide nav buttons on landing
  const [refPoint, setRefPoint] = useState(false);

  const showNavButtons = () => {
    setRefPoint(true);
    console.log(refPoint);
  };

  // Filter projects with tags
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilters = (tag) => {
    setActiveFilters([...activeFilters, tag])
  }

  return (
    <>
      <Headline/>
      <NavButtons active={refPoint} tags={tags} />
      <Projects showNavButtons={showNavButtons} />
    </>
  )
}

export default Home;
