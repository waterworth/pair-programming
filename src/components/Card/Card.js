import React from 'react';

const Card = (props) => {
    return (
        <li>
            {props.question.value} {props.question.answer}
        </li>
    );
}

export default Card;
