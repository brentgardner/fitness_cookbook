import { combineReducers } from 'redux';
import { selectedWorkoutReducer, workoutsReducer } from './workout.reducer';

export * from './workout.actions';
export * from './workout.reducer';
export * from './workout.saga';

const store = combineReducers({
  workouts: workoutsReducer,
  selectedWorkout: selectedWorkoutReducer,
});

export default store;
