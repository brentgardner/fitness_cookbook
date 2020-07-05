import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ListHeader, ModalYesNo } from '../components';
import WorkoutDetail from './WorkoutDetail';
import WorkoutList from './WorkoutList';
import useWorkouts from './useWorkouts';

const captains = console;

function Workouts({ history }) {
  const [workoutToDelete, setWorkoutToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {
    addWorkout,
    deleteWorkout,
    getWorkouts,
    workouts,
    selectWorkout,
    selectedWorkout,
    updateWorkout,
  } = useWorkouts();

  useEffect(() => {
    getWorkouts();
  }, [getWorkouts]);

  function addNewWorkout() {
    selectWorkout({});
    history.push('/workouts/0');
  }

  function handleCancelWorkout() {
    history.push('/workouts');
    selectWorkout(null);
    setWorkoutToDelete(null);
  }

  function handleDeleteWorkout(workout) {
    selectWorkout(null);
    setWorkoutToDelete(workout);
    setShowModal(true);
  }

  function handleSaveWorkout(workout) {
    if (selectedWorkout && selectedWorkout.name) {
      captains.log(workout);
      updateWorkout(workout);
    } else {
      addWorkout(workout);
    }
    handleCancelWorkout();
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleDeleteFromModal() {
    setShowModal(false);
    deleteWorkout(workoutToDelete);
    handleCancelWorkout();
  }

  function handleSelectWorkout(selectedWorkout) {
    selectWorkout(selectedWorkout);
    captains.log(`you selected ${selectedWorkout.name}`);
  }

  function handleRefresh() {
    handleCancelWorkout();
    getWorkouts();
  }

  return (
    <div className="content-container">
      <ListHeader
        title="Workouts"
        handleAdd={addNewWorkout}
        handleRefresh={handleRefresh}
        routePath="/workouts"
      />
      <div className="columns is-multiline is-variable">
        <div className="column is-8">
          <Switch>
            <Route
              exact
              path="/workouts"
              component={() => (
                <WorkoutList
                  workouts={workouts}
                  selectedWorkout={selectedWorkout}
                  handleSelectWorkout={handleSelectWorkout}
                  handleDeleteWorkout={handleDeleteWorkout}
                />
              )}
            />
            <Route
              exact
              path="/workouts/:id"
              component={() => {
                return (
                  <WorkoutDetail
                    workout={selectedWorkout}
                    handleCancelWorkout={handleCancelWorkout}
                    handleSaveWorkout={handleSaveWorkout}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>

      {showModal && (
        <ModalYesNo
          message={`Would you like to delete ${workoutToDelete.name}?`}
          onNo={handleCloseModal}
          onYes={handleDeleteFromModal}
        />
      )}
    </div>
  );
}

export default Workouts;