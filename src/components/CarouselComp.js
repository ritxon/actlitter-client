import React from "react";
import { Carousel } from "react-bootstrap";
import "./carouselComp.scss";

import Link from "react-router-dom/Link";
import Button from "../components/utils/Button";

const CarouselComp = () => {
	return (
		<Carousel>
			<Carousel.Item className="carousel1">
				<div className="left-desc-carousel">
					<div className="title-carousel">Did you know that cigarettes butts are the most common kind of litter?</div>
					<p>
						Cigarette butts are the highest littered item in Australia. Out of 24 billion cigarettes sold in Australia,
						around 7 billion are littered
					</p>
					<p>
						According to research, 6 out of 10 smokers in Australia throw cigarette butts outdoors that has caused
						cigarette butt litter to be a major problem for Australia.
					</p>
					<Link to="/data/waste">
						<Button styleBtn="primary quiz-btn" text="Know More" />
					</Link>
				</div>
			</Carousel.Item>
			<Carousel.Item className="carousel2">
				<div className="left-desc-carousel">
					<div className="title-carousel">
						Do you know how huge the amount of different types of waste collected each year is?
					</div>
					<p>
					This page shows amount of collected waste in Melbourne. It provides a visualisation about amount of waste collected from houses and garbage bins in public areas as well as dumped waste and provides interesting insights from it.

					</p>
					<Link to="/data/items">
						<Button styleBtn="primary quiz-btn" text="Know More" />
					</Link>
				</div>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselComp;
