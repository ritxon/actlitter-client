import React, { Component } from 'react'

export class beachpartol extends Component {
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
                        / &ensp; Beach Patrol
                    </p>
                </div>

                {/* Details */}
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
                        <h1>Beach Patrol</h1>
                        </div>
                        <p className="organization_details">
                        BeachPatrol is a litter collection group spread over many postcode areas in Melbourne. In each postcode area, BeachPatrol conducts one activity every month to pick litter from beaches, streets or parks. Moreover, BeachPatrol collects data of litter from these activities and use it to raise awareness of littering in these areas and works with the government to address issue of littering.
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
                    ●  By 2020, BeachPatrol had 30 groups with over 3000 volunteers that cover over 150 kms of Port Phillip Bay beaches and streets.
                    </p>
                    <p className="organization_details">
                    ●  BeachPatrol has started LOS or Love Our Street initiative to clean a street in Melbourne to prevent litter getting into creeks, canals or on beaches.

                    </p>
                    <p className="organization_details">
                    ●  BeachPatrol has enlisted various beaches and streets in and around Melbourne on their website for volunteers to participate in cleanup activities.

                    </p>
                    <p className="organization_details">
                    ●  Until now, BeachPatrol has collected more than 90,000 kgs of rubbish that constitute around 33000 shopping bags of rubbish.

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
                                Rubbish Collected
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details">
                                92473 
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details2">
                                    Kgs
                                </font>
                            </div>
                        </div>


                        <div className="volunteer_one_card">
                            <div className="volunteer_card_title_div">
                                <font className="volunteer_card_title">
                                Rubbish Amount
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details">
                                32976 
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details2">
                                Shopping Bags
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
                                568555
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details2">
                                Cigarette Butts
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
                            <a href="https://www.beachpatrol.com.au/">Click here to websit</a>
                        </font>
                    </div>
                </div>
            </div>
        )
    }
}

export default beachpartol
