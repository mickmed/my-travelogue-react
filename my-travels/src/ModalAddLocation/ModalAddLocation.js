import React from "react";
import "./ModalAddLocation.css";
import Uploader from "../Uploader/Uploader";
const Modal = ({ handleClose, show, long, lat, getLocations }) => {
  const showHideClassName = show ? "modal displayBlock" : "modal displayNone";

  return (
    <div className={showHideClassName}>
      <section className="modalMain">
        <div className="toprow">
          <h1 className="title">Add a new location</h1>
          <button onClick={handleClose}>close</button>
        </div>

        <Uploader long={long} handleClose={handleClose} lat={lat} getLocations={getLocations}/>
      </section>
    </div>
  );
};

export default Modal;
