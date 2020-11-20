import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";

class QuestionList extends Component {
  state = {
    questions: [],
  };

  constructor(props) {
    super(props);
  }

  equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  componentDidMount() {
    axios
      .get(`http://jservice.io/api/clues/?category=${this.props.category.id}`)
      .then((response) => {


        let newi = response.data.sort(function(a,b){
            return a.value - b.value;
          });


        this.setState({
          questions: newi,
        });
      });
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div>
        <ul>
          {this.state.questions.map((data, index) => {
            return <Card key={data.id} question={data} />;
          })}
        </ul>
      </div>
    );
  }
}

export default QuestionList;
