import React, { Component } from 'react';
import Card from '../Card/Card';
import axios from 'axios';
import './QuestionList.scss';

class QuestionList extends Component {
  state = {
    questions: []
  };

  equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  getQuestions = (id) =>{
    axios
    .get(`http://jservice.io/api/clues/?category=${id}`)
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
          console.log(newi[i].value);
          if(newi[i].value === null || newi[i].value == 100 || newi[i].value === 300 || newi[i].value === 500){
              console.log("remove", newi[i].value);
              newi.splice(i, 1);
          }
          else{
              console.log("good", newi[i].value);
          }
      }

      this.setState({
        questions: newi,
      });
    })
    .catch((err)=>{
        this.getQuestions(id+1)
    })
  }


  componentDidMount() {
    this.getQuestions(this.props.category.id)
  }

  render() {
    return (
      <section className='category'>
        <h2 className='category__title'>{this.props.category.title}</h2>
        {this.state.questions.map((data, index) => {
          return <Card key={data.id} question={data} pressQuestion={this.props.handleClickQuestion} />;
        })}
      </section>
    );
  }
}

export default QuestionList;
