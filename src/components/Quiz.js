import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import StepProgressBar from "./StepProgressBar";
import "./quiz.css";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles"


const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#45BF55",
      main: "#168039",
      dark: "#044D29",
      contrastText: "#fff"
    },
    secondary: {
      light: "#97ED8A",
      main: "#45BF55",
      dark: "#168039",
      contrastText: "#fff"
    }
  },
});

export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          questionText:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium aut illum??",
          answerOptions: [
            { answerText: "1 Month", isCorrect: false },
            { answerText: "1 Month", isCorrect: false },
            { answerText: "1 Month", isCorrect: false },
            { answerText: "6 Months", isCorrect: true },
          ],
        },
        {
          questionText: "Who is CEO of Tesla?",
          answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
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
      showScore: false,
      score: 0,
      currentStep: 0,
    };
  }

  handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect == true) {
      this.setState({
        score: this.state.score + 1,
      });
    }

    const nextQuestion = this.state.currentQuestion + 1;

    if (nextQuestion < this.state.questions.length) {
      this.setState({
        currentStep: this.state.currentStep + 1,
        currentQuestion: nextQuestion,
      });
    } else {
      this.setState({
        showScore: true,
      });
    }
  };

  

  render() {
    const { currentStep } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <div className="container-quiz">
            {this.state.showScore ? (
              <div className="score-section">
                You scored {this.state.score} out of{" "}
                {this.state.questions.length}
              </div>
            ) : (
              <>
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
                        <Button variant="contained" color="primary"
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
              </>
            )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Quiz;
