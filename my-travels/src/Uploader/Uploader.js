import React, { Component } from "react";
import Dropzone from "react-dropzone";


// import { Redirect } from "react-router-dom";

class Uploader extends Component {
  constructor(props){
    super(props)
  }
  state = {
    name: "",
    summary: "",
    images: [],
    submitted: false
  };

  handleChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(this.props);
    event.preventDefault();
    //sending data to server
    return fetch("http://localhost:3000/locations", {
      //without header body is empty. Cannot identify string
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      //check and edit data on server
      body: JSON.stringify({
        name: this.state.name,
        summary: this.state.summary,
        latitude: this.props.lat,
        longitude: this.props.long,
        images: this.state.images
      })
    }).then(() => this.setState({ submitted: true }));
  };

  // https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
  // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
  //accepted - array of imgs
  onDrop = accepted => {
    console.log(accepted);
    accepted.forEach(file => {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.setState(state => ({
          images: [
            ...state.images,
            {
              name: file.name,
              imageBase64: reader.result
            }
          ]
        }));
      });
      reader.readAsDataURL(file);
    });
  };

  render() {
    
    //if form submited redirect to the UserPage
    // if (this.state.submitted) {
    //   return (
    //     // <Redirect to={`/artist/${this.props.user.name.replace(" ", "-")}`} />
    //   );
    // }
    //connects to dropzone showing preview
    const { images } = this.state;
    const hasImages = images.length > 0;
    return (
      <div>
  
        <h1 className="title">Add a new location</h1>
        <form className="create-form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="name">City: </label>
            <input
              type="text"
              placeholder="City"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="name">Summary: </label>
            <input
              type="text"
              placeholder="Summary"
              name="summary"
              value={this.state.summary}
              onChange={this.handleChange}
            />
          </div>

          <div className="field-drop">
            <label className="dropzone">Upload Images: </label>
            <Dropzone
              maxSize={2000000}
              accept="image/jpeg, image/png"
              onDrop={this.onDrop}
            >
              {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div {...getRootProps()} className="drop-zone">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p className="drop-zone-text">Drop files here...</p>
                    ) : (
                      <p className="drop-zone-text">
                        Drop images here, or click to select files to upload.
                      </p>
                    )}
                  </div>
                );
              }}
            </Dropzone>
            {hasImages && (
              <div className="wrap-preview">
                {images.map(image => (
                  <div
                    className="drop-zone-preview"
                    key={image.name}
                    style={{
                      backgroundImage: `url(${image.image_base64})`
                    }}
                    alt={image.name}
                  />
                ))}
              </div>
            )}
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Uploader;
