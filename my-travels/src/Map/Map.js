import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import LocationsList from "../LocationsList/LocationsList";
import MapPin from "./MapPin";
import LocationInfo from "./LocationInfo.js";
import ModalAddLocation from "../ModalAddLocation/ModalAddLocation";
import ModalShowPhotos from "../ModalShowPhotos/ModalShowPhotos";


const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWlja21lZCIsImEiOiJjanFzdTVtZjEwMnY0NDJzM2g4MXNuNTM0In0.VDbqZxEh0hxXAixRjS9FzA";
class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: 900,
        height: 550,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 1
      },
      pinLong: 0,
      pinLat: 0,
      random: 0,
      showModalAdd: false,
      showModalPhotos: false,
      
      locationInfo: null
    };
  }
  hideModalAdd = () => {
    this.setState({ showModalAdd: false });
  };
  hideModalPhotos = () => {
    this.setState({ showModalPhotos: false });
  };
  
  // handleStyleLoad = map => (map.resize())
  _onClickMap = (map, evt) => {
   
    this.setState({ pinLong: parseFloat(map.lngLat[0]) });
    this.setState({ pinLat: parseFloat(map.lngLat[1]) });
    this.setState({ showModalAdd: true });
  };

  _onClickPin = (location) => {
    console.log(location)
    this.setState({ showModalPhotos: true });
    this.setState({locationInfo: location})
  };


  _renderMarker = (location, index) => {
    return (
      <Marker
        key={index}
        longitude={parseFloat(location.longitude)}
        latitude={parseFloat(location.latitude)}
      >
        <div className="treepin">
          <MapPin
            size={20}
            // onClick={() => this.setState({ popupInfo: location })}

            onClick={()=>this._onClickPin(location)}
          />
        </div>
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <LocationInfo locationInfo={popupInfo} />
        </Popup>
      )
    );
  }
  render() {
 
    const locations = this.props.locations;
    return (
      <div>
        <ReactMapGL
          // key={this.state.random}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          containerStyle={{ height: "100%", width: "100%" }}
          //   onStyleLoad={this.handleStyleLoad}
          attributionControl= {false}
          onClick={this._onClickMap}
        >
          {locations && locations.map(this._renderMarker)}
          {this._renderPopup()}
          {this.state.pinLong !== 0 && 
          <Marker longitude={this.state.pinLong} latitude={this.state.pinLat}>
            <MapPin size={20} />
          </Marker>}
        </ReactMapGL>

        <ModalAddLocation
          show={this.state.showModalAdd}
          handleClose={this.hideModalAdd}
          long={this.state.pinLong}
          lat={this.state.pinLat}
          getLocations={this.props.getLocations}
        />

        <ModalShowPhotos
         
          show={this.state.showModalPhotos}
          handleClose={this.hideModalPhotos}
          locationInfo={this.state.locationInfo}
       
        />
      </div>
    );
  }
}

export default Map;
