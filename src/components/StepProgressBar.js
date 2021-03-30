import React, { Component } from "react";
import "./stepProgressBar.scss";

export class StepProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: []
    };
  }

  componentDidMount(){
    const {steps, currentStepNumber} = this.props

    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.key = step.questionText
      stepObj.completed = false
      stepObj.highlighted = index === 0 ? true :false;
      stepObj.selected  = index === 0 ? true :false;
      return stepObj;
    });

    const currentSteps = this.updateStep(currentStepNumber, stepsState);

    this.setState({
      steps: currentSteps
    })
  }

  componentDidUpdate(prevProps) {
    const { steps } = this.state;
    const currentSteps = this.updateStep(this.props.currentStepNumber, steps);

    if (prevProps.currentStepNumber !== this.props.currentStepNumber)
      this.setState({
        steps: currentSteps
      });
  }


  updateStep(stepNumber, steps) {
    const newSteps = [...steps];
    let stepCounter = 0;

    // Completed - to add a check mark
    // Selected - to fill step with color
    // Highlighted - to make text of selected step bold

    while (stepCounter < newSteps.length) {
      // Current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false
        };
        stepCounter++;
      }
      // Past step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true
        };
        stepCounter++;
      }
      // Future step
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false
        };
        stepCounter++;
      }
    }

    return newSteps;
  }

  render() {
    const {steps} = this.state;
    const stepsDisplay =  steps.map((step,index) => {
      return (
        <div className="step-wrapper">
          <div className={`step-number ${step.selected ? "step-number-active" : "step-number-disable"}`}>{step.completed ? <span>&#10003;</span> : index +1} </div>
          <div className={index !== steps.length - 1 ? "divider-line" : ""}/>
        </div>
      );
    });

    return (
      <div className="stepper-wrapper-horizontal">{stepsDisplay}</div>
    );
  }
}


export default StepProgressBar;
