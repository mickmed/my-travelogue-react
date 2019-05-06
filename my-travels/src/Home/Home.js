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
      const fetchLocations = await Axios("http://localhost:3000/locations");
      
      const locations = fetchLocations.data;
      this.setState({
        locations: locations,
        loading: true
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    await this.getLocations();
  };



  render() {
  //  console.log(this.props)
    const { images } = this.state;
    const hasImages = images.length > 0;
    return (
      <div>
        {this.state.loading == false && "...loading"}
        {this.state.loading == true && (
          <div key={this.state.random} className="homeComponent">
            <div className="mapWrapper">
              <Map
                key = {this.state.locations}
                locations={this.state.locations}
                getLocations={this.getLocations}
              />
            </div>
            <div className="locationsListWrapper">
              <LocationsList key={this.state.locations} locations={this.state.locations} renderFavsStatus={this.props.renderFavsStatus}/>{" "}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
