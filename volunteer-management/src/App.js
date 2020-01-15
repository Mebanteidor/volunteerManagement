import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
//import Event from './components/Events/Event/Event';
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile';
import MapComponent from './components/Map/Map';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/Contact" component={Contact}/>
              <Route path="/login" component={Login}/>
              <Route path="/Register" component={Registration}/>
              <Route exact path="/Profile" component={Profile}/>
              <Route exact path="/map" component={MapComponent} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
