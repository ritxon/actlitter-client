import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "../App.css";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import Button from "../components/utils/Button";
import "./volunteer/volunteer.css";

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
                            <a href="/data">
									Want to know more
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
							<div>
								<a href="/volunteer/tangaroaBlue">
									<img src="../../images/volunteer/tangaroablue_logo.jpg" className="volunteer_img" />
								</a>
							</div>
							<div>
								<a href="/volunteer/beachpartol">
									<img src="../../images/volunteer/beach-patrol_logo.jpg" className="volunteer_img" />
								</a>
							</div>
							<div>
								<a href="/volunteer/oceancrusaders">
									<img src="../../images/volunteer/oceancrusaders_logo.png" className="volunteer_img" />
								</a>
							</div>
							<div>
								<a href="/volunteer/cleanupAu">
									<img src="../../images/volunteer/Clean_Up_Australia_logo.jpg" className="volunteer_img" />
								</a>
							</div>
							<div>
								<a href="/volunteer/yarrariver">
									<img
										src="../../images/volunteer/yarra-riverkeeper-logo-registered-trademark.jpg"
										className="volunteer_img"
									/>
								</a>
							</div>
							<div>
								<a href="/volunteer/keep_au_beautiful">
									<img src="../../images/volunteer/KAB_logo.jpg" className="volunteer_img" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default home;
