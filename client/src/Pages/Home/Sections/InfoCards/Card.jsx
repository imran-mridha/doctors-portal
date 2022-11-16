import React from 'react';

const Card = ({ card }) => {
  const { icon, name, description, bgClass } = card;
  return (
    <div className={`card text-center md:text-start text-white p-6 md:card-side shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="text-center md:text-start text-2xl">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;