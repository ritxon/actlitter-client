import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "../App.css";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import Button from "../components/utils/Button";
import "./volunteer/volunteer.css";
import Volunteer_organizations from "../components/volunteer_organizations/volunteer_organizations"

export class home extends Component {

	render() {
		return (
			<>
				<HeroSection />
				<div className="homepage-w">
					<div className="team">
						<div className="team-flex">
							<div className="team-intro">
								<h1>OUR VISION</h1>
								<p>
									The primary goal of Aclitter is to achieve maximum litter awareness in Victoria by imparting key
									information and knowledge about impact of litter in Australia.
								</p>
							</div>
						</div>
					</div>
					<Cards />
				</div>
				<div className="color-Section">
					<div className="color-Section-content">
						<div className="title-section">
							<h1>DID YOU KNOW THAT CIGARETTES BUTTS ARE THE MOST COMMON KIND OF LITTER?</h1>
						</div>
						<div className="section-split">
							<div className="facts-section">
                            <p>Cigarette butts are the highest littered item in Australia. Out of 24 billion cigarettes sold in Australia, around 7 billion are littered</p>
                            <p>According to research, 6 out of 10 smokers in Australia throw cigarette butts outdoors that has caused cigarette butt litter to be a major problem for Australia.</p>
                            <br/>
                            <a href="/data">
									Want to know more ..
							</a>
                            </div>
							<div className="image-section">
                            <img src="../../images/Cigarette_Butts.jpg" className="section_img" />
                            </div>
						</div>
					</div>
				</div>
				<div className="homepage-w">
					{/* Volunteer */}
					<div>
						{/* Title */}
						<div className="volunteer_organizations_title">
							<h1>ORGANIZATIONS</h1>
						</div>
						{/* pictures */}
						<div className="volunteer_logo_div">
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
				</div>
			</>
		);
	}
}

export default home;
