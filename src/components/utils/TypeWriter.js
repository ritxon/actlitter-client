import React, { useState, useEffect, useRef } from "react";
import "./typeWriter.css";

const TypeWriter = ({ text1, text2, speed }) => {

	const index = useRef(0);
	const index2 = useRef(0);

	const [currentText1, setCurrentText1] = useState("");
	const [currentText2, setCurrentText2] = useState("");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setCurrentText1((value) => value + text1.charAt(index.current));

			if (index.current == text1.length && text2 != null) {
				setCurrentText2((value) => value + text2.charAt(index2.current));
				index2.current += 1;
			} else {
				index.current += 1;
			}
		}, speed);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [currentText1, currentText2, text1, text2]);

	return (
		<>
			<h1>{currentText1}</h1>
			<h1>{currentText2}</h1>
		</>
	);
};

export default TypeWriter;
