import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//import { findIndex, without } from 'lodash';
//import axios from 'axios';

import FeaturedApp from './apps/FeaturedApp';
import MusicApp from './apps/MusicApp';
import PhotoApp from './apps/PhotoApp';
import VideoApp from './apps/VideoApp';
import ContactForum from './apps/ContactForum';
import NotFoundApp from './apps/NotFoundApp';
import NavBar from './apps/NavBarApp';

import '../stylesheets/App.css';

class App extends Component {
  constructor(){
    super(); 
    this.state = { 
      music: [],
      currentDirectory: {},
    };
  }
 

  
  render() {
    let filteredApts = this.state.music;

    return (
      <Router>
        <div className="container">
          <NavBar />
          <div id="body">
            <Switch>
              <Route path="/" component={FeaturedApp} exact />
              <Route path="/MusicApp" component={MusicApp}  />
              <Route path="/PhotoApp" component={PhotoApp} />
              <Route path="/VideoApp" component={VideoApp} />
              <Route path="/ContactForum" component={ContactForum} />
              <Route component={NotFoundApp} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
