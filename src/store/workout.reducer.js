import {
  SELECT_WORKOUT,
  LOAD_WORKOUT_SUCCESS,
  LOAD_WORKOUT,
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

let initState = {
  loading: false,
  data: [],
  error: void 0,
};

export const workoutsReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_WORKOUT:
      return { ...state, loading: true, error: '' };
    case LOAD_WORKOUT_SUCCESS:
      return { ...state, loading: false, data: [...action.payload] };
    case LOAD_WORKOUT_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_WORKOUT:
      return {
        ...state,
        data: state.data.map((h) => {
          if (h.id === action.payload.id) {
            state.loading = true;
          }
          return h;
        }),
      };
    case UPDATE_WORKOUT_SUCCESS:
      return modifyWorkoutState(state, action.payload);
    case UPDATE_WORKOUT_ERROR:
      return { ...state, loading: false, error: action.payload };

    case DELETE_WORKOUT: {
      return {
        ...state,
        loading: true,
        data: state.data.filter((h) => h !== action.payload),
      };
    }

    case DELETE_WORKOUT_SUCCESS: {
      const result = { ...state, loading: false };
      return result;
    }

    case DELETE_WORKOUT_ERROR: {
      return {
        ...state,
        data: [...state.data, action.payload.requestData],
        loading: false,
      };
    }

    case ADD_WORKOUT: {
      return { ...state, loading: true };
    }

    case ADD_WORKOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, { ...action.payload }],
      };
    }

    case ADD_WORKOUT_ERROR: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};

const modifyWorkoutState = (workoutState, workoutChanges) => {
  return {
    ...workoutState,
    loading: false,
    data: workoutState.data.map((h) => {
      if (h.id === workoutChanges.id) {
        return { ...h, ...workoutChanges };
      } else {
        return h;
      }
    }),
  };
};

let initialSelectedWorkout = null;

export const selectedWorkoutReducer = (
  state = initialSelectedWorkout,
  action
) => {
  switch (action.type) {
    case SELECT_WORKOUT:
      return action.payload ? { ...action.payload } : null;
    default:
      return state;
  }
};
