import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import MarvelBox from './components/MarvelBox';
import OneCharacter from './components/OneCharacter';
import App from './components/App';

const MyRoute = () => (
  <Router>

    <App name='layout'>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/marvel" component={MarvelBox}/>
        <Route path='/marvel/:id' component={OneCharacter} />
        <Route component={NotFound}/>
      </Switch>
    </App>

  </Router>

)

export default MyRoute;
