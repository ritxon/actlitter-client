import React, { Component } from 'react'
import "./volunteer.css"
import Flip_card from "../../components/flip_card/flip_card"
import Flip_card_blue from "../../components/flip_card/flip_card_blue"
import Flip_card_pink from "../../components/flip_card/flip_card_pink"
import Transition from "../../components/trans_page/transition"
import Transition_cards from "../../components/trans_page/transition_2_cards"

export class tangaroaBlue extends Component {
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
                        / &ensp; Tangaroa Blue
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
                                        src="../../images/volunteer/tangaroablue_logo.jpg"
                                        className="volunteer_logo"
                                    />
                                </div>
                            </div>
                            <div className="volunteer_right">
                                <div className="volunteer_title">
                                    <h1>TANGAROA BLUE</h1>
                                </div>
                                <p className="organization_details">
                                    Tangaroa Blue is an Australia-wide non-profit organisation that focuses on reducing marine litter and protecting the marine environment. To address the issue of marine litter, Tangaroa Blue has launched AMDI or Australian Marine Debris Initiative, an on-ground network for organisations, volunteers and communities to contribute debris data collected during clean-up events to the AMDI Database.
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
                            <img src="../../images/volunteer/fun-fact.png"
                                className="volunteer_fun_fact"></img>  Tangaroa Blue has removed around 18 million pieces of marine debris from the Australian coastline!
                    </p>
                        <p className="organization_details">
                            <img src="../../images/volunteer/fun-fact.png"
                                className="volunteer_fun_fact"></img>  In October 2015, Tangaroa Blue coordinated the Great Barrier Reef Clean-up in 2 weeks with over 1000 volunteers removing around 100,000 individual litter items from the reef.
                    </p>
                        <p className="organization_details">
                            <img src="../../images/volunteer/fun-fact.png"
                                className="volunteer_fun_fact"></img>  Tangaroa Blue has various clean-up events all year round and also provides support for beach clean-ups.
                    </p>
                        <p className="organization_details">
                            <img src="../../images/volunteer/fun-fact.png"
                                className="volunteer_fun_fact"></img>  Tangaroa Blue uses data collected in AMDI Database for analysis and provides solutions that can stop flow of litter at the source.
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
                                    front_num="190,183"
                                    front_text="people"
                                    back_details="Over 190,000 people have participated in volunteering events organised by Tangaroa Blue!"
                                />
                            </div>


                            <div className="volunteer_one_card">
                                <Flip_card_blue
                                    front_title="AMOUNT OF LITTER"
                                    src="../../images/volunteer/litter.svg"
                                    front_num="1434"
                                    front_text="tonnes"
                                    back_details="Organisation volunteers have cleaned waterways and beaches at over 3869 sites in Australia and removed over 1434 tonnes of litter."
                                />
                            </div>


                            <div className="volunteer_one_card">
                                <Flip_card_blue
                                    front_title="TOTAL LITTER ITEMS"
                                    src="../../images/volunteer/bottle.svg"
                                    front_num="18"
                                    front_text="million"
                                    back_details="According to the organisation’s AMDI network, Tangaroa Blue crossed 18 million litter items mark on 26th March 2021!"
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
                                    <label for="r2" class="bar"><img src="../../images/gallery_button_left.png" className="previous_trans_img"></img></label>
                                </div>
                                <div className="previous_container">
                                    <Transition_cards
                                        title="Cape York, Queensland"
                                        text="Since 2011, Tangaroa Blue organises week long cleanups from May to September in Cape York that involves volunteers from all around Australia, local traditional owners and rangers."
                                        front_title="NUMBER OF VOLUNTEERS"
                                        front_text="200"
                                        front_text2="people"
                                        pink_front_title="AMOUNT OF LITTER"
                                        pink_front_text="3"
                                        pink_front_text2="tonnes"
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
                                    <Transition
                                        title="Great Barrier Reef"
                                        text="Since 2011, Tangaroa Blue organised the Great Barrier Reef cleanup over 2 weekends that involved 11 events. Over 1000 volunteers participated and removed more than 100,000 rubbish items from the lagoon."
                                        src="../../images/volunteer/Great_Barrier_Reef.jpg"
                                        img_name="Great Barrier Reef"
                                    />
                                </div>
                                <div className="previous_right">
                                    <label for="r1" class="bar">
                                        <img src="../../images/gallery_button_right.png" className="previous_trans_img"></img>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>



                    {/* Junp button */}
                    <div className="volunteer_button_div">
                        <div className="volunteer_button">
                            <p className="">
                                Click here to go to source :&ensp;
                                  <a target="blank" href="https://www.tangaroablue.org/">https://www.tangaroablue.org/</a>
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default tangaroaBlue
