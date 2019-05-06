import React, { Component } from "react";
import "./LocationList.css";
import ModalUpdateLocation from "../ModalUpdateLocation/ModalUpdateLocation"
let faves = []
class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalUpdate: false,
      location: null,
      isFavorite: false,
      faves: null
    };
  }

  showModalUpdate = (arr) => {
    // console.log(arr)
    this.setState({ showModalUpdate: true });
    this.setState({ location: arr })

  };
  hideModalUpdate = () => {
    this.setState({ showModalUpdate: false });
  };

  favClick = (loc) => {
    console.log(loc)
    
    faves.push(loc)
    console.log(faves)
    this.setState({faves:faves})
  }

  renderFaves=(locations, faves)=>{
    console.log(locations, faves)
    return(
     locations &&
      locations.map((location, index) => (
        faves.includes(location) &&
       
        <div
          key={index}
          className="location"
          onClick={() => this.showModalUpdate(location)}
        >
          <div>
            <p>
              {location.city}, <span className="stubborn">{location.country}</span>

            </p>
            <div className='icons-wrapper'>
              <div className='favStar' name={'name'} value={location.city} onClick={() => this.favClick(location)}>⭐️
              </div>

              <div className='pencil' name={'name'} value={location.city} onClick={() => this.showModalUpdate(location)}>✏️
            </div>
            </div>

          </div>
          <img
            src={
              location.images[0].imageBase64 &&
              location.images[0].imageBase64
            }
            alt={location.images[0].name}
          />


        </div>
      ))
    )
  }


  renderAll=(locations)=>{
    console.log(locations)
    return(
     locations &&
      locations.map((location, index) => (
        // this.state.faves&&this.state.faves.includes(location)? 
       
        <div
          key={index}
          className="location"
          onClick={() => this.showModalUpdate(location)}
        >
          <div>
            <p>
              {location.city}, <span className="stubborn">{location.country}</span>

            </p>
            <div className='icons-wrapper'>
              <div className='favStar' name={'name'} value={location.city} onClick={() => this.favClick(location)}>⭐️
              </div>

              <div className='pencil' name={'name'} value={location.city} onClick={() => this.showModalUpdate(location)}>✏️
            </div>
            </div>

          </div>
          <img
            src={
              location.images[0].imageBase64 &&
              location.images[0].imageBase64
            }
            alt={location.images[0].name}
          />


        </div>
      ))
    )
  }

  render() {
    const { locations } = this.props;
    console.log(this.state.faves)
    // const blah = this.renderFaves(locations)
    // locations && locations.map((loc)=>{
    //   if(this.state.faves&&this.state.faves.includes(loc)){
    //     console.log('hi')
    //   }
    // })
    return (
      <div className="locationsList">
      {this.state.faves&&this.state.faves&&this.renderFaves(locations, this.state.faves&&this.state.faves)}
      {this.renderAll(locations)}
      
        {/* <ModalUpdateLocation
          show={this.state.showModalUpdate}
          handleClose={this.hideModalUpdate}
          location={this.state.location}
          
          
        >
          <p>Details for Location</p>
        </ModalUpdateLocation> */}
      </div>
    );
  }
}

export default LocationsList;
