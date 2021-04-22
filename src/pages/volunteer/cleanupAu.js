import React, { Component } from 'react'
import Flip_card from "../../components/flip_card/flip_card"
import Flip_card_blue from "../../components/flip_card/flip_card_blue"
import Flip_card_pink from "../../components/flip_card/flip_card_pink"
import Transition from "../../components/trans_page/transition"
import Transition_cards from "../../components/trans_page/transition_2_cards"

export class cleanupAu extends Component {
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
                        / &ensp; Clean Up Australia
                    </p>
                </div>
                <div className="volunteer_bluex">


                    {/* Details */}
                    <div className="volunteer_part">
                        <div className="volunteer_left">
                            <div>
                                <img
                                    src="../../images/volunteer/Clean_Up_Australia_logo.jpg"
                                    className="volunteer_logo"
                                />
                            </div>
                        </div>
                        <div className="volunteer_right">
                            <div className="volunteer_title">
                                <h1>CLEAN UP AUSTRALIA</h1>
                            </div>
                            <p className="organization_details">
                                Clean Up Australia is a large environmental conservation non-profit organization founded by Ian Kiernan and Kim McKay on 8 November 1989. Clean Up Australia aims to prevent rubbish from entering the environment as well as remove rubbish that is already accumulated. To do so, Clean Up Australia works together with the community, different companies and the government to provide solutions that can enable people to live more sustainably.

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
                                    className="volunteer_fun_fact"></img>  More than 19 million Australians have taken part in Clean Up Australia activities over the last 31 years.
                    </p>
                        <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  Volunteers have recorded 38.5 million hours for Clean Up Australia activities to reduce rubbish from the environment.

                    </p>
                        <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  In 2020, Cigarette Butts were the largest single item rubbish in Victoria comprising 13.51% of the total Single Item Rubbish!

                    </p>
                        <p className="organization_details">
                        <img src="../../images/volunteer/fun-fact.png"
                                    className="volunteer_fun_fact"></img>  Other volunteering organisations can be part of Clean Up Australia by registering on its website with 7778 sites registering in 2020.

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
                                front_num="683,242"
                                front_text=""
                                back_details="By 2021, Clean Up Australia had an estimated number of 683,242 volunteers involved with 110,114 volunteers from Victoria!"
                            />
                        </div>


                        <div className="volunteer_one_card">
                            <Flip_card_blue
                                front_title="TOTAL LITTER IN AUSTRALIA"
                                front_num="365,922"
                                front_text="items"
                                back_details="Volunteers from Clean Up Australia picked up a staggering number of 365,922 items from 1274 surveyed locations in 2020!"
                            />
                        </div>


                        <div className="volunteer_one_card">
                            <Flip_card_pink
                                front_title="TOTAL LITTER IN VICTORIA"
                                front_num="59,159"
                                front_text="items"
                                back_details="In 2020, volunteers from Clean Up Victoria picked 59,159 items from 239 surveyed locations in Victoria which would require 3212 utility vans to carry!"
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
                                        title="Clean Up Australia Day 2020"
                                        text="The national week-long event held on 7th March 2020 attracted  a large number of volunteers to clean different locations like parks, beaches, bushlands and waterways."
                                        front_title="NUMBER OF VOLUNTEERS"
                                        front_text="661,345"
                                        front_text2="people"
                                        pink_front_title="TOTAL LOCATIONS"
                                        pink_front_text="7175"
                                        pink_front_text2="places"
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
                                    <Transition title="Tasmania" 
                                    text="In August 2020, the Tasman Council held a clean-up initiative called Clean Up Our Patch for a month to reduce litter from the Tasman and Forestier Peninsula. Around 160 volunteers came together at 14 locations and collected 88 bags of rubbish!" 
                                    src="../../images/volunteer/Tasman_Peninsula.jpg" />
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
                            <a target="blank" href="https://www.cleanup.org.au/">Go to website</a>
                        </font>
                    </div>
                </div>
            </div>
        )
    }
}

export default cleanupAu
