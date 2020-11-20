import React, { Component } from 'react';
import axios from 'axios';
import QuestionList from '../QuestionList/QuestionList';
import './home.scss';

export default class Home extends Component {
  state = {
    categories: [],
    score: 0,
    currQuestion: {},
    form: '',
    answer: '',
  };

  componentDidMount() {
    let random = Math.floor(Math.random() * 200);
    axios
      .get(`http://jservice.io/api/categories/?count=6&offset=${random}`)
      .then((response) => {
        this.setState({
          categories: response.data,
          questions: this.state.questions,
        });
      });
  }

  updateScore = (num, RW) => {
    console.log(num);
    let score = this.state.score;

    if (RW) {
      score += num;
    } else {
      score -= num;
    }

    this.setState({
      categories: this.state.categories,
      questions: this.state.questions,
      score: score,
    });
  };

  handleClickQuestion = (qst) => {
    console.log(qst);
    this.setState({
      questions: this.state.questions,
      currQuestion: qst,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.currQuestion.answer) {
      let realAnaswer = this.state.currQuestion.answer.replace('/', '');
      if (
        realAnaswer.toLowerCase().includes(e.target.answer.value.toLowerCase())
      ) {
        this.updateScore(this.state.currQuestion.value, true);
      } else {
        this.updateScore(this.state.currQuestion.value, false);
        this.setState({
          answer: this.state.currQuestion.answer,
        });
      }
    }

    this.setState({
      form: '',
    });

    setTimeout(() => {
      this.setState({
        answer: '',
      });
    }, 10000);
  };

  inputChange = (e) => {
    this.setState({
      form: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1 className='title'>This is Jeopardy</h1>
        <h2 className='score'>Score: {this.state.score}</h2>
        <main className='board'>
          {this.state.categories.map((data, index) => {
            return (
              <QuestionList
                key={data.id}
                category={data}
                handleScore={this.updateScore}
                handleClickQuestion={this.handleClickQuestion}
              />
            );
          })}
        </main>
        <form onSubmit={this.handleFormSubmit}>
          <input
            className='home__input'
            value={this.state.form}
            type='text'
            name='answer'
            onChange={this.inputChange}
          />
          <button className='home__button' type='submit'>
            Submit
          </button>
          <span className='home__answer'>Answer: {this.state.answer}</span>
        </form>
      </>
    );
  }
}
