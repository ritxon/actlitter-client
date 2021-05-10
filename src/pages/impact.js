import React, { Component } from "react";
import SectionItem from "../components/SectionItem";

export class impact extends Component {
  render() {
    return (
      <>
				<div className="sections-head">
					<h1>Litter Information </h1>
				</div>
				<SectionItem
					src="images/figure2.jpg"
					title="Impact on Enviroment"
					text="Littering can have major influence on scenic beauty of the environment. It can contaminate soil and pollute water. Burning of litter can increase emission of harmful gases leading to air pollution."
					path="/impact_enviorment"
          img="img-enviroment"
          align="left"
          />

				<SectionItem
					src="images/figure2.jpg"
					title="Impact on Human and Animals"
					text="Litter can have an adverse impact on health of people as well as animals.
          Inefficient litter disposal can create unhygienic living conditions, block drainage 
          systems and spread diseases. Litter can be injurious to Australian wildlife due to 
          ingestion or entanglement that can lead to suffocation, drowning and maiming."
					label="Label"
					path="/impact_human_animal"
          img="img-animals"
          align="right"
          />

				<SectionItem
					src="images/figure3.jpg"
					title="Litter Classification"
					text="The benefits of garbage sorting are obvious. Garbage classified collection can reduce
          the amount of garbage disposal and treatment equipment, reduce treatment costs, and reduce the
          consumption of land resources. It has social, economic, and ecological benefits."
					path="/impact_classification"
          img="img-classification"
          align="left"
				/>
			</>
    );
  }
}

export default impact;
