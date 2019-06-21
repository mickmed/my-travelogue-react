import React, { Component } from "react";

import "./App.css";
import Header from "../Header/Header"
import Map from "../Map/Map";
import LocationsList from "../LocationsList/LocationsList";
import Home from "../Home/Home";
import Info from "../Info/Info"
import { Route, Link, Redirect} from "react-router-dom"
import Test from "../Test/test.js"
import ModalAddLocation from "../ModalAddLocation/ModalAddLocation"

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

         <Route path="/upload" component={ModalAddLocation}/>
{/* 
        <Route path="/" render={(props) => <Redirect to={"/home"} {...props}
          renderFavsStatus={this.state.renderFavsStatus}
          renderDateStatus={this.state.renderDateStatus}
        />} />  */}


        <Route path="/home" render={(props) => <Home {...props}
          renderFavsStatus={this.state.renderFavsStatus}
          renderDateStatus={this.state.renderDateStatus}
        />} />

        {/* <Route path="/homo" component={Homo} /> */}

       

      </div>
    );
  }
}
// function Homo({ match }) {
//   console.log(match.url)
//   return (
//     <div>
//       <Link to={`${match.url}/info`}>Components</Link>

//       <Route path={`${match.path}/:id`} component={Send} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       /></div>)

// }
// function Send({ match }) {
//   return <h3>Requested Param: {match.params.id}</h3>
// }
export default App;
