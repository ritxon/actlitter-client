import React from "react";
import "./button.css";

const Button = ({text, styleBtn, onClick}) => {
	return (
		<button className={`btn btn-slide ${styleBtn}`}  onClick={onClick}>{text}</button>
	);
};

export default Button;
