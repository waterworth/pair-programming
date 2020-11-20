
import React, { Component } from 'react';

class Card extends Component {
    state={
        value: ""
    }

    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("DID MOUNT")
        if(this.props.question.didClick){
            this.setState({value: this.props.question.question})
        }else{
            this.setState({value: this.props.question.value})
        }
    }

    clicking = () => {
        this.setState({value: this.props.question.question})
    }

    render() {
        return (
            <li onClick={this.clicking}>
            {this.state.value}
        </li>
        );
    }
}

export default Card;