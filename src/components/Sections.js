import React, { Component } from "react";
import SectionItem from "./SectionItem";
import "./sections.css";

export class Sections extends Component {
  render() {
    return (
      <div className="sections">
        <div className="sections-head">
          <h1>Litter Information </h1>
        </div>
        <div className="sections-container">
          <ul className="sections-items">
            <SectionItem
              src="images/img-1.jpg"
              title="Impact on Enviroment"
              text="reet, in the trash can, or throwing the garbage in the square or park, or even directly next to the water. Garbage may be blown into or washed into rivers, woodlands, oceans, lakes and streams. The toxic or chemical substances in them will eventually pollute waterways, forest areas, soil or aquatic environment. For example, cigarette butts"
              path="/impact_enviorment"
            />

            <SectionItem
              src="images/img-2.jpg"
              title="Impact on Human & Animals"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam? 
                          "
              label="Label"
              path="/impact_human_animal"
            />

            <SectionItem
              src="images/img-9.jpg"
              title="Litter Classification"
              text="The benefits of garbage sorting are obvious. Garbage classified collection can reduce the amount of garbage disposal and treatment equipment, reduce treatment costs, and reduce the consumption of land resources. It has social, economic, and ecological benefits.
"
              path="/impact_classification"
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default Sections;
