import React from "react";
import "./ModalShowPhotos.css";
import SimpleSlider from "../SimpleSlider/SimpleSlider";
import {Redirect} from "react-router-dom"

class Modal extends React.Component{
  state={
    redirect: false
  }

  handleRedirect = () => {

    this.setState({
      redirect:true
    })

  }

render(){
  let redirect = this.state.redirect && <Redirect to={"/home"}/>
  return (
    <div >
      <section className="modalMainShowPhotos">
        <button onClick={this.handleRedirect}>close</button>
        <SimpleSlider locationInfo={this.props.location.locationInfo} />
        <div>{'hello'}</div>
      </section>
      {redirect}
    </div>
  )
}
};

export default Modal;
