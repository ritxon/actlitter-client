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

                {/* Title */}
                <div className="volunteer_organizations_title">
                    <h1>ORGANIZATIONS</h1>
                </div>
                {/* pictures */}
                <div className="volunteer_logo_div">
                    <div>
                        <a href="/volunteer/tangaroaBlue">
                            <img
                                src="../../images/volunteer/tangaroablue logo.jpg"
                                className="volunteer_img"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="/volunteer/tangaroaBlue">
                            <img
                                src="../../images/volunteer/beach-patrol logo.jpg"
                                className="volunteer_img"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="/volunteer/tangaroaBlue">
                            <img
                                src="../../images/volunteer/oceancrusaders logo.png"
                                className="volunteer_img"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="/volunteer/tangaroaBlue">
                            <img
                                src="../../images/volunteer/Clean Up Australia logo.jpg"
                                className="volunteer_img"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="/volunteer/tangaroaBlue">
                            <img
                                src="../../images/volunteer/Marinecarerickettspoint logo.jpg"
                                className="volunteer_img"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="/volunteer/tangaroaBlue" >
                            <img
                                src="../../images/volunteer/KAB logo.jpg"
                                className="volunteer_img"
                            />
                        </a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default volunteer
