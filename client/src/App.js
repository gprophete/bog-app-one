import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Creatures from './components/Creatures.js'
import SingleCreature from './components/SingleCreature.js'


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Creatures />
            </Route>
            <Route exact path='/creature/:creatureId' component = {SingleCreature}/>
          </Switch>

        </Router>
      </div>


    )
  }
}

