import React, { Component } from "react";
import CardItem from "./CardItem";
import "./cards.css";

export class Cards extends Component {
  render() {
    return (
      <div className="cards">
        <div className="cards-container">
          <div className="cards-wrapper">
            {/* <ul className="cards-items">
              <CardItem
                src="images/img-1.jpg"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam?"
                label="Label"
                path="/login"
              />
              <CardItem
                src="images/img-2.jpg"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam?"
                label="Label"
                path="/login"
              />
            </ul> */}
            <ul className="cards-items">
              <CardItem
                src="images/impact_enviorment.jpg"
                // text="
                // Littering can have major influence on scenic beauty of the environment. It can contaminate soil and pollute water. Burning of litter can increase emission of harmful gases leading to air pollution.
                // "
                text=""
                label="Impact on Environment "
                path="/impact_enviorment"
              />
              <CardItem
                src="images/figure2.png"
                // text="Litter can have an adverse impact on health of people as well as animals. Inefficient litter disposal can create unhygienic living conditions, block drainage systems and spread diseases. Litter can be injurious to Australian wildlife due to ingestion or entanglement that can lead to suffocation, drowning and maiming."
                text=""
                label="Impact on Human & Animals"
                path="/impact_human_animal"
              />
              <CardItem
                src="images/figure3.jpg"
                // text="The benefits of garbage sorting are obvious. Garbage classified collection can reduce the amount of garbage disposal and treatment equipment, reduce treatment costs, and reduce the consumption of land resources. It has social, economic, and ecological benefits.
                // "
                text=""
                label="Litter Classification"
                path="/impact_classification"
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
