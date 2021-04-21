import React, { Component } from 'react'

export class cleanupAu extends Component {
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
                        / &ensp; Clean Up Australia
                    </p>
                </div>

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
                        <h1>Clean Up Australia</h1>
                        </div>
                        <p className="organization_details">
                        Clean Up Australia is an environmental conservation non-profit organization founded by Ian Kiernan and Kim McKay on 8 November 1989. Clean Up Australia aims to prevent rubbish from entering the environment as well as remove rubbish that is already accumulated. To do so, Clean Up Australia works together with the community, different companies and the government to provide solutions that can enable people to live more sustainably.

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
                    ●  More than 19 million Australians have taken part in Clean Up Australia activities over the last 31 years.
                    </p>
                    <p className="organization_details">
                    ●  Volunteers have recorded 38.5 million hours for Clean Up Australia activities to reduce rubbish from the environment.

                    </p>
                    <p className="organization_details">
                    ●  Clean Up Australia volunteers removed 365,922 rubbish items from 1274 surveyed locations in 2020.

                    </p>
                    <p className="organization_details">
                    ●  Other volunteering organisations can be part of Clean Up Australia by registering on its website with 7778 sites registering in 2020.

                    </p>
                    <p className="organization_details">
                    ●  Every Day Clean Up

                    </p>
                </div>


                {/* Key Figures */}
                <div className="volunteer_blue">
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
                                volunteers
                                </font>
                            </div>
                        </div>


                        <div className="volunteer_one_card">
                            <div className="volunteer_card_title_div">
                                <font className="volunteer_card_title">
                                Rubbish collected
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details">
                                59,159
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details2">
                                items
                                </font>
                            </div>
                        </div>


                        <div className="volunteer_one_card">
                            <div className="volunteer_card_title_div">
                                <font className="volunteer_card_title">
                                Cigarette Butts
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details">
                                13.51%
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details2">
                                
                                </font>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="clear_float"></div>
                {/* Junp button */}
                <div className="volunteer_button_div">
                    <div className="volunteer_button">
                        <font className="">
                            <a href="https://www.cleanup.org.au/">Click here to websit</a>
                        </font>
                    </div>
                </div>
            </div>
        )
    }
}

export default cleanupAu
