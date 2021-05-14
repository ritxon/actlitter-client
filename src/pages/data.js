import React, { Component, useState } from "react";
import SectionItem from "../components/SectionItem";

const Data = () => {
	return (
		<>
			<div className="sections-head">
				<h1>Litter Visualisation </h1>
			</div>
			<SectionItem
				src="images/figure4.png"
				title="Do you know how huge the amount of different types of waste collected each year is?"
				text="This page shows amount of collected waste in Melbourne. It provides a visualisation about amount of waste collected from houses and garbage bins in public areas as well as dumped waste and provides interesting insights from it.
			   "
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
