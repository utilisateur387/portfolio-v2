import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import ProjectDetails from './ProjectDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/:id">
            <ProjectDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
