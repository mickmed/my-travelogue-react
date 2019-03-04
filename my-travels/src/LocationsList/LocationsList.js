import React from "react";

// import { Link } from "react-router-dom";

const LocationsList = ({ locations }) => {
  console.log(locations);

  return (
    <div>
      {locations &&
        locations.map((location, index) => (
          <div key={index}>
            <span key={index}>{location.name}</span>
          </div>
        ))}
    </div>
  );
};

export default LocationsList;
