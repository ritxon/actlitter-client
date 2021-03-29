import React, { Component } from 'react'
import "./quiz.css"

export class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions : [
				{
					questionText: 'How much time does it take to decompose one core apple??',
					answerOptions: [
						{ answerText: '1 Month', isCorrect: false },
						{ answerText: '6 Months', isCorrect: true },
						{ answerText: '1 Year', isCorrect: false },
					],
				},
				{
					questionText: 'Who is CEO of Tesla?',
					answerOptions: [
						{ answerText: 'Jeff Bezos', isCorrect: false },
						{ answerText: 'Elon Musk', isCorrect: true },
						{ answerText: 'Bill Gates', isCorrect: false },
						{ answerText: 'Tony Stark', isCorrect: false },
					],
				},
				{
					questionText: 'The iPhone was created by which company?',
					answerOptions: [
						{ answerText: 'Apple', isCorrect: true },
						{ answerText: 'Intel', isCorrect: false },
						{ answerText: 'Amazon', isCorrect: false },
						{ answerText: 'Microsoft', isCorrect: false },
					],
				},
				{
					questionText: 'How many Harry Potter books are there?',
					answerOptions: [
						{ answerText: '1', isCorrect: false },
						{ answerText: '4', isCorrect: false },
						{ answerText: '6', isCorrect: false },
						{ answerText: '7', isCorrect: true },
					],
				},
			],
            currentQuestion : 0,
            showScore : false,
            score : 0
        }    
    }

    cost 

    handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect == true){
            this.setState({
                score : this.state.score + 1
            })
        }

        const nextQuestion = this.state.currentQuestion + 1

        if(nextQuestion < this.state.questions.length){
            this.setState({
                currentQuestion : nextQuestion
            })
        }else{
            this.setState({
                showScore : true
            })
        }
    }

    render() {
        return (
            <div>
                <div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{this.state.showScore ? (
				<div className='score-section'>You scored {this.state.score} out of {this.state.questions.length}</div>
			) : (
				<>
                    <div className='question'>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {this.state.currentQuestion +1}</span>/{this.state.questions.length}
                            </div>
                            <div className='question-text'>{this.state.questions[this.state.currentQuestion].questionText}</div>
                        </div>
                        <div className='image-section'>
                        <figure className='image-section-wrap'>
                            <img src='images/img-6.jpg' alt="Image" className='image-section-img'  />
                        </figure>
                        </div>
                    </div>
					<div className='answer-section'>
                        {this.state.questions[this.state.currentQuestion].answerOptions.map((answerOption) => (
                        <button onClick={() => this.handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
					</div>
				</>
			)}
		</div>
            </div>
        )
    }
}

export default Quiz
