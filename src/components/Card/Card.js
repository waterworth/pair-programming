import './Card.scss';
import React, { Component } from 'react';

class Card extends Component {
  state = {
    value: '',
  };

  componentDidMount() {
    console.log('DID MOUNT');
    if (this.props.question.didClick) {
      this.setState({ value: this.props.question.question });
    } else {
      this.setState({ value: "$"+this.props.question.value });
    }
  }

  clicking = () => {
    this.setState({ value: this.props.question.question });
  };

  render() {
    return (
      <article onClick={this.clicking} className='card'>
        <p className='card__price'>{this.state.value}</p>
      </article>
    );
  }
}

export default Card;
