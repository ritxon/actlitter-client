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
            { answerText: "Yes", isCorrect: true },
            { answerText: "No", isCorrect: false },
          ],
        },
        {
          questionText: "Can microplastics impact humans?",
          answerOptions: [
            { answerText: "No, microplastics are too small", isCorrect: true },
            { answerText: "Can cause suffocation", isCorrect: true },
            {
              answerText: "Can cause health problems like obesity",
              isCorrect: false,
            },
            {
              answerText: "No they are made from eco-friendly material",
              isCorrect: false,
            },
          ],
        },
        {
          questionText: "The iPhone was created by which company3?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          questionText: "The iPhone was created by which company4?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          questionText: "The iPhone was created by which company5?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
      ],
      currentQuestion: 0,
      whichComponentToShow: "Welcome",
      score: 0,
      currentStep: 0,
    };
  }

  handleAnswerButtonClick = (isCorrect) => {
    let scoreLocal = this.state.score;

    if (isCorrect == true) {
      scoreLocal++
      this.setState({
        score: scoreLocal
      });
    }

    const nextQuestion = this.state.currentQuestion + 1;
    
    if (nextQuestion < this.state.questions.length) {
      this.setState({
        currentStep: this.state.currentStep + 1,
        currentQuestion: nextQuestion,
      });
    } else {
      if (scoreLocal == this.state.questions.length){
        this.setState({
          whichComponentToShow: "Trophy",
        });
      }else{
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

  }

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
              <h4>Play Litter Master to check your litter knowledge and win the  Master Trophy!</h4>
              <div className="botton-section">
                <Button variant="contained" color="secondary" onClick={() =>{this.setState({whichComponentToShow:"Quiz"})}} >Let's Go</Button>
              </div>
            </div>
            <div className="image-section">
              <figure className="image-section-wrap">
                <img
                  src="images/img-6.jpg"
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
              <h4>Let's use this knowledge to keep Australia clean and beautiful!</h4>
              <div className="botton-section">
              <Button variant="contained" color="secondary" onClick={() =>{this.resetQuiz()}} >Play Again</Button>
              </div>
            </div>
            <div className="image-section">
              <figure className="image-section-wrap">
                <img
                  src="images/img-6.jpg"
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
                <h1>{this.state.score*10} points</h1>
              </div>
              <h4>You did a great job!! </h4>
              <h4>Now let's use this knowledge to keep Australia clean and beautiful!</h4>
              <div className="botton-section">
                <Button variant="contained" color="secondary" onClick={() =>{this.resetQuiz()}} >Play Again</Button>
              </div>
            </div>
            <div className="image-section">
              <figure className="image-section-wrap">
                <img
                  src="images/img-6.jpg"
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
                        onClick={() =>
                          this.handleAnswerButtonClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="image-section">
                  <figure className="image-section-wrap">
                    <img
                      src="images/img-6.jpg"
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
