import React, { Component } from "react";
import "./ModalUpdateLocation.css";
import LocationUpdate from "../LocationUpdate/LocationUpdate";
import Axios from 'axios'

class ModalUpdateLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteLocation = async event => {
    event.preventDefault();
    
    try {
      const deleteLocation = await Axios.delete(
        "http://localhost:3000/locations/" +
          parseInt(event.target.getAttribute("data-location-index"))
      );
      // this.getGames();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    
    const showHideClassName = this.props.show
      ? "modalUpdate displayBlockUpdate"
      : "modalUpdate displayBlockUpdate";
    return (
      <div className={showHideClassName}>
        <section className="modalMainUpdate">
          {this.props.children}
          <LocationUpdate location={this.props.location} handleClose={this.props.handleClose}/>
          <button onClick={this.props.handleClose}>close</button>
        
        <form
          className="deleteForm"
          onSubmit={this.deleteLocation}
          data-location-index={this.props.location && this.props.location.id}
        >
          <button className="deleteButton" name="delete" value={this.props.location && this.props.location.id}>
            Delete
          </button>
        </form>
        </section>
      </div>
    );
  }
}

export default ModalUpdateLocation;
