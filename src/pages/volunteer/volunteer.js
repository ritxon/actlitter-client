import React, { Component } from "react";

export class volunteer extends Component {
    render() {
        return (
            <div>
                {/* place */}
                <div className="impact_fake_navigation">
                    <p>
                        <a href="/">&emsp; Home &ensp;</a>/ &ensp;
                        <a classname="bold" href="/volunteer">
                            Volunteer Organizations &ensp;
                        </a>
                    </p>
                </div>
                <div className="">
                    <img src="../../images/volunteer/volunteer.jpg" className="volunteer_top_img"></img>
                </div>
                <div className="volunteer_organizations_background">
                    {/* Title */}
                    <div className="volunteer_organizations_title">
                        <h1>ORGANIZATIONS</h1>
                    </div>
                    <div className="volunteer_all_summary_div">
                        <font className="volunteer_all_summary">
                        &emsp;&emsp;Various organisations in Australia are committed to reduce and prevent littering. Find out below about distinguished Australian organisations, their contributions to reduce littering and participate in their volunteering activities.
                        </font>
                    </div>
                    {/* pictures */}
                    <div className="volunteer_all_organizations_div">
                        <div className="volunteer_au_vic_opyions">
                            <label for="r1" class="bar">
                                <div className="volunteer_au_opyions">
                                    <font className="volunteer_opyion_text">
                                        AU
                                </font>
                                </div>
                            </label>
                            <label for="r2" class="bar">
                                <div className="volunteer_vic_opyions">
                                    <font className="volunteer_opyion_text">
                                        VIC
                                </font>
                                </div>
                            </label>
                        </div>
                        <div className="volunteer_all_organizations">
                            <input type="radio" name="r" id="r1" checked></input>
                            <input type="radio" name="r" id="r2"></input>

                            <div className="volunteer_au s1">
                                <div className="volunteer_logo_div">
                                    <div className="volunteer_img_div">
                                        <a href="/volunteer/tangaroaBlue">
                                            <img
                                                src="../../images/volunteer/tangaroablue_logo.jpg"
                                                className="volunteer_img"
                                            />
                                        </a>
                                    </div>
                                    <div className="volunteer_img_div">
                                        <a href="/volunteer/beachpartol">
                                            <img
                                                src="../../images/volunteer/beach-patrol_logo.jpg"
                                                className="volunteer_img"
                                            />
                                        </a>
                                    </div>
                                    <div className="volunteer_img_div">
                                        <a href="/volunteer/oceancrusaders">
                                            <img
                                                src="../../images/volunteer/oceancrusaders_logo.png"
                                                className="volunteer_img"
                                            />
                                        </a>
                                    </div>
                                    <div className="volunteer_img_div">
                                        <a href="/volunteer/cleanupAu">
                                            <img
                                                src="../../images/volunteer/Clean_Up_Australia_logo.jpg"
                                                className="volunteer_img"
                                            />
                                        </a>
                                    </div>
                                    <div className="volunteer_img_div">
                                        <a href="/volunteer/yarrariver">
                                            <img
                                                src="../../images/volunteer/yarra-riverkeeper-logo-registered-trademark.jpg"
                                                className="volunteer_img"
                                            />
                                        </a>
                                    </div>
                                    <div className="volunteer_img_div">
                                        <a href="/volunteer/keep_au_beautiful" >
                                            <img
                                                src="../../images/volunteer/KAB_logo.jpg"
                                                className="volunteer_img"
                                            />
                                        </a>
                                    </div>

                                </div>
                            </div>

                            {/* volunteer VIC */}
                            <div className="volunteer_vic s2">
                                <div className="volunteer_logo_div">
                                    <div className="volunteer_img_div">
                                        <a href="/volunteer/beachpartol">
                                            <img
                                                src="../../images/volunteer/beach-patrol_logo.jpg"
                                                className="volunteer_img"
                                            />
                                        </a>
                                    </div>
                                    <div className="volunteer_img_div">
                                        <a href="/volunteer/cleanupAu">
                                            <img
                                                src="../../images/volunteer/Clean_Up_Australia_logo.jpg"
                                                className="volunteer_img"
                                            />
                                        </a>
                                    </div>
                                    <div className="volunteer_img_div">
                                        <a href="/volunteer/yarrariver">
                                            <img
                                                src="../../images/volunteer/yarra-riverkeeper-logo-registered-trademark.jpg"
                                                className="volunteer_img"
                                            />
                                        </a>
                                    </div>
                                    <div className="volunteer_img_div">
                                        <a href="/volunteer/keep_au_beautiful" >
                                            <img
                                                src="../../images/volunteer/KAB_logo.jpg"
                                                className="volunteer_img"
                                            />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default volunteer
