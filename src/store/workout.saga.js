import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOAD_WORKOUT,
  LOAD_WORKOUT_SUCCESS,
  LOAD_WORKOUT_ERROR,
  UPDATE_WORKOUT,
  UPDATE_WORKOUT_SUCCESS,
  UPDATE_WORKOUT_ERROR,
  DELETE_WORKOUT,
  DELETE_WORKOUT_SUCCESS,
  DELETE_WORKOUT_ERROR,
  ADD_WORKOUT,
  ADD_WORKOUT_SUCCESS,
  ADD_WORKOUT_ERROR,
} from './workout.actions';
import {
  addWorkoutApi,
  deleteWorkoutApi,
  loadWorkoutsApi,
  updateWorkoutApi,
} from './workout.api';

export function* loadingWorkoutsAsync() {
  try {
    const data = yield call(loadWorkoutsApi);
    const workoutes = [...data];

    yield put({ type: LOAD_WORKOUT_SUCCESS, payload: workoutes });
  } catch (err) {
    yield put({ type: LOAD_WORKOUT_ERROR, payload: err.message });
  }
}

export function* watchLoadingWorkoutsAsync() {
  yield takeEvery(LOAD_WORKOUT, loadingWorkoutsAsync);
}

export function* updatingWorkoutAsync({ payload }) {
  try {
    const data = yield call(updateWorkoutApi, payload);
    const updatedWorkout = data;

    yield put({ type: UPDATE_WORKOUT_SUCCESS, payload: updatedWorkout });
  } catch (err) {
    yield put({ type: UPDATE_WORKOUT_ERROR, payload: err.message });
  }
}

export function* watchUpdatingWorkoutAsync() {
  yield takeEvery(UPDATE_WORKOUT, updatingWorkoutAsync);
}

export function* deletingWorkoutAsync({ payload }) {
  try {
    yield call(deleteWorkoutApi, payload);

    yield put({ type: DELETE_WORKOUT_SUCCESS, payload: null });
  } catch (err) {
    yield put({ type: DELETE_WORKOUT_ERROR, payload: err.message });
  }
}

export function* watchDeletingWorkoutAsync() {
  yield takeEvery(DELETE_WORKOUT, deletingWorkoutAsync);
}

export function* addingWorkoutAsync({ payload }) {
  try {
    const data = yield call(addWorkoutApi, payload);
    const addedWorkout = data;

    yield put({ type: ADD_WORKOUT_SUCCESS, payload: addedWorkout });
  } catch (err) {
    yield put({ type: ADD_WORKOUT_ERROR, payload: err.message });
  }
}

export function* watchAddingWorkoutAsync() {
  yield takeEvery(ADD_WORKOUT, addingWorkoutAsync);
}

export function* workoutSaga() {
  yield all([
    watchLoadingWorkoutsAsync(),
    watchUpdatingWorkoutAsync(),
    watchDeletingWorkoutAsync(),
    watchAddingWorkoutAsync(),
  ]);
}
