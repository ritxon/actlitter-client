import React, { Component } from 'react'

export class keep_au_beautiful extends Component {
    render() {
        return (
            <div className="volunteer">
                <div className="volunteer_blue">
                 {/* place */}
                 <div className="impact_fake_navigation">
                    <p>
                        <a href="/">&emsp; Home &ensp;</a>/ &ensp;
                        <a classname="bold" href="/volunteer">
                        Volunteer Organizations &ensp;
                        </a>
                        / &ensp; Keep Australia Beautiful
                    </p>
                </div>

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
                        <h1>Keep Australia Beautiful</h1>
                        </div>
                        <p className="organization_details">
                        Keep Australia Beautiful (KAB) is a non-profit organization founded in 1968 that aims to achieve a litter-free and environmentally sustainable Australia. It is located in all states of Australia and provides a range of programs to educate Australian citizens about environmental sustainability and take action to reduce litter. Keep Australia Beautiful encourages involvement of volunteers by hosting clean-up events to pick up litter and reduce waste in the respective neighbourhoods.
                        </p>
                    </div>
                </div>
                </div>
                <div className="clear_float"></div>

                {/* Key Facts */}
                <div className="volunteer_tage">
                    <h1>Key Facts</h1>
                </div>
                <div className="volunteer_key_facts">
                    <p className="organization_details">
                    ●  Keep Australia Beautiful has a network of state or territory organisations like Keep Victoria Beautiful, KAB QLD, KAB NSW etc that are unique to that state and tailored to its regions accordingly.
                    </p>
                    <p className="organization_details">
                    ●  KVB also hosts the Sustainable Cities and Sustainable Communities – Tidy Towns Awards that celebrate actions taken by communities, businesses, educational institutions and councils in urban as well as rural areas in Australia.

                    </p>
                    
                </div>


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
                            <a href="https://kab.org.au/">Click here to websit</a>
                        </font>
                    </div>
                </div>
            </div>
        )
    }
}

export default keep_au_beautiful
