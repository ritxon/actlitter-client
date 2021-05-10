import React from "react";
import Link from "react-router-dom/Link";
import Button from "../components/utils/Button";

const CardCarousel = ({ number }) => (
		<div className="contain1140 cigarette-back">
			<div className="left-desc">
				<div className="title-carousel">Did you know that cigarettes butts are the most common kind of litter?</div>
				<p>
					Cigarette butts are the highest littered item in Australia. Out of 24 billion cigarettes sold in Australia,
					around 7 billion are littered
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
);

export default CardCarousel;
