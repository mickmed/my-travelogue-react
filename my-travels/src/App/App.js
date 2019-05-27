import React, { Component } from "react";

import "./App.css";
import Header from "../Header/Header"
import Map from "../Map/Map";
import LocationsList from "../LocationsList/LocationsList";
import Home from "../Home/Home";

class App extends Component {
  state = {
    renderFavsStatus: false,
    renderDateStatus: false,
  }


  renderList = (e) => {
   
    // console.log(e.target.getAttribute('value'))
    e.target.getAttribute('value') === 'favs' ?
      this.setState({
        renderFavsStatus: true
      }) :
      this.setState({
        renderFavsStatus: false
      })

    e.target.getAttribute('value') === 'date' ?
      this.setState({
        renderDateStatus: true
      }) :
      this.setState({
        renderDateStatus: false
      })

  }



  render() {
    console.log(this.state.renderFavsStatus)
    return (
      <div className="App">
        <Header renderList={this.renderList} />
        <Home renderFavsStatus={this.state.renderFavsStatus} renderDateStatus={this.state.renderDateStatus}/>
      </div>
    );
  }
}

export default App;
