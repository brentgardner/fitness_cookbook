import React from 'react';

const CardContent = ({ name, description, type, main, warmup, duration, favorite, tags }) => (
  <div className="card">
    <div className="card-header">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <h2 className="card-header-title">{name}</h2>
            <div className="tag is-dark subtitle">{type}</div>
            <div className="tag is-light subtitle">{duration} minutes</div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-content">
      <div className="description content">
        <p>{description}</p>
      </div>
      
      <div className="warmup">
        <h3 className="title is-6">Warm Up</h3>

        <div class="content">
          {warmup}
        </div>
        
      </div>
      <div className="mainWorkout">
        <h3 className="title is-6">Workout</h3>

        <div class="content">
          {main}
        </div>

      </div>
      {tags.length > 0 &&
      <div className="tags">
        {tags.map((tag, index) => (
          <span className="tag">{tag}</span>
        ))}       
      </div>
      }
    </div>
  </div>
);

export default CardContent;
