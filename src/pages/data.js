import set from "date-fns/fp/set";
import React, { Component, useState } from "react";
import LineGraph from "../components/LineGraph";
import Radar from "../components/Radar";
import Button from "../components/utils/Button";

import "./data.css";

const Data = () => {
	let fullData = [
		{
			id: "Residential",
			color: "hsl(65, 70%, 50%)",
			data: [
				{ x: "2010", y: 18960.67 },
				{ x: "2011", y: 19407.22 },
				{ x: "2012", y: 19775.68 },
				{ x: "2013", y: 21497.35 },
				{ x: "2014", y: 23154.43 },
				{ x: "2015", y: 23701.95 },
				{ x: "2016", y: 25985.75 },
				{ x: "2017", y: 27853.34 },
				{ x: "2018", y: 29472.92 },
				{ x: "2019", y: 32479.16 },
			],
		},
		{
			id: "Public litter bins",
			color: "hsl(109, 70%, 50%)",
			data: [
				{ x: "2010", y: 4554.78 },
				{ x: "2011", y: 3968.66 },
				{ x: "2012", y: 4139.35 },
				{ x: "2013", y: 4577.97 },
				{ x: "2014", y: 4892.27 },
				{ x: "2015", y: 4157.7 },
				{ x: "2016", y: 3879.6 },
				{ x: "2017", y: 3725.53 },
				{ x: "2018", y: 2680.3 },
				{ x: "2019", y: 3415.68 },
			],
		},
		{
			id: "Commingled recycling",
			color: "hsl(100, 70%, 50%)",
			data: [
				{ x: "2010", y: 6525.24 },
				{ x: "2011", y: 6367.67 },
				{ x: "2012", y: 5987.42 },
				{ x: "2013", y: 6348.46 },
				{ x: "2014", y: 6794.35 },
				{ x: "2015", y: 7546.51 },
				{ x: "2016", y: 8308.72 },
				{ x: "2017", y: 9133.53 },
				{ x: "2018", y: 10931.73 },
				{ x: "2019", y: 7821.61 },
			],
		},
		{
			id: "Green waste",
			color: "hsl(26, 70%, 50%)",
			data: [
				{ x: "2010", y: 45.59 },
				{ x: "2011", y: 57.76 },
				{ x: "2012", y: 52.2 },
				{ x: "2013", y: 48.64 },
				{ x: "2014", y: 51.38 },
				{ x: "2015", y: 51.72 },
				{ x: "2016", y: 61.8 },
				{ x: "2017", y: 106.84 },
				{ x: "2018", y: 115.18 },
				{ x: "2019", y: 109.96 },
			],
		},
		{
			id: "Street sweepings",
			color: "hsl(192, 70%, 50%)",
			data: [
				{ x: "2010", y: 6579.32 },
				{ x: "2011", y: 6145.02 },
				{ x: "2012", y: 5590.08 },
				{ x: "2013", y: 5102.69 },
				{ x: "2014", y: 4863.54 },
				{ x: "2015", y: 4350.22 },
				{ x: "2016", y: 3895.78 },
				{ x: "2017", y: 3790.58 },
				{ x: "2018", y: 3626.48 },
				{ x: "2019", y: 3645.51 },
			],
		},
		{
			id: "Dumped rubbish",
			color: "hsl(26, 70%, 50%)",
			data: [
				{ x: "2010", y: 1801.34 },
				{ x: "2011", y: 1832.4 },
				{ x: "2012", y: 1911.95 },
				{ x: "2013", y: 1614.97 },
				{ x: "2014", y: 1672.07 },
				{ x: "2015", y: 2202.76 },
				{ x: "2016", y: 1989.48 },
				{ x: "2017", y: 1804.34 },
				{ x: "2018", y: 1850.24 },
				{ x: "2019", y: 1390.75 },
			],
		},
	];

	let data_beverage_containers = [
		{ taste: "Beaches", BC: 2.2 },
		{ taste: "Car Parks", BC: 1.9 },
		{ taste: "Highways", BC: 5.1 },
		{ taste: "Industrial", BC: 5.5 },
		{ taste: "Recreational", BC: 0.9 },
		{ taste: "Residential", BC: 1.7 },
		{ taste: "Retail", BC: 2.1 },
		{ taste: "Shopping", BC: 1.2 },
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

	const [dataSet, setDataSet] = useState(fullData);
	const [dataSetRadar, setDataSetRadar] = useState(data_beverage_containers);
	const [locations, setLocations] = useState(["BC"]);
	const [valueOption, setValueOption] = useState("1");

	let wellDisposedData = [
		{
			id: "residential",
			color: "hsl(65, 70%, 50%)",
			data: [
				{ x: "2010", y: 18960.67 },
				{ x: "2011", y: 19407.22 },
				{ x: "2012", y: 19775.68 },
				{ x: "2013", y: 21497.35 },
				{ x: "2014", y: 23154.43 },
				{ x: "2015", y: 23701.95 },
				{ x: "2016", y: 25985.75 },
				{ x: "2017", y: 27853.34 },
				{ x: "2018", y: 29472.92 },
				{ x: "2019", y: 32479.16 },
			],
		},
		{
			id: "Public litter bins",
			color: "hsl(109, 70%, 50%)",
			data: [
				{ x: "2010", y: 4554.78 },
				{ x: "2011", y: 3968.66 },
				{ x: "2012", y: 4139.35 },
				{ x: "2013", y: 4577.97 },
				{ x: "2014", y: 4892.27 },
				{ x: "2015", y: 4157.7 },
				{ x: "2016", y: 3879.6 },
				{ x: "2017", y: 3725.53 },
				{ x: "2018", y: 2680.3 },
				{ x: "2019", y: 3415.68 },
			],
		},
		{
			id: "Commingled recycling",
			color: "hsl(100, 70%, 50%)",
			data: [
				{ x: "2010", y: 6525.24 },
				{ x: "2011", y: 6367.67 },
				{ x: "2012", y: 5987.42 },
				{ x: "2013", y: 6348.46 },
				{ x: "2014", y: 6794.35 },
				{ x: "2015", y: 7546.51 },
				{ x: "2016", y: 8308.72 },
				{ x: "2017", y: 9133.53 },
				{ x: "2018", y: 10931.73 },
				{ x: "2019", y: 7821.61 },
			],
		},
		{
			id: "green_waste",
			color: "hsl(26, 70%, 50%)",
			data: [
				{ x: "2010", y: 45.59 },
				{ x: "2011", y: 57.76 },
				{ x: "2012", y: 52.2 },
				{ x: "2013", y: 48.64 },
				{ x: "2014", y: 51.38 },
				{ x: "2015", y: 51.72 },
				{ x: "2016", y: 61.8 },
				{ x: "2017", y: 106.84 },
				{ x: "2018", y: 115.18 },
				{ x: "2019", y: 109.96 },
			],
		},
	];

	let badDisposedData = [
		{
			id: "street_sweepings",
			color: "hsl(192, 70%, 50%)",
			data: [
				{ x: "2010", y: 6579.32 },
				{ x: "2011", y: 6145.02 },
				{ x: "2012", y: 5590.08 },
				{ x: "2013", y: 5102.69 },
				{ x: "2014", y: 4863.54 },
				{ x: "2015", y: 4350.22 },
				{ x: "2016", y: 3895.78 },
				{ x: "2017", y: 3790.58 },
				{ x: "2018", y: 3626.48 },
				{ x: "2019", y: 3645.51 },
			],
		},
		{
			id: "dumped_rubbish",
			color: "hsl(26, 70%, 50%)",
			data: [
				{ x: "2010", y: 1801.34 },
				{ x: "2011", y: 1832.4 },
				{ x: "2012", y: 1911.95 },
				{ x: "2013", y: 1614.97 },
				{ x: "2014", y: 1672.07 },
				{ x: "2015", y: 2202.76 },
				{ x: "2016", y: 1989.48 },
				{ x: "2017", y: 1804.34 },
				{ x: "2018", y: 1850.24 },
				{ x: "2019", y: 1390.75 },
			],
		},
	];

	const showWellDisposed = () => {
		setDataSet(wellDisposedData);
	};

	const showBadDisposed = () => {
		setDataSet(badDisposedData);
	};
	const showAllData = () => {
		setDataSet(fullData);
	};

	const changeRadar = (e) => {
		setValueOption(e.target.value);

		if (e.target.value == "1") {
			setDataSetRadar(data_beverage_containers);
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
		<div className="data-container">
			<div className="data-lineContent">
				<div className="title-data">
					<h1>Waste collected per year</h1>
				</div>
				<div className="vertical-data-container">
					<div className="info-vertical-data">
						<h2>Description</h2>
						<p>
							This line graph illustrates the weight (in tonnes) of waste collected between 2010 and 2019. This
							information is divided in two main categories well-disposed and bad-disposed waste. We can see from the
							graph that residual waste has an upward trend while the waste that is collected by street sweeping show a
							decreasing trend.
						</p>
						<br />
						<p>This data was collected from the City of Melbourne Open Data.</p>
						<h2>Types of waste collected</h2>
						<p>Change the option to see a different set of data</p>
						<div className="radioButton-data">
							<div className="box-button-data">
								<Button
									styleBtn="orange-pastel-btn quiz-btn"
									text="Waste Disposed Correctly"
									onClick={() => showWellDisposed()}
								/>
								<Button
									styleBtn="orange-pastel-btn quiz-btn"
									text="Waste Disposed Incorrectly"
									onClick={() => showBadDisposed()}
								/>
								<Button styleBtn="orange-pastel-btn quiz-btn" text="All Waste" onClick={() => showAllData()} />
							</div>
						</div>
					</div>
					<div className="vis-vertical-data">
						<LineGraph dataSet={dataSet} xLegend="Years" yLegend="weight (in tonnes)" />;
					</div>
				</div>
			</div>
			<div className="data-radioContent">
				<div className="title-data">
					<h1>What is the most common location of litter by item?</h1>
				</div>
				<div className="vertical-data-container">
					<div className="info-vertical-data">
						<h2>Description</h2>
						<p>
							This radar chart shows the average amount of litter items per 1.000 square meters between 2008 and 2019.
							This information was sample from eight different kind of places among Australia. Each type of litter is
							provided with an axis that starts from the centre.
						</p>
						<p>
							This data was collected from the national litter report made by the organization Keep Australia beautiful.
						</p>
						<h2>Types of litter</h2>
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
	);
};

export default Data;
