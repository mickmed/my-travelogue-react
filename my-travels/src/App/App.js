import React, { Component } from "react";

import "./App.css";
import Header from "../Header/Header"
import Map from "../Map/Map";
import LocationsList from "../LocationsList/LocationsList";
import Home from "../Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home />
      </div>
    );
  }
}

export default App;
