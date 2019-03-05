import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

class LocationUpdate extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      updated: false,
      city: '',
      country: '',
      summary: '',

    };
  }
  handleChange = event => {
      console.log(event.target.name, event.target.value)
    this.setState({
        
      [event.target.name]: event.target.value
    });
  };

  handleEdit = async event => {
    event.preventDefault();

    console.log(event.target);
    let answer = window.confirm('Are you sure you want to edit?');

    if (answer === true) {
    //   window.location.href = '/';
      console.log(true);

      let updateInfo = {
        city: this.props.city,
        country: this.props.country,
        summary: this.state.summary,
        
      };
      
      axios
        .put(
          `http://localhost:3000/locations/${this.props.location.id}`,
          updateInfo
        )
        .then(res => console.log(res.data));
    } else {
    //   window.location.href = '/';
    }
  };
  //component mounts before props from modal are passed, so this is needed to set state for controlled form
  componentDidUpdate(prevProps){
      prevProps !== this.props &&  
      this.setState({
        city: this.props.location && this.props.location.city,
        country: this.props.location && this.props.location.country,
        summary: this.props.location && this.props.location.summary
    })
  }
  render() {
   console.log(this.state)
    return (
      <div className="editLocation">
        <h2 className="title">Edit Location</h2>
        <form onChange={this.handleChange} onSubmit={this.handleEdit} id="changeForm">
          <div className="field">
            <label className="city">City: </label>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={this.state.city && this.state.city || ''}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="country">Country </label>
            <input
              type="text"
              placeholder="country"
              name="country"
              value={this.state.country || ''}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="name">Summary: </label>
            <textarea
              type="text"
              placeholder="Summary"
              name="summary"
              value={this.state.summary || ''}
              onChange={this.handleChange}
            />
          </div>

          <button value="Submit" className="submit-btn" onClick={this.handleEdit}>
            Edit Exhibit
          </button>
        </form>
      </div>
    );
  }
}

export default LocationUpdate;
