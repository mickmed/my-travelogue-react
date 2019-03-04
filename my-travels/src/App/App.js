import React, { Component } from "react";

import "./App.css";
import Map from "../Map/Map";
import LocationsList from "../LocationsList/LocationsList";
import Home from "../Home/Home.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
