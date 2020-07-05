import React from 'react';

const CardContent = ({ name, description, type, main, warmup }) => (
  <div className="card-content">
    <div className="content">
      <h2 className="name">{name}</h2>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="workoutType">{type}</div>
      <div className="warmup">
        <h3>Warm Up</h3>
        <article>{warmup}</article>
        
      </div>
      <div className="mainWorkout">
        <h3>Workout</h3>
        <p>{main}</p>
      </div>
    </div>
  </div>
);

export default CardContent;
