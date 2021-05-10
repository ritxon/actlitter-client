import React, { Component, useState, useEffect } from "react";
import ScrollOut from "scroll-out";
import LineGraph from "../../components/LineGraph";
import Button from "../../components/utils/Button";

import "./data.css";

const Waste = () => {
	useEffect(() => {
		ScrollOut({
			targets: "div",
		});
	}, []);

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
			id: "Recyclables",
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
			id: "Recyclables",
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
		<>
		<div className="impact_fake_navigation">
				<p>
					<a href="/">&emsp; Home &ensp;</a>/ &ensp;
					<a href="/data">Data &ensp;</a>/ &ensp; Waste collected per year
				</p>
			</div>
			<div className="section-article">
				<div className="contain1280-flex">
					<div className="section-text-left">
						<h2>Waste collected per year</h2>
						<p>
						This page shows amount of collected waste in Melbourne. It provides a visualisation about amount of waste collected from houses and garbage bins in public areas as well as dumped waste and provides interesting insights from it.

						</p>
						<h4>Main insights from the graph</h4>
						<p>
							There is an upward trend in <b>residential waste</b> showing that the amount of <b>residential waste</b>{" "}
							in Melbourne has been rapidly increasing over the years. This makes it highly necessary to segregate and
							dispose it properly. The graph also shows that disposing <b>street sweepings</b> incorrectly has reduced
							dramatically over the years. However, <b>dumping rubbish</b> has not reduced a lot and is still prevalent
							over the years. This makes it essential to reduce <b>dumping rubbish</b> as it can enable to reduce
							littering.
						</p>
					</div>
					<div className="section-image figure4"></div>
				</div>
			</div>
			<div className="section-article-white">
				<div className="data-container">
					<div className="data-lineContent">
						<div className="vertical-data-container">
							<div className="info-vertical-data">
								<h4>Description</h4>
								<p>
									The government disposes waste that is thrown by people <b>every year</b>. There is a lot of waste that is
									disposed incorrectly that can result in increase in cost of rubbish disposal.
								</p>
								<h4>Source</h4>
								<p>This data was collected from the City of Melbourne Open Data.</p>
								<h4>Kinds of waste collected</h4>
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
								<LineGraph dataSet={dataSet} xLegend="Years" yLegend="weight (in tonnes)" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Waste;
