import React, { Component } from "react";
import "./impact.css";
import ".././App.css";

export class impact_enviorment extends Component {
  render() {
    return (
      <body className="impact_body_html">
        <div className="impact_1">
        <div className="impact_fake_navigation">
          <p>
            <a href="/">&emsp; Home &ensp;</a>/ &ensp;
            <a classname="bold" href="/impact">
              Litter Info &ensp;
            </a>
            / &ensp; Impact on enviorment
          </p>
        </div>

        <div className="impact_menu">
          <p><a href="#envirment_title">Impact on environment</a></p>
          <hr></hr>
          <p><a href="#envirment1">Affect tourism</a></p>
          <hr></hr>
          <p><a href="#envirment2">Cause a fire</a></p>
          <hr></hr>
          <p><a href="#envirment3">Soil pollution</a></p>
          <hr></hr>
          <p><a href="#envirment4">Water pollution</a></p>
          <hr></hr>
          <p><a href="#envirment5">Air pollution</a></p>
          <hr></hr>
        </div>
        </div>

        {/* Article */}
        <div className="impact_details">
          <div id="envirment_title" className="impact_jump"></div>
          <div className="impact_article_flex">
            <div className="impact_article_container contain1140">
              <div className="impact_article_title">
                <h1> Impact on Environment</h1>

              </div>
              <div className="clear_float"></div>
              <div className="impact_video_div">
              <iframe className="impact_video" src="https://www.youtube.com/embed/bPolMEUl34A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              {/* <div className="impact_article_right">
              <div className="impact_related impact_links ">
                <h2>Related Information</h2>
                <p>
                  <a href="/impact_human_animal">Impact on Human and Animals</a>
                  <br></br>
                  <a href="/impact_classification">Litter Classification</a>
                </p>
              </div>
            </div> */}

              <div className="impact_article_body">
                <div className="impact_article_right">
                  <div className="impact_img_div">
                    <img
                      src="../../images/impact/environment1.jpg"
                      className="impact_img"
                    />
                  </div>
                </div>
                <p className="impact_article_left">
                  Litter is waste that is incorrectly disposed or discarded at unsuitable locations. It can have a significant impact on the environment. Litter can be found on the street, in city squares, parks or beaches, and get blown or washed into rivers, lakes, creeks and oceans. It contains harmful substances that can pollute forest areas, soil and water bodies.
                </p>
              </div>
              <div className="clear_float"></div>
              {/* 1 */}
              <div className="impact_article_body">

                <div id="envirment1" className="impact_jump"></div>
                <h4>Affect tourism</h4>
                <div className="impact_article_right">
                  <div className="impact_img_div">
                    <img
                      src="../../images/impact/figure4.jpg"
                      className="impact_img"
                    />
                  </div>
                </div>
                <p className="impact_article_left">
                  Litter in popular tourist spots like city monuments, parks, beaches and sanctuaries can degrade their scenic view. It affects the reputation of the residents and local tourism as litter on the ground can make urban as well as countryside areas lose their aesthetic appeal. Melbourne is a city famous for its monuments, so keeping the city clean will not only improve the happiness of city residents, but also attract tourists and improve tourism economy.
              </p>
              </div>
              <div className="clear_float"></div>
              {/* 2 */}
              <div className="impact_article_body">
                <div id="envirment2" className="impact_jump"></div>
                <h4>Cause fire</h4>
                <div className="impact_article_right">
                  <div className="impact_img_div">
                    <img
                      src="../../images/impact/figure5.jpg"
                      className="impact_img"
                    />
                  </div>
                </div>
                <p className="impact_article_left">
                  Cigarette butts can cause fires due to dry air or igniting combustibles. Therefore, smokers should ensure to throw them in the cigarette extinction box. If there are only ordinary garbage bins, cigarette butts should be completely extinguished before throwing them into the bin.
              </p>
              </div>
              <div className="clear_float"></div>
              {/* 3 */}
              <div className="impact_article_body">
                <div id="envirment3" className="impact_jump"></div>
                <h4>Soil pollution</h4>
                <div className="impact_article_right">
                  <div className="impact_img_div">
                    <img
                      src="../../images/impact/environment4.jpg"
                      className="impact_img"
                    />
                  </div>
                </div>
                <p className="impact_article_left">
                  Soil pollution is one of the adverse effects of littering. Glass, metal, organics etc can contain substances that can reduce quality of soil. Batteries contain many harmful chemicals. If batteries seep into soil, they corrode and release harmful metals like mercury, lead and cadmium causing soil contamination. Moreover, cigarette butts contain toxic substances like arsenic that can contaminate soil and groundwater.
              </p>
              </div>
              <div className="clear_float"></div>
              {/* 4 */}
              <div className="impact_article_body">
                <div id="envirment4" className="impact_jump"></div>
                <h4>Water pollution</h4>
                <div className="impact_article_right">
                  <div className="impact_img_div">
                    <img
                      src="../../images/impact/environment6.jpg"
                      className="impact_img"
                    />
                  </div>
                </div>
                <p className="impact_article_left">
                  Littering can cause water pollution in many ways. When batteries containing harmful metals seep into soil, they can contaminate groundwater. When people throw rubbish directly into water, rivers, lakes and creeks can get polluted. In addition, rubbish on roads and pavements can be blown by wind into a water body leading to water pollution.
              </p>
              </div>

              <div className="clear_float"></div>
              {/* 5 */}
              <div className="impact_article_body">
                <div id="envirment5" className="impact_jump"></div>
                <h4>Air pollution</h4>
                <div className="impact_article_right">
                  <div className="impact_img_div">
                    <img
                      src="../../images/impact/environment5.jpg"
                      className="impact_img"
                    />
                  </div>
                </div>
                <p className="impact_article_left">
                  People often burn garbage to remove it. However, during their combustion, many harmful substances contained can enter the air causing air pollution. Burning of plastic leads to emission of toxic gases and particulates that can cause damage to the air atmosphere. Moreover, litter in parks and on pavements release an odour that can impact the surrounding environment.
              </p>

                {/* <div className="impact_src">
                <a
                  href="https://www.conserve-energy-future.com/causes-problems-solutions-littering.php"
                  className="impact_link"
                >
                  src:https://www.conserve-energy-future.com/causes-problems-solutions-littering.php
                </a>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="clear_float"></div>
      </body>
    );
  }
}

export default impact_enviorment;
