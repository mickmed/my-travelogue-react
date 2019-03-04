import React from "react";
import './Modal.css'
import Uploader from '../Uploader/Uploader'
const Modal = ({ handleClose, show, children, long, lat }) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <Uploader long={long} lat={lat}/>
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

  export default Modal