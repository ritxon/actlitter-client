import React, { Component } from 'react'
import "./volunteer.css"

export class tangaroaBlue extends Component {
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
                        / &ensp; Tangaroa Blue
                    </p>
                </div>

                {/* Details */}
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
                        <h1>Tangaroa Blue</h1>
                        </div>
                        <p className="organization_details">
                            Tangaroa Blue is an Australia-wide non-profit organisation that focuses on reducing marine litter and protecting the marine environment. To address the issue of marine litter, Tangaroa Blue has launched AMDI or Australian Marine Debris Initiative, an on-ground network for organisations, volunteers and communities to contribute debris data collected during clean-up events to the AMDI Database.
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
                    ●  Founded in 2004, Tangaroa Blue has removed around 18 million pieces of marine debris from the Australian coastline.
                    </p>
                    <p className="organization_details">
                    ●  In October 2015, Tangaroa Blue coordinated the Great Barrier Reef Clean-up. The organisation held 11 events in 2 weeks with over 1000 volunteers removing around 100,000 individual litter items from the reef.
                    </p>
                    <p className="organization_details">
                    ●  Tangaroa Blue has various clean-up events all year round and also provides support for beach clean-ups.
                    </p>
                    <p className="organization_details">
                    ●  Tangaroa Blue uses data collected in AMDI Database for analysis and provides solutions that can stop flow of litter at the source.
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
                                    Litter Removed
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details">
                                    1434
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details2">
                                    tonnes
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
                </div>
                <div className="clear_float"></div>
                {/* Junp button */}
                <div className="volunteer_button_div">
                    <div className="volunteer_button">
                        <font className="">
                            <a href="https://www.tangaroablue.org/">Click here to websit</a>
                        </font>
                    </div>
                </div>
            </div>
        )
    }
}

export default tangaroaBlue
