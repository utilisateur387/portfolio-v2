import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

{/*          <Route exact path="/about">
            <About />
          </Route>}*/}

          <Route path="/:id">
            <ProjectDetails />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
