import React, { Component, useState, useEffect } from "react";
import ScrollOut from "scroll-out";
import Radar from "../../components/Radar";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import "./data.css";

const Items = () => {
	const onSliderChange = (value) => {
		console.log(value);
		setValueSlider(value);
	};

	const marks = {
		2010: "2010",
		2011: "2011",
		2012: "2012",
		2013: "2013",
		2014: "2014",
		2015: "2015",
		2016: "2016",
		2017: "2017",
		2018: "2018",
		2019: "2019",
	};

	const [valueSlider, setValueSlider] = useState(5);
	const [valueStep, setValueStep] = useState(1);

	useEffect(() => {
		ScrollOut({
			targets: "div",
		});
	}, []);

	let data_beverage_containers = [
		[
			// Year 2008
			{ taste: "Beaches", BC: 2.2 },
			{ taste: "Car Parks", BC: 1.9 },
			{ taste: "Highways", BC: 5.1 },
			{ taste: "Industrial", BC: 5.5 },
			{ taste: "Recreational", BC: 0.9 },
			{ taste: "Residential", BC: 1.7 },
			{ taste: "Retail", BC: 2.1 },
			{ taste: "Shopping", BC: 1.2 },
		],
		[
			//Year 2009
			{ taste: "Beaches", BC: 3.2 },
			{ taste: "Car Parks", BC: 1.9 },
			{ taste: "Highways", BC: 5.1 },
			{ taste: "Industrial", BC: 5.5 },
			{ taste: "Recreational", BC: 0.9 },
			{ taste: "Residential", BC: 1.7 },
			{ taste: "Retail", BC: 2.1 },
			{ taste: "Shopping", BC: 1.2 },
		],
	];

	let data_cigarette_butts = [
		{ taste: "Beaches", CB: 21.4 },
		{ taste: "Car Parks", CB: 34.3 },
		{ taste: "Highways", CB: 14.6 },
		{ taste: "Industrial", CB: 34.5 },
		{ taste: "Recreational", CB: 9.5 },
		{ taste: "Residential", CB: 12 },
		{ taste: "Retail", CB: 79.5 },
		{ taste: "Shopping", CB: 50.7 },
	];

	let data_take_away = [
		{ taste: "Beaches", TA: 11.7 },
		{ taste: "Car Parks", TA: 8.2 },
		{ taste: "Highways", TA: 6.6 },
		{ taste: "Industrial", TA: 10.7 },
		{ taste: "Recreational", TA: 6.5 },
		{ taste: "Residential", TA: 6.5 },
		{ taste: "Retail", TA: 13.1 },
		{ taste: "Shopping", TA: 7.4 },
	];

	let data_plastic_bags = [
		{ taste: "Beaches", PB: 0.4 },
		{ taste: "Car Parks", PB: 0.2 },
		{ taste: "Highways", PB: 0.3 },
		{ taste: "Industrial", PB: 0.5 },
		{ taste: "Recreational", PB: 0.1 },
		{ taste: "Residential", PB: 0.2 },
		{ taste: "Retail", PB: 0.3 },
		{ taste: "Shopping", PB: 0.2 },
	];

	// ["beverage_containers", "Take_away", "Glass", "Paper", "Plastic", "Plastic_bags", "Others"]

	const [dataSetRadar, setDataSetRadar] = useState(data_beverage_containers[0]);
	const [locations, setLocations] = useState(["BC"]);
	const [valueOption, setValueOption] = useState("1");

	const changeRadar = (e) => {
		setValueOption(e.target.value);

		if (e.target.value == "1") {
			setDataSetRadar(data_beverage_containers[0]);
			setLocations(["BC"]);
		} else if (e.target.value == "2") {
			setDataSetRadar(data_cigarette_butts);
			setLocations(["CB"]);
		} else if (e.target.value == "3") {
			setDataSetRadar(data_take_away);
			setLocations(["TA"]);
		} else if (e.target.value == "4") {
			setDataSetRadar(data_plastic_bags);
			setLocations(["PB"]);
		}
	};

	return (
		<>
			<div className="section-article">
				<div className="contain1280-flex">
					<div className="section-text-left">
						<h2>What is the most common location of litter by item?</h2>
						<p>
							Cigarette butts are the highest littered item in Australia. Out of 24 billion cigarettes sold in
							Australia, around 7 billion are littered
						</p>
						<p>
							According to research, 6 out of 10 smokers in Australia throw cigarette butts outdoors that has caused
							cigarette butt litter to be a major problem for Australia.
						</p>
						<h4>Main insights from the graph</h4>
						<p></p>
					</div>
					<div className="section-image figure5"></div>
				</div>
			</div>
			<div className="section-article-white">
				<div className="data-container">
					<div className="data-radioContent">
						<div className="vertical-data-container">
							<div className="info-vertical-data">
								<h4>Description</h4>
								<p>
									This radar chart shows the average amount of litter items per 1.000 square meters between 2009 and
									2019. This information was sample from eight different kind of places among Australia. Each type of
									litter is provided with an axis that starts from the centre.
								</p>
								<h4>Source</h4>
								<p>
									This data was collected from the national litter report made by the organization Keep Australia
									beautiful.
								</p>
								<h4>Years</h4>
								<Slider
									className="sliderItems"
									min={2010}
									max={2019}
									marks={marks}
									value={valueSlider}
									step={null}
									onChange={onSliderChange}
									defaultValue={2010}
								/>
								<h4>Kinds of litter</h4>
								<p>Change the option to see a different type of litter</p>
								<div className="radioButton-data">
									<div className="box-radio-data">
										<input id="1" type="radio" value="1" checked={valueOption == "1"} onChange={changeRadar} />
										<label htmlFor="1">Beverage containers (BC)</label>
										<input id="2" type="radio" value="2" checked={valueOption == "2"} onChange={changeRadar} />
										<label htmlFor="2">Cigarette butts (CB)</label>
										<input id="3" type="radio" value="3" checked={valueOption == "3"} onChange={changeRadar} />
										<label htmlFor="3">Take away containers (TW)</label>
										<input id="4" type="radio" value="4" checked={valueOption == "4"} onChange={changeRadar} />
										<label htmlFor="4">Plastic bags (PB)</label>
									</div>
								</div>
							</div>
							<div className="vis-vertical-data">
								<Radar dataSet={dataSetRadar} attributes={locations} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Items;
