import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  state = {
    categories: [],
    questions: [],
  };

  componentDidMount() {
    let random = Math.floor(Math.random() * 100);
    console.log(random);
    axios
      .get('http://jservice.io/api/categories/?count=6&offset=' + random)
      .then((response) => {
        console.log(response);
        this.setState({
          categories: response.data,
          questions: this.state.questions,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Home Screen</h1>
      </div>
    );
  }
}
