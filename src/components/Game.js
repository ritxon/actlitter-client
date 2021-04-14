import React, { useState } from "react";
import TypeWriter from "typewriter-effect";
import "./game.css";

import { useTransition, useSpring, animated } from "react-spring";
import Button from "./utils/Button";
import StepProgressBar from "./StepProgressBar";
import Modal from "./utils/Modal";

const Game = () => {
	const [questions, setQuestions] = useState([
		{
			id: 0,
			questionText:
				"Cigarettes are made of tobacco, so littering of cigarette butts will not pose a threat to the environment, right?",
			typeofAnswer: "Button",
			answerOptions: [
				{ answerId: 0, answerText: "Yes", isCorrect: false },
				{ answerId: 1, answerText: "No", isCorrect: true },
			],
			questionImage: "images/Q1.jpeg",
			positiveFeedBack:
				"Very good, please remember not to throw cigarette butts. It contains toxic ingredients that will destroy suddenly, and there is a risk of fire. Please put out the cigarette butts completely and throw them into the trash can or extinguish the cigarette box.",
			negativeFeedBack:
				"Cigarette butts thrown away at will may cause fires due to dry air or ignite combustibles, and some of the ingredients contained in them will damage the soil environment. Therefore, smokers should pay special attention to how to deal with the problem of cigarette butts, try to throw them in the cigarette extinguishing box, or ensure that the cigarette butts are completely extinguished before throwing them into the trash can. Don't throw away cigarette butts at will.",
		},
		{
			id: 1,
			questionText: "What are the characteristics of litter?",
			typeofAnswer: "RadioButton",
			answerOptions: [
				{ answerId: 0, answerText: "Can be used to make soil fertile", isCorrect: false },
				{
					answerId: 1,
					answerText: "Can spread diseases like cholera and typhoid",
					isCorrect: false,
				},
				{
					answerId: 2,
					answerText: "Broken glass and metal can cut skin leading to skin infections",
					isCorrect: false,
				},
				{
					answerId: 3,
					answerText: " Options 2 and 3",
					isCorrect: true,
				},
			],
			questionImage: "images/Q2.jpeg",
			positiveFeedBack:
				"When litter is improperly disposed, it can spread diseases and coming in contact with sharp litter items can cause skin infection. Moreover, litter can also contaminate soil by releasing toxic chemicals into the soil and large amounts of litter can block flow of water bodies.",
			negativeFeedBack:
				"Litter can carry germs that spread diseases such as cholera and typhoid if it gets into water sources or is carried home by pets. Broken glass and cans made of metal can be sharp and can cut skin on contact. This can cause injuries leading to skin infections like tetanus.",
		},
		{
			id: 2,
			questionText: "Can microplastics impact humans?",
			typeofAnswer: "RadioButton",
			answerOptions: [
				{ answerId: 0, answerText: "No, microplastics are too small", isCorrect: false },
				{ answerId: 1, answerText: "Can cause suffocation", isCorrect: false },
				{ answerId: 2, answerText: "Can cause health problems like obesity", isCorrect: true },
				{ answerId: 3, answerText: "No they are made from eco-friendly material", isCorrect: false },
			],
			questionImage: "images/Q3.jpg",
			positiveFeedBack:
				"Microplastics in large numbers can have adverse impact on humans. Research has shown that an average person ingests more than 50000 particles of microplastic in a year. This can cause exposure to harmful chemicals found in some plastics and also cause various health problems like obesity, stunted growth in children, organ problems, reproductive harm.",
			negativeFeedBack:
				"Ingesting microplastics could expose people to harmful chemicals found in some plastics. This can cause various health problems like obesity, stunted growth in children, organ problems, reproductive harm etc.",
		},
		{
			id: 3,
			questionText: "How does plastic impact Australian wildlife?",
			typeofAnswer: "RadioButton",
			answerOptions: [
				{
					answerId: 0,
					answerText: "Small fish get stuck in plastic bags",
					isCorrect: false,
				},
				{
					answerId: 1,
					answerText: "Turtles ingest plastic thinking it to be jellyfish",
					isCorrect: false,
				},
				{
					answerId: 2,
					answerText: "Seabirds mistake plastic balloons as food",
					isCorrect: false,
				},
				{ answerId: 3, answerText: "All of the above", isCorrect: true },
			],
			questionImage: "images/Q4.jpg",
			positiveFeedBack:
				"Many Australian species like turtles, dolphins, seabirds are at risk due to plastic litter in the ocean. These animals perceive plastic as their food source and consequently ingest it. This can lead to suffocation and drowning. That is why remember to dispose of plastic litter into garbage disposal bins!",
			negativeFeedBack:
				"Plastic bags can be hazardous to turtles as these clear floating bags resemble their primary food jellyfish and are consequently ingested by them. Seabirds mistake balloons as food and ingest them. This can cause suffocation and lead to death. Moreover, small fish can unknowingly swim into plastic bags as these bags are very clear and would appear to be invisible to them.",
		},
		{
			id: 4,
			questionText: "How can derelict fishing nets endanger marine life?",
			typeofAnswer: "RadioButton",
			answerOptions: [
				{ answerId: 0, answerText: "Critically injuring body parts", isCorrect: false },
				{
					answerId: 1,
					answerText: "Entanglement causing whales to drown",
					isCorrect: false,
				},
				{
					answerId: 2,
					answerText: "Washed ashore leading to suffocation",
					isCorrect: false,
				},
				{ answerId: 3, answerText: " All of the above", isCorrect: true },
			],
			questionImage: "images/Q5.jpg",
			positiveFeedBack:
				"There are many people in Melbourne who like fishing. Please remember not to throw fishing gear and other garbage into the ocean. They can cause harm to marine life and even cause their death.",
			negativeFeedBack:
				"Marine animals can get entangled in these fishing nets and can drown or die due to suffocation or starvation. These nets can also cause severe injuries to their body parts. Such entanglement cases of seals, stingrays and leatherback turtles have been recorded in Victoria. Hence it is essential to properly dispose of fishing gear in waste disposal bins rather than discarding it into the ocean.",
		},
	]);

	// Index of the question
	const [index, setIndex] = useState(0);

	// variables of the sections
	const [intro, setIntro] = useState(true);
	const [welcome, setWelcome] = useState(false);
	const [question, setQuestion] = useState(false);
	const [result, setResult] = useState(false);

	// variables of the questions
	const [showButtons, setShowButtons] = useState(false);
	const [typeofAnswer, setTypeofAnswer] = useState("");
	const [valueOption, setValueOption] = useState(null);
	const [iscorrect, setIscorrect] = useState(false);
	const [score, setScore] = useState(0);
	const [textScore, setTextScore] = useState("");

	// variables Modal
	const [modalVisible, setModalVisible] = useState(false);
	const [textModal, setTextModal] = useState("");
	const [textButton, setTextButton] = useState("Go to next question");

	// variables tipying animation
	const [typeText, setTypeText] = useState(false);

	// useSpring React-Spring
	const introAnimation = useSpring({
		opacity: intro ? 1 : 0,
		display: intro ? "flex" : "none",
	});

	const welcomeAnimation = useSpring({
		opacity: welcome ? 1 : 0,
		display: welcome ? "flex" : "none",
		delay: 200,
	});

	const questionAnimation = useSpring({
		opacity: question ? 1 : 0,
		display: question ? "flex" : "none",
		delay: 200,
	});

	const resultAnimation = useSpring({
		opacity: result ? 1 : 0,
		display: result ? "flex" : "none",
	});

	const buttonsAnimation = useSpring({
		opacity: showButtons ? 1 : 0,
	});

	// useTransition React-Spring
	const transitionModal = useTransition(modalVisible, {
		from: { opacity: 0, transform: "translateY(-40px)" },
		enter: { opacity: 1, transform: "translateY(0px)" },
		leave: { opacity: 0, transform: "translateY(-40px)" },
	});

	const transitionSlide = useTransition(index, {
		from: { opacity: 0, transform: "translate3d(100%,0,0)" },
		enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
		leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
	});

	const transitionToWelcome = () => {
		setIntro(false);
		setWelcome(true);
		setShowButtons(false);
	};

	const transitionQuestion = () => {
		setWelcome(false);
		setQuestion(true);
		questions[0].typeofAnswer == "RadioButton" ? setTypeofAnswer("RadioButton") : setTypeofAnswer("Button");
	};

	const openModal = (isCorrectAnswered, question) => {
		if (isCorrectAnswered) {
			setScore((state) => state + 1);
		}

		if (index == questions.length - 1) {
			setTextButton("Check my result");
		}
		setIscorrect(isCorrectAnswered);
		setTextModal(isCorrectAnswered ? question.positiveFeedBack : question.negativeFeedBack);
		setModalVisible(true);
		setShowButtons(false);
		console.log(showButtons);
	};

	const nextQuestion = () => {
		setModalVisible(false);

		if (index != questions.length - 1) {
			setIndex((state) => state + 1);
			questions[index + 1].typeofAnswer == "RadioButton" ? setTypeofAnswer("RadioButton") : setTypeofAnswer("Button");
			setValueOption(null);
		} else {
			setResult(true);
			setQuestion(false);
			setShowButtons(false);

			if (score == 5) {
				setTextScore(
					"Congratulations! You are the Litter Master!!.  Now use this knowledge to reduce littering in Australia to make it a cleaner and greener place!"
				);
			} else if (score == 4) {
				setTextScore(
					"Excellent! You seem to be well aware of impacts of litter.  Now use this knowledge to reduce littering in Australia to make it a cleaner and greener place!"
				);
			} else if (score == 3) {
				setTextScore("Great! Try again because you stand a chance to win Litter Master!");
			} else if (score == 2) {
				setTextScore(
					"Good! But I think you can do better. Check more info in Litter Info and play the game again. You will do much better!"
				);
			} else if (score == 1 || score == 0) {
				setTextScore("It’s okay. Everyone makes mistakes the first time. Try again and you’ll definitely do better!");
			}
		}

		console.log(showButtons);
	};

	const onChange = (e) => {
		setValueOption(e.target.value);
		setShowButtons(true);
	};

	const resetQuiz = () => {
		setIndex(0);
		setScore(0);
		setIntro(true);
		setShowButtons(false);
		setResult(false);
		setQuestion(false);
		setWelcome(false);
	};

	const fragmentModal = transitionModal((style, item) => {
		return (
			item && (
				<Modal
					style={style}
					isCorrect={iscorrect}
					textModal={textModal}
					textButton={textButton}
					closeModal={() => nextQuestion()}
				/>
			)
		);
	});

	const renderRadioSection = (item) => {
		return questions[item].answerOptions.map((answerOption) => (
			<>
				<input
					id={answerOption.answerId}
					type="radio"
					value={answerOption.answerId}
					checked={valueOption == answerOption.answerId}
					onChange={onChange}
				/>
				<label htmlFor={answerOption.answerId}>{answerOption.answerText}</label>
			</>
		));
	};

	const fragment = transitionSlide((style, item) => {
		return (
			<animated.div className="container-quiz" style={style}>
				<div className="stepper-container-horizontal">
					<StepProgressBar steps={questions} currentStepNumber={item}></StepProgressBar>
				</div>
				<div className="container-question">
					<div className="question-section">
						<div className="question">
							<div className="question-count">
								<span>Question {item + 1}</span>
							</div>
							<div className="question-text">{questions[item].questionText}</div>
							{typeofAnswer == "RadioButton" ? (
								<div className="radioButton-section">
									<div className="box-radio">{renderRadioSection(item)}</div>
								</div>
							) : null}
						</div>
						{typeofAnswer == "RadioButton" ? (
							<animated.div className="answer-section" style={buttonsAnimation}>
								<Button
									styleBtn="primary quiz-btn"
									text="Check my answer"
									onClick={() => openModal(questions[item].answerOptions[valueOption].isCorrect, questions[item])}
								></Button>
							</animated.div>
						) : null}
						{typeofAnswer == "Button" ? (
							<div className="answer-section">
								{questions[item].answerOptions.map((answerOption) => (
									<Button
										styleBtn="primary quiz-btn"
										text={answerOption.answerText}
										onClick={() => openModal(answerOption.isCorrect, questions[item])}
									></Button>
								))}
							</div>
						) : null}
					</div>
					<div className="image-section">
						<figure className="image-section-wrap">
							<img src={questions[item].questionImage} alt="Image" className="image-section-img" />
						</figure>
					</div>
				</div>
			</animated.div>
		);
	});

	return (
		<>
			{intro ? (
				<animated.div style={introAnimation} className="cnt containerTalk">
					<TypeWriter
						options={{ delay: 80 }}
						onInit={(typeWriter) => {
							typeWriter.typeString("Hello there,").start();
						}}
					/>
					<TypeWriter
						options={{ delay: 80 }}
						onInit={(typeWriter) => {
							typeWriter
								.pauseFor(1200)
								.typeString("Are you ready to learn about litter?")
								.callFunction(() => {
									setShowButtons(true);
								})
								.start();
						}}
					/>
					<div className="button-section">
						<animated.div style={buttonsAnimation}>
							<Button styleBtn="primary quiz-btn" text="I'm ready" onClick={() => transitionToWelcome()} />
						</animated.div>
					</div>
				</animated.div>
			) : null}
			{welcome ? (
				<animated.div style={welcomeAnimation} className="containerIntro">
					<div className="cnt container-quiz">
						<div className="container-question">
							<div className="question-section">
								<div className="titleQuiz">
									<h1>Litter Master</h1>
								</div>
								<div className="question-text">
									<TypeWriter
										options={{ delay: 50 }}
										onInit={(typeWriter) => {
											typeWriter
												.typeString(
													"Litter master is a quiz game that is design to measure your knowledge about Littering and also explain you about why is important to take action on this issue."
												)
												.callFunction(() => {
													setShowButtons(true);
												})
												.start();
										}}
									/>
								</div>
								<animated.div className="botton-section" style={buttonsAnimation}>
									<Button styleBtn="primary quiz-btn" text="Let's Go" onClick={() => transitionQuestion()} />
								</animated.div>
							</div>
							<div className="image-section">
								<figure className="image-section-wrap">
									<img src="images/home-quiz.jpg" alt="Image" className="image-section-img" />
								</figure>
							</div>
						</div>
					</div>
				</animated.div>
			) : null}
			{result ? (
				<animated.div style={resultAnimation} className="containerIntro">
					<div className="cnt container-quiz">
						<div className="container-question">
							<div className="question-section">
								{score == questions.length ? (
									<div className="titleQuiz">
										<img src="images/Trophy.png" alt="Trophy" className="trophy-img" />
									</div>
								) : (
									<div className="titleQuiz">
										<h1>{score * 10} points</h1>
									</div>
								)}
								<div className="result-text">
									<TypeWriter
										options={{ delay: 60 }}
										onInit={(typeWriter) => {
											typeWriter
												.typeString(textScore)
												.callFunction(() => {
													setShowButtons(true);
												})
												.start();
										}}
									/>
								</div>
								<animated.div className="answer-section" style={buttonsAnimation}>
									<Button styleBtn="primary quiz-btn" text="Play Again" onClick={() => resetQuiz()} />
								</animated.div>
							</div>
							<div className="image-section">
								<figure className="image-section-wrap">
									<img src="images/home-quiz.jpg" alt="Image" className="image-section-img" />
								</figure>
							</div>
						</div>
					</div>
				</animated.div>
			) : null}
			{question ? (
				<animated.div style={questionAnimation} className="containerQuestion">
					{fragment}
					{fragmentModal}
				</animated.div>
			) : null}
		</>
	);
};

export default Game;
