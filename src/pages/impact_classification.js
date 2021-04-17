import React, { Component } from "react";
import "./impact.css";
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
      <div>
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
          <p><a href="#classification1">1. Affect local tourism.</a></p>
          <hr></hr>
          <p><a href="#classification2">2. Cause a fire.</a></p>
          <hr></hr>
          <p><a href="#classification3">3. Soil pollution.</a></p>
          <hr></hr>
          <p><a href="#classification4">4. Water pollution.</a></p>
          <hr></hr>
        </div>

        <div className="impact_details">
        <div id="classification_title" className="impact_jump"></div>
        <div className="impact_article_flex">
          <div className="impact_article_container w">
            <div className="impact_article_title">
              <h1> Litter Classification </h1>
            </div>
            <div className="impact_article_body">
              <h4>What is garbage sorting?</h4>
              <div className="impact_article_right">
                <div className="impact_img_div">
                  <img
                    src="../../images/impact/impact_classification.jpg"
                    className="impact_img"
                  />
                </div>
              </div>
              <p className="impact_article_left">
                Garbage classification is to put garbage into different
                categories, and make it into resources through sorting,
                transportation and recycling. It is roughly classified according
                to the composition and amount of waste generated, combined with
                the resource utilization and disposal methods of local waste.
                For example, Germany is generally divided into paper, glass,
                metal, plastic, etc.; Australia is generally divided into
                compostable garbage, recyclable garbage, and non-recyclable
                garbage; Japan is generally divided into combustible garbage and
                non-combustible garbage.
              </p>


              </div>
              <div className="clear_float"></div>
              <div className="impact_article_body">
              <h4>The benefits and significance of garbage sorting:</h4>
              <div id="classification1" className="impact_jump"></div>
              <h4>1. Reduce environmental pollution</h4>
              <div className="impact_article_right">
                <div className="impact_img_div">
                  <img
                    src="../../images/Q3.jpg"
                    className="impact_img"
                  />
                </div>
              </div>
              <p className="impact_article_left">
                Modern garbage contains chemical substances, some of which can
                cause people's morbidity to increase. If the garbage is disposed
                of through landfill or stacking, even if the garbage is buried
                far away from the living place and the corresponding isolation
                technology is adopted, it is difficult to prevent the
                penetration of harmful substances, which will enter the entire
                ecosystem along with the circulation of the earth. , Pollution
                of water sources and land, through plants or animals, will
                eventually affect people's health.
              </p>


              </div>
              <div className="clear_float"></div>
              <div className="impact_article_body">
              <div id="classification2" className="impact_jump"></div>
              <h4>2. Save land resources</h4>
              <div className="impact_article_right">
                <div className="impact_img_div">
                  <img
                    src="../../images/figure7.jpg"
                    className="impact_img"
                  />
                </div>
              </div>
              <p className="impact_article_left">
                Garbage disposal methods such as landfill and garbage stacking
                occupy land resources, and landfills are all non-repairable
                places, that is, landfills cannot be re-used as living quarters.
                In addition, some substances in domestic garbage are not easily
                degraded, which makes the land seriously eroded. Sort garbage,
                separate recyclable and non-degradable materials, or set up a
                special recycling station for non-degradable materials. It will
                greatly reduce the pollution of garbage to the environment and
                the cost of garbage disposal.
              </p>

              </div>
              <div className="clear_float"></div>
              <div className="impact_article_body">
              <div id="classification3" className="impact_jump"></div>
              <h4>3. Utilization of renewable resources</h4>
              <div className="impact_article_right">
                <div className="impact_img_div">
                  <img
                    src="../../images/impact/figure8.jpg"
                    className="impact_img"
                  />
                </div>
              </div>
              <p className="impact_article_left">
                The generation of rubbish is due to the fact that people do not
                make good use of resources and discard the resources they do not
                use as rubbish. This way of discarding resources is impossible
                to estimate the loss of the entire ecosystem. Before garbage
                disposal, through garbage sorting and recycling, garbage can be
                turned into treasure. For example, recycling paper can protect
                forests and reduce the waste of forest resources; recycling
                bio-waste such as peels and vegetables can be used as green
                fertilizers to make the land more fertile .
              </p>



              </div>
              <div className="clear_float"></div>
              <div className="impact_article_body">
              <div id="classification4" className="impact_jump"></div>
              <h4>4. Improve people's values</h4>
              <div className="impact_article_right">
                <div className="impact_img_div">
                  <img
                    src="../../images/impact/figure6.jpg"
                    className="impact_img"
                  />
                </div>
              </div>
              <p className="impact_article_left">
                Garbage classification is the best solution and the best way to
                deal with garbage pollution. Garbage classification has become
                an inevitable path for the development of a country. Garbage
                classification can enable people to learn to save resources, use
                resources, develop good living habits, and improve personal
                quality. Although Melbourne’s houses are equipped with various
                types of trash bins, many people still cannot distinguish the
                types of trash, which also brings difficulties to trash disposal
              </p>

              {/* <table className="impact_table">
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
                <tr className="impact_tr">
                  <td className="impact_td"></td>
                  <td className="impact_td"></td>
                  <td className="impact_td">Concrete</td>
                </tr>
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
                <tr className="impact_tr">
                  <td className="impact_td"></td>
                  <td className="impact_td"></td>
                  <td className="impact_td">CRT</td>
                </tr>
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
                <tr className="impact_tr">
                  <td className="impact_td"></td>
                  <td className="impact_td"></td>
                  <td className="impact_td">Incl cans</td>
                </tr>
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
                  <td className="impact_td">Animal bedding/ motalities</td>
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

                <tr className="impact_tr">
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
                </tr>

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
              </table> */}
              <div>
            <img
                    src="../../images/impact/tree.png"
                    className="impact_img"
                  />
            </div>
            </div>
            </div>
            
          </div>
        </div>
        <div className="clear_float"></div>
            
      </div>
    );
  }
}

export default impact_classification;
