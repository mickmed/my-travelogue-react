import React, { Component } from "react";
import "./LocationList.css";
import ModalUpdateLocation from "../ModalUpdateLocation/ModalUpdateLocation"

class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalUpdate: false,
      location: null
    };
  }

  showModalUpdate = (arr) => {
      console.log(arr)
    this.setState({ showModalUpdate: true });
    this.setState({location:arr})
    
  };
  hideModalUpdate = () => {
    this.setState({ showModalUpdate: false });  
  };
 
  render() {
    const { locations } = this.props;

    return (
      <div className="locationsList">
        {locations &&
          locations.map((location, index) => (
            <div
              key={index}
              className="location"
              onClick={() => this.showModalUpdate(location)}
            >
              <p>
                {location.city}, <span className="stubborn">{location.country}</span>

              </p>

              <img
                src={
                  location.images[0].imageBase64 &&
                  location.images[0].imageBase64
                }
                alt={location.images[0].name}
              />
            </div>
          ))}
          <ModalUpdateLocation
          show={this.state.showModalUpdate}
          handleClose={this.hideModalUpdate}
          location={this.state.location}
          
          
        >
          <p>Details for Location</p>
        </ModalUpdateLocation>
      </div>
    );
  }
}

export default LocationsList;
