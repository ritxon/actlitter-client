import React, { Component } from "react";
import "./impact.css";
import ".././App.css";

export class impact_enviorment extends Component {
  render() {
    return (
      <body>
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
          <p><a href="#envirment1">1. Affect local tourism.</a></p>
          <hr></hr>
          <p><a href="#envirment2">2. Cause a fire.</a></p>
          <hr></hr>
          <p><a href="#envirment3">3. Soil pollution.</a></p>
          <hr></hr>
          <p><a href="#envirment4">4. Water pollution.</a></p>
          <hr></hr>
          <p><a href="#envirment5">5. Air pollution.</a></p>
          <hr></hr>
        </div>

        {/* Article */}
        <div className="impact_details">
        <div id="envirment_title" className="impact_jump"></div>
        <div className="impact_article_flex">
          <div className="impact_article_container contain1140">
            <div className="impact_article_title">
              <h1> Impact on environment</h1>
              
            </div>
            <div className="clear_float"></div>
            <div className="impact_video_div">
            <iframe  className="impact_video" src="https://www.youtube.com/embed/OJEQaVT45XA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                Littering will have a very bad impact on the environment.
                Whether it is littering on the street, in the trash can, or
                throwing the garbage in the square or park, or even directly
                next to the water. Garbage may be blown into or washed into
                rivers, woodlands, oceans, lakes and streams. The toxic or
                chemical substances in them will eventually pollute waterways,
                forest areas, soil or aquatic environment. For example,
                cigarette butts contain toxic substances such as arsenic, which
                can pollute soil and water. There is also a Pacific garbage dump
                related to ocean plastics on the earth, and marine life is also
                harmed. In addition, garbage will continuously emit odors and
                toxic chemical vapors, which will also cause air quality to
                decline.
              </p>
            </div>
            <div className="clear_float"></div>
            {/* 1 */}
            <div className="impact_article_body">

              <div id="envirment1" className="impact_jump"></div>
              <h4>1. Affect local tourism and urban environment.</h4>
              <div className="impact_article_right">
                <div className="impact_img_div">
                  <img
                    src="../../images/impact/figure4.jpg"
                    className="impact_img"
                  />
                </div>
              </div>
              <p className="impact_article_left">
                The littered area looks rough and degrades the aesthetic value
                of the surrounding environment. Secondly, it will affect
                people's reputation for the city and local tourism, because the
                garbage on the ground will make the urban area and the roadside
                look disgusting. Melbourne is also a tourist resort, so keeping
                the city environment clean can not only improve the happiness of
                local residents, but also attract foreign tourists and enhance
                the tourism economy.
              </p>
            </div>
            <div className="clear_float"></div>
            {/* 2 */}
            <div className="impact_article_body">
              <div id="envirment2" className="impact_jump"></div>
              <h4>2. Increased possibility of fire</h4>
              <div className="impact_article_right">
                <div className="impact_img_div">
                  <img
                    src="../../images/impact/figure5.jpg"
                    className="impact_img"
                  />
                </div>
              </div>
              <p className="impact_article_left">
                Cigarette butts are the easiest garbage that people throw away
                at will, but people usually ignore the potential threats caused
                by littering. It may cause fires due to dry air or igniting
                combustibles. Therefore, smokers should pay special attention to
                how to deal with the problem of cigarette butts and try to throw
                them in the cigarette extinction box. If there are only ordinary
                trash cans, make sure that the cigarette butts are completely
                extinguished before throwing them into the trash can. Don't
                throw away cigarette butts at will.
              </p>
            </div>
            <div className="clear_float"></div>
            {/* 3 */}
            <div className="impact_article_body">
              <div id="envirment3" className="impact_jump"></div>
              <h4>3. Soil pollution</h4>
              <div className="impact_article_right">
                <div className="impact_img_div">
                  <img
                    src="../../images/impact/environment4.jpg"
                    className="impact_img"
                  />
                </div>
              </div>
              <p className="impact_article_left">
                Soil pollution is one of the adverse effects of littering.
                Glass, metals, organics, etc. may contain harmful substances,
                such as batteries. Since batteries contain many harmful
                substances, if they are thrown away at will, they may seriously
                pollute the soil and damage the groundwater.
              </p>
            </div>
            <div className="clear_float"></div>
            {/* 4 */}
            <div className="impact_article_body">
              <div id="envirment4" className="impact_jump"></div>
              <h4>4. Water pollution</h4>
              <div className="impact_article_right">
                <div className="impact_img_div">
                  <img
                    src="../../images/impact/environment6.jpg"
                    className="impact_img"
                  />
                </div>
              </div>
              <p className="impact_article_left">
                Littering can cause water pollution in many ways. When people
                throw rubbish directly into the water, rivers and lakes will be
                polluted. In addition, rubbish on the road will flow into the
                water due to wind and water power, causing pollution.
              </p>
            </div>

            <div className="clear_float"></div>
            {/* 5 */}
            <div className="impact_article_body">
              <div id="envirment5" className="impact_jump"></div>
              <h4>5. Air pollution</h4>
              <div className="impact_article_right">
                <div className="impact_img_div">
                  <img
                    src="../../images/impact/environment5.jpg"
                    className="impact_img"
                  />
                </div>
              </div>
              <p className="impact_article_left">
                People often burn garbage to remove it. However, during the
                combustion process, harmful substances contained in the garbage
                will enter the air, causing air pollution. Especially when
                burning plastics, many toxic gases and particulates emitted will
                have a negative impact on the human respiratory system.
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
