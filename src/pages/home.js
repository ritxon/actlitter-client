import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "react-router-dom/Link";

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
				<div className="vision-home">
					<div className="contain1080">
						<div className="left-desc">
							<div className="title-section">Our Vision</div>
							<p>
								The primary goal of Aclitter is to achieve maximum litter awareness in Victoria by imparting key
								information and knowledge about impact of litter in Australia.
							</p>
						</div>
					</div>
				</div>
				<div className="section-home">
					<div className="contain1080">
						<div className="title-section">Litter Information</div>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, iure dolor illo quisquam architecto
							assumenda sequi exercitationem repellat repellendus officiis ducimus, quos alias amet nobis vero aliquam
							laborum eum. 
						</p>
						<div className="cards-animation">
							<Cards />
						</div>
					</div>
				</div>
				<div className="section-green">
					<div className="contain1080">
						<div className="left-desc">
							<div className="title-section">
								Did you know that cigarettes butts are the most common kind of litter?
							</div>
							<p>
								Cigarette butts are the highest littered item in Australia. Out of 24 billion cigarettes sold in
								Australia, around 7 billion are littered
							</p>
							<p>
								According to research, 6 out of 10 smokers in Australia throw cigarette butts outdoors that has caused
								cigarette butt litter to be a major problem for Australia.
							</p>
						</div>
						<div className="left-desc">
							<Link to="/data">
								<Button styleBtn="primary quiz-btn" text="Know More" />
							</Link>
						</div>
					</div>
				</div>
				<div className="section-home">
					<div className="contain1080">
						<div className="double-side">
							<div className="left-side">
								<div className="title-section">Organizations</div>
								<p>Various organisations in Australia are committed to reduce and prevent littering.</p>
								<p>
									These are the most distinguished Australian organisations, their contributions to reduce littering and
									participate in their volunteering activities.
								</p>
							</div>
							<div className="right-side">
								<Link to="/volunteer/tangaroaBlue">
									<div className="org orgTangaroablue"></div>
								</Link>
								<Link to="/volunteer/cleanupAu">
									<div className="org orgCleanAU"></div>
								</Link>
								<Link to="/volunteer/keep_au_beautiful">
									<div className="org orgKAB"></div>
								</Link>
								<Link to="/volunteer/yarrariver">
									<div className="org orgYarraRiver"></div>
								</Link>
								<Link to="/volunteer/oceancrusaders">
									<div className="org orgOceancrusaders"></div>
								</Link>
								<Link to="/volunteer/beachpartol">
									<div className="org orgBeachatrol"></div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default home;
