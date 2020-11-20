import React from 'react';

const Card = (props) => {
    return (
        <li>
            {props.question.value}
        </li>
    );
}

export default Card;
