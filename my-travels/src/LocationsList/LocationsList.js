import React from "react";

const LocationsList = ({ locations }) => {
  return (
    <div className="LocationsList">
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
