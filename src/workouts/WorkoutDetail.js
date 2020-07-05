import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, InputDetail } from '../components';

function WorkoutDetail({
  workout: initWorkout,
  handleCancelWorkout,
  handleSaveWorkout,
  history,
}) {
  const [workout, setWorkout] = useState(Object.assign({}, initWorkout));

  useEffect(() => {
    if (!workout) {
      history.push('/workouts'); // no workout, bail out of Details
    }
  }, [workout, history]);

  function handleSave() {
    const chgWorkout = { ...workout, id: workout.id || null };
    handleSaveWorkout(chgWorkout);
  }

  function handleNameChange(e) {
    setWorkout({ ...workout, name: e.target.value });
  }

  function handleDescriptionChange(e) {
    setWorkout({ ...workout, description: e.target.value });
  }

  function handleTypeChange(e) {
    setWorkout({ ...workout, type: e.target.value });
  }

  function handleWarmUpChange(e) {
    setWorkout({ ...workout, warmup: e.target.value });
  }

  function handleMainChange(e) {
    setWorkout({ ...workout, main: e.target.value });
  }

  return (
    <div className="card edit-detail">
      <header className="card-header">
        <p className="card-header-title">
          {workout.name}
          &nbsp;
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {workout.id && (
            <InputDetail name="id" value={workout.id} readOnly="true" />
          )}
          <InputDetail
            name="Work Out Name"
            value={workout.name}
            placeholder="Hard Work"
            onChange={handleNameChange}
          />
          <InputDetail
            name="Description"
            value={workout.description}
            placeholder="asweaty one"
            onChange={handleDescriptionChange}
          />
          <InputDetail
            name="Work Out Style"
            value={workout.type}
            placeholder="EMOM"
            onChange={handleTypeChange}
          />
          <div className="field">
            <label className="label" htmlFor="warmup">
              Warm Up
            </label>
            <textarea
              name="main"
              placeholder="30 jumping jacks"
              className="textarea"
              value={workout.warmups}
              onChange={handleWarmUpChange}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="main">
              Main Workout
            </label>
            <textarea
              name="main"
              placeholder="100 Burpees"
              className="textarea"
              value={workout.main}
              onChange={handleMainChange}
            />
          </div>
        </div>
      </div>
      <footer className="card-footer ">
        <ButtonFooter
          className="cancel-button"
          iconClasses="fas fa-undo"
          onClick={handleCancelWorkout}
          label="Cancel"
        />
        <ButtonFooter
          className="save-button"
          iconClasses="fas fa-save"
          onClick={handleSave}
          label="Save"
        />
      </footer>
    </div>
  );
}

export default withRouter(WorkoutDetail);