import React, { Component } from 'react'
import Flip_card from "../../components/flip_card/flip_card"
import Flip_card_blue from "../../components/flip_card/flip_card_blue"
import Flip_card_pink from "../../components/flip_card/flip_card_pink"
import Transition from "../../components/trans_page/transition"
import Transition_cards from "../../components/trans_page/transition_2_cards"

export class oceancrusaders extends Component {
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
                        / &ensp; OCEAN CRUSADERS
                    </p>
                </div>
                <div className="volunteer_bluex">


                    {/* Details */}
                    <div className="volunteer_part">
                        <div className="volunteer_left">
                            <div>
                                <img
                                    src="../../images/volunteer/oceancrusaders_logo.png"
                                    className="volunteer_logo"
                                />
                            </div>
                        </div>
                        <div className="volunteer_right">
                            <div className="volunteer_title">
                                <h1>OCEAN CRUSADERS</h1>
                            </div>
                            <p className="organization_details">
                            Ocean Crusaders is a charity organisation focused on cleaning Australian waterways on a large scale to tackle the issue of litter damage on wildlife. The organisation drives the Paddle Against Plastic Campaign that involves paddlers who aim to keep waterways, beaches and ocean safe and clean. Moreover, Ocean Crusaders works together with government organisations and corporations to reduce the amount of litter from Australian waters.

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
                                    className="volunteer_fun_fact"></img>  Ocean Crusaders started the campaign Paddle Against Plastic on 29th September when paddlers Ian Thomson, Luke and Tris Mairs and Kyle Rose paddled a distance of 120 km to raise awareness about plastic impact on oceans.
                    </p>
                        <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  In September 2017, 72 volunteers picked 660 kgs of litter from Green Island, Queensland in one morning!

                    </p>
                        <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  Ocean Crusaders have conducted clean-up activities all over Australia from Darwin, Northern Territory to Hobart, Tasmania!

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
                                front_title="VOLUNTEERS FOR MOONEE PONDS"
                                src="../../images/volunteer/volunteer.svg"
                                front_num="122"
                                front_text="people"
                                back_details="122 volunteers participated in the Moonee Ponds Creek clean up organised by Ocean Crusaders. Half of the volunteers collected litter from the river in bags and the other half stayed on the riverbank to collect the bags once they were full."
                            />
                        </div>


                        <div className="volunteer_one_card">
                            <Flip_card_blue
                                front_title="LITTER COLLECTED IN MOONEE POND"
                                src="../../images/volunteer/litter.svg"
                                front_num="1157.45"
                                front_text="kg"
                                back_details="The amount of garbage collected in the Moonee Ponds Creek clean-up weighed 1157.45 kg!"
                            />
                        </div>


                        <div className="volunteer_one_card">
                            <Flip_card_pink
                                front_title="NUMBER OF BAGS"
                                src="../../images/volunteer/garbage.svg"
                                front_num="179"
                                front_text="bags"
                                back_details="For the Moonee Ponds Creek clean-up, the large amount of litter took 179 number of bags for collection."
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
                                        title="Dog Beach, Queensland"
                                        text="In August 2017, a group of volunteers cleaned Dog Beach and collected a large amount of litter items mostly comprising plastic bags, plastic and glass bottles, and metal cans."
                                        front_title="NUMBER OF VOLUNTEERS"
                                        front_text="26"
                                        front_text2="people"
                                        pink_front_title="AMOUNT OF LITTER"
                                        pink_front_text="112"
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
                                    <Transition title="Coolum Beach, Queensland" 
                                    text="In June 2017, 18 volunteers from Paddle Against Plastic campaign cleaned up Upper Stumers Creek in Coolum. They collected 107 kg of litter items comprising plastic bags, plastic bottles, aluminium cans and polystyrene items." 
                                    src="../../images/volunteer/Coolum_Beach.jpg" />
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
                            <a target="blank" href="https://oceancrusaders.org/">Go to website</a>
                        </font>
                    </div>
                </div>
            </div>
        )
    }
}

export default oceancrusaders
