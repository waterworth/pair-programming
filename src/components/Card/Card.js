import "./Card.scss";
import React, { Component } from "react";

class Card extends Component {
  state = {
    value: "",
    notPressed: true,
  };

  componentDidMount() {
    if (this.props.question.didClick) {
      this.setState({ value: this.props.question.question });
    } else {
      this.setState({ value: "$" + this.props.question.value });
    }
  }

  clicking = () => {
    if (this.state.notPressed) {
      this.setState({ value: this.props.question.question });

      this.props.pressQuestion(this.props.question);

      setTimeout(() => {
        this.setState({ value: "", notPressed: false });
      }, 5000);
    }
  };

  render() {
    return (
      <article onClick={this.clicking} className="card">
        <p className="card__price">{this.state.value}</p>
      </article>
    );
  }
}

export default Card;
