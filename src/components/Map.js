import React, { useState, Component } from "react";
import "./map.css";
// import google map
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as binData from "./bin-location.json";

function Map() {
  const [selectedBin, setSelectedBin] = useState(null);
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -37.813629, lng: 144.963058 }}
    >
      {binData.features.map((bin) => (
        <Marker
          key={bin.GIS_ID}
          position={{
            lat: bin.CoordinateLocation[0],
            lng: bin.CoordinateLocation[1],
          }}
          onClick={() => {
            setSelectedBin(bin);
          }}
        ></Marker>
      ))}

      {selectedBin && (
        <InfoWindow
          position={{
            lat: selectedBin.CoordinateLocation[0],
            lng: selectedBin.CoordinateLocation[1],
          }}
        >
          <div>
            <h2>bin details</h2>
            <p>{selectedBin.DESCRIPTION}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export class map extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="map-container">
          <WrappedMap
            googleMapURL={
              "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB8fN_l9SfZkAQ0As_MRWrdEQ7pcZKiVzE"
            }
            loadingElement={<div style={{ height: "100%" }}></div>}
            containerElement={<div style={{ height: "100%" }}></div>}
            mapElement={<div style={{ height: "100%" }}></div>}
          ></WrappedMap>
        </div>
      </div>
    );
  }
}

export default map;
