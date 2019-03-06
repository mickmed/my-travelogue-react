import React from "react";
import Slider from "react-slick";
import "./SimpleSlider.css"

export default class SimpleSlider extends React.Component {
  render() {
    let locationInfo = this.props.locationInfo;

    let imgObjs = [];
    for (let key in locationInfo) {
      if (key === "images") {
        // console.log('hi')
        // console.log(locationInfo[key])
        imgObjs.push(locationInfo[key]);
      }
    }
    let images = [];
    console.log(imgObjs[0]);
    imgObjs[0] &&
      imgObjs[0].map(image => {
        console.log(image.imageBase64);
        images.push(image.imageBase64);
      });
    console.log(images);
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {imgObjs[0] &&
          imgObjs[0].map(
            (image, index) => 
            
            <div className="sliderImage">
             
                <img src={image.imageBase64} />
              
            </div>
          )}
        
      </Slider>
    );
  }
}
