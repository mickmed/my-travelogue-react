  import React from 'react';
  import ReactMapGL from 'react-map-gl';

  const MAPBOX_TOKEN = 'pk.eyJ1IjoibWlja21lZCIsImEiOiJjanFzdTVtZjEwMnY0NDJzM2g4MXNuNTM0In0.VDbqZxEh0hxXAixRjS9FzA'
  class Map extends React.Component {
  
    state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    };
    
    handleStyleLoad = map => (map.resize())
    
    render() {
      return (
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          containerStyle={{ height: '100%', width: '100%' }}
        //   onStyleLoad={this.handleStyleLoad}
        />
      );
    }
  }

export default Map;


