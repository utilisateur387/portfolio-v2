import Projects from './Projects';
import Filters from './Filters';
import Headline from './Headline';

const Home = () => {
  return (
    <>
      <Headline/>
      <Filters id="#filters" />
      <Projects />
    </>
  )
}

export default Home;
