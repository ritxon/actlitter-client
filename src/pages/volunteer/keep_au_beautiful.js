import React, { Component } from 'react'
import Flip_card from "../../components/flip_card/flip_card"
import Flip_card_blue from "../../components/flip_card/flip_card_blue"
import Flip_card_pink from "../../components/flip_card/flip_card_pink"
import Transition from "../../components/trans_page/transition"
import Transition_cards from "../../components/trans_page/transition_2_cards"

export class keep_au_beautiful extends Component {
    render() {
        return (
            <div className="volunteer">
                <div className="vol_impact_fake_navigation">
                    <p>
                        <a href="/">&emsp; Home &ensp;</a>/ &ensp;
                        <a classname="bold" href="/volunteer">
                            Volunteer Organizations &ensp;
                        </a>
                        / &ensp; Keep Australia Beautiful
                    </p>
                </div>
                <div className="volunteer_bluex">
                    {/* place */}


                    {/* Details */}
                    <div className="volunteer_part">
                        <div className="volunteer_left">
                            <div>
                                <img
                                    src="../../images/volunteer/KAB_logo.jpg"
                                    className="volunteer_logo"
                                />
                            </div>
                        </div>
                        <div className="volunteer_right">
                            <div className="volunteer_title">
                                <h1>KEEP AUSTRALIA BEAUTIFUL</h1>
                            </div>
                            <p className="organization_details">
                                Keep Australia Beautiful (KAB) is a non-profit organization founded in 1968 that aims to achieve a litter-free and environmentally sustainable Australia. It is located in all states of Australia and provides a range of programs to educate Australian citizens about environmental sustainability and take action to reduce litter. Keep Australia Beautiful encourages involvement of volunteers by hosting clean-up events to pick up litter and reduce waste in the respective neighbourhoods.
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
                                    className="volunteer_fun_fact"></img>  Keep Australia Beautiful has a network of state or territory organisations like Keep Victoria Beautiful, KAB QLD, KAB NSW etc that are unique to that state and tailored to its regions accordingly.
                    </p>
                        <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  KAB also hosts Sustainable Cities Awards and Sustainable Communities – Tidy Towns Awards to celebrate actions taken towards sustainability by communities, businesses, educational institutions and councils in urban as well as rural parts of Australia.

                    </p>
                    <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  It drives a famous campaign called Do The Right Thing that aims to educate people to prevent throwing litter like organic waste and cigarette butts on the ground.

                    </p>
                    <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  The organisation has a special week-long event in August called Keep Australian Beautiful Week that has a unique theme each year.

                    </p>
                    <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  The organisation held a special campaign last year called Prevent The Spread to provide tips on how to reduce waste generated during the pandemic like beverage containers and used masks.

                    </p>


                    </div>

                </div>
                
                {/* <div className="volunteer_previous_div">
                    <div className="volunteer_tage">
                        <h1>Key Facts</h1>
                    </div>
                    <div className="previous_event">
                        <div className="previous_list">
                            <input type="radio" name="r" id="r1" checked></input>
                            <input type="radio" name="r" id="r2"></input>


                            <div className="previous_trans s1">
                                <div className="previous_left">
                                    <label for="r2" class="bar">
                                    </label>
                                </div>
                                <div className="previous_container">
                                    <Transition_cards
                                        title="titlt222222"
                                        text="222222"
                                        front_title="front_title"
                                        front_text="front_text"
                                        back_details="back_details"
                                        pink_front_title="pink_front_title"
                                        pink_front_text="pink_front_text"
                                        pink_back_details="pink_back_details"
                                    />

                                </div>
                                <div className="previous_right">
                                    <label for="r2" class="bar">
                                        <img src="../../images/gallery_button_right.png" className="previous_trans_img"></img>
                                    </label>
                                </div>
                            </div>


                            <div className="previous_trans s2">
                                <div className="previous_left">
                                    <label for="r1" class="bar"><img src="../../images/gallery_button_left.png" className="previous_trans_img"></img></label>
                                </div>
                                <div className="previous_container">
                                    <Transition title="titlt" text="123" src="../../images/volunteer/KAB_logo.jpg" />
                                </div>
                                <div className="previous_right">

                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}


                {/* Key Figures */}
                {/* <div className="volunteer_blue">
                    <div className="volunteer_tage">
                        <h1>Key Figures</h1>
                    </div>

                    <div className="volunteer_cards">
                        <div className="volunteer_one_card">
                            <div className="volunteer_card_title_div">
                                <font className="volunteer_card_title">
                                Volunteers
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details">
                                683,242
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details2">
                                    
                                </font>
                            </div>
                        </div>


                        <div className="volunteer_one_card">
                            <div className="volunteer_card_title_div">
                                <font className="volunteer_card_title">
                                Litter Items Removed
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details">
                                    18
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details2">
                                    million
                                </font>
                            </div>
                        </div>


                        <div className="volunteer_one_card">
                            <div className="volunteer_card_title_div">
                                <font className="volunteer_card_title">
                                Locations Cleaned
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details">
                                3895
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details2">
                                sites
                                </font>
                            </div>
                        </div>

                    </div>
                </div> */}
                <div className="clear_float"></div>
                {/* Junp button */}
                <div className="volunteer_button_div">
                    <div className="volunteer_button">
                        <font className="">
                            <a target="blank" href="https://kab.org.au/">Go to website</a>
                        </font>
                    </div>
                </div>
            </div>
        )
    }
}

export default keep_au_beautiful
