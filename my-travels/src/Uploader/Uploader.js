import React from 'react';
import ReactMapGL from 'react-map-gl';

class Uploader extends React.Component {

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
        render() {
            return(
              <div>
                <Dropzone onDrop={this.readFile}>
                  <button>Upload a new image</button>
                </Dropzone>
              </div>
            )
          }
    );
  }
}

export default Uploader;