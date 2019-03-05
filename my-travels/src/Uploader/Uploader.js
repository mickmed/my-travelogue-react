import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "./Uploader.css";

class Uploader extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    city: "",
    country: "",
    summary: "",
    images: [],
    previewImages: [],
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
        city: this.state.name,
        country: this.state.country,
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
    console.log(accepted[0].File);
    let previewImages = [];
    for (let i in accepted) {
      previewImages.push({ accepted });
    }
    this.setState({ previewImages: previewImages });
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
    console.log(this.state.previewImages);
    const { images } = this.state;
    const hasImages = images.length > 0;
    return (
      <div className="uploader">
        <form className="addLocationForm" onSubmit={this.handleSubmit}>
          <div className="fields">
            <div className="field">
              {/* <label className="name">City: </label> */}
              <input
                type="text"
                placeholder="City"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              {/* <label className="country">Country: </label> */}
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              {/* <label className="summary">Summary: </label> */}
              <textarea
                placeholder="Summary"
                name="summary"
                value={this.state.summary}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="dropzoneWrapper">
            <Dropzone
              maxSize={2000000}
              accept="image/jpeg, image/png"
              onDrop={this.onDrop}
            >
              {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop files here...</p>
                    ) : (
                      <p>Drop images here, or click to upload.</p>
                    )}
                  </div>
                );
              }}
            </Dropzone>
            {hasImages && (
              <div className="imagePreview">
                {images.map(image => (
                  <div>
                    <img src={image.imageBase64} />
                  </div>
                ))}
              </div>
            )}
            <div>
              <button type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Uploader;
