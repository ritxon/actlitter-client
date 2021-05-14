import "./map.css";
import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import useSupercluster from "use-supercluster";
import * as binData from "./bin-location.json";

import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import axios from "axios";

import "../../src/components/utils/button.css";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyle";
import { cluster } from "d3-hierarchy";
const libraries = ["places"];

const mapContainerStyle = { height: "450px", width: "100%" };
const options = {
	styles: mapStyles,
	disableDefaultUI: true,
	zoomControl: true,
};
const center = { lat: -37.813629, lng: 144.963058 };
var binType = "All";

export default function Map() {
	const [binDataSet, setBinDataSet] = useState([]);
	const [binDataSet1, setBinDataSet1] = useState([]);
	const [bounds, setBounds] = useState(null);
	const [zoom, setZoom] = useState(10);
	useEffect(() => {
		// Check this url https://dev.socrata.com/foundry/data.melbourne.vic.gov.au/8fgn-5q6t
		// SoQL https://dev.socrata.com/docs/queries/
		// App Token for the API CMgZAQjc7TpQfXi0JQvJsBax7
		const url =
			"https://data.melbourne.vic.gov.au/resource/8fgn-5q6t.json?$$app_token=CMgZAQjc7TpQfXi0JQvJsBax7&$limit=10000&asset_type=Litter%20Bin&$select=gis_id,description,geometry";

		axios
			.get(url)
			.then((res) => {
				setBinDataSet(res.data);
			})
			.catch((err) => console.log(err));

		async function fetchData() {
			await axios
				.get(url)
				.then((res) => {
					let arr = JSON.parse(JSON.stringify(res.data));

					arr = arr.map((element) => {
						let obj = { ...element };
						if (obj.description.includes("Recycling")) {
							obj.type = "Recycling";
						} else if (obj.description.includes("Cigarette")) {
							obj.type = "Cigarette";
						} else {
							obj.type = "General";
						}
						return obj;
					});
					// .slice(0, 10);

					setBinDataSet(arr);
					setBinDataSet1(arr);
				})
				.catch((err) => console.log(err));
		}
		fetchData();
	}, []);

	// const points = binDataSet.map((bin) => ({
	//   type: "Feature",
	//   properties: {
	//     cluster: false,
	//     gis_id: bin.gis_id,
	//     description: bin.description,

	//   },
	//   geometry: {
	//     type: "Point",
	//     coordinates: [
	//       parseFloat(bin.geometry.longitude),
	//       parseFloat(bin.geometry.latitude),
	//     ],
	//   },
	// }));

	// const { clusters, supercluster } = useSupercluster({
	//   points,
	//   bounds: [
	//     -1.2411810957931664,
	//     52.61208435908725,
	//     -1.0083656811012531,
	//     52.64495957533833,
	//   ],

	//   zoom,
	//   options: { radius: 75, maxZoom: 20 },
	// });
	// console.log(points);

	// console.log(clusters, 444);
	const [selectedBin, setSelectedBin] = useState(null);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyB8fN_l9SfZkAQ0As_MRWrdEQ7pcZKiVzE",
		libraries,
	});

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
		mapRef.current.setZoom(18);
	}, []);

	if (loadError) return "Error";
	if (!isLoaded) return "Loading...";

	return (
		<>
			{/* map page introduction */}
			<div className="section-article">
				<div className="contain1280-flex">
					<div className="section-text-left">
						<h2>About the Bin Map</h2>
						<p>
							You can search for the trash can near you by searching for the address, and you can also use the filter
							function to select the specific type of trash bin you want the map to display.
						</p>
					</div>
					<div className="section-image figure6"></div>
				</div>
			</div>

			<div className="section-article-white">
				{/* search area */}
				<div className="contain1280">
					<div className="map-title">
						<h3>Find a bin location</h3>
						<p>
							The map below displays location of waste bins in City of Melbourne and suburbs near it. Find a specific type
							of waste bin near your location.
						</p>
					</div>
					<div className="map-search">
						<Search panTo={panTo} />
						<BinTypeFilter />
					</div>
				</div>

				{/* map display area */}
				<div className="contain1280-flex">
					<div className="map-body">
						<div className="map-container">
							<Locate panTo={panTo} />

							<GoogleMap
								id="map"
								mapContainerStyle={mapContainerStyle}
								zoom={18}
								center={center}
								options={options}
								onLoad={onMapLoad}
								// yesIwantToUseGoogleMapApiInternals
								// onGoogleApiLoaded={({ map }) => {
								//   mapRef.current = map;
								// }}
								// onChange={({ zoom, bounds }) => {
								//   setZoom(zoom);
								//   setBounds([
								//     bounds.nw.lng,
								//     bounds.se.lat,
								//     bounds.se.lng,
								//     bounds.nw.lat,
								//   ]);
								// }}
							>
								<Marker
									// icon="https://www.robotwoods.com/dev/misc/bluecircle.png"
									icon={{
										url: "images/current.png",
										origin: new window.google.maps.Point(0, 0),
										anchor: new window.google.maps.Point(10, 10),
										scaledSize: new window.google.maps.Size(30, 30),
									}}
									position={currentPosition}
								/>
								{binDataSet.map((bin) => {
									return (
										<Marker
											key={bin.gis_id}
											position={{
												lat: parseFloat(bin.geometry.latitude),
												lng: parseFloat(bin.geometry.longitude),
											}}
											// display bin with type
											icon={
												/Cigarette/.test(bin.description) && (binType == "All" || binType == "Cigarette")
													? {
															url: "images/cbin.png",
															origin: new window.google.maps.Point(0, 0),
															anchor: new window.google.maps.Point(15, 15),
															scaledSize: new window.google.maps.Size(30, 30),
													  }
													: /Recycling/.test(bin.description) && (binType == "All" || binType == "Recycling")
													? {
															url: "images/greenbin.png",
															origin: new window.google.maps.Point(0, 0),
															anchor: new window.google.maps.Point(15, 15),
															scaledSize: new window.google.maps.Size(30, 30),
													  }
													: !/Cigarette/.test(bin.description) && !/Recycling/.test(bin.description)
													? {
															url: "images/bin.png",
															origin: new window.google.maps.Point(0, 0),
															anchor: new window.google.maps.Point(15, 15),
															scaledSize: new window.google.maps.Size(30, 30),
													  }
													: {
															url: "images/bin.png",
															origin: new window.google.maps.Point(0, 0),
															anchor: new window.google.maps.Point(0, 0),
															scaledSize: new window.google.maps.Size(0, 0),
													  }
											}
											onClick={() => {
												setSelectedBin(bin);
											}}
										></Marker>
									);
								})}

								{selectedBin ? (
									<InfoWindow
										position={{
											lat: parseFloat(selectedBin.geometry.latitude),
											lng: parseFloat(selectedBin.geometry.longitude),
										}}
										onCloseClick={() => {
											setSelectedBin(null);
										}}
									>
										<div className="bin-window">
											<div className="bin-info">
												<h4>Bin Details</h4>
												<p>Bin Type: {selectedBin.type} Bin</p>
												<p>Bin Description: {selectedBin.description}</p>
											</div>
											<a
												className="map-btn btn btn-slide green-btn-modal btn-modal quiz-btn"
												target="_blank"
												href={`https://www.google.com/maps/dir/?api=1&origin=${currentPosition.lat},${
													currentPosition.lng
												}&destination=${parseFloat(selectedBin.geometry.latitude)},${parseFloat(
													selectedBin.geometry.longitude
												)}`}
											>
												Navigation to Google Map
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
									<img src="images/binB.png" alt="General Waste Bin"></img>
									<p className="hashed-text">You can throw non-recyclables in this type of bin.</p>
									<p>
										General Waste Bin <img src="images/i.png"></img>
									</p>
								</li>
								<li>
									<img src="images/cbinB.png" alt="Cigarette Bin"></img>
									<p className="hashed-text">You can only throw cigarette buts in this type of bin.</p>
									<p>
										Cigarette Bin <img src="images/i.png"></img>
									</p>
								</li>
								<li>
									<img src="images/greenbinB.png" alt="Recycling Bin"></img>
									<p className="hashed-text">You can only throw recyclables into this trash can. </p>
									<p>
										Recycling Bin <img src="images/i.png"></img>
									</p>
								</li>

								<li>
									<img src="images/compass.png" alt="Get Location"></img>
									<p className="hashed-text">This icon helps you get your current location.</p>
									<p>
										Current Location <img src="images/i.png"></img>
									</p>
								</li>
							</ul>
						</div>
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
						placeholder="Search your location in City of Melbourne"
					/>
					<ComboboxPopover>
						<ComboboxList>
							{status === "OK" && data.map(({ id, description }) => <ComboboxOption key={id} value={description} />)}
						</ComboboxList>
					</ComboboxPopover>
				</Combobox>
			</div>
		);
	}

	function BinTypeFilter() {
		const options = [
			{ value: "All", label: "All" },
			{ value: "General", label: "General Waste Bin" },
			{ value: "Recycling", label: "Recycling Bin" },
			{ value: "Cigarette", label: "Cigarette Bin" },
		];
		const handleSelect = async (bin) => {
			binType = bin.value;

			const arr = binDataSet1.filter((el) => el.type == binType);

			if (binType == "All") {
				setBinDataSet(binDataSet1);
			} else {
				setBinDataSet(arr);
			}
		};

		return (
			<div className="map-filter">
				<h4> Bin Type: </h4>
				<Select
					className="map-filter-dropdown"
					options={options}
					// defaultValue={options[0]}
					onChange={handleSelect}
					// theme={ }
				/>
			</div>
		);
	}
}
