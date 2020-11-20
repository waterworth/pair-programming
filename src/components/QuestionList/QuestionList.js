import React, { Component } from 'react';
import Card from '../Card/Card';
import axios from 'axios';
import './QuestionList.scss';

class QuestionList extends Component {
  state = {
    questions: [],
  };

  equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  componentDidMount() {
    axios
      .get(`http://jservice.io/api/clues/?category=${this.props.category.id}`)
      .then((response) => {
        let newi = response.data;

        for (let i = 0; i < newi.length; i++) {
          for (let x = 0; x < newi.length; x++) {
            if (i != x && newi[i].value == newi[x].value) {
              newi.splice(x, 1);
            }
          }
        }

        newi = response.data.sort(function (a, b) {
          return a.value - b.value;
        });

        for (let i = 0; i < newi.length; i++) {
            if(newi[i].value === null || newi[i].value == 100 || newi[i].value === 300 || newi[i].value === 500){
                newi.splice(i, 1);
            }
        }

        this.setState({
          questions: newi,
        });
      });
  }

  handleClickLi = (id) => {
    let newarr = this.state.questions;
    console.log('did click', id);
    newarr.forEach((element) => {
      if (element.id === id) {
        element.didClick = true;
      }
    });

    this.setState({
      questions: newarr,
    });
  };

  render() {
    return (
      <section className='category'>
        <h2 className='category__title'>{this.props.category.title}</h2>
        {this.state.questions.map((data, index) => {
          return <Card key={data.id} question={data} />;
        })}
      </section>
    );
  }
}

export default QuestionList;
