import React from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, CardContent } from '../components';

function WorkoutList({
  handleDeleteWorkout,
  handleSelectWorkout,
  workouts,
  history,
}) {
  function selectWorkout(e) {
    const workout = getSelectedWorkout(e);
    handleSelectWorkout(workout);
    history.push(`/workouts/${workout.id}`);
  }

  function deleteWorkout(e) {
    const workout = getSelectedWorkout(e);
    handleDeleteWorkout(workout);
  }

  function getSelectedWorkout(e) {
    const index = +e.currentTarget.dataset.index;
    return workouts[index];
  }

  return (
    <div>
      {workouts.length === 0 && <div>Loading data ...</div>}
      <ul className="workout-list">
        {workouts.map((workout, index) => (
          <li key={workout.id} role="presentation" className="card">
              <CardContent
                name={workout.name}
                description={workout.description}
                type={workout.type}
                warmup={workout.warmup}
                main={workout.main}
              />
              <footer className="card-footer">
                <ButtonFooter
                  className="delete-item"
                  iconClasses="fas fa-trash"
                  onClick={deleteWorkout}ZA SA
                  label="Delete"
                  dataIndex={index}
                  dataId={workout.id}
                />
                <ButtonFooter
                  className="edit-item"
                  iconClasses="fas fa-edit"
                  onClick={selectWorkout}
                  label="Edit"
                  dataIndex={index}
                  dataId={workout.id}
                />
              </footer>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withRouter(WorkoutList);