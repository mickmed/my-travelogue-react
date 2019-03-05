import React, { Component } from "react";
import "./Modal.css";
import LocationUpdate from "../LocationUpdate/LocationUpdate";
import Axios from 'axios'

class ModalUpdateLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteLocation = async event => {
    event.preventDefault();
    console.log(event.target.getAttribute("data-location-index"))
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
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {this.props.children}
          <LocationUpdate location={this.props.location} />
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
