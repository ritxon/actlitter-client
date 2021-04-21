import "./map.css";
import React, { useState } from "react";
import * as binData from "./bin-location.json";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";

import Button from "../../src/components/utils/Button";
import "../../src/components/utils/button.css";

import "@reach/combobox/styles.css";

const libraries = ["places"];

const mapContainerStyle = { height: "600px", width: "1200px" };
const options = { disableDefaultUI: true, zoomControl: true };
const center = { lat: -37.813629, lng: 144.963058 };

export default function Map() {

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyB8fN_l9SfZkAQ0As_MRWrdEQ7pcZKiVzE",
		libraries,
	});

	const [selectedBin, setSelectedBin] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({lat: -37.813629, lng: 144.963058})

	const mapRef = React.useRef();

	const onMapLoad = React.useCallback((map) => {
		mapRef.current = map;
	}, []);

	const panTo = React.useCallback(({ lat, lng }) => {
		mapRef.current.panTo({ lat, lng });
		mapRef.current.setZoom(16);
	}, []);
	const iconBase = "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
	const icons = {
		parking: {
			icon: iconBase + "parking_lot_maps.png",
		},
		library: {
			icon: iconBase + "library_maps.png",
		},
		info: {
			icon: iconBase + "info-i_maps.png",
		},
	};
	// const navigationfrontUrl = "https://www.google.com/maps/dir/?api=1&origin=";
	// const navigationURl =
	//   navigationfrontUrl +
	//   position.coords.latitude +
	//   "," +
	//   position.coords.longitude +
	//   "&destination=" +
	//   selectedBin.CoordinateLocation[0] +
	//   "," +
	//   selectedBin.CoordinateLocation[1];

	if (loadError) return "Error";
	if (!isLoaded) return "Loading...";

	return (
    <>
			<Search panTo={panTo} />
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
				{/* display current location marker */}
				<Marker position={center}></Marker>
        <Marker
                icon="https://www.robotwoods.com/dev/misc/bluecircle.png"
                position={currentPosition}
            />

				{binData.features.map((bin) => (
					<Marker
						key={bin.GIS_ID}
						position={{
							lat: bin.CoordinateLocation[0],
							lng: bin.CoordinateLocation[1],
						}}



						// display with type
						// https://developers.google.com/maps/documentation/javascript/custom-markers
            icon={(bin.type == 'Litter Bin') ? {
              url: "images/bin.png",
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }:
            {
              url: "images/bin.png",
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
						<div>
							<h2>bin details</h2>
							<p>{selectedBin.DESCRIPTION}</p>
							<a className="btn btn-slide primary" target="_blank" href={`https://www.google.com/maps/dir/?api=1&origin=${currentPosition.lat},${currentPosition.lng}&destination=${selectedBin.CoordinateLocation[0]},${selectedBin.CoordinateLocation[1]}`}>
								external
							</a>
						</div>
					</InfoWindow>
				) : null}
			</GoogleMap>
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
              })
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
              // question: how to let the consle outside of the loop
              const locationMarker = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
            },
            () => null
          );
        }}
      >
        {/* <Marker position={locationMarker}></Marker> */}
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
  
    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
  
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
        })
        panTo({ lat, lng });
      } catch (error) {
        console.log(" Error: ", error);
      }
    };
  
    return (
      <div className="search">
        <Combobox onSelect={handleSelect}>
          <ComboboxInput value={value} onChange={handleInput} disabled={!ready} placeholder="Search your location" />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" && data.map(({ id, description }) => <ComboboxOption key={id} value={description} />)}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    );
  }


}


