import React, { Component } from 'react'
import Flip_card from "../../components/flip_card/flip_card"
import Flip_card_blue from "../../components/flip_card/flip_card_blue"
import Flip_card_pink from "../../components/flip_card/flip_card_pink"
import Transition from "../../components/trans_page/transition"
import Transition_cards from "../../components/trans_page/transition_2_cards"

export class yarra_river_keeper extends Component {
    render() {
        return (
            <div className="volunteer">
                {/* place */}
                <div className="vol_impact_fake_navigation">
                    <p>
                        <a href="/">&emsp; Home &ensp;</a>/ &ensp;
                        <a classname="bold" href="/volunteer">
                            Volunteer Organizations &ensp;
                        </a>
                        / &ensp; Yarra Riverkeeper Association
                    </p>
                </div>
                <div className="volunteer_bluex">


                    {/* Details */}
                    <div className="volunteer_part">
                        <div className="volunteer_left">
                            <div>
                                <img
                                    src="../../images/volunteer/yarra-riverkeeper-logo-registered-trademark.jpg"
                                    className="volunteer_logo"
                                />
                            </div>
                        </div>
                        <div className="volunteer_right">
                            <div className="volunteer_title">
                                <h1>YARRA RIVERKEEPER ASSOCIATION</h1>
                            </div>
                            <p className="organization_details">
                            Yarra Riverkeeper Association is a non-profit community organisation formed in 2004. It is a member of the International Waterkeeper movement and aims to protect the Yarra river from pollution, habitat fragmentation and unsustainable developments near the riverbanks. To do so, the organisation works closely with government organisations, NGOs and keeps various events for volunteers to participate in to protect the river and maintain its beauty.
                        </p>
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
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  The top item collected at community events during the Yarra Speed Blitz project was polystyrene with a total of 6966 litter items!

                    </p>
                        <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  The Yarra Riverkeeper Association organises events like community clean-ups as well as school excursions that involve clean-up of reserves or parklands close to the Yarra River.

                    </p>
                        <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  5051 participants were involved for Yarra Riverkeeper’s Litter and Flows project. Some volunteers were involved in clean-ups while others went for community presentations to learn about litter impact on Yarra.

                    </p>
                    <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  Yarra Riverkeeper has removed around 38,000 kgs of waste and polystyrene contaminated soil from Yarra’s riverbanks and riverbed!

                    </p>
                    </div>

                </div>
                {/* Key Figures */}
                <div className="volunteer_blue">
                    <div className="volunteer_tage">
                        <h1>KEY FIGURES</h1>
                    </div>

                    <div className="volunteer_cards">
                        <div className="volunteer_one_card">
                            <Flip_card
                                front_title="NUMBER OF VOLUNTEERS"
                                front_num="2042"
                                front_text="people"
                                back_details="Yarra Riverkeeper has an estimated number of 2042 volunteers to help with activities involving cleaning of litter from the river. (Group of people Emoji)"
                            />
                        </div>


                        <div className="volunteer_one_card">
                            <Flip_card_blue
                                front_title="AMOUNT OF LITTER"
                                front_num="38,202"
                                front_text="kg"
                                back_details="Yarra Riverkeeper volunteers have removed 38,202 kg of rubbish from the river! (Clean river/ Garbage bin Emoji)"
                            />
                        </div>


                        <div className="volunteer_one_card">
                            <Flip_card_pink
                                front_title="Microplastics "
                                front_num="4889"
                                front_text="pieces"
                                back_details="Microplastics formed the bulk of litter and accounted for 77% (4,889 pieces) of the plastic load in the Yarra."
                            />
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
                            <input type="radio" name="r" id="r1" checked></input>
                            <input type="radio" name="r" id="r2"></input>

                            {/* previous 1 */}
                            <div className="previous_trans s1">
                                <div className="previous_left">
                                    <label for="r2" class="bar">
                                    </label>
                                </div>
                                <div className="previous_container">
                                    <Transition_cards
                                        title="School and community clean-ups"
                                        text="61 community events were held over 3 years during the course of this project with more than 2000 volunteers involved and around 8000 kg of waste removed from Yarra’s waterways."
                                        front_title="NUMBER OF VOLUNTEERS"
                                        front_text="2074"
                                        front_text="people"
                                        pink_front_title="AMOUNT OF LITTER"
                                        pink_front_text="7854.5"
                                        pink_front_text2="kg"
                                    />

                                </div>
                                <div className="previous_right">
                                    <label for="r2" class="bar">
                                        <img src="../../images/gallery_button_right.png" className="previous_trans_img"></img>
                                    </label>
                                </div>
                            </div>

                            {/* previous 2 */}
                            <div className="previous_trans s2">
                                <div className="previous_left">
                                    <label for="r1" class="bar"><img src="../../images/gallery_button_left.png" className="previous_trans_img"></img></label>
                                </div>
                                <div className="previous_container">
                                <Transition_cards
                                        title="Herring Island, Victoria "
                                        text="On 22nd April Yarra Riverkeeper organised an event where group members and the community were invited to clean the river on land or on a kayak."
                                        front_title="NUMBER OF VOLUNTEERS"
                                        front_text="172"
                                        front_text="people"
                                        pink_front_title="AMOUNT OF LITTER"
                                        pink_front_text="476.5"
                                        pink_front_text2="kg"
                                    />
                                </div>
                                <div className="previous_right">

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Junp button */}
                <div className="volunteer_button_div">
                    <div className="volunteer_button">
                        <font className="">
                            <a target="blank" href="https://yarrariver.org.au/">Go to website</a>
                        </font>
                    </div>
                </div>
            </div>
        )
    }
}

export default yarra_river_keeper
