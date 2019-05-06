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
      isFave: null
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
    if (faves.includes(loc)) {
      let fav = faves.indexOf(loc)
      faves.splice(fav, 1)
    } else {
      faves.push(loc)
      console.log(faves)
      this.setState({ faves: faves })
    }

  }

  renderFaves = (locations, faves) => {
    console.log(locations, faves)
    return (
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


  renderAll = (locations) => {
    // console.log(locations)
    return (

      locations &&
      locations.map((location, index) => (


        <div
          key={index}
          className="location"
          onClick={() => this.showModalUpdate(location)}
        >
          <div className='left-panel'>
            <p className="location-name">
              {location.city},

            </p>



            <div className='icons'>
              <span className='icons-wrapper'>
                <span className='favStar' name={'name'} value={location.city} onClick={() => this.favClick(location)}> {this.state.faves && this.state.faves.includes(location) ? <span>🌟</span> : <span>⭐</span>}
                </span>

                <span className='pencil' name={'name'} value={location.city} onClick={() => this.showModalUpdate(location)}><span>✏️</span>
                </span>


              </span>
              <span className="stubborn">{location.country}</span>
            </div>
          </div>
          <img
            src={
              location.images[0].imageBase64 &&
              location.images[0].imageBase64
            }
            alt={location.images[0].name}
          />


        </div >
      ))
    )
  }

  render() {
    const { locations } = this.props;
    console.log(this.props)
    return (
      <div className="locationsList">

        {this.props.renderFavsStatus ?
          this.state.faves && this.state.faves && this.renderFaves(locations, this.state.faves && this.state.faves) :
          this.renderAll(locations)}


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
