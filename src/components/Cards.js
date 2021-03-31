import React, { Component } from "react";
import CardItem from "./CardItem";
import "./cards.css";

export class Cards extends Component {
  render() {
    return (
      <div className="cards">
        <h1>LITTER INFORMATION</h1>
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
                src="images/img-9.jpg"
                text="Impact on Environment. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam?"
                label="Impact on Environment "
                path="/login"
              />
              <CardItem
                src="images/img-7.jpg"
                text="Litter can have an adverse impact on health of people as well as animals. Inefficient litter disposal can create unhygienic living conditions, block drainage systems and spread diseases. Litter can be injurious to Australian wildlife due to ingestion or entanglement that can lead to suffocation, drowning and maiming."
                label="Impact on Human & Animals"
                path="/login"
              />
              <CardItem
                src="images/img-6.jpg"
                text="Litter Classfication. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam?"
                label="Litter Classification"
                path="/login"
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
