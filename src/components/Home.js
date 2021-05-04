import Projects from './Projects';
import Filters from './Filters';
import Headline from './Headline';
import Test from './Test';
import useAnchor from './useAnchor';

const Home = () => {
  return (
    <>
      <Headline/>
      <Filters />
      <Projects />
    </>
  )
}

export default Home;
