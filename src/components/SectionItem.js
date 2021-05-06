import React, { useEffect } from "react";
import Link from "react-router-dom/Link";
import Button from "./utils/Button";
import ScrollOut from "scroll-out";
import "./sectionItem.css";

function SectionItem({ title, text, path, img, align }) {
  useEffect(() => {
		ScrollOut({
			targets: "div",
		});
	}, []);

	if (align == "left") {
		return (
			<>
				<div className="section-article-white">
					<div className="contain1140-flex">
						<div className="section-text-left">
							<h2>{title}</h2>
							<p>{text}</p>
							<Link to={path}>
								<Button styleBtn="green-btn quiz-btn" text="MORE" to="/" />
							</Link>
						</div>
						<div className={`section-image ${img}`}></div>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="section-article">
					<div className="contain1140-flex">
						<div className={`section-image ${img}`}></div>
						<div className="section-text-right">
							<h2>{title}</h2>
							<p>{text}</p>
							<Link to={path}>
								<Button styleBtn="green-btn quiz-btn" text="MORE" to="/" />
							</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default SectionItem;
