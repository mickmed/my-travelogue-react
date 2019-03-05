import React from "react";
import "./Modal.css";
// import { Link } from "react-router-dom";

const Modal = ({ handleClose, show, children, locationInfo }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(locationInfo);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        hi
        {locationInfo.map((location, index) => (
          <div key={index}>
            <p>{location.city}</p>
          </div>
        ))}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
