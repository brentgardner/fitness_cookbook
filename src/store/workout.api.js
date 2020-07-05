import axios from 'axios';
import { parseItem, parseList } from './action-utils';
import API from './config';

const captains = console;

export const deleteWorkoutApi = async (workout) => {
  const response = await axios.delete(`${API}/workouts/${workout.id}`);
  return parseItem(response, 200);
};

export const updateWorkoutApi = async (workout) => {
  captains.log(workout.id);
  const response = await axios.put(`${API}/workouts/${workout.id}`, workout);
  return parseItem(response, 200);
};

export const addWorkoutApi = async (workout) => {
  const response = await axios.post(`${API}/workouts`, workout);
  return parseItem(response, 201);
};

export const loadWorkoutsApi = async () => {
  const response = await axios.get(`${API}/workouts`);
  return parseList(response, 200);
};
