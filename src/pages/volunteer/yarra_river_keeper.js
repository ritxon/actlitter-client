import React, { Component } from 'react'

export class yarra_river_keeper extends Component {
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
                        / &ensp; Yarra Riverkeeper Association
                    </p>
                </div>

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
                        <h1>Yarra Riverkeeper Association</h1>
                        </div>
                        {/* <p className="organization_details">
                            Tangaroa Blue is an Australia-wide non-profit organisation that focuses on reducing marine litter and protecting the marine environment. To address the issue of marine litter, Tangaroa Blue has launched AMDI or Australian Marine Debris Initiative, an on-ground network for organisations, volunteers and communities to contribute debris data collected during clean-up events to the AMDI Database.
                        </p> */}
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
                    ●  In both rivers, microplastics formed the bulk of litter and accounted for 77% (4,889 pieces) of the total load in the Yarra and 67% (2,374 pieces) of the Maribyrnong load

                    </p>
                    <p className="organization_details">
                    ●  Over the course of the Litter and Flows project 5,051 participants were involved in the Yarra Riverkeeper litter education program. Approximately 8000 kg of waste was removed from our waterways over the course of the litter and flows project

                    </p>
                    <p className="organization_details">
                    ●  To date, Yarra Riverkeeper has removed approximately 38,000 kg of polystyrene contaminated soil and general waste from the Yarra’s riverbanks and reedbeds.

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
                                2042
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
                                Rubbish collected

                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details">
                                38,202
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
                                Microplastics
                                </font>
                            </div>
                            <div className="volunteer_card_details_div">
                                <font className="volunteer_card_details">
                                4889
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
                            <a href="https://yarrariver.org.au/">Click here to websit</a>
                        </font>
                    </div>
                </div>
            </div>
        )
    }
}

export default yarra_river_keeper
