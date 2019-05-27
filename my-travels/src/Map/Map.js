import React from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import LocationsList from "../LocationsList/LocationsList";
import MapPin from "./MapPin";
import LocationInfo from "./LocationInfo.js";
import ModalAddLocation from "../ModalAddLocation/ModalAddLocation";
import ModalShowPhotos from "../ModalShowPhotos/ModalShowPhotos";
import "./Map.css"

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWlja21lZCIsImEiOiJjanFzdTVtZjEwMnY0NDJzM2g4MXNuNTM0In0.VDbqZxEh0hxXAixRjS9FzA";

const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};
const screenWidth = window.innerWidth


class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        
        latitude:  this.props.clickedLocation && this.props.clickedLocation.latitude || this.props.locations[0].latitude,
        longitude: this.props.clickedLocation && this.props.clickedLocation.longitude || this.props.locations[0].longitude,
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

  componentDidMount() {
    console.log('here')
    const AppDims = document.querySelector(".App")
    // const AppHeight = document.querySelector(".App")
    // console.log(AppDims.offsetWidth)
    console.log(AppDims.offsetHeight, AppDims.offsetWidth)
    if (AppDims.offsetWidth < 900 && AppDims.offsetWidth < AppDims.offsetHeight) {
      

      this.setState({
        viewport: {
          ...this.state.viewport,
          width: '100%',
          height: AppDims.offsetHeight / 2 + 'px',
          appDims: AppDims,
        
       
        }
      })
    }
    else{
      this.setState({
        viewport: {
          ...this.state.viewport,
          width: '100%',
          height: AppDims.offsetHeight / 1.25 + 'px',
          appDims: AppDims,
         

          
        }
      })
    }
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  componentWillReceiveProps(nextProps){
    console.log(this.props.clickedLocation, nextProps.clickedLocation)
    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: nextProps.clickedLocation.latitude,
        longitude: nextProps.clickedLocation.longitude
      
     
      }
    })
   
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

  _onClickPin = location => {
    this.setState({ showModalPhotos: true });
    this.setState({ locationInfo: location });
  };

  _renderMarker = (location, index) => {
    let color, size
    if(location === this.props.clickedLocation){
      color = "blue"
      size = 30
    }else{
      color = "green"
      size = 20
    }
    return (
      <Marker
        key={index}
        longitude={parseFloat(location.longitude)}
        latitude={parseFloat(location.latitude)}
      >
        <div className="treepin">
          <MapPin
            size={size}
            // onClick={() => this.setState({ popupInfo: location })}
            shoonga = {this.props.clickedLocationObject}
            color = {color}
            onClick={() => this._onClickPin(location)}
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

  _updateViewport = viewport => {
    
    // const {width, height, ...etc} = viewport
    // console.log(width, height, etc)
    this.setState({viewport: viewport})
  };
  _onViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  }

  _resize = () => {
    const AppDims = document.querySelector(".mapWrapper")
    console.log(AppDims.offsetWidth)
    this._onViewportChange({
      width: AppDims.offsetWidth,
      height: AppDims.offsetHeight - AppDims.offsetHeight/10
    });
  }

  render() {
    const locations = this.props.locations;
    console.log(this.props.clickedLocation && this.props.clickedLocation.latitude || this.props.locations[0].latitude)
    let {viewport} = this.state
    return (
      <div className="map-wrap">
        <ReactMapGL className="mapb"
          // key={this.state.random}  
      
          {...this.state.viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          // onViewportChange={this._updateViewport}
          onViewportChange={viewport => this._onViewportChange(viewport)}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          // containerStyle={{ height: "100%", width: "100%" }}
          //   onStyleLoad={this.handleStyleLoad}
          attributionControl={false}
          onClick={this._onClickMap}
        >
          {locations && locations.map(this._renderMarker)}
          {this._renderPopup()}
          {this.state.pinLong !== 0 && (
            <Marker longitude={this.state.pinLong} latitude={this.state.pinLat}>
              <MapPin size={20} />
            </Marker>
          )}
          <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={viewport => this.onViewportChange(viewport)} />
          </div>
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
