import Projects from './Projects';
import FilterButton from './FilterButton';
import Headline from './Headline';
import Info from './Info';

const Home = () => {
  return (
    <>
      <Headline/>
      <FilterButton />
      <Info />
      <Projects />
    </>
  )
}

export default Home;
