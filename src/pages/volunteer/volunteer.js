import React, { Component } from "react";
import Volunteer_organizations from "../../components/volunteer_organizations/volunteer_organizations"
import Volunteer_organizations2 from "../../components/volunteer_organizations/volunteer_organizations2"

export class volunteer extends Component {
    render() {
        return (
            <div>
                {/* place */}
                {/* <div className="impact_fake_navigation">
                    <p>
                        <a href="/">&emsp; Home &ensp;</a>/ &ensp;
                        <a classname="bold" href="/volunteer">
                            Volunteer Organizations &ensp;
                        </a>
                    </p>
                </div> */}
                <div className="">
                    <img src="../../images/volunteer/volunteer.jpg" className="volunteer_top_img"></img>
                </div>
                <div className="volunteer_organizations_background">
                    {/* Title */}
                    <div className="volunteer_organizations_title">
                        <h1>ORGANIZATIONS</h1>
                    </div>
                    <div className="volunteer_all_summary_div contain1140">
                        <p className="volunteer_all_summary">
                            &emsp;&emsp;Various organisations in Australia are committed to reduce and prevent littering. Find out below about distinguished Australian organisations, their contributions to reduce littering and participate in their volunteering activities.
                        </p>
                    </div>
                    {/* pictures */}
                    <div className="volunteer_all_organizations_div contain1140">

                        <div className="volunteer_all_organizations">
                            <input type="radio" name="r" id="r1" defaultChecked ></input>
                            <input type="radio" name="r" id="r2"></input>

                            <div className="volunteer_au s1">
                                <div className="volunteer_au_vic_opyions">
                                    <label for="r1" class="bar">
                                        <div className="volunteer_au_opyions_choose">
                                            <p className="volunteer_opyion_text">
                                                AU
                                </p>
                                        </div>
                                    </label>
                                    <label for="r2" class="bar">
                                        <div className="volunteer_vic_opyions">
                                            <p className="volunteer_opyion_text">
                                                VIC
                                </p>
                                        </div>
                                    </label>
                                </div>
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
                                        name1="Tangaroa Blue"
                                        href2="/volunteer/beachpartol"
                                        src2="../../images/volunteer/beach-patrol_logo.jpg"
                                        name2="Beach Patrol"
                                        href3="/volunteer/oceancrusaders"
                                        src3="../../images/volunteer/oceancrusaders_logo.png"
                                        name3="Ocean Crusaders"
                                        href4="/volunteer/cleanupAu"
                                        src4="../../images/volunteer/Clean_Up_Australia_logo.jpg"
                                        name4="Clean Up Australia"
                                        href5="/volunteer/yarrariver"
                                        src5="../../images/volunteer/yarra-riverkeeper-logo-registered-trademark.jpg"
                                        name5="Yarra Riverkeeper Association"
                                        href6="/volunteer/keep_au_beautiful"
                                        src6="../../images/volunteer/KAB_logo.jpg"
                                        name6="Keep Australia Beautiful"
                                    />

                                </div>
                            </div>

                            {/* volunteer VIC */}
                            <div className="volunteer_vic s2">
                                <div className="volunteer_au_vic_opyions">
                                    <label for="r1" class="bar">
                                        <div className="volunteer_au_opyions">
                                            <p className="volunteer_opyion_text">
                                                AU
                                </p>
                                        </div>
                                    </label>
                                    <label for="r2" class="bar">
                                        <div className="volunteer_vic_opyions_choose">
                                            <p className="volunteer_opyion_text">
                                                VIC
                                </p>
                                        </div>
                                    </label>
                                </div>
                                <div className="volunteer_logo_div">
                                    <Volunteer_organizations2
                                        href1="/volunteer/beachpartol"
                                        src1="../../images/volunteer/beach-patrol_logo.jpg"
                                        name1="Beach Patrol"
                                        href2="/volunteer/cleanupAu"
                                        src2="../../images/volunteer/Clean_Up_Australia_logo.jpg"
                                        name2="Clean Up Australia"
                                        href3="/volunteer/yarrariver"
                                        src3="../../images/volunteer/yarra-riverkeeper-logo-registered-trademark.jpg"
                                        name3="Yarra Riverkeeper Association"
                                        href4="/volunteer/keep_au_beautiful"
                                        src4="../../images/volunteer/KAB_logo.jpg"
                                        name4="Keep Australia Beautiful"
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
