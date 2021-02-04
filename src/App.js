import React, { Component } from 'react'
import './App.css';
import { NavbarComponent } from './components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MapPage from './Pages/MapPage';

export default class App extends Component {
  
  render() {
    return (
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/map" component={MapPage}/>
        </Switch>
      </Router>
    );
  }
}

