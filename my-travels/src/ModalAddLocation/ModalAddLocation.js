import React from "react";
import "./Modal.css";
import Uploader from "../Uploader/Uploader";
const Modal = ({ handleClose, show, long, lat }) => {
  const showHideClassName = show ? "modal displayBlock" : "modal displayNone";

  return (
    <div className={showHideClassName}>
      <section className="modalMain">
        <div className="toprow">
          <h1 className="title">Add a new location</h1>
          <button onClick={handleClose}>close</button>
        </div>

        <Uploader long={long} onClick={handleClose} lat={lat} />
      </section>
    </div>
  );
};

export default Modal;
