import Projects from './Projects';
import NavButtons from './NavButtons';
import Headline from './Headline';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [refPoint, setRefPoint] = useState(false);

  const showNavButtons = () => {
    setRefPoint(true);
    console.log(refPoint);
  };

  return (
    <>
      <Headline/>
      <NavButtons active={refPoint} />
      <Projects showNavButtons={showNavButtons} />
    </>
  )
}

export default Home;
