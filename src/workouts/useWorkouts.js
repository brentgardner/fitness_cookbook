import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addWorkoutAction,
  deleteWorkoutAction,
  loadWorkoutsAction,
  selectWorkoutAction,
  updateWorkoutAction,
} from '../store';

/** Custom hook for accessing Workout state in redux store */
function useWorkouts() {
  const dispatch = useDispatch();

  return {
    // Selectors
    workouts: useSelector((state) => state.workouts.data),
    selectedWorkout: useSelector((state) => state.selectedWorkout),

    // Dispatchers
    // Wrap any dispatcher that could be called within a useEffect() in a useCallback()
    addWorkout: (workout) => dispatch(addWorkoutAction(workout)),
    deleteWorkout: (workout) => dispatch(deleteWorkoutAction(workout)),
    getWorkouts: useCallback(() => dispatch(loadWorkoutsAction()), [dispatch]), // called within a useEffect()
    selectWorkout: (workout) => dispatch(selectWorkoutAction(workout)),
    updateWorkout: (workout) => dispatch(updateWorkoutAction(workout)),
  };
}

export default useWorkouts;