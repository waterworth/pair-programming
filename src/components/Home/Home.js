import React, { Component } from "react";
import axios from "axios";
import QuestionList from "../QuestionList/QuestionList";

export default class Home extends Component {
  state = {
    categories: [],
    questions: [[]],
  };

  componentDidMount() {
    let random = Math.floor(Math.random() * 100);
    axios
      .get(`http://jservice.io/api/categories/?count=6&offset=${random}`)
      .then((response) => {
        this.setState({
          categories: response.data,
          questions: this.state.questions,
        });
      })
  }

  render() {
    return (
      <div>
        <h1>Home Screen</h1>
        {this.state.categories.map((data, index) => {
          return (
            <div key={data.id}>
              <h2>{data.title}</h2>
              <ul>
                <QuestionList category={data}/>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
