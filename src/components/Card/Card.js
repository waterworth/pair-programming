import React from 'react';
import './Card.scss';

const Card = (props) => {
  return (
    <article className='card'>
      <p className='card__price'>${props.question.value}</p>
    </article>
  );
};

export default Card;
