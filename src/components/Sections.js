import React, { Component } from "react";
import SectionItem from "./SectionItem";
import "./sections.css";

export class Sections extends Component {
  render() {
    return (
      <div className="sections">
        <div className="sections__container">
          <ul className="sections__items">
            <SectionItem
              src="images/img-1.jpg"
              text="Litter can have an adverse impact on health of people as well as animals. Inefficient litter disposal can create unhygienic living conditions, block drainage systems and spread diseases. Litter can be injurious to Australian wildlife due to ingestion or entanglement that can lead to suffocation, drowning and maiming."
              path="/login"
            />
            <SectionItem
              src="images/img-2.jpg"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam? 
                          "
              label="Label"
              path="/login"
            />

            <SectionItem
              src="images/img-9.jpg"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam?"
              path="/login"
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default Sections;
