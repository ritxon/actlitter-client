import React, { Component } from "react";
import "./quiz.css";

import StepProgressBar from "./StepProgressBar";

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
            { answerText: "6 Months", isCorrect: true },
            { answerText: "1 Year", isCorrect: false },
            { answerText: "2 Year", isCorrect: false },
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
        {
          questionText: "The iPhone was created by which company6?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          questionText: "The iPhone was created by which company7?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          questionText: "The iPhone was created by which company8?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          questionText: "The iPhone was created by which company9?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          questionText: "How many Harry Potter books are there?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
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

    const {currentStep} = this.state

    return (
      <div>
        <div className="container-quiz">
          {this.state.showScore ? (
            <div className="score-section">
              You scored {this.state.score} out of {this.state.questions.length}
            </div>
          ) : (
            <>
              <div className="stepper-container-horizontal">
                <StepProgressBar steps={this.state.questions} currentStepNumber={currentStep}></StepProgressBar>
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
                      <button
                        onClick={() =>
                          this.handleAnswerButtonClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </button>
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
    );
  }
}

export default Quiz;
