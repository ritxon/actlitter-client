import React, { useEffect } from "react";
import Link from "react-router-dom/Link";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import CardCarousel from "../components/CardCarousel";
import Button from "../components/utils/Button";
import ScrollOut from "scroll-out";
import Carousel from "react-elastic-carousel";

import "./volunteer/volunteer.css";
import "../App.css";
import CarouselComp from "../components/CarouselComp";

const Home = () => {
	useEffect(() => {
		ScrollOut({
			targets: "p,div",
		});
	}, []);

	return (
		<>
			<HeroSection />
			<div className="vision-home">
				<div className="contain1140">
					<div className="left-desc">
						<div className="title-section">Our Vision</div>
						<p>
						Aclitter aims to achieve maximum litter awareness in Victoria by imparting knowledge to Victorian university students about the impact of litter in Australia.
						</p>
					</div>
				</div>
			</div>
			<div className="section-home">
				<div className="contain1140">
					<div className="title-section">Litter Information</div>
					<p>
						Find out below about how litter can cause an impact on the environment and damage health of people as well
						as our Australian wildlife. Get information about how waste classification can improve waste disposal habits
						and play a part in reducing litter.
					</p>
					<div className="cards-animation">
						<Cards />
					</div>
				</div>
			</div>
			<div className="section-full">
				<CarouselComp></CarouselComp>

				{/* <div className="contain1140">
					<div className="left-desc">
						<div className="title-section">Did you know that cigarettes butts are the most common kind of litter?</div>
						<p>
							Cigarette butts is the highest littered item in Australia. Out of 24 billion cigarettes sold in
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
				</div> */}
			</div>
			<div className="section-home">
				<div className="contain1140">
					<div className="double-side">
						<div className="left-side">
							<div className="title-section">Volunteering Organisations</div>
							<p>Various organisations in Australia are committed to reduce and prevent littering.</p>
							<p>
							Check out distinguished organisations in Australia, their contribution to reduce litter and get interested to participate in volunteering activities.
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
			<script src="scroll-out.js"></script>
			<script type="text/javascript"></script>
		</>
	);
};

export default Home;
