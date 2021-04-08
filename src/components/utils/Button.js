import React from "react";
import "./button.css";

const Button = ({text, styleBtn}) => {
	return (
		<button className={`btn btn-slide ${styleBtn}`}>{text}</button>
	);
};

export default Button;
