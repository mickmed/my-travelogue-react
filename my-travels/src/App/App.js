import React, { Component } from 'react';

import './App.css';
import Map from '../Map/Map.js'
import Dropzone from '../Dropzone/Dropzone.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
