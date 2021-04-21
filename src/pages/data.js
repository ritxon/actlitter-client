import React, { Component, useState } from "react";
import LineGraph from "../components/LineGraph";
import Button from "../components/utils/Button";

import "./data.css";

const Data = () => {

  let fullData = [
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
			id: "public_litter_bins",
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
			id: "commingled_recycling",
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

	const [dataSet, setDataSet] = useState(fullData)
  
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
			id: "public_litter_bins",
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
			id: "commingled_recycling",
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

	return (
		<div className="data-container">
			<Button styleBtn="primary quiz-btn" text="Well Disposed" onClick={() => showWellDisposed()} />
      <Button styleBtn="primary quiz-btn" text="Bad Disposed" onClick={() => showBadDisposed()} />
      <Button styleBtn="primary quiz-btn" text="All Data" onClick={() => showAllData()} />
			<LineGraph dataSet={dataSet} xLegend="Years" yLegend="weight (in tonnes)" />;
		</div>
	);
};

export default Data;
