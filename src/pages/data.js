import React, { Component, useState } from "react";
import SectionItem from "../components/SectionItem";

const Data = () => {
	return (
		<>
			<div className="sections-head">
				<h1>Litter Information </h1>
			</div>
			<SectionItem
				src="images/figure4.png"
				title="Do you know how huge the amount of different types of waste collected each year is?"
				text="The government needs to dispose of the rubbish that people throw away every year, and there is a lot of rubbish that is disposed incorrectly, resulting in an increase in the cost of rubbish disposal."
				path="/data/waste"
				img="figure4"
				align="left"
			/>

			<SectionItem
				src="images/figure5.png"
				title="Did you know that cigarettes butts are the most common kind of litter?"
				text="Cigarette butts are the highest littered item in Australia. Out of 24 billion cigarettes sold in Australia, around 7 billion are littered."
				label="Label"
				path="/data/items"
				img="figure5"
				align="right"
			/>
		</>
	);
};

export default Data;
