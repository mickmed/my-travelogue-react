import React, { Component } from "react";
import Axios from "axios";
import "./Home.css";

import Map from "../Map/Map";
import LocationsList from "../LocationsList/LocationsList";

// import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      name: "",
      summary: "",
      images: [],
      loading: false
    };
  }
  getLocations = async (req, res) => {
  
    try {
      const fetchLocations = await Axios("https://my-travelogue.herokuapp.com/locations");
      
      const locations = fetchLocations.data;
      this.setState({
        locations: locations,
        loading: true,
        clickedLocation: null
      });
      // console.log(locations)
    } catch (err) {
      console.log(err);
    }
  };

  getClickedLocation = (location) => {
    console.log('here')
    console.log(location)
    this.setState({clickedLocation:location})
  }

  componentDidMount = async () => {
    console.log('here')
    await this.getLocations();
  };



  render() {
  //  console.log('home', this.state.locations)
    const { images } = this.state;
    const hasImages = images.length > 0;
    return (
      <div>
        {this.state.loading == false && "...loading"}
        {this.state.loading == true && (
          <div key={this.state.random} className="homeComponent">
            <div className="mapWrapper">
              <Map
                className="map"
                key = {this.state.locations}
                locations={this.state.locations}
                getLocations={this.getLocations}
                clickedLocation = {this.state.clickedLocation}
              />
            </div>
            <div className="locationsListWrapper">
              <LocationsList key={this.state.locations} locations={this.state.locations} renderFavsStatus={this.props.renderFavsStatus} renderDateStatus={this.props.renderDateStatus}
              getLocations = {this.getLocations}
              clickedLocation = {this.getClickedLocation}/>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
