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
      submitted: false
    };
  }
  getLocations = async (req, res) => {
    try {
      const fetchLocations = await Axios("http://localhost:3000/locations");
      console.log(fetchLocations);
      const locations = fetchLocations.data;
      this.setState({
        locations: locations
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    await this.getLocations();
  };

  render() {
  
    const { images } = this.state;
    const hasImages = images.length > 0;
    return (
      <div className="homeComponent">
        <div className="mapWrapper">
          <Map locations={this.state.locations} />
        </div>
        <div className="locationsListWrapper">
          <LocationsList locations={this.state.locations} />{" "}
        </div>
      </div>
    );
  }
}

export default Home;
