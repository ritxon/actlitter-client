import React, { useState, useEffect, useRef } from "react";
import TypeWriter from "./utils/TypeWriter";
import "./talk.css";

import { useTransition, useSpring, animated } from "react-spring";
import Button from "./utils/Button";

const Talk = () => {
    const [hello, setHello] = useState(false)
    const [intro, setIntro] = useState(true)
    const [showButton, setShowButton] = useState(false);

	const transition = useTransition(hello, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
	});

    const fade = useSpring({
        opacity: intro ? 0 : 1
    })

    const transitionIntro = useTransition(intro, {
		from: { opacity: 1 },
		enter: { opacity: 0 },
	});

    useEffect(() => {
		const timeoutId = setTimeout(() => {
            setHello(true)
            console.log("aver");
		}, 4300);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [hello]);


	return (
        <>

            <div className="containerTalk">
                <TypeWriter
                    text1="Hello there,"
                    text2="Are you ready to learn about litter?"
                    speed="80"
                />
                <div className="button-section">
                {transition((style, item) => item ? (
                            <animated.div style={style}>
                                <Button styleBtn="primary quiz-btn" text="Let's Go"  />
                            </animated.div>
                        ) : ( "")
                    )}
                </div>
            </div>
        ) : ( "")
        </>
	);
};

export default Talk;
