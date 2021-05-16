import React, { Component } from "react";
import "./impact.css";
import ".././App.css";
import TreeExample from "../components/tree/TreeExample"
// import Typography from "@material-ui/core/Typography";
// import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import Link from "@material-ui/core/Link";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }
export class impact_classification extends Component {
  render() {
    return (
      <body className="impact_body_html">
        <div className="impact_1">
        <div className="impact_fake_navigation">
          <p>
            <a href="/">&emsp; Home &ensp;</a>/ &ensp;
            <a href="/impact">Litter Info &ensp;</a>/ &ensp; Litter
            classification
          </p>
        </div>

        <div className="impact_menu">
          <p><a href="#classification_title">Litter Classification</a></p>
          <hr></hr>
          <p><a href="#classification_summary">What is garbage classification?</a></p>
          <hr></hr>
          <p><a href="#classification1">Reduce pollution</a></p>
          <hr></hr>
          <p><a href="#classification2">Reduce landfill</a></p>
          <hr></hr>
          <p><a href="#classification3">Utilise renewable waste</a></p>
          <hr></hr>
          <p><a href="#classification4">Develop effective disposal habits</a></p>
          <hr></hr>
          <p><a href="#tree">Recycling tree</a></p>
          <hr></hr>
        </div>
</div>

        <div className="impact_details">
          <div id="classification_title" className="impact_jump"></div>
          <div className="impact_article_flex">
            <div className="impact_article_container contain1140">
              <div className="impact_article_title">
                <h1> Litter Classification </h1>
              </div>

              <div className="impact_video_div">
                <iframe className="impact_video" src="https://www.youtube.com/embed/6jQ7y_qQYUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div id="classification_summary" className="impact_jump"></div>
              <div className="impact_article_body">
                <h4>What is garbage classification?</h4>
                <div className="impact_article_right">
                  <div className="impact_img_div">
                    <img
                      src="../../images/impact/impact_classification.jpg"
                      className="impact_img"
                    />
                  </div>
                </div>
                <p className="impact_article_left">
                  Garbage classification is a method to organise garbage into different categories by sorting and recycling. It can help to stop the action of littering before it happens by improving garbage disposal habits of people. Classification is done using different resource utilisation and disposal methods according to the amount and composition of waste generated. In Australia, garbage is classified into compostable, recyclable, and non-recyclable garbage.
              </p>


              </div>
              <div className="clear_float"></div>
              <div className="impact_article_body">
                <h4>The benefits and significance of garbage sorting:</h4>
                <div id="classification1" className="impact_jump"></div>
                <h4>Reduce pollution</h4>
                <div className="impact_article_right">
                  <div className="impact_img_div">
                    <img
                      src="../../images/Q3.jpg"
                      className="impact_img"
                    />
                  </div>
                </div>
                <p className="impact_article_left">
                  Some litter can contain toxic substances that can cause harm to health of people. Even if this litter gets disposed of by stacking or buried in landfills away from residential places using modern technology, it is difficult to prevent it from releasing harmful chemicals to enter the ecosystem. This can cause soil and water pollution and affect health of people. Hence, garbage classification can enable to sort this kind of garbage so that proper disposal methods are used for them.
              </p>


              </div>
              <div className="clear_float"></div>
              <div className="impact_article_body">
                <div id="classification2" className="impact_jump"></div>
                <h4>Reduced use of landfill</h4>
                <div className="impact_article_right">
                  <div className="impact_img_div">
                    <img
                      src="../../images/figure7.jpg"
                      className="impact_img"
                    />
                  </div>
                </div>
                <p className="impact_article_left">
                  Garbage disposal methods like landfill and garbage stacking occupy land resources. Moreover, garbage from landfills can get blown by wind and end up as litter on beaches or into water bodies. In addition, some substances from domestic garbage cannot be easily degraded that cause the land to get seriously eroded. Therefore, sorting garbage, separating degradable and non-degradable materials, and setting up a special recycling station for non-degradable materials can greatly reduce the pollution of the environment and cost of garbage disposal.
              </p>

              </div>
              <div className="clear_float"></div>
              <div className="impact_article_body">
                <div id="classification3" className="impact_jump"></div>
                <h4>Utilise renewable waste</h4>
                <div className="impact_article_right">
                  <div className="impact_img_div">
                    <img
                      src="../../images/impact/figure8.jpg"
                      className="impact_img"
                    />
                  </div>
                </div>
                <p className="impact_article_left">
                  The generation of litter is due to the fact that people discard resources they deem are unnecessary. If people dispose garbage efficiently by garbage sorting and recycling methods, it can be turned into treasure. For example, recycling of paper can reduce cutting of trees and protect forests. Recycling bio-waste like fruit and vegetable peels can be used as green fertilizers to make land more fertile.
              </p>



              </div>
              <div className="clear_float"></div>
              <div className="impact_article_body">
                <div id="classification4" className="impact_jump"></div>
                <h4>Develop effective disposal habits</h4>
                <div className="impact_article_right">
                  <div className="impact_img_div">
                    <img
                      src="../../images/impact/figure6.jpg"
                      className="impact_img"
                    />
                  </div>
                </div>
                <p className="impact_article_left">
                  Garbage classification can encourage people to save and reuse resources, develop effective garbage disposal habits and improve personal life. Places in Victoria are equipped with various types of garbage bins. However, many people find it hard to distinguish types of garbage causing irritation during garbage disposal and potentially leading to littering. By inculcating good disposal habits, people can dispose of garbage efficiently.
              </p>

                <table className="impact_table">
                  <tr className="impact_tr">
                    <th className="impact_th">Recycling</th>
                    <th className="impact_th">Material type</th>
                    <th className="impact_th">Classification/ composition</th>
                  </tr>

                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td">Construction and demolition</td>
                    <td className="impact_td">Asphalt</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Brick rubble/ whole</td>
                  </tr>
                  {/* <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Concrete</td>
                  </tr> */}
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Soil/sand</td>
                  </tr>

                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td">Glass</td>
                    <td className="impact_td">Container glass</td>
                  </tr>
                  {/* <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">CRT</td>
                  </tr> */}
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Mixed glass waste</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Sheet/ laminated glass</td>
                  </tr>

                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td">Metals</td>
                    <td className="impact_td">Roofing iron</td>
                  </tr>
                  {/* <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Incl cans</td>
                  </tr> */}
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Batteries</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Steel cans</td>
                  </tr>

                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td">Organics</td>
                    <td className="impact_td">Animal bedding</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Barks</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Food waste</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Garden organics</td>
                  </tr>

                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td">Paper/cardboard</td>
                    <td className="impact_td">Carboard/ packaging</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Newsprint/ magazines</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Liquid paper board</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Printing and writing paper</td>
                  </tr>

                  {/* <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td">Rubber</td>
                    <td className="impact_td">Crumb rubber</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Rubber granules</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Tread ends</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Uncured rubber scrap</td>
                  </tr> */}

                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td">Textiles</td>
                    <td className="impact_td">Carpet</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Clothing</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Industrial textiles</td>
                  </tr>
                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td"></td>
                    <td className="impact_td">Mixed textile waste</td>
                  </tr>

                  <tr className="impact_tr">
                    <td className="impact_td"></td>
                    <td className="impact_td">Plastics</td>
                    <td className="impact_td">All plastics</td>
                  </tr>
                </table>
                <div className="clear_float"></div>
                <div id="tree" className="impact_jump"></div>
                <div className="impact_tree">
                <h4>Recycling tree</h4>
                <p className="">
                  Click the button, then the tree will show you the classification information.
              </p>
                  <TreeExample />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="clear_float"></div>

      </body>
    );
  }
}

export default impact_classification;
