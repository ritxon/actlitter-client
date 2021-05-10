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
				title="Waste collected per year"
				text="Littering can have major influence on scenic beauty of the environment. It can contaminate soil and pollute water. Burning of litter can increase emission of harmful gases leading to air pollution."
				path="/data/waste"
				img="figure4"
				align="left"
			/>

			<SectionItem
				src="images/figure5.png"
				title="What is the most common location of litter by item?"
				text="Litter can have an adverse impact on health of people as well as animals.
			Inefficient litter disposal can create unhygienic living conditions, block drainage 
			systems and spread diseases. Litter can be injurious to Australian wildlife due to 
			ingestion or entanglement that can lead to suffocation, drowning and maiming."
				label="Label"
				path="/data/items"
				img="figure5"
				align="right"
			/>
		</>
	);
};

export default Data;
