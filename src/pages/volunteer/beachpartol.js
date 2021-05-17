import React, { Component } from "react";
import Flip_card from "../../components/flip_card/flip_card";
import Flip_card_blue from "../../components/flip_card/flip_card_blue";
import Flip_card_pink from "../../components/flip_card/flip_card_pink";
import Transition from "../../components/trans_page/transition";
import Transition_cards from "../../components/trans_page/transition_2_cards";

export class beachpartol extends Component {
  render() {
    return (
      <div className="volunteer">
        {/* place */}
        <div className="volunteer_back_white">
          <div className="vol_impact_fake_navigation">
            <p>
              <a href="/">&emsp; Home &ensp;</a>/ &ensp;
            <a classname="bold" href="/volunteer">
                Volunteer Organizations &ensp;
            </a>
            / &ensp; BeachPatrol
          </p>
          </div>
        </div>
        <div className="volunteer_bluex">
          {/* Details */}
          <div className="volunteer_back_white">
            <div className="volunteer_part">
              <div className="volunteer_left">
                <div>
                  <img
                    src="../../images/volunteer/beach-patrol_logo.jpg"
                    className="volunteer_logo"
                  />
                </div>
              </div>
              <div className="volunteer_right">
                <div className="volunteer_title">
                  <h1>BEACHPATROL</h1>
                </div>
                <p className="organization_details">
                BeachPatrol is a volunteer group started in 2010 in Melbourne that aims to improve cleanliness of beaches in Melbourne. BeachPatrol covers approximately 50 postcode areas in Melbourne and conducts one activity in each area every month to pick litter from beaches, streets or parks. It collects litter data from these activities and uses it to raise awareness of littering as well as work with the government to provide solutions.
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear_float"></div>

        {/* Key Facts */}
        <div className="volunteer_inter_fats">
          <div className="volunteer_tage">
            <h1>KEY FACTS</h1>
          </div>
          <div className="volunteer_key_facts">
            <p className="organization_details">
              <img
                src="../../images/volunteer/fun-fact.png"
                className="volunteer_fun_fact"
              ></img>{" "}
              BeachPatrol has conducted 359 Cigarette Butt Surveys and collected
              568,555 cigarettes during their clean-up activities!
            </p>
            <p className="organization_details">
              <img
                src="../../images/volunteer/fun-fact.png"
                className="volunteer_fun_fact"
              ></img>{" "}
              BeachPatrol has started Love Our Street (LOS) initiative to clean
              a street in Melbourne to prevent litter from getting into creeks
              and canals or get blown to beaches.
            </p>
            <p className="organization_details">
              <img
                src="../../images/volunteer/fun-fact.png"
                className="volunteer_fun_fact"
              ></img>{" "}
              BeachPatrol has enlisted beaches like Brighton, Frankston etc and
              streets around Melbourne for volunteers to participate in clean-up
              activities.
            </p>
            <p className="organization_details">
              <img
                src="../../images/volunteer/fun-fact.png"
                className="volunteer_fun_fact"
              ></img>{" "}
              BeachPatrol has collected 90,000 kgs of rubbish that constitute
              around 33000 shopping bags of rubbish!
            </p>
          </div>
        </div>

        {/* Key Figures */}
        <div className="volunteer_back_white">
          <div className="volunteer_blue">
            <div className="volunteer_tage">
              <h1>KEY FIGURES</h1>
            </div>

            <div className="volunteer_cards">
              <div className="volunteer_one_card">
                <Flip_card_blue
                  front_title="NUMBER OF VOLUNTEERS"
                  src="../../images/volunteer/volunteer.svg"
                  front_num="3000"
                  front_text="people"
                  back_details=" BeachPatrol has 30 groups with over 3000 volunteers who can participate in events held in a region covering over 150 kms of Port Phillip Bay beaches and streets."
                />
              </div>

              <div className="volunteer_one_card">
                <Flip_card_blue
                  front_title="AMOUNT OF LITTER"
                  src="../../images/volunteer/litter.svg"
                  front_num="92473"
                  front_text="kgs"
                  back_details="By this year, BeachPatrol has picked 92473 kgs of litter from beaches, streets and parks!"
                />
              </div>

              <div className="volunteer_one_card">
                <Flip_card_blue
                  front_title="NUMBER OF BAGS"
                  src="../../images/volunteer/garbage.svg"
                  front_num="32976"
                  front_text="bags"
                  back_details="BeachPatrol used 32976 shopping bags until now to put in the huge amount of collected litter!"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="clear_float"></div>
        <div className="volunteer_previous_div">
          <div className="volunteer_tage">
            <h1>PREVIOUS EVENTS</h1>
          </div>
          <div className="previous_event">
            <div className="previous_list">
              <input type="radio" name="r" id="r1" defaultChecked ></input>
              <input type="radio" name="r" id="r2"></input>

              {/* previous 1 */}
              <div className="previous_trans s1">
                <div className="previous_left">
                  <label for="r2" class="bar">
                    <img
                      src="../../images/gallery_button_left.png"
                      className="previous_trans_img"
                    ></img>
                  </label>
                </div>
                <div className="previous_container">
                  <Transition_cards
                    title="Port Melbourne New Beach, Victoria"
                    text="On 3rd March 2021, 2 people cleaned New Beach in Port Melbourne and picked different litter items like plastics of different sizes, food wrappers, straws, cigarette butts, fishing items etc."
                    front_title="AMOUNT OF LITTER"
                    front_text="1"
                    front_text2="kg"
                    pink_front_title="TOTAL LITTER ITEMS"
                    pink_front_text="970"
                    pink_front_text2="items"
                  />
                </div>
                <div className="previous_right">
                  <label for="r2" class="bar">
                    <img
                      src="../../images/gallery_button_right.png"
                      className="previous_trans_img"
                    ></img>
                  </label>
                </div>
              </div>

              {/* previous 2 */}
              <div className="previous_trans s2">
                <div className="previous_left">
                  <label for="r1" class="bar">
                    <img
                      src="../../images/gallery_button_left.png"
                      className="previous_trans_img"
                    ></img>
                  </label>
                </div>
                <div className="previous_container">
                  <Transition_cards
                    title="Frankston Pier, Victoria"
                    text="On 16th January 2021, 14 people volunteered to clean up the Frankston beach in 1 hour and collected 14 bags of rubbish containing items like glass and plastic bottles as well as metal cans."
                    front_title="AMOUNT OF LITTER"
                    front_text="10"
                    front_text2="kgs"
                    pink_front_title="TOTAL LITTER ITEMS"
                    pink_front_text="40"
                    pink_front_text2="items"
                  />
                </div>
                <div className="previous_right">
                  <label for="r1" class="bar">
                    <img
                      src="../../images/gallery_button_right.png"
                      className="previous_trans_img"
                    ></img>
                  </label></div>
              </div>
            </div>
          </div>


          {/* Junp button */}
          <div className="volunteer_button_div">
            <div className="volunteer_button">
              <p className="">
              This webpage is only for educational and informational purpose. 
              It is non-profitable and copyrights go to the respective volunteering organisation. </p><p>
              Click the link to go to source ：
                            <a target="blank" href="https://www.beachpatrol.com.au/">https://www.beachpatrol.com.au/</a>
              </p>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default beachpartol;
