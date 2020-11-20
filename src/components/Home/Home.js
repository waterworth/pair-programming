import React, { Component } from 'react';
import axios from 'axios';
import QuestionList from '../QuestionList/QuestionList';
import './home.scss';

export default class Home extends Component {
  state = {
    categories: [],
    questions: [[]],
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

  render() {
    return (
      <>
        <h1 className='title'>This is Jeopardy</h1>
        <main className='board'>
          {this.state.categories.map((data, index) => {
            return <QuestionList key={data.id} category={data} />;
          })}
        </main>
      </>
    );
  }
}
