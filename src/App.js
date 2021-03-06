import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const value1 = Math.floor(Math.random() * 100);
// const value2 = Math.floor(Math.random() * 100);
// const value3 = Math.floor(Math.random() * 100);
// const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
// const numQuestions = 0;
// const numCorrect = 0;

class App extends Component {
  state = {
    value1: 0,
    value2: 0,
    value3: 0,
    proposedAnswer: 0,
    numQuestions: 0,
    numCorrect: 0
  }

  refresh = () => {
    let v1 = Math.floor(Math.random() * 100);
    let v2 = Math.floor(Math.random() * 100);
    let v3 = Math.floor(Math.random() * 100);
    let pa = Math.floor(Math.random() * 3) + v1 + v2 + v3;

    this.setState({
      value1: v1,
      value2: v2,
      value3: v3,
      proposedAnswer: pa
    })
  }

  increaseQuestionNumber = () => {
    this.setState((prevState, props) => ({
      numQuestions: prevState.numQuestions + 1
    }));
  }

  increaseCorrectAnswers = () => {
    this.setState((prevState, props) => ({
      numCorrect: prevState.numCorrect + 1
    }))
  }

  getCorrectAnswer = () => {
    return this.state.value1 + this.state.value2 + this.state.value3;
  }

  truePressed = () => {
    // console.log("TRUE");
    var correctAnswer = this.getCorrectAnswer();
    if (correctAnswer === this.state.proposedAnswer) {
      this.increaseCorrectAnswers();
    }
    
    this.increaseQuestionNumber();
    this.refresh();
  }

  falsePressed = () => {
    var correctAnswer = this.getCorrectAnswer();
    if (correctAnswer !== this.state.proposedAnswer) {
      this.increaseCorrectAnswers();
    }
    
    this.increaseQuestionNumber();
    this.refresh();
  }

  componentDidMount() {
    this.refresh();
  }
  
  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.truePressed}>True</button>
          <button onClick={this.falsePressed}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
