export const LOAD_WORKOUT = '[Workouts] LOAD_WORKOUT';
export const LOAD_WORKOUT_SUCCESS = '[Workouts] LOAD_WORKOUT_SUCCESS';
export const LOAD_WORKOUT_ERROR = '[Workouts] LOAD_WORKOUT_ERROR';

export const UPDATE_WORKOUT = '[Workouts] UPDATE_WORKOUT';
export const UPDATE_WORKOUT_SUCCESS = '[Workouts] UPDATE_WORKOUT_SUCCESS';
export const UPDATE_WORKOUT_ERROR = '[Workouts] UPDATE_WORKOUT_ERROR';

export const DELETE_WORKOUT = '[Workouts] DELETE_WORKOUT';
export const DELETE_WORKOUT_SUCCESS = '[Workouts] DELETE_WORKOUT_SUCCESS';
export const DELETE_WORKOUT_ERROR = '[Workouts] DELETE_WORKOUT_ERROR';

export const ADD_WORKOUT = '[Workouts] ADD_WORKOUT';
export const ADD_WORKOUT_SUCCESS = '[Workouts] ADD_WORKOUT_SUCCESS';
export const ADD_WORKOUT_ERROR = '[Workouts] ADD_WORKOUT_ERROR';

export const SELECT_WORKOUT = '[Workout] SELECT_WORKOUT';

export const selectWorkoutAction = (workout) => ({
  type: SELECT_WORKOUT,
  payload: workout,
});
export const loadWorkoutsAction = () => ({ type: LOAD_WORKOUT });

export const updateWorkoutAction = (workout) => ({
  type: UPDATE_WORKOUT,
  payload: workout,
});
export const deleteWorkoutAction = (workout) => ({
  type: DELETE_WORKOUT,
  payload: workout,
});
export const addWorkoutAction = (workout) => ({
  type: ADD_WORKOUT,
  payload: workout,
});
