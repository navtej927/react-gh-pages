import About from './about';
import Home from './home';
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <div className="App">

        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>


      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
