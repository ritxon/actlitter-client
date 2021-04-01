import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import StepProgressBar from "./StepProgressBar";
import "./quiz.css";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#45BF55",
      main: "#168039",
      dark: "#044D29",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FF7600",
      main: "#E8600C",
      dark: "#BF5900",
      contrastText: "#fff",
    },
  },
});

export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          questionText:
            "Cigarettes are made of tobacco, so littering of cigarette butts will not pose a threat to the environment, right?",
          answerOptions: [
            { answerText: "Yes", isCorrect: false },
            { answerText: "No", isCorrect: true },
          ],
          questionImage: "images/Q1.jpeg",
          positiveFeedBack:
            "Very good, please remember not to throw cigarette butts. It contains toxic ingredients that will destroy suddenly, and there is a risk of fire. Please put out the cigarette butts completely and throw them into the trash can or extinguish the cigarette box.",
          negativeFeedBack:
            "Cigarette butts thrown away at will may cause fires due to dry air or ignite combustibles, and some of the ingredients contained in them will damage the soil environment. Therefore, smokers should pay special attention to how to deal with the problem of cigarette butts, try to throw them in the cigarette extinguishing box, or ensure that the cigarette butts are completely extinguished before throwing them into the trash can. Don't throw away cigarette butts at will.",
        },
        {
          questionText: "What are the characteristics of litter?",
          answerOptions: [
            {
              answerText: "Can be used to make soil fertile",
              isCorrect: false,
            },
            {
              answerText: "Can spread diseases like cholera and typhoid",
              isCorrect: false,
            },
            {
              answerText:
                "Broken glass and metal can cut skin leading to skin infections",
              isCorrect: false,
            },
            {
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
          questionText: "Can microplastics impact humans?",
          answerOptions: [
            { answerText: "No, microplastics are too small", isCorrect: false },
            { answerText: "Can cause suffocation", isCorrect: false },
            {
              answerText: "Can cause health problems like obesity",
              isCorrect: true,
            },
            {
              answerText: "No they are made from eco-friendly material",
              isCorrect: false,
            },
          ],
          questionImage: "images/Q3.jpg",
          positiveFeedBack:
            "Microplastics in large numbers can have adverse impact on humans. Research has shown that an average person ingests more than 50000 particles of microplastic in a year. This can cause exposure to harmful chemicals found in some plastics and also cause various health problems like obesity, stunted growth in children, organ problems, reproductive harm.",
          negativeFeedBack:
            "Ingesting microplastics could expose people to harmful chemicals found in some plastics. This can cause various health problems like obesity, stunted growth in children, organ problems, reproductive harm etc.",
        },
        {
          questionText: "How does plastic impact Australian wildlife?",
          answerOptions: [
            {
              answerText: "Small fish get stuck in plastic bags",
              isCorrect: false,
            },
            {
              answerText: "Turtles ingest plastic thinking it to be jellyfish",
              isCorrect: false,
            },
            {
              answerText: "Seabirds mistake plastic balloons as food",
              isCorrect: false,
            },
            { answerText: "All of the above", isCorrect: true },
          ],
          questionImage: "images/Q4.jpg",
          positiveFeedBack:
            "Many Australian species like turtles, dolphins, seabirds are at risk due to plastic litter in the ocean. These animals perceive plastic as their food source and consequently ingest it. This can lead to suffocation and drowning. That is why remember to dispose of plastic litter into garbage disposal bins!",
          negativeFeedBack:
            "Plastic bags can be hazardous to turtles as these clear floating bags resemble their primary food jellyfish and are consequently ingested by them. Seabirds mistake balloons as food and ingest them. This can cause suffocation and lead to death. Moreover, small fish can unknowingly swim into plastic bags as these bags are very clear and would appear to be invisible to them.",
        },
        {
          questionText: "How can derelict fishing nets endanger marine life?",
          answerOptions: [
            { answerText: "Critically injuring body parts", isCorrect: false },
            {
              answerText: "Entanglement causing whales to drown",
              isCorrect: false,
            },
            {
              answerText: "Washed ashore leading to suffocation",
              isCorrect: false,
            },
            { answerText: " All of the above", isCorrect: true },
          ],
          questionImage: "images/Q5.jpg",
          positiveFeedBack:
            "There are many people in Melbourne who like fishing. Please remember not to throw fishing gear and other garbage into the ocean. They can cause harm to marine life and even cause their death.",
          negativeFeedBack:
            "Marine animals can get entangled in these fishing nets and can drown or die due to suffocation or starvation. These nets can also cause severe injuries to their body parts. Such entanglement cases of seals, stingrays and leatherback turtles have been recorded in Victoria. Hence it is essential to properly dispose of fishing gear in waste disposal bins rather than discarding it into the ocean.",
        },
      ],
      currentQuestion: 0,
      whichComponentToShow: "Welcome",
      score: 0,
      currentStep: 0,
      correctQuestion: true,
    };
  }

  getFeedBack = (isCorrect) => {
    let scoreLocal = this.state.score;

    if (isCorrect == true) {
      scoreLocal++;
      this.setState({
        score: scoreLocal,
        correctQuestion: true,
        whichComponentToShow: "Feedback",
      });
    } else {
      this.setState({
        correctQuestion: false,
        whichComponentToShow: "Feedback",
      });
    }
  };

  nextQuestion = () => {
    let scoreLocal = this.state.score;
    const nextQuestion = this.state.currentQuestion + 1;

    if (nextQuestion < this.state.questions.length) {
      this.setState({
        currentStep: this.state.currentStep + 1,
        currentQuestion: nextQuestion,
        whichComponentToShow: "Quiz",
      });
    } else {
      if (scoreLocal == this.state.questions.length) {
        this.setState({
          whichComponentToShow: "Trophy",
        });
      } else {
        this.setState({
          whichComponentToShow: "Score",
        });
      }
    }
  };

  resetQuiz = (isCorrect) => {
    this.setState({
      currentQuestion: 0,
      whichComponentToShow: "Welcome",
      score: 0,
      currentStep: 0,
    });
  };

  render() {
    const { currentStep } = this.state;
    if (this.state.whichComponentToShow == "Welcome") {
      return (
        <MuiThemeProvider theme={theme}>
          <div className="container-quiz">
            <div className="container-question">
              <div className="question-section">
                <div className="titleQuiz">
                  <h1>Litter Master</h1>
                </div>
                <h4>
                  Play Litter Master to check your litter knowledge and win the
                  Master Trophy!
                </h4>
                <div className="botton-section">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      this.setState({ whichComponentToShow: "Quiz" });
                    }}
                  >
                    Let's Go
                  </Button>
                </div>
              </div>
              <div className="image-section">
                <figure className="image-section-wrap">
                  <img
                    src="images/home-quiz.jpg"
                    alt="Image"
                    className="image-section-img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      );
    } else if (this.state.whichComponentToShow == "Trophy") {
      return (
        <MuiThemeProvider theme={theme}>
          <div className="container-quiz">
            <div className="container-question">
              <div className="question-section">
                <div className="titleQuiz">
                  <img
                    src="images/Trophy.png"
                    alt="Trophy"
                    className="trophy-img"
                  />
                </div>
                <h4>Congratulations! You are the Litter Master!! </h4>
                <h4>
                  Let's use this knowledge to keep Australia clean and
                  beautiful!
                </h4>
                <div className="botton-section">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      this.resetQuiz();
                    }}
                  >
                    Play Again
                  </Button>
                </div>
              </div>
              <div className="image-section">
                <figure className="image-section-wrap">
                  <img
                    src="images/home-quiz.jpg"
                    alt="Image"
                    className="image-section-img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      );
    } else if (this.state.whichComponentToShow == "Feedback") {
      return (
        <MuiThemeProvider theme={theme}>
          <div className="container-quiz">
            <div className="stepper-container-horizontal">
              <StepProgressBar
                steps={this.state.questions}
                currentStepNumber={currentStep}
              ></StepProgressBar>
            </div>
            <div className="container-question">
              <div className="question-section">
                <div className="titleQuiz">
                {this.state.correctQuestion ? <h1>Voila!</h1> : <h1>Oops!</h1>}
                </div>
                {this.state.correctQuestion ? (
                  <h4>It's great, you got the knowledge in this area.</h4>
                ) : (
                  <h4>
                   That’s okay. You almost had it!
                  </h4>
                )}
                {this.state.correctQuestion ? (
                  <p>{this.state.questions[this.state.currentQuestion].positiveFeedBack}</p>
                ) : (
                  <p>{this.state.questions[this.state.currentQuestion].negativeFeedBack}</p>
                )}
                <div className="botton-section">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      this.nextQuestion();
                    }}
                  >
                    Next Question
                  </Button>
                </div>
              </div>
              <div className="image-section">
                <figure className="image-section-wrap">
                  <img
                    src="images/home-quiz.jpg"
                    alt="Image"
                    className="image-section-img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      );
    } else if (this.state.whichComponentToShow == "Score") {
      return (
        <MuiThemeProvider theme={theme}>
          <div className="container-quiz">
            <div className="container-question">
              <div className="question-section">
                <div className="titleQuiz">
                  <h1>{this.state.score * 10} points</h1>
                </div>
                <h4>You did a great job!! </h4>
                <h4>
                  Now let's use this knowledge to keep Australia clean and
                  beautiful!
                </h4>
                <div className="botton-section">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      this.resetQuiz();
                    }}
                  >
                    Play Again
                  </Button>
                </div>
              </div>
              <div className="image-section">
                <figure className="image-section-wrap">
                  <img
                    src="images/home-quiz.jpg"
                    alt="Image"
                    className="image-section-img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      );
    } else if (this.state.whichComponentToShow == "Quiz") {
      return (
        <MuiThemeProvider theme={theme}>
          <div>
            <div className="container-quiz">
              <div className="stepper-container-horizontal">
                <StepProgressBar
                  steps={this.state.questions}
                  currentStepNumber={currentStep}
                ></StepProgressBar>
              </div>
              <div className="container-question">
                <div className="question-section">
                  <div className="question">
                    <div className="question-count">
                      <span>Question {this.state.currentQuestion + 1}</span>
                    </div>
                    <div className="question-text">
                      {
                        this.state.questions[this.state.currentQuestion]
                          .questionText
                      }
                    </div>
                  </div>
                  <div className="answer-section">
                    {this.state.questions[
                      this.state.currentQuestion
                    ].answerOptions.map((answerOption) => (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => this.getFeedBack(answerOption.isCorrect)}
                      >
                        {answerOption.answerText}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="image-section">
                  <figure className="image-section-wrap">
                    <img
                      src={
                        this.state.questions[this.state.currentQuestion]
                          .questionImage
                      }
                      alt="Image"
                      className="image-section-img"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      );
    }
  }
}

export default Quiz;
