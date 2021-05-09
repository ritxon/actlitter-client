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
					src="images/figure2.png"
					title="Impact on Enviroment"
					text="Littering can have a major influence on scenic beauty. It can contaminate soil and pollute water. Litter like improperly extinguished cigarette butts can cause fire and increase emission of harmful gases leading to air pollution."
					path="/impact_enviorment"
          img="img-enviroment"
          align="left"
          />

				<SectionItem
					src="images/figure2.png"
					title="Impact on Human and Animals"
					text="Litter can have an adverse impact on the health of humans and animals. Inefficient litter disposal can create unhygienic living conditions, block sewage systems and spread diseases. Australian wildlife can ingest or get entangled in litter. This can be injurious to their health causing suffocation, drowning or maiming."
					label="Label"
					path="/impact_human_animal"
          img="img-animals"
          align="right"
          />

				<SectionItem
					src="images/figure3.jpg"
					title="Litter Classification"
					text="There are various benefits of classifying garbage. Garbage classification can enable more efficient garbage disposal, reduce treatment costs and consumption of land resources. This can have social, economic, and ecological benefits."
					path="/impact_classification"
          img="img-classification"
          align="left"
				/>
			</>
    );
  }
}

export default impact;
