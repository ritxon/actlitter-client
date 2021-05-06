import "./map.css";
import React, { useState } from "react";
import * as binData from "./bin-location.json";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "../../src/components/utils/button.css";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyle";
const libraries = ["places"];

const mapContainerStyle = { height: "400px", width: "100%" };
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = { lat: -37.813629, lng: 144.963058 };

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB8fN_l9SfZkAQ0As_MRWrdEQ7pcZKiVzE",
    libraries,
  });

  const [selectedBin, setSelectedBin] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({
    lat: -37.813629,
    lng: 144.963058,
  });

  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <>
      {/* map page title */}
      <div className="contain1080">
        <h1 id="page-title">Bin Map</h1>
      </div>

      {/* map page introduction */}
      <div className="contain1080">
        <div className="map-intro">
          <div className="map-left">
            <div className="map-title">
              <h3>About the Bin Map</h3>
            </div>
            <p>
              You can search for the trash can near you by searching for the
              address, and you can also use the filter function to select the
              specific type of trash bin you want the map to display.
            </p>
          </div>
          <div className="map-right">
            {/* <img src="../../images/impact/impact_classification.jpg"></img> */}
          </div>
        </div>
      </div>
      <div className="map-division"></div>

      {/* search area */}
      <div className="contain1080">
        <div className="map-search">
          <div className="map-title">
            <h3>Find a bin location</h3>
          </div>
          <p>Find a specific types of trash cans near you.</p>
          <Search panTo={panTo} />
        </div>
      </div>

      {/* map display area */}
      <div className="contain1080">
        <div className="map-body">
          <div className="map-container">
            <Locate panTo={panTo} />

            <GoogleMap
              id="map"
              mapContainerStyle={mapContainerStyle}
              zoom={15}
              center={center}
              options={options}
              onLoad={onMapLoad}
            >
              <Marker
                // icon="https://www.robotwoods.com/dev/misc/bluecircle.png"
                icon={{
                  url: "images/current.png",
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(35, 35),
                }}
                position={currentPosition}
              />

              {binData.features.map((bin) => (
                <Marker
                  key={bin.GIS_ID}
                  position={{
                    lat: bin.CoordinateLocation[0],
                    lng: bin.CoordinateLocation[1],
                  }}
                  // display bin with type
                  icon={
                    bin.type == "Litter Bin"
                      ? {
                          url: "images/bin.png",
                          origin: new window.google.maps.Point(0, 0),
                          anchor: new window.google.maps.Point(15, 15),
                          scaledSize: new window.google.maps.Size(30, 30),
                        }
                      : bin.type == "Recycling Bin"
                      ? {
                          url: "images/greenbin.png",
                          origin: new window.google.maps.Point(0, 0),
                          anchor: new window.google.maps.Point(15, 15),
                          scaledSize: new window.google.maps.Size(30, 30),
                        }
                      : {
                          url: "images/cbin.png",
                          origin: new window.google.maps.Point(0, 0),
                          anchor: new window.google.maps.Point(15, 15),
                          scaledSize: new window.google.maps.Size(30, 30),
                        }
                  }
                  onClick={() => {
                    setSelectedBin(bin);
                  }}
                ></Marker>
              ))}

              {selectedBin ? (
                <InfoWindow
                  position={{
                    lat: selectedBin.CoordinateLocation[0],
                    lng: selectedBin.CoordinateLocation[1],
                  }}
                  onCloseClick={() => {
                    setSelectedBin(null);
                  }}
                >
                  <div className="bin-window">
                    <div className="bin-info">
                      <h4>Bin Details</h4>
                      <p>Bin Description: {selectedBin.DESCRIPTION}</p>
                      <p>Bin Location: {selectedBin.LOCATION_DESC}</p>
                      {/* <p>Bin Easting: {selectedBin.EASTING}</p>
                    <p>Bin Northing: {selectedBin.NORTHING}</p> */}
                    </div>
                    <a
                      className="map-btn btn btn-slide primary"
                      target="_blank"
                      href={`https://www.google.com/maps/dir/?api=1&origin=${currentPosition.lat},${currentPosition.lng}&destination=${selectedBin.CoordinateLocation[0]},${selectedBin.CoordinateLocation[1]}`}
                    >
                      Navigation
                    </a>
                  </div>
                </InfoWindow>
              ) : null}
            </GoogleMap>
          </div>
          <div className="map-index">
            <ul>
              <h4>Map Legend</h4>
              <li>
                <img src="images/bin.png" alt="General Waste Bin"></img>General
                Waste Bin
              </li>
              <li>
                <img src="images/cbin.png" alt="Cigarette Bin"></img>
                Cigarette Bin
              </li>
              <li>
                <img src="images/greenbin.png" alt="Recycling Bin"></img>
                Recycling Bin
              </li>
              <li>
                <img src="images/current.png" alt="current location"></img>
                Current Location
              </li>

              <li>
                <img src="images/compass.png" alt="Get Location"></img>Get
                location
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  function Locate({ panTo }) {
    return (
      <button
        className="locate"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setCurrentPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <img src="images/compass.png" alt="compass" />
      </button>
    );
  }

  function Search({ panTo }) {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        location: { lat: () => -37.813629, lng: () => 144.963058 },
        radius: 100 * 1000,
      },
    });

    const handleInput = (e) => {
      setValue(e.target.value);
    };

    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();

      try {
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setCurrentPosition({
          lat: lat,
          lng: lng,
        });
        panTo({ lat, lng });
      } catch (error) {
        console.log(" Error: ", error);
      }
    };

    return (
      <div className="search">
        <h4>Search:</h4>
        <Combobox className="search-bar" onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search your address here"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    );
  }
}
