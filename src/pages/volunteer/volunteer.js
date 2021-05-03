import React, { Component } from "react";
import Volunteer_organizations from "../../components/volunteer_organizations/volunteer_organizations"
import Volunteer_organizations2 from "../../components/volunteer_organizations/volunteer_organizations2"

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
                            <input type="radio" name="r" id="r1" defaultChecked ></input>
                            <input type="radio" name="r" id="r2"></input>

                            <div className="volunteer_au s1">
                                <div className="volunteer_logo_div">
                                    {/* <div className="volunteer_img_div">
                                        <a href="/volunteer/tangaroaBlue">
                                            <img
                                                src="../../images/volunteer/tangaroablue_logo.jpg"
                                                className="volunteer_img"
                                            />
                                        </a>
                                    </div> */}

                                    <Volunteer_organizations 
                                    href1="/volunteer/tangaroaBlue"
                                    src1="../../images/volunteer/tangaroablue_logo.jpg"
                                    href2="/volunteer/beachpartol"
                                    src2="../../images/volunteer/beach-patrol_logo.jpg"
                                    href3="/volunteer/oceancrusaders"
                                    src3="../../images/volunteer/oceancrusaders_logo.png"
                                    href4="/volunteer/cleanupAu"
                                    src4="../../images/volunteer/Clean_Up_Australia_logo.jpg"
                                    href5="/volunteer/yarrariver"
                                    src5="../../images/volunteer/yarra-riverkeeper-logo-registered-trademark.jpg"
                                    href6="/volunteer/keep_au_beautiful"
                                    src6="../../images/volunteer/KAB_logo.jpg"
                                    />

                                </div>
                            </div>

                            {/* volunteer VIC */}
                            <div className="volunteer_vic s2">
                                <div className="volunteer_logo_div">
                                    <Volunteer_organizations2 
                                    href1="/volunteer/beachpartol"
                                    src1="../../images/volunteer/beach-patrol_logo.jpg"
                                    href2="/volunteer/cleanupAu"
                                    src2="../../images/volunteer/Clean_Up_Australia_logo.jpg"
                                    href3="/volunteer/yarrariver"
                                    src3="../../images/volunteer/yarra-riverkeeper-logo-registered-trademark.jpg"
                                    href4="/volunteer/keep_au_beautiful"
                                    src4="../../images/volunteer/KAB_logo.jpg"
                                    />

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
