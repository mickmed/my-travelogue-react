import React from "react";
import "./ModalAddLocation.css";
import Uploader from "../Uploader/Uploader";
const ModalAddLocation = ({ handleClose, show, long, lat, getLocations }) => {
  const showHideClassName = show ? "modalAddLocation displayBlockAddLocation" : "modalAddLocation displayNoneAddLocation";

  return (
    <div className={showHideClassName}>
      <section className="modalMainAddLocation">
        <div className="toprowAddLocation">
          <h1 className="title">Add a new location</h1>
          <button onClick={handleClose}>close</button>
        </div>

        <Uploader long={long} handleClose={handleClose} lat={lat} getLocations={getLocations}/>
      </section>
    </div>
  );
};

export default ModalAddLocation;
