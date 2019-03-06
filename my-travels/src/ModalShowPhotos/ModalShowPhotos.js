import React from "react";
import "./ModalShowPhotos.css";
import SimpleSlider from "../SimpleSlider/SimpleSlider";

const Modal = ({ handleClose, show, children, locationInfo }) => {
  const showHideClassName = show
    ? "modalShowPhotos displayBlockShowPhotos"
    : "modalShowPhotos displayNoneShowPhotos";

  return (
    <div className={showHideClassName}>
      <section className="modalMainShowPhotos">
        <button onClick={handleClose}>close</button>
        <SimpleSlider locationInfo={locationInfo} />
      </section>
    </div>
  );
};

export default Modal;
