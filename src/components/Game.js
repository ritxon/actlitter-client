import React, { useState, useEffect } from "react";
import TypeWriter from "typewriter-effect";
import "./game.css";
import axios from "axios";

import { useTransition, useSpring, animated } from "react-spring";
import Button from "./utils/Button";
import StepProgressBar from "./StepProgressBar";
import Modal from "./utils/Modal";

import trophy from "./../assets/trophy.png"; // with import
import smile from "./../assets/smile.png"; // with import
import crying from "./../assets/crying.png"; // with import

const Game = () => {
	const [questions, setQuestions] = useState(null);
	const [dataQuestion, setDataQuestion] = useState(null);

	useEffect(() => {
		axios
			.get("/questions")
			.then((res) => {
				// console.log(res.data);
				setDataQuestion(res.data);
				let numbersQuestions = selectQuestions(5);
				let ques = [];
				numbersQuestions.forEach((element) => {
					ques.push(res.data[element]);
				});

				setQuestions(ques);
			})
			.catch((err) => console.log(err));
		/* return () => {
			cleanup
		} */
	}, []);

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
	const transitionModal = useTransition(modalVisible, null, {
		from: { opacity: 0, transform: "translateY(-40px)" },
		enter: { opacity: 1, transform: "translateY(0px)" },
		leave: { opacity: 0, transform: "translateY(-40px)" },
	});

	const transitionSlide = useTransition(index, null, {
		from: { opacity: 0, transform: "translate3d(100%,0,0)" },
		enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
		leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
	});

	const selectQuestions = (number) => {
		let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		let ranNums = [];
		let i = nums.length;
		let j = 0;

		while (i--) {
			j = Math.floor(Math.random() * (i + 1));
			ranNums.push(nums[j]);
			nums.splice(j, 1);
		}

		return ranNums.slice(number);
	};

	const transitionToWelcome = () => {
		setIntro(false);
		setWelcome(true);
		setShowButtons(true);
	};

	const transitionQuestion = () => {
		setWelcome(false);
		setQuestion(true);
		setShowButtons(false);
		setTextButton("Go to next question");
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
		let numbersQuestions = selectQuestions(5);
		let ques = [];
		numbersQuestions.forEach((element) => {
			ques.push(dataQuestion[element]);
		});

		setQuestions(ques);
		setValueOption(null);

		setIndex(0);
		setScore(0);
		setIntro(true);
		setShowButtons(false);
		setResult(false);
		setQuestion(false);
		setWelcome(false);
	};

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

	const resultImg = (score) => {
		if (score == questions.length) {
			return (
				<div className="resultQuiz">
					<img src={trophy} alt="Trophy" className="trophy-img" />
					<h2>Congratulations!</h2>
					<div className="smallText">YOUR SCORE</div>
					<h2>
						{score}/{questions.length}
					</h2>
				</div>
			);
		} else if (score > 2 && score < 5) {
			return (
				<div className="resultQuiz">
					<img src={smile} alt="Smile" className="trophy-img" />
					<h2>Excellent!</h2>
					<div className="smallText">YOUR SCORE</div>
					<h2>
						{score}/{questions.length}
					</h2>
				</div>
			);
		} else {
			return (
				<div className="resultQuiz">
					<img src={crying} alt="Crying" className="trophy-img" />
					<h2>Keep it up！</h2>
					<div className="smallText">YOUR SCORE</div>
					<h2>
						{score}/{questions.length}
					</h2>
				</div>
			);
		}
	};

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
									<p>
										Litter master is a quiz game that is design to measure your knowledge about Littering and also
										explain you about why is important to take action on this issue.
									</p>
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
								{resultImg(score)}
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
					{transitionSlide.map(({ item, props, key }) => {
						return (
							<animated.div className="container-quiz" style={props}>
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
													onClick={() =>
														openModal(questions[item].answerOptions[valueOption].isCorrect, questions[item])
													}
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
					})}

					{transitionModal.map(({ item, props, key }) => {
						return (
							item && (
								<Modal
									style={props}
									isCorrect={iscorrect}
									textModal={textModal}
									textButton={textButton}
									closeModal={() => nextQuestion()}
								/>
							)
						);
					})}
				</animated.div>
			) : null}
		</>
	);
};

export default Game;
